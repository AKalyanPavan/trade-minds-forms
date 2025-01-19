import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/material/TextField';

export default function CheckBoxGroup({field}) {

	const [values, setValues] = React.useState(field.values);

	function handleCheckboxChange(value, event) {
		if (value == field.additionalFieldValue) {
			return 0;
		}
		setValues(value);
		console.log(event.target.checked);
	}

	return(
		<div className="mt-[30px]">
	      <Typography
	        id="sandwich-group"
	        level="body-lg"
	        sx={{ fontWeight: '500', textAlign: 'left', color: 'black', paddingLeft: `${field.labelPadding}` }}
	      >
	        {field.label}
	      </Typography>
	      {field.label2 && 
		      <div className={`text-left my-[10px] font-normal text-[18px] ${field.label2Padding}`}>
		          {field.label2}
		      </div>
	  	  }
	  	  {field.label3 &&
			  <div className={`text-left mb-[10px] font-normal text-[18px] ${field.label3Padding}`}>
		          {field.label3}
			  </div>
		  }
		  {field.label4 &&
			  <div className={`text-left mb-[10px] font-normal text-[18px] ${field.label4Padding}`}>
		          {field.label4}
			  </div>
		  }
	      <div className="font-medium" role="group" aria-labelledby="sandwich-group">
	        <List sx={{paddingLeft: `${field.optionsPadding}`, textAlign: 'left',}} size="sm" error={field.error} >
	        	{field.options.map((option, index) => 
	        		<ListItem>
			            <Checkbox label={option} onChange={(event) => handleCheckboxChange(option, event)} />
			        </ListItem>
	        	)}
	        </List>
	        {(field.additionalFieldOption && values == field.additionalFieldOption) && 
	            <TextField
	            	sx={{width: '100%', paddingLeft: `${field.optionsPadding}`, flex: '1'}}
	              slotProps={{
	                input: {
	                  readOnly: field.readOnly,
	                },
	              }}
	              multiline={field.additionalFieldMultiline}
	              maxRows={field.additionalFieldMaxrows}
	              error={field.error}
	              required={field.required}
	              id="outlined-error-helper-text"
	              label={""}
	              defaultValue={field.additionalFieldValue}
	            />
	        }
	        {field.error && 
		        <div className="text-[red] text-left text-[14px] ml-[10px]" style={{
		        	paddingLeft: `${field.optionsPadding}`,
		        }}>
		        	This is error
		        </div>
		    }
	      </div>
	    </div>
	)
}