import React from 'react';
import Header from '../Headers';
import ProductList from '../ProductsList';
import Image from 'next/image';
import Stars from '../../Assets/stars.png';
import focusimg from '../../Assets/focusImg.png';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa6';
import Link from 'next/link';

const HotDeals = () => {
	// "Style in css: means the tailwind css class has been compressed into the global css"
	return (
		<section className='lg:px-[100px] md:px-[40px] px-[20px] '>
			<Header
				title='Hot Deals'
				view_all='View all'
			/>

			<div className='w-full h-auto py-[24px] my-[32px]'>
				{/* The container for the entire grids */}
				{/* style in css */}
				<div className='HotDealcontainer   '>
					{/* The Big weird box for the Top deal */}
					<div className='mainDeal mb-[10px] row-span-2 col-span-2 '>
						<Image
							src={focusimg}
							alt='Apple img'
							className='flex justify-center w-[70%] mx-[15%]'
						/>
						<div className='CTAbtns flex justify-around items-center md:px-[40px] px-[10px]'>
							{/* style in css */}
							<Link
								href='/'
								className='iconsBtn'>
								<FaRegHeart size={18} />
							</Link>
							{/* style in css */}
							<button className='btnCart'>Add To Cart</button>
							{/* style in css */}
							<Link
								href='/'
								className='iconsBtn'>
								<IoEyeOutline size={18} />
							</Link>
						</div>
						{/* title + price */}
						<div className='px-[10px] text-center mt-[16px] py-[16px]'>
							<h3 className='lg:text-[26px] md:text-[24px] text-[18px] '>
								Chinese cabbage
							</h3>
							<p className='font-semibold text-[18px] md:mt-[16px] mt-[8px]'>
								$12.00 <s className='text-[var(--priceGrey)]'>$24.00</s>
							</p>
						</div>
						{/* RATING - style in css*/}
						<div className='rating '>
							<Image
								src={Stars}
								alt='rating'
							/>
							<p> (524 Feedback)</p>
						</div>
						{/* OFFER TIME */}
						<div className='my-[16px]'>
							<p className='text-center md:text-[16px] sm:text-[14px] text-[12px] text-[var(--priceGrey)] mb-[5px]'>
								Hurry up! Offer ends In:
							</p>
							{/* style in css */}
							<div className='Timecontainer '>
								<div className='day'>
									<h4>02</h4>
									{/* style in css */}
									<p className='timepara'>DAYS</p>
								</div>
								<span className='text-[var(--priceGrey)]'>:</span>
								<div className='hrs'>
									<h4>23</h4>
									{/* style in css */}
									<p className='timepara'>HOURS</p>
								</div>
								<span className='text-[var(--priceGrey)]'>:</span>
								<div className='mins'>
									<h4>34</h4>
									{/* style in css */}
									<p className='timepara'>MINS</p>
								</div>
								<span className='text-[var(--priceGrey)]'>:</span>
								<div className='secs'>
									<h4>57</h4>
									{/* style in css */}
									<p className='timepara'>SECS</p>
								</div>
							</div>
						</div>
					</div>
					<ProductList />
					{/* <ProductList /> */}
				</div>
			</div>
		</section>
	);
};

export default HotDeals;
