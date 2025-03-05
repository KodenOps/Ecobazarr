import React from 'react';
import img1 from '../../Assets/Image.png';
import Image from 'next/image';
const LatestNews = () => {
	return (
		<div className='lg:px-[100px] md:px-[40px] px-[20px]'>
			<h2 className='lg:text-[24px] md:text-[24px] text-[18px] font-bold text-center'>
				Latest Article
			</h2>
			{/* Article card */}
			<div className='container mt-8'>
				<div className='top'>
					<Image
						src={img1}
						alt='article imf'
					/>
				</div>
				<div className='bottom'></div>
			</div>
		</div>
	);
};

export default LatestNews;
