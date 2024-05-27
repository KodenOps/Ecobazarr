"use client";
import React, { useState } from "react";
import PRODUCTS_LIST from "../../Data/PopularProducts";
import Image from "next/image";
import Rating from "@/Assets/Rating.png";
import { PiHandbagLight } from "react-icons/pi";
import HiddenBtn from "../HiddenBtn";
const ProductList = () => {
	const [handleviewState, sethandleviewState] = useState(false);
	return PRODUCTS_LIST.map((ITEM): JSX.Element => {
		return (
			<div
				className="group px-[16px] py-[24px] border-[1px] border-collapse relative hover:border-[var(--Soft-Primary)] ease transition-all hover:shadow-md "
				key={ITEM.id}>
				<Image
					src={ITEM.img}
					alt={ITEM.name}
					width={180}
					className="flex justify-center w-full"
				/>
				{/* handles the toggling of the hidden buttons on each cards */}
				{ITEM.viewClicked ? <HiddenBtn /> : ""}
				{/* ends here */}
				<div className="deets flex items-center justify-between">
					<div className="left">
						<h2 className="group-hover:text-[var(--Primary)] name text-[14px] text-[var(--shopgrey)]">
							{ITEM.name}
						</h2>
						<p className="price">
							${ITEM.new_price}{" "}
							<s className="text-[var(--priceGrey)] ">{ITEM.old_price}</s>
						</p>
						<Image
							src={Rating}
							alt="ratingss"
						/>
					</div>

					<div className="right">
						<p
							className="bg-[var(--iconBg)] active:bg-[var(--Primary)] hover:bg-[var(--Primary)] hover:text-white rounded-full p-[10px] border-2"
							onClick={(e) => {
								ITEM.viewClicked = !ITEM.viewClicked;
								sethandleviewState(!handleviewState);
							}}>
							<PiHandbagLight
								size={18}
								className="icon "
							/>
						</p>
					</div>
				</div>
			</div>
		);
	});
};

export default ProductList;
