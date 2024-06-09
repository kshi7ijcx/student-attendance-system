"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { addMonths } from "date-fns";
import moment from "moment";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const MonthSelector = ({ selectedMonth }) => {
  const nextMonths = addMonths(new Date(), 0);
  const [month, setMonth] = useState(nextMonths);
  return (
    <Popover>
      <PopoverTrigger className="flex gap-2 items-center bg-white text-neutral-500 rounded-md px-3 py-2 border border-slate-300">
        <CalendarDays />
        {moment(month).format("MMM YYYY")}
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          month={month}
          onMonthChange={(value) => {
            setMonth(value);
            selectedMonth(value)
          }}
          className="flex flex-1 justify-center"
        />
      </PopoverContent>
    </Popover>
  );
};
export default MonthSelector;
