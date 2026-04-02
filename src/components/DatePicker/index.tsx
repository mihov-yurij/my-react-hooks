import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

const DatePicker = (ReactDatePicker as any).default || ReactDatePicker;


export default function MyDatePicker() {
  const [date, setDate] = useState<Date | null>(new Date());
  return (
    <DatePicker
      selected={date}
      onChange={(date: Date | null) => setDate(date)}
    />
  );
}
