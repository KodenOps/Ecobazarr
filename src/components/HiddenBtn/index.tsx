import React from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
const HiddenBtn = () => {
	return (
		<div className="absolute top-3 right-6 flex flex-col gap-[16px] ">
			<Link
				href="/"
				className="p-[10px] bg-white rounded-full border-[2px] border-[var(--iconBg)] shadow-sm flex items-center justify-center">
				<FaRegHeart size={18} />
			</Link>
			<Link
				href="/"
				className="p-[10px] bg-white rounded-full border-[2px] border-[var(--iconBg)] shadow-sm flex items-center justify-center">
				<IoEyeOutline size={18} />
			</Link>
		</div>
	);
};

export default HiddenBtn;
