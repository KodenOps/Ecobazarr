import React from "react";
import Header from "../Headers";
import popularData from "@/Data/PopularCategories";
import Image from "next/image";
const Popular = () => {
	return (
		<div className="lg:px-[100px] md:px-[40px] px-[20px] py-[8px]">
			<Header
				title="Popular Categories"
				view_all="View all"
			/>
			<div className="flex flex-wrap lg:justify-between justify-center lg:gap-[24px] md:gap-[14px] gap-[10px] items-center text-center mt-[32px]">
				{popularData.map((each): JSX.Element => {
					return (
						<div
							key={each.id}
							className="border-[1px] py-4 border-[var(--bordercolor)] rounded-lg hover:border-[var(--hard-Primary)] cursor-pointer transition-all ease-linear hover:shadow-lg">
							<Image
								src={each.imgSrc}
								alt={each.title}
								width={190}
							/>
							<p className="mt-[24px] md:text-[18px] text-[14px] font-medium">
								{each.title}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Popular;
