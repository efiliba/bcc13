import { ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './Form';
import { FormControlOptions } from './FormControlOptions';

interface Props<T extends FieldValues> {
  className: string;
  form: UseFormReturn<T>;
  fields: any[];
  terms: ReactNode;
  submitting: boolean;
  onSubmit(values: T): Promise<void>;
}

export const DynamicFormFromFields = <T extends FieldValues>({
  className,
  form,
  fields,
  terms,
  submitting,
  onSubmit
}: Props<T>) =>
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
      {fields.map(({
        name,
        placeholder,
        label,
        description,
        control,
        options,
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
      {terms}
      <Button
        className="col-span-full justify-self-end mt-4"
        disabled={submitting}
        variant="secondary"
        size="lg"
        type="submit"
      >
        {submitting &&
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-text" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        }
        Submit
      </Button>
    </form>
  </Form>;
