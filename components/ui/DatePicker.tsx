"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker() {
   const [date, setDate] = useState<Date>();

   return (
      <Popover>
         <PopoverTrigger
            asChild
            className="h-auto text-base md:text-[1.375rem]"
         >
            <Button
               variant={"outline"}
               className={cn(
                  "w-full shrink-0 justify-between rounded-none border-l-0 border-r-0 border-t-0 border-black px-0 text-left font-bold uppercase sm:basis-[9.375rem]",
                  !date &&
                     "h-auto text-base text-muted-foreground md:text-[1.375rem]",
               )}
            >
               {date ? (
                  format(date, "PPP")
               ) : (
                  <span className="text-black">год</span>
               )}
               <ChevronDown />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0">
            <Calendar
               mode="single"
               selected={date}
               onSelect={setDate}
               initialFocus
            />
         </PopoverContent>
      </Popover>
   );
}