import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import image1 from '../../Assets/bannerCard/sale.png';
import image2 from '../../Assets/bannerCard/lowfat.png';
import image3 from '../../Assets/bannerCard/freshFruit.png';
const BannerCards = () => {
	return (
		<section className='flex flex-wrap items-center justify-center gap-4 lg:my-[80px] my-[40px] w-full  lg:px-[100px] md:px-[40px] px-[20px]'>
			<div className='sales relative hover:translate-y-[-5px] cursor-pointer transition-all ease-in duration-[1s]'>
				<Image
					src={image1}
					alt='sale img'
				/>
				<div className='absolute top-[32px] flex items-center w-full flex-col text-white'>
					<div className='subtext text-[12px] uppercase mb-[16px] font-medium'>
						Best Deals
					</div>
					<div className='mainHeader lg:text-[32px] md:text-[24px] text-[20px] capitalize font-semibold'>
						Sale of the Month
					</div>
					<div className='time flex items-top justify-center gap-6 mt-[10px] lg:text-[14px] md:text-[12px] text-[10px] '>
						<p className='cardTime'>
							00 <span>DAYS</span>
						</p>
						<p className='mt-[4px]'>:</p>
						<p className='cardTime'>
							02 <span>HOURS</span>
						</p>
						<p className='mt-[4px]'>:</p>
						<p className='cardTime'>
							18 <span>MINS</span>
						</p>
						<p className='mt-[4px]'>:</p>
						<p className='cardTime'>
							46 <span>SECS</span>
						</p>
					</div>
					{/* end of time */}
					<button className='flex items-center justify-center gap-[16px] px-[32px] py-[10px] bg-white text-[var(--Primary)] rounded-full my-[32px]'>
						Shop Now <FaArrowRightLong />
					</button>
				</div>
			</div>
			{/* end of first card */}
			<div className='lowFat relative hover:translate-y-[-5px] cursor-pointer transition-all ease-in duration-[1s]'>
				<Image
					src={image2}
					alt='sale img'
				/>
				<div className='absolute top-[32px] flex items-center w-full flex-col text-white'>
					<div className='subtext text-[12px] uppercase mb-[16px] font-medium'>
						85% Fat Free
					</div>
					<div className='mainHeader lg:text-[32px] md:text-[24px] text-[20px] capitalize font-semibold'>
						Low-Fat Meat
					</div>
					<p className='lg:text-[16px] md:text-[14px] text-[12px]'>
						Started at{' '}
						<span className='font-bold text-[var(--warning)] '>$79.99</span>
					</p>
					<button className='flex items-center justify-center gap-[16px] px-[32px] py-[10px] bg-white text-[var(--Primary)] rounded-full my-[32px]'>
						Shop Now <FaArrowRightLong />
					</button>
				</div>
			</div>
			<div className='freshFruit relative hover:translate-y-[-5px] cursor-pointer transition-all ease-in duration-[1s]'>
				<Image
					src={image3}
					alt='sale img'
				/>
				<div className='absolute top-[32px] flex items-center w-full flex-col text-black'>
					<div className='subtext text-[12px] uppercase mb-[16px] font-medium'>
						Summer Sale
					</div>
					<div className='mainHeader lg:text-[32px] md:text-[24px] text-[20px] capitalize font-semibold'>
						100% Fresh Fruit
					</div>
					<p className='mt-[16px] lg:text-[16px] md:text-[14px] text-[12px]'>
						Up to{' '}
						<span className='px-[10px] py-[10px] bg-black font-bold text-[var(--yellow)] rounded-md mx-[4px]'>
							64% OFF
						</span>
					</p>
					<button className='flex items-center justify-center gap-[16px] px-[32px] py-[10px] bg-white text-[var(--Primary)] rounded-full my-[32px]'>
						Shop Now <FaArrowRightLong />
					</button>
				</div>
			</div>
		</section>
	);
};

export default BannerCards;
