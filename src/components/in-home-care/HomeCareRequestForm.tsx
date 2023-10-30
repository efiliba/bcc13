"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Dialog";
import { RequestSent } from './RequestSent';
import { RequestError } from './RequestError';
import { FormControlOptions } from '@/components/ui/FormControlOptions';

const gender = ['', 'Male', 'Female', 'other'] as const;

const referral = ['', 'Yes', 'No'] as const;

const fields = [{
  name: 'requestDate' as const,
  placeholder: 'Contact name',
  label: 'Date of Request',
  control: 'date' as const,
  options: undefined,
  className: 'col-span-full'
}, {
  name: 'clientDetailsLabel' as const,
  label: 'Client Details',
  control: 'label' as const,
  className: 'col-span-full pt-6',
  labelClassName: 'font-bold text-xl'
}, {
  name: 'name' as const,
  placeholder: 'First',
  label: 'Name',
  className: 'col-span-2'
}, {
  name: 'surname' as const,
  placeholder: 'Last',
  labelClassName: 'block h-6',
  className: 'col-span-2'
}, {
  name: 'gender' as const,
  placeholder: 'Gender',
  label: 'Gender',
  control: 'option' as const,
  options: gender,
  className: 'col-span-2'
}, {
  name: 'location' as const,
  placeholder: 'City',
  label: 'Location',
  className: 'col-span-3'
}, {
  name: 'postcode' as const,
  placeholder: 'Please enter a postcode',
  label: 'Postcode',
  description: 'Postcode where care is needed',
  className: 'col-span-3'
}, {
  name: 'dateOfBirth' as const,
  label: 'Date of Birth',
  control: 'date' as const,
  fastYearChange: true,
  className: 'col-span-full'
}, {
  name: 'phone' as const,
  placeholder: 'Enter your contact number',
  label: 'Contact number',
  description: 'Phone number of primary contact',
  className: 'col-span-3'
}, {
  name: 'email' as const,
  placeholder: 'Enter a contact email address',
  label: 'Email address',
  description: 'Email address of primary contact',
  className: 'col-span-3'
}, {
  name: 'referralLabel' as const,
  label: 'Referral',
  control: 'label' as const,
  className: 'col-span-full pt-6',
  labelClassName: 'font-bold text-xl'
}, {
  name: 'question' as const,
  placeholder: 'e.g. Need assistance with cleaning, home care, drive to appointments',
  label: 'Services required',
  control: 'textarea' as const,
  className: 'col-span-full'
}, {
  name: 'servicesLabel' as const,
  label: 'Services',
  control: 'label' as const,
  className: 'col-span-full pt-6',
  labelClassName: 'font-bold text-xl'
}, {
  name: 'referral' as const,
  label: 'Is this a referral?',
  control: 'radio' as const,
  options: referral,
  className: 'col-span-full justify-self-start'
}];

const formSchema = z.object({
  requestDate: z.date(),
  clientDetailsLabel: z.string().optional(),
  name: z.string()
    .trim()
    .min(1, { message: 'Name is required' }),
  surname: z.string()
    .trim()
    .min(1, { message: 'Surname is required' }),
  gender: z.enum(gender),
  location: z.string(),
  postcode: z.string()
    .min(4, 'Please enter a valid postcode')
    .max(4, 'Please enter a valid postcode'),
  dateOfBirth: z.date(),
  phone: z.string(),
  email: z.string()
    .min(1, { message: 'Email address is required' })
    .email('Please enter a valid email address'),
  servicesLabel: z.string().optional(),
  question: z.string(),
  referralLabel: z.string().optional(),
  referral: z.enum(referral)
});

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
      location: '',
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
        <DialogContent className="bg-primary border-black overflow-y-auto max-w-[90%] sm:max-w-lg max-h-[90%]">
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl mb-2">Home Care Request / Referral Form</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-6 gap-x-2">
              {fields.map(({
                name,
                placeholder,
                label,
                description,
                control,
                options,
                fastYearChange,
                className,
                labelClassName
              }, index) =>
                <FormField
                  key={index}
                  control={form.control}
                  name={name}
                  render={({ field }) =>
                    <FormItem className={className}>
                      <FormLabel className={labelClassName}>{label}</FormLabel>
                      <FormControl>
                        <FormControlOptions
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
              <p className="col-span-full pt-6">
                By clicking on submit, you approve that the information you entered will be transmitted via email, and
                understand that information provided should not be considered medical advice or treatment.
              </p>
              <Button
                className="col-span-full justify-self-end mt-4"
                disabled={sendRequest}
                variant="secondary"
                size="lg"
                type="submit"
              >
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
        </DialogContent>
      </Dialog>
      <RequestSent open={openRequestSent} onClose={handleCloseRequestSent} />
      <RequestError open={openRequestError} onClose={handleCloseRequestError} />
    </>
  );
};
