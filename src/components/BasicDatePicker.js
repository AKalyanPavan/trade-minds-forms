import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({field}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="text-left mb-[-4px] font-normal text-[18px] pt-[50px]">
        {field.label}
        {field.required && <span className="text-[red]"> *</span>}
      </div>
      <DemoContainer sx={{width: '100%', marginLeft: 'auto', marginRight: 'auto',}} components={['DatePicker']}>
        <DatePicker sx={{ width: '100%', }} label={''} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
