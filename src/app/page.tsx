import Hero from "@/components/Hero";
import ValuesPanel from "@/components/ValuesPanel";
import React from "react";
import Data from "@/Data/PopularCategories";
import Popular from "@/components/PopularCategories";
import PopularProducts from "@/components/PoplularProducts";
import BannerCards from "@/components/BannerCards";
import HotDeals from "@/components/HotDeals";
const page = () => {
	return (
		<div className="w-full min-h-[100vh]">
			<Hero />
			<ValuesPanel />
			<Popular />
			<PopularProducts />
			<BannerCards />
			<HotDeals/>
		</div>
	);
};

export default page;
