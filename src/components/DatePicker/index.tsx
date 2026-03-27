import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={(date: Date | null) => setDate(date)}
      />
    </div>
  );
};

export default MyDatePicker;
