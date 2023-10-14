"use client";

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

const bestTime = ['Anytime', 'Morning', 'Afternoon', 'Evening'] as const;
const hearAboutUs = ['Google Search', 'Friend/Word of Mouth', 'Professional Referral (Doctor)', 'Social Media', 'TV', 'Radio', 'Hospital', 'Brochure', 'Facility', 'Other'] as const;
const funding = ['NDIS', 'Private', 'Other'] as const;

const fields = [{
  name: 'name' as const,
  placeholder: 'Contact name',
  lable: 'Name',
  description: 'Please enter your name'
}, {
  name: 'phone' as const,
  placeholder: 'Enter your contact number',
  lable: 'Contact number',
  description: 'Phone number of primary contact'
}, {
  name: 'bestTime' as const,
  placeholder: 'Select the best time for us to contact you',
  lable: 'Best time to be reached',
  options: bestTime
}, {
  name: 'hearAboutUs' as const,
  placeholder: 'Please let us know how you heard about us',
  lable: 'How did you hear about us?',
  options: hearAboutUs
}, {
  name: 'email' as const,
  placeholder: 'Please enter a contact email address',
  lable: 'Email address',
  description: 'Email address of primary contact'
}, {
  name: 'postcode' as const,
  placeholder: 'Please enter a postcode',
  lable: 'Postcode',
  description: 'Postcode where care is needed'
}, {
  name: 'funding' as const,
  placeholder: 'Please select the funding type',
  lable: 'Funding',
  description: 'NDIS or private funding',
  options: funding
}];

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters' }),
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
  options?: typeof bestTime | typeof hearAboutUs | typeof funding;
  placeholder: string;
  name: string;
  onChange: (...event: any[]) => void;
}

const ControlOptions = ({ options, placeholder, name, onChange }: ControlOptionProps) =>
  options
    ? <Select onValueChange={onChange}>
        <SelectTrigger className="bg-white" aria-label={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, key) =>
            <SelectItem key={key} value={option}>{option}</SelectItem>
          )}
        </SelectContent>
      </Select>
    : <Input className="bg-white" placeholder={placeholder} name={name} onChange={onChange} />;

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      phone: undefined,
      bestTime: undefined,
      hearAboutUs: undefined,
      email: undefined,
      postcode: undefined,
      funding: undefined
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await emailjs.send('service_er7m3ar', 'template_tbd8h7l', values, '1yJlO2yMxurWfOKNT');
    console.log(result);
  };

  return (
    <Container>
      <SplitImageContent imageFirst image="elderly-care.png" contentClassName="bg-primary p-6 rounded">
        <h2 className="font-bold text-xl md:text-3xl pb-4 text-center">Get Started with a Free Caring Consult</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-4">
            <div className="space-y-4">
              {fields.map(({ name, placeholder, lable, description, options }, index) =>
                <FormField
                  key={index}
                  control={form.control}
                  name={name}
                  render={({ field }) =>
                    <FormItem>
                      <FormLabel>{lable}</FormLabel>
                      <FormControl>
                        <ControlOptions
                          options={options}
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
            </div>
            <FormField
              control={form.control}
              name="question"
              render={({ field }) =>
                <FormItem>
                  <FormLabel>How can we help you with your care?</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-white min-h-[20rem]"
                      placeholder="Feel free to ask any questions or concerns you may have."
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />
            <p>
              By clicking on submit, you approve that the information you entered will be transmitted via email, and
              understand that information provided should not be considered medical advice or treatment.
            </p>
            <Button className="justify-self-end" variant="secondary" size="lg" type="submit">Submit</Button>
          </form>
        </Form>
      </SplitImageContent>
    </Container>
  );
};
