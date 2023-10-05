"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

import {
  Button,
  Input,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}


//   // <form>Get Started with a Free Caring Consult</form>;

// //   Name
// // •	Phone number
// // •	Best time to be reachedAnytimeMorningAfternoonEvening
// // •	How did you hear about us?Google SearchFriend/Word of MouthProfessional Referral (Doctor)Social MediaTVRadioNurse Next Door CarBrochureFacilityOther
// // •	Email address
// // •	Postcode where care is needed
// // •	Funding Type NDIS, Private or Other

// // •	How can we help you with your care?
// // •	By clicking on submit, you approve that the information you entered will be transmitted via email, and understand that information provided should not be considered medical advice or treatment.
