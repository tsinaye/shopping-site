import { useEffect, useState } from 'react'
import StockList from './StockList';
import Navbar from './Navbar';

const Skirt = () => {
	const [stockList, setStocks] = useState([]);

	useEffect(() => {
		fetch(`http://192.168.0.3:8080/item/`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data)
				const itemArray = [];
				data.forEach(item => {
					console.log(item.category)
					if (item.category == 3) {
						itemArray.push(item);
					}
				});
				setStocks(itemArray);
				console.log(itemArray)
			})
	}, [])


	return (
		<div>
			<>
				<Navbar />
				<div className='header'>
					<div className='overlay'>
					</div>
				</div>
				<div className='max-w-7xl mx-auto'>
					<StockList stockList={stockList}></StockList>
				</div>
			</>
		</div>
	);
}

export default Skirt;
