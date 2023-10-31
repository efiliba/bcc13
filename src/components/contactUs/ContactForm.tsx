"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import { SplitImageContent } from '@/components/ui/SplitImageContent';
import { Container } from '@/components/ui/Container';
import { DynamicFormFromFields, RequestSent, RequestError } from '@/components/ui/form';

const bestTime = ['', 'Anytime', 'Morning', 'Afternoon', 'Evening'] as const;
const hearAboutUs = ['', 'Google Search', 'Friend/Word of Mouth', 'Professional Referral (Doctor)', 'Social Media', 'TV', 'Radio', 'Hospital', 'Brochure', 'Facility', 'Other'] as const;
const funding = ['', 'NDIS', 'Private', 'Other'] as const;

const fields = [{
  name: 'name' as const,
  placeholder: 'Contact name',
  label: 'Name',
  description: 'Please enter your name'
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
  // bestTime: z.enum(bestTime),
  email: z.string()
    .min(1, { message: 'Email address is required' })
    .email('Please enter a valid email address'),
  postcode: z.string()
    .min(4, 'Please enter a valid postcode')
    .max(4, 'Please enter a valid postcode'),
  question: z.string()
});

export const ContactForm = () => {
  const [submitRequest, setSubmitRequest] = useState(false);
  const [openRequestSent, setOpenRequestSent] = useState(false);
  const [openRequestError, setOpenRequestError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      // bestTime: '',
      // hearAboutUs: '',
      email: '',
      postcode: '',
      // funding: '',
      question: ''
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setSubmitRequest(true);
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
      setSubmitRequest(false);
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
        <DynamicFormFromFields
          className="grid gap-y-4 space-y-4"
          form={form}
          fields={fields}
          submitting={submitRequest}
          terms={
            <p>
              By clicking on submit, you approve that the information you entered will be transmitted via email, and
              understand that information provided should not be considered medical advice or treatment.
            </p>
          }
          onSubmit={onSubmit}
        />
      </SplitImageContent>
      <RequestSent open={openRequestSent} onClose={handleCloseRequestSent} />
      <RequestError open={openRequestError} onClose={handleCloseRequestError} />
    </Container>
  );
};
