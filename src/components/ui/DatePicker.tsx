"use client";

import { ChangeEvent, useState } from "react";

import { format, setYear } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { SelectSingleEventHandler } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Input } from '@/components/ui/Input';
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";

interface Props {
  fastYearChange?: boolean,
  value?: Date;
  onChange(date: Date): void;
}

export const DatePicker = ({ fastYearChange = false, value, onChange }: Props) => {
  const [date, setDate] = useState(value);

  const [yearInput, setYearInput] = useState(new Date().getFullYear());
 
  const handleDateChange: SelectSingleEventHandler = (date) => {
    setDate(date);
    onChange(date!);
  };

  const handleSetYear = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setYearInput(+value);

    const newDate = date ? setYear(date, +value) : new Date(+value, 0, 1);
    setDate(newDate);
    onChange(newDate);
  };

  return (
    <div className={cn('grid items-center gap-x-2', fastYearChange ? 'grid-cols-[min-content_max-content_1fr]': 'grid-flow-col' )}>
      <Popover>
        {fastYearChange &&
          <>
            <div>Year:</div>
            <Input className="bg-white" type="number" min={1900} max={2030} value={yearInput} onChange={handleSetYear} />
          </>
        }
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("justify-start text-left font-normal bg-white grid grid-cols-[1fr_min-content]", !date && "text-muted-foreground")}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            initialFocus
            defaultMonth={date}
            selected={date}
            onSelect={handleDateChange}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
};
