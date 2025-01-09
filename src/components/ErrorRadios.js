import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ErrorRadios({field}) {
  const [value, setValue] = React.useState(field.value);
  const [error, setError] = React.useState(field.error);
  const [helperText, setHelperText] = React.useState(field.errorMessage);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText('');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ mt: 4, width: '100%' }} error={error} variant="standard">
        <div className={`text-left mb-[5px] font-normal text-[18px] ${field.labelPadding}`}>{field.label}</div>
        <div className="text-left mb-[5px] font-normal text-[18px] pl-5">
          {field.label2}
        </div>
        <RadioGroup
          className={field.optionsPadding}
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {field.options.map((option, index) => 
            <FormControlLabel value={option} control={<Radio />} label={option} />
          )}
          {(field.additionalFieldOption && value == field.additionalFieldOption) && 
            <TextField
              slotProps={{
                input: {
                  readOnly: field.readOnly,
                },
              }}
              multiline={false}
              maxRows={1}
              error={field.error}
              required={field.required}
              id="outlined-error-helper-text"
              label={""}
              defaultValue={field.additionalFieldValue}
            />
          }
        </RadioGroup>
        <FormHelperText>{field.error ? helperText : ''}</FormHelperText>
      </FormControl>
    </form>
  );
}
