import React, { useEffect, useState } from 'react';
import Header from '../Headers';
import ProductList from '../ProductsList';

const PopularProducts = () => {
	return (
		<div className='lg:px-[100px] md:px-[40px] px-[20px] mt-[60px]'>
			<Header
				title='Popular Products'
				view_all='View all'
			/>

			{/* <div className="productList flex flex-wrap items-center justify-center my-[32px] w-full "> */}
			<div className='productList grid md:grid-cols-5 grid-cols-2 justify-center w-full mt-[32px] '>
				<ProductList />
			</div>
		</div>
	);
};

export default PopularProducts;
