import Logo from './../images/trade-minds-logo.png';

function Header() {

	return (
		<>
			<section className="border-b-solid border-b-gray border-b-[1px] py-[15px] flex gap-[10px] items-center justify-center">
				<div className="items-center cursor-pointer">
					<img className="w-[150px] mb-[2px]" src={Logo} />
				</div>
				<div className="bg-gradient-to-b from-[#691afc] to-[#01a2ea] min-w-[2px] h-[70px]"></div>
				<div className="font-normal text-[20px] sm:text-[30px] font-['Lexend'] h-full">
					<div className="bg-gradient-to-r text-transparent from-[#691afc] to-[#01a2ea] bg-clip-text">Business Growth and Improvement Survey</div>
				</div>
			</section>
		</>
	)
}

export default Header;