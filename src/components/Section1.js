import ValidationTextFiled from './ValidationTextField.js';
import BasicDatePicker from './BasicDatePicker.js';
import ErrorRadios from './ErrorRadios.js';
import { Fields } from './Fields.js';

export default function Section1() {
	return(
		<>
			<div className="text-left">
				<div className="text-[20px] font-semibold">Objective</div>
				<div className="font-light mt-[5px]">
					The objective of the Client Needs and Expectations Assessment is to gain a clear and comprehensive understanding of the client's current business situation <span className="font-semibold">(Point A)</span> and their desired outcomes <span className="font-semibold">(Point B)</span>. This assessment aims to identify key areas such as <span className="font-semibold">customer base, revenue, profit margins, team performance, and owner dependency,</span> and to establish specific goals that align with the <span className="font-semibold">client's vision for growth and improvement.</span>
				</div>
				<div className="text-[20px] mt-[50px] font-semibold">Why?</div>
				<div className="font-light mt-[5px]">
					Conducting this assessment is crucial because it ensures that all strategies and actions taken during the project are directly aligned with the client's business needs and goals. By thoroughly understanding <span className="font-semibold">where the client stands today and where they want to be, we can create a tailored roadmap that effectively bridges the gap,</span> leading to sustainable business growth and improved operational efficiency. This assessment also helps set clear expectations, decide what to do first, and make sure everyone involved understands the plan from the start.
				</div>
			</div>
			<div className="max-w-[500px] mx-auto">
				{Fields.basicInfo.map((field, index) => {
					switch (field.type) {
						case "text":   return <ValidationTextFiled field={field} />;
						case "date":   return <BasicDatePicker field={field} />;
						case "radio":   return <ErrorRadios field={field} />;
						default: return <></>
					}
				})}
				<div className="my-[50px]">
					<div className="text-left text-[20px] font-semibold">Section 1: Basic Business Information</div>
					{Fields.section1.map((field, index) => {
						switch (field.type) {
							case "text":   return <ValidationTextFiled field={field} />;
							case "date":   return <BasicDatePicker field={field} />;
							case "radio":   return <ErrorRadios field={field} />;
							default: return <></>
						}
					})}
				</div>
			</div>
		</>
	)
}