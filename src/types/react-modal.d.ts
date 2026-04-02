declare module 'react-modal';
declare module 'react-datepicker' {
  import { ComponentType, ReactNode } from 'react';
  
  interface DatePickerProps {
    selected?: Date | null;
    onChange: (date: Date | null) => void;
    dateFormat?: string;
    minDate?: Date;
    maxDate?: Date;
    [key: string]: any;
  }
  
  const DatePicker: ComponentType<DatePickerProps>;
  export default DatePicker;
}