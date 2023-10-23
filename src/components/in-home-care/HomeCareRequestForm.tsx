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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/Dialog";
import { DatePicker } from "@/components/ui/DatePicker";
import { RequestSent } from './RequestSent';
import { RequestError } from './RequestError';

const gender = ['', 'Male', 'Female', 'other'] as const;

const fields = [{
  name: 'requestDate' as const,
  placeholder: 'Contact name',
  lable: 'Date of Request',
  control: 'date' as const,
  description: 'temp',
  options: undefined,
}, {
  name: 'clientDetailsLable' as const,
  lable: 'Client Details',
  control: 'lable' as const
}, {
  name: 'name' as const,
  placeholder: 'First',
  lable: 'Name'
}, {
  name: 'surname' as const,
  placeholder: 'Last'
}, {
  name: 'gender' as const,
  placeholder: 'Gender',
  lable: 'Gender',
  control: 'option' as const,
  options: gender
}, {
  name: 'dateOfBirth' as const,
  lable: 'Date of Birth',
  control: 'date' as const,
  fastYearChange: true
}, {
  name: 'phone' as const,
  placeholder: 'Enter your contact number',
  lable: 'Contact number',
  description: 'Phone number of primary contact'
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
  name: 'question' as const,
  placeholder: 'Feel free to ask any questions or concerns you may have.',
  lable: 'Services required',
  control: 'textarea' as const
}];

const formSchema = z.object({
  requestDate: z.date(),
  clientDetailsLable: z.string(),
  name: z.string()
  .trim()
  .min(1, { message: 'Name is required' }),
  surname: z.string(),
  gender: z.enum(gender),
  dateOfBirth: z.date(),
  phone: z.string(),
  email: z.string()
    .min(1, { message: 'Email address is required' })
    .email('Please enter a valid email address'),
  postcode: z.string()
    .min(4, 'Please enter a valid postcode')
    .max(4, 'Please enter a valid postcode'),
  question: z.string()
});

interface ControlOptionProps {
  control?: 'option' | 'textarea' | 'date' | 'lable';
  options?: typeof gender;
  fastYearChange?: boolean;
  value: string | Date;
  placeholder?: string;
  name: string;
  onChange: (...event: any[]) => void;
}

const ControlOptions = ({ control, options, fastYearChange, value, placeholder, name, onChange }: ControlOptionProps) => {
  switch (control) {
    case 'option': return (
      <Select value={value as string} onValueChange={onChange}>
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
        value={value as string}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
    case 'lable': return (
      <div>{value as string}</div>
    );
    case 'date': return (
      <DatePicker fastYearChange={fastYearChange} value={value as Date} onChange={onChange} />
    );
    default: return (
      <Input className="bg-white" value={value as string} placeholder={placeholder} name={name} onChange={onChange} />
    );
  }
};

interface Props {
  show: boolean;
  onHide(): void;
}

export const HomeCareRequestForm = ({ show, onHide }: Props) => {
  const [sendRequest, setSendRequest] = useState(false);
  const [openRequestSent, setOpenRequestSent] = useState(false);
  const [openRequestError, setOpenRequestError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestDate: undefined,
      name: '',
      surname: '',
      gender: '',
      dateOfBirth: undefined,
      phone: '',
      email: '',
      postcode: '',
      question: ''
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    // try {
    //   setSendRequest(true);
    //   await emailjs.send(
    //     process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '',
    //     process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '',
    //     values,
    //     process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    //   );
    //   form.reset();
    //   setOpenRequestSent(true);
    // } catch {
    //   setOpenRequestError(true);
    // } finally {
    //   setSendRequest(false);
    // }
  };

  const handleCloseRequestSent = () => setOpenRequestSent(false);

  const handleCloseRequestError = () => setOpenRequestError(false);

  return (
    <>
      <Dialog open={show} onOpenChange={onHide}>
        <DialogContent className="overflow-y-auto max-h-screen bg-text">
          <DialogHeader>
            <DialogTitle className="mb-2">Home Care Request / Referral Form</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-4 space-y-4">
              {fields.map(({ name, placeholder, lable, description, control, options, fastYearChange }, index) =>
                <FormField
                  key={index}
                  control={form.control}
                  name={name}
                  render={({ field }) =>
                    <FormItem>
                      <FormLabel>{lable}</FormLabel>
                      <FormControl>
                        <ControlOptions
                          control={control}
                          options={options}
                          fastYearChange={fastYearChange}
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
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" onClick={onHide}>Confirm</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <RequestSent open={openRequestSent} onClose={handleCloseRequestSent} />
      <RequestError open={openRequestError} onClose={handleCloseRequestError} />
    </>
  );

  // return (
  //   show
  //     ? <div>
  //         <h2 className="font-bold text-xl md:text-3xl pb-4 text-center">Get Started with a Free Caring Consult</h2>


  //       </div>
  //     : null
  // );
};
