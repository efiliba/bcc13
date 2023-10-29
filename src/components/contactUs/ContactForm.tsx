"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import { SplitImageContent } from '@/components/ui/SplitImageContent';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { RequestSent } from './RequestSent';
import { RequestError } from './RequestError';

const bestTime = ['', 'Anytime', 'Morning', 'Afternoon', 'Evening'] as const;
const hearAboutUs = ['', 'Google Search', 'Friend/Word of Mouth', 'Professional Referral (Doctor)', 'Social Media', 'TV', 'Radio', 'Hospital', 'Brochure', 'Facility', 'Other'] as const;
const funding = ['', 'NDIS', 'Private', 'Other'] as const;

const fields = [{
  name: 'name' as const,
  placeholder: 'Contact name',
  label: 'Name',
  description: 'Please enter your name',
  options: undefined // Needed for TS - as options no longer used
}, {
  name: 'phone' as const,
  placeholder: 'Enter your contact number',
  label: 'Contact number',
  description: 'Phone number of primary contact'
}, {
//   name: 'bestTime' as const,
//   placeholder: 'Select the best time for us to contact you',
//   label: 'Best time to be reached',
//   control: 'option' as const,
//   options: bestTime
// }, {
//   name: 'hearAboutUs' as const,
//   placeholder: 'Please let us know how you heard about us',
//   label: 'How did you hear about us?',
//   control: 'option' as const,
//   options: hearAboutUs
// }, {
  name: 'email' as const,
  placeholder: 'Please enter a contact email address',
  label: 'Email address',
  description: 'Email address of primary contact'
}, {
  name: 'postcode' as const,
  placeholder: 'Please enter a postcode',
  label: 'Postcode',
  description: 'Postcode where care is needed'
// }, {
//   name: 'funding' as const,
//   placeholder: 'Please select the funding type',
//   label: 'Funding',
//   description: 'NDIS or private funding',
//   control: 'option' as const,
//   options: funding
}, {
  name: 'question' as const,
  placeholder: 'Feel free to ask any questions or concerns you may have.',
  label: 'How can we help you with your care?',
  control: 'textarea' as const
}];

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: 'Name is required' }),
  phone: z.string(),
  bestTime: z.enum(bestTime),
  hearAboutUs: z.enum(hearAboutUs),
  email: z.string()
    .min(1, { message: 'Email address is required' })
    .email('Please enter a valid email address'),
  postcode: z.string()
    .min(4, 'Please enter a valid postcode')
    .max(4, 'Please enter a valid postcode'),
  funding: z.enum(funding),
  question: z.string()
});

interface ControlOptionProps {
  control?: 'option' | 'textarea';
  options?: typeof bestTime | typeof hearAboutUs | typeof funding;
  value: string;
  placeholder: string;
  name: string;
  onChange: (...event: any[]) => void;
}

const ControlOptions = ({ control, options, value, placeholder, name, onChange }: ControlOptionProps) => {
  switch (control) {
    case 'option': return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-white" aria-label={name}>
          {value ? <SelectValue placeholder={placeholder} /> : placeholder}
        </SelectTrigger>
        <SelectContent>
          {options?.slice(1).map((option, key) =>
            <SelectItem key={key} value={option}>{option}</SelectItem>
          )}
        </SelectContent>
      </Select>
    );
    case 'textarea': return (
      <Textarea
        className="bg-white min-h-[10rem]"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
    default: return (
      <Input className="bg-white" value={value} placeholder={placeholder} name={name} onChange={onChange} />
    );
  }
};

export const ContactForm = () => {
  const [sendRequest, setSendRequest] = useState(false);
  const [openRequestSent, setOpenRequestSent] = useState(false);
  const [openRequestError, setOpenRequestError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      bestTime: '',
      hearAboutUs: '',
      email: '',
      postcode: '',
      funding: '',
      question: ''
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setSendRequest(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '',
        values,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );
      form.reset();
      setOpenRequestSent(true);
    } catch {
      setOpenRequestError(true);
    } finally {
      setSendRequest(false);
    }
  };

  const handleCloseRequestSent = () => setOpenRequestSent(false);

  const handleCloseRequestError = () => setOpenRequestError(false);

  return (
    <Container>
      <SplitImageContent
        contentClassName="bg-primary p-6 rounded"
        image="consult.jpg"
        srcSets={[
          { srcSet: "consult.avif", type: "image/avif" },
          { srcSet: "consult.jpg", type: "image/jpg" }
        ]}
        imageFirst
      >
        <h2 className="font-bold text-xl md:text-3xl pb-4 text-center">Get Started with a Free Caring Consult</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-4 space-y-4">
            {fields.map(({ name, placeholder, label, description, control, options }, index) =>
              <FormField
                key={index}
                control={form.control}
                name={name}
                render={({ field }) =>
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <ControlOptions
                        control={control}
                        options={options}
                        value={field.value}
                        placeholder={placeholder}
                        name={name}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription className="text-secondary">{description}</FormDescription>
                    <FormMessage />
                  </FormItem>
                }
              />
            )}
            <p>
              By clicking on submit, you approve that the information you entered will be transmitted via email, and
              understand that information provided should not be considered medical advice or treatment.
            </p>
            <Button className="justify-self-end" disabled={sendRequest} variant="secondary" size="lg" type="submit">
              {sendRequest &&
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-text" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              }
              Submit
            </Button>
          </form>
        </Form>
      </SplitImageContent>
      <RequestSent open={openRequestSent} onClose={handleCloseRequestSent} />
      <RequestError open={openRequestError} onClose={handleCloseRequestError} />
    </Container>
  );
};
