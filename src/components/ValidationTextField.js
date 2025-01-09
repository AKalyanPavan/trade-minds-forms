import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextField({field}) {
  return (
    <Box
      className="pt-[50px]"
      component="form"
      sx={{ '& .MuiTextField-root': { width: '100%', } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div className={`text-left mb-[5px] font-normal text-[18px] ${field.labelPadding}`}>
          {field.label}
          {field.required && <span className="text-[red]"> *</span>}
        </div>
        <div className={`text-left mb-[5px] font-normal text-[18px] ${field.label2Padding}`}>
          {field.label2}
        </div>
        <div className={`text-left mb-[5px] font-normal text-[18px] ${field.label3Padding}`}>
          {field.label3}
        </div>
        <TextField
          slotProps={{
            input: {
              readOnly: field.readOnly,
            },
          }}
          sx={{paddingLeft: `${field.fieldPadding}`}}
          multiline={field.multiline}
          placeholder={field.placeholder}
          multiline={field.multiline}
          maxRows={field.maxrows}
          error={field.error}
          required={field.required}
          id="outlined-error-helper-text"
          label={''}
          defaultValue={field.value}
          helperText={field.error ? field.errorMessage : ''}
        />
      </div>
    </Box>
  );
}
