import { useParams } from 'react-router-dom'
import StockEachDetails from './StockEachDetails';
import Navbar from './Navbar';
import HookCustom from './HookCustom';

const StockDetails = () => {
	// const [stock, setStocks] = useState({});
	const { id } = useParams()

	// useEffect(() => {
	// 	//	fetch(`https://www.googleapis.com/books/v1/volumes?q=${id}&key=AIzaSyCuFRIaWxva2qIWsCSWDNKNyVmTe8WoEow`)
	// 	fetch(`http://192.168.0.3:8080/item/${id}`)
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			console.log(id + "id")
	// 			setStocks(data)
	// 			console.log(stock + "stock")
	// 		})
	// }, [])

	const { data: stock, isLoading, error } = HookCustom(`http://192.168.0.3:8080/item/${id}`)



	return (
		<>
			<Navbar />
			<StockEachDetails stock={stock}></StockEachDetails>
		</>
	);
}

export default StockDetails;
