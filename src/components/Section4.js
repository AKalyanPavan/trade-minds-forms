import { Fields } from './Fields.js';

import CheckBoxGroup from './CheckBoxGroup.js';
import ErrorRadios from './ErrorRadios.js';

export default function Section4() {
	return(
		<div className="max-w-[500px] mx-auto mb-[50px]">
			<div className="text-left text-[20px] font-semibold">Section 4: Your Goals (Point B)</div>
			{Fields.section4.map((field, index) => {
				switch (field.type) {
					case "checkbox":   return <CheckBoxGroup field={field} />;
					case "radio":   return <ErrorRadios field={field} />;
					default: return <></>
				}
			})}
		</div>
	)
}