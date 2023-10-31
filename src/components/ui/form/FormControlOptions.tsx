import { Fragment } from 'react';

import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { DatePicker } from "@/components/ui/DatePicker";

interface Props<T extends readonly string[]> {
  control?: 'option' | 'textarea' | 'date' | 'label' | 'radio';
  options?: T;
  fastYearChange?: boolean;
  value?: string | Date;
  placeholder?: string;
  name: string;
  onChange: (...event: any[]) => void;
}

export const FormControlOptions = <T extends readonly string[], >({
  control,
  options,
  fastYearChange,
  value,
  placeholder,
  name,
  onChange
}: Props<T>) => {
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
    case 'label': return (
      <div>{value as string}</div>
    );
    case 'date': return (
      <DatePicker fastYearChange={fastYearChange} value={value as Date} onChange={onChange} />
    );
    case 'radio': return (
      <RadioGroup className="grid grid-flow-col justify-items-start" value={value as string} onValueChange={onChange}>
        {options?.slice(1).map((option, key) =>
          <Fragment key={key}>
            <RadioGroupItem className="bg-white text-secondary" value={option} id={`radio-${key}`} />
            <Label htmlFor={`radio-${key}`}>{option}</Label>
          </Fragment>
        )}
      </RadioGroup>
    );
    default: return (
      <Input className="bg-white" value={value as string} placeholder={placeholder} name={name} onChange={onChange} />
    );
  }
};
