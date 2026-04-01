import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function MyDatePicker() {
  const [date, setDate] = useState<Date | null>(new Date());
  return (
    <DatePicker
      selected={date}
      onChange={(date: Date | null) => setDate(date)}
    />
  );
}
