import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = (props: { title: string; view_all: string }) => {
	return (
		<div className="flex justify-between items-center ">
			<h2 className="lg:text-[24px] md:text-[24px] text-[18px] font-bold">
				{props.title}
			</h2>
			<p className="flex items-center justify-between gap-4 text-[var(--Soft-Primary)] text-[16px] font-medium cursor-pointer hover:text-[var(--Primary)] ease transition-all">
				{props.view_all} <FaArrowRightLong />
			</p>
		</div>
	);
};

export default Header;
