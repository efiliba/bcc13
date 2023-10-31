"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Dialog";
import { DynamicFormFromFields, RequestSent, RequestError } from '@/components/ui/form';

const gender = ['', 'Male', 'Female', 'other'] as const;

const referral = ['', 'Yes', 'No'] as const;

const fields = [{
//   name: 'requestDate' as const,
//   placeholder: 'Contact name',
//   label: 'Date of Request',
//   control: 'date' as const,
//   options: undefined,
//   className: 'col-span-full'
// }, {
  name: 'clientDetailsLabel' as const,
  label: 'Client Details',
  control: 'label' as const,
  className: 'col-span-full',
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
  name: 'age' as const,
  label: 'Age',
  className: 'col-span-full'
}, {
//   name: 'dateOfBirth' as const,
//   label: 'Date of Birth',
//   control: 'date' as const,
//   fastYearChange: true,
//   className: 'col-span-full'
// }, {
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
  name: 'servicesLabel' as const,
  label: 'Services',
  control: 'label' as const,
  className: 'col-span-full pt-6',
  labelClassName: 'font-bold text-xl'
}, {
  name: 'question' as const,
  placeholder: 'e.g. Need assistance with cleaning, home care, drive to appointments',
  label: 'Services required',
  control: 'textarea' as const,
  className: 'col-span-full'
// }, {
//   name: 'referralLabel' as const,
//   label: 'Referral',
//   control: 'label' as const,
//   className: 'col-span-full pt-6',
//   labelClassName: 'font-bold text-xl'
// }, {
//   name: 'referral' as const,
//   label: 'Is this a referral?',
//   control: 'radio' as const,
//   options: referral,
//   className: 'col-span-full justify-self-start'
}];

const formSchema = z.object({
  // requestDate: z.date(),
  name: z.string()
    .trim()
    .min(1, { message: 'Name is required' }),
  surname: z.string()
    .trim()
    .optional(),
  gender: z.enum(gender).optional(),
  location: z.string().optional(),
  postcode: z.string()
    .max(4, 'Please enter a valid postcode')
    .optional(),
  // dateOfBirth: z.date(),
  age: z.string().optional(),
  phone: z.string(),
  email: z.string()
    .min(1, { message: 'Email address is required' })
    .email('Please enter a valid email address'),
  question: z.string().optional(),
  // referral: z.enum(referral)
});

interface Props {
  show: boolean;
  onHide(): void;
}

export const HomeCareRequestForm = ({ show, onHide }: Props) => {
  const [submitRequest, setSubmitRequest] = useState(false);
  const [openRequestSent, setOpenRequestSent] = useState(false);
  const [openRequestError, setOpenRequestError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // requestDate: undefined,
      name: '',
      surname: '',
      gender: '',
      // dateOfBirth: undefined,
      location: '',
      postcode: '',
      age: '',
      phone: '',
      email: '',
      question: ''
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setSubmitRequest(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAIL_REFERRAL_TEMPLATE_ID || '',
        values,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );
      form.reset();
      onHide();
      setOpenRequestSent(true);
    } catch {
      setOpenRequestError(true);
    } finally {
      setSubmitRequest(false);
    }
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
          <DynamicFormFromFields
            className="grid grid-cols-6 gap-x-2"
            form={form}
            fields={fields}
            submitting={submitRequest}
            terms={
              <p className="col-span-full pt-6">
                By clicking on submit, you approve that the information you entered will be transmitted via email, and
                understand that information provided should not be considered medical advice or treatment.
              </p>
            }
            onSubmit={onSubmit}
          />
        </DialogContent>
      </Dialog>
      <RequestSent open={openRequestSent} onClose={handleCloseRequestSent} />
      <RequestError open={openRequestError} onClose={handleCloseRequestError} />
    </>
  );
};
