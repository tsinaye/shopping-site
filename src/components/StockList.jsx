import React from 'react'
import { Link } from 'react-router-dom';


const StockList = ({ stockList }) => {

	return (
		<div className='stock-list'>
			{stockList.map((stock) => (
				<div
					key={stock.id}
					className='stocklist-container'>
					<div>
						<img
							src={stock.image}
							style={{ width: '100%', height: '250px' }}
						/>
					</div>
					<div>
						{/* <p className='font-bold text-center pt-5'>item Name: {stock.volumeInfo.authors}</p> */}
						<p className='font-bold text-center pt-5'>item Name: {stock.name}</p>
					</div>
					<Link to={`/stocks/${stock.id}`}>
						<div className='pt-8 flex justify-center items-center'>
							<button className='btn-readmore'>
								Click to see details
								<svg
									aria-hidden='true'
									className='w-4 h-4 ml-2 -mr-1'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
										clipRule='evenodd'></path>
								</svg>
							</button>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}

export default StockList
