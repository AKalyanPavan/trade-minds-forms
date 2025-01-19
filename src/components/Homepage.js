import { useState } from 'react';

import HorizontalStep from './HorizontalStep.js';
import Header from './Header.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
import Section6 from './Section6.js';
import Section7 from './Section7.js';
import Section8 from './Section8.js';

export default function Homepage() {
	const [steps, setSteps] = useState([
		{
			title: 1,
			label: 'Section 1',
			active: true,
			checked: false,
		},
		{
			title: 2,
			label: 'Section 2',
			active: false,
			checked: false,
		},
		{
			title: 3,
			label: 'Section 3',
			active: false,
			checked: false,
		},
		{
			title: 4,
			label: 'Section 4',
			active: false,
			checked: false,
		},
		{
			title: 5,
			label: 'Section 5',
			active: false,
			checked: false,
		},
		{
			title: 6,
			label: 'Section 6',
			active: false,
			checked: false,
		},
		{
			title: 7,
			label: 'Section 7',
			active: false,
			checked: false,
		},
		{
			title: 8,
			label: 'Section 8',
			active: false,
			checked: false,
			lastStep: true,
		},
	]);

	const [currentStep, setCurrentStep] = useState(1);

	function proceedtoNextStep() {
		steps[currentStep - 1].checked = true;
		steps[currentStep].active = true;
		setCurrentStep(currentStep + 1);
		setSteps(steps);
	}

	function reverttoPreviousStep() {
		steps[currentStep - 2].checked = false;
		steps[currentStep - 1].active = false;
		setCurrentStep(currentStep - 1);
		setSteps(steps);
	}

	return(
		<div className="font-['Lexend']">
			<section className="z-[2] max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto z-[1] bg-[#ffffff] sticky top-[0px]">
				<Header />
				<div className="bg-white z-[1] flex items-center justify-between py-[20px] sticky max-w-[800px] mx-auto">
					{steps.map((stepItem, index) => 
						<HorizontalStep key={index} step={stepItem} />
					)}
				</div>
			</section>
			<div className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto pt-[20px]">
				<div className="max-w-[800px] mx-auto pb-[50px]">
					{ (currentStep == 1) && <Section1 /> }
					{ (currentStep == 2) && <Section2 /> }
					{ (currentStep == 3) && <Section3 /> }
					{ (currentStep == 4) && <Section4 /> }
					{ (currentStep == 5) && <Section5 /> }
					{ (currentStep == 6) && <Section6 /> }
					{ (currentStep == 7) && <Section7 /> }
					{ (currentStep == 8) && <Section8 /> }
				</div>
				<div className="flex justify-center gap-[20px] sticky bottom-[0px] font-semibold py-[10px] w-full bg-white z-[1]">
					<div className="border-[1.5px] border-solid border-black text-black py-[5px] px-[30px] rounded-[5px] cursor-pointer hover:bg-black hover:border-black hover:text-white" style={{
						transition: 'all 0.3s'
					}} onClick={() => reverttoPreviousStep()}>
						Back
					</div>
					<div className="bg-[#387dff] py-[5px] px-[30px] rounded-[5px] text-white cursor-pointer hover:bg-black" style={{
						transition: 'all 0.3s'
					}} onClick={() => proceedtoNextStep()}>
						Next
					</div>
				</div>
			</div>
		</div>
	)
}