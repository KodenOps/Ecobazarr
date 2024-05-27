import React from "react";
import Image from "next/image";
import bg from "../../Assets/bg.png";
import bg1 from "../../Assets/bg2.png";
import bg2 from "../../Assets/bg3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import NavBar from "../NavBar";
import ValuesPanel from "../ValuesPanel";

const Hero = () => {
	return (
		<div className="w-full PB-[40px] block">
			<NavBar />
			<div className="heroImg flex lg:flex-row flex-col min-h-[80vh] lg:px-[100px]  lg:py-[24px] lg:gap-3">
				<div className="left lg:w-[60vw]  min-h-full relative">
					<Image
						src={bg}
						alt="hero img 1"
						className="lg:w-full w-[100vw] lg:h-full lg:rounded-lg"
					/>
					<div className="texts absolute top-0 left-0 text-white lg:px-[60px] md:px-[40px] px-[20px] flex flex-col  justify-center h-full ">
						<h2 className="herotext md:text-[38px] sm:text-[36px]  text-[30px] w-[70%]  font-bold">
							Fresh & Healthy Organic Food
						</h2>
						<div className="border-l-2 border-[var(--Soft-Primary)] px-4 my-[32px]">
							<p className="heropee mb-[32px] lg:text-[20px] md:text-[18px] text-[16px]">
								Sale up to{" "}
								<span className="px-[16px] py-[8px] rounded-lg font-extrabold bg-[var(--warning)]">
									30% OFF
								</span>
							</p>
							<p className="heropeeq md:text-[14px] text-[10px] font-light">
								Free shipping on all your order.
							</p>
						</div>

						<button className="bg-white lg:w-[25%] md:w-[40%] w-[120px] px-[16px] py-[10px] rounded-full justify-center flex items-center lg:text-[16px] md:text-[14px] text-[10px] gap-2 text-[var(--Soft-Primary)] hover:text-[var(--Primary)] ">
							Shop now <FaArrowRightLong />
						</button>
					</div>
				</div>
				{/* End of the left hero box */}
				<div className="right lg:w-[40vw]  w-full gap-3 h-full flex  flex-col  justify-around">
					{/* Summer sales - second box */}
					<div className="summer relative">
						<Image
							src={bg1}
							alt="hero img 1"
							className="h-[37vh] w-full object-cover  lg:rounded-lg "
						/>
						<div className="text absolute lg:left-[16px] z-1 top-[32px] px-[24px] ">
							<p className="md:text-[14px] text-[10px]">SUMMER SALE</p>
							<h3 className="md:text-[32px] text-[24px] font-bold mb-[10px]">
								75% OFF
							</h3>
							<p className="text-[14px] mb-[14px] text-[var(--lighttext)]">
								Only Fruit & Vegetables
							</p>
							<a
								href="#"
								className="flex md:text-[16px] text-[12px] items-center gap-4 text-[var(--Soft-Primary)] hover:text-[var(--Primary)] transition-all ease">
								{" "}
								Shop Now{" "}
								<span>
									<FaArrowRightLong />
								</span>
							</a>
						</div>
					</div>
					{/* special deals - third box */}
					<div className="special relative">
						<Image
							src={bg2}
							alt="hero img 1"
							className="h-[35vh] w-full object-cover lg:rounded-lg "
						/>
						<div className="text absolute z-10 top-0 text-white flex flex-col items-center justify-center h-full w-full">
							<p className="lg:text-[14px] md:text-[12px] text-[10px] ">
								BEST DEAL
							</p>
							<h3 className="font-bold  lg:text-[24px] md:text-[20px] text-[18px] md:w-[50%]  w-full text-center my-[16px]">
								Special Products Deal of the Month
							</h3>
							<a
								href="#"
								className="flex items-center gap-4 text-[var(--Soft-Primary)] hover:text-[var(--Primary)] transition-all ease text-[16px]">
								{" "}
								Shop Now{" "}
								<span>
									<FaArrowRightLong />
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
