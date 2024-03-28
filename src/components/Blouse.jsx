import { useEffect, useState } from 'react'
import StockList from './StockList';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom'

const Blouse = () => {
	const [stockList, setStocks] = useState([]);
	const { q } = useParams();
	// const { data: stockList, isLoading, error } = UseFetch(`https://www.googleapis.com/books/v1/volumes?q=Anything&key=AIzaSyCuFRIaWxva2qIWsCSWDNKNyVmTe8WoEow`)
	// const { data: stockList, isLoading, error } = UseFetch(`http://192.168.0.7:8080/item/`);
	// console.log("data" + stockList);

	useEffect(() => {
		fetch(`http://192.168.0.3:8080/item/`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data)
				console.log(`id` + q);
				const itemArray = [];
				data.forEach(item => {
					console.log(item.category)
					if (item.category == 1) {
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

export default Blouse;
