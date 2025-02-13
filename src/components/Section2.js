import { Fields } from './Fields.js';

import CheckBoxGroup from './CheckBoxGroup.js';
import ErrorRadios from './ErrorRadios.js';
import ValidationTextFiled from './ValidationTextField.js';

export default function Section2() {
	return(
		<div className="max-w-[500px] mx-auto mb-[50px]">
			<div className="text-left text-[20px] font-semibold">Section 2: Your Current Situation (Point A)</div>
			{Fields.section2.map((field, index) => {
				switch (field.type) {
					case "checkbox":   return <CheckBoxGroup field={field} />;
					case "radio":   return <ErrorRadios field={field} />;
					case "text":   return <ValidationTextFiled field={field} />;
					default: return <></>
				}
			})}
		</div>
	)
}