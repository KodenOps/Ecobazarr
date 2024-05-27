import React from "react";
import {
	MdExpandMore,
	MdOutlineLocationOn,
	MdOutlineSearch,
	MdOutlineMenu,
} from "react-icons/md";
import Image from "next/image";
import logo from "../../Assets/Logo.png";
import { IoHeartOutline } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";

const NavBar = () => {
	return (
		<nav className=" w-full ">
			<div className="firstlayer flex justify-between items-center w-full lg:px-[100px] md:px-[40px] px-[16px] py-[16px] bg-white text-[var(--lighttext)] text-[12px] border-b-2">
				<div className="left flex  items-center gap-2">
					<span>
						<MdOutlineLocationOn />
					</span>
					<p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
				</div>
				<div className="right flex  items-center gap-5">
					<div className="langCurr flex  items-center gap-4">
						<p className="cursor-pointer flex  items-center gap-1">
							Eng{" "}
							<span>
								<MdExpandMore />
							</span>
						</p>
						<p className="cursor-pointer flex  items-center gap-1 ">
							USD{" "}
							<span>
								<MdExpandMore />
							</span>
						</p>
					</div>
					<div className="logSign lg:flex  items-center gap-2 cursor-pointer  hidden">
						<p className="hover:text-[var(--Primary)]">Sign in</p>
						<span>/</span>
						<p className="hover:text-[var(--Primary)]">Sign Up</p>
					</div>
				</div>
			</div>
			{/* End of the first line of navigation bar */}
			<div className="secondlayer flex justify-between items-center lg:px-[100px] md:px-[40px] px-[20px] py-[16px]">
				<div className="left">
					<Image
						src={logo}
						alt="logo"
						className="logo w-[140px]"
					/>
				</div>
				<div className="middle lg:flex hidden justify-center items-center  border-2 border-slate-100 rounded-md ">
					<div className="input flex  items-center px-3 gap-1">
						<MdOutlineSearch />
						<input
							type="text"
							placeholder="Search"
							className="bg-transparent outline-none pr-[40px] text-[14px] text-slate-600"
						/>
					</div>
					<button className="px-[16px] py-[8px] w-[100px] bg-[var(--Primary)] text-[14px] text-white rounded-r-md ">
						Search
					</button>
				</div>
				<div className="heartbagright flex items-center gap-4">
					<IoHeartOutline
						size={32}
						className="icon"
					/>
					<span className="text-[var(--lighttext)]">|</span>
					<div className="shopping flex gap-5 items-center">
						<div className="icon relative">
							<PiHandbagLight
								size={32}
								className="icon"
							/>
							<span className="absolute top-[-20%] right-[-50%] bg-[var(--Primary)] w-7 h-7 text-center rounded-full border-2 border-white text-[12px] flex items-center justify-center text-white">
								90
							</span>
						</div>
						<div className="cart">
							<p className="text-[11px] text-[var(--shopgrey)]">
								Shopping cart:
							</p>
							<p className="font-bold">$57.00</p>
						</div>
					</div>
				</div>
			</div>
			{/* End of the second line of navigation bar */}
			<div className="thirdlayer py-[16px] bg-[var(--bgPanel)] lg:px-[100px] md:px-[40px] px-[20px] flex justify-between items-center w-[100%]">
				<span className="text-white md:hidden block">
					<MdOutlineMenu size={30} />
				</span>
				<div className="left md:block hidden">
					<ul className="flex items-center gap-6 text-white text-[14px]">
						<li id="active">
							Home{" "}
							<span>
								<MdExpandMore />
							</span>
						</li>
						<li>
							Shop{" "}
							<span>
								<MdExpandMore />
							</span>
						</li>
						<li>
							Pages{" "}
							<span>
								<MdExpandMore />
							</span>
						</li>
						<li>
							Blog{" "}
							<span>
								<MdExpandMore />
							</span>
						</li>
						<li>About Us</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div className="right lg:flex hidden items-center gap-4 text-white text-[14px]">
					<FaPhoneVolume />
					(219) 555-0114
				</div>
				<div className="logSign flex  items-center gap-2 cursor-pointer  lg:hidden text-white text-[12px]">
					<p className="hover:text-[var(--Primary)]">Sign in</p>
					<span>/</span>
					<p className="hover:text-[var(--Primary)]">Sign Up</p>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
