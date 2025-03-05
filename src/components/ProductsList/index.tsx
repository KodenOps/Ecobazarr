'use client';
import React, { useState } from 'react';
import PRODUCTS_LIST from '../../Data/PopularProducts';
import Image from 'next/image';
import Rating from '../../Assets/Rating.png';
import { PiHandbagLight } from 'react-icons/pi';
import HiddenBtn from '../HiddenBtn';

const ProductList = () => {
	const [activeCard, setActiveCard] = useState<number | null>(null);

	return PRODUCTS_LIST.map((items) => {
		let links = items.img;
		const isActive = activeCard === items.id;

		return (
			<div
				className='px-[16px] py-[24px] border-[1px] border-collapse relative hover:border-[var(--Soft-Primary)] ease transition-all hover:shadow-md'
				key={items.id}>
				<Image
					src={links}
					alt={items.name}
					width={180}
					className='flex justify-center w-full'
				/>

				{/* Show HiddenBtn only for the active card */}
				{isActive && <HiddenBtn />}

				<div className='deets flex items-center justify-between'>
					<div className='left'>
						<h2 className='group-hover:text-[var(--Primary)] name text-[14px] text-[var(--shopgrey)]'>
							{items.name}
						</h2>
						<p className='price'>
							${items.new_price}{' '}
							<s className='text-[var(--priceGrey)]'>{items.old_price}</s>
						</p>
						<Image
							src={Rating}
							alt='ratings'
						/>
					</div>

					<div className='right'>
						<p
							className='bg-[var(--iconBg)] active:bg-[var(--Primary)] hover:bg-[var(--Primary)] hover:text-white rounded-full p-[10px] border-2'
							onClick={() => setActiveCard(isActive ? null : items.id)}>
							<PiHandbagLight
								size={18}
								className='icon'
							/>
						</p>
					</div>
				</div>
			</div>
		);
	});
};

export default ProductList;
