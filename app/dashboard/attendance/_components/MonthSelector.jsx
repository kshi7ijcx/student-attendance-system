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

const MonthSelector = () => {
  const today = new Date();
  const nextMonths = addMonths(new Date(), 0);
  const [month, setMonth] = useState(nextMonths);
  return (
    <Popover>
      <PopoverTrigger className="flex gap-2 items-center bg-black text-white rounded-md px-3 py-2">
        <CalendarDays />
        {moment(month).format("MMM YYYY")}
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};
export default MonthSelector;
