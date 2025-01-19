import { Fields } from './Fields.js';

import ValidationTextFiled from './ValidationTextField.js';

export default function Section8() {
	return(
		<div className="max-w-[500px] mx-auto mb-[50px]">
			<div className="text-left text-[20px] font-semibold">Section 8: Summary and Next Steps</div>
			{Fields.section8.map((field, index) => {
				switch (field.type) {
					case "text":   return <ValidationTextFiled field={field} />;
					default: return <></>
				}
			})}
			<div className="text-left mt-[50px]">
				<div className="font-semibold text-[18px]">Conclusion</div>
				<div>This survey gives us a clear picture of where your business is now (Point A)
					and where you want it to be (Point B). By understanding what makes your
					product or service unique and your competitive strengths, we can create
					a plan that’s just right for you. This will help us set a timeline and budget
					that works, making sure we meet your goals effectively.
				</div>
			</div>
		</div>
	)
}