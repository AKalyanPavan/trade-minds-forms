import useEffect from 'react';

export default function HorizontalStep({step}) {

	return(
		<>
			<div className={`text-[14px] sm:text-[16px] font-bold text-white min-w-[25px] sm:min-w-[30px] leading-[25px] sm:leading-[30px] rounded-[50%] flex justify-center ${step.active ? 'bg-[#387dff]' : 'bg-[#a0a0a0]'}`}>
				{(!step.checked) ? 
					step.title : 
					<svg className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" stroke-width="0"/>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
						<g id="SVGRepo_iconCarrier"> <path d="M7 12L9.89075 14.8907V14.8907C9.95114 14.951 10.049 14.9511 10.1094 14.8907V14.8907L17 8" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
					</svg>
				}
			</div>
			{!step?.lastStep && 
				<div className="w-full h-[3px] bg-[#a0a0a0]">
					<div className={`h-[3px] ${step.checked ? 'animate-[increaseWidth_.3s_ease-in-out] w-full bg-[#387dff]' : 'animate-[decreaseWidth_ease-out]'}`}>
					</div>
				</div>
			}
		</>
	)
}