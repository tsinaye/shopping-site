import { useState, useEffect } from 'react';

export default function Hook(item) {
	const [stock, setStocks] = useState({});
	if (item.qty > 0) {
		item.qty = item.qty - 1;

	} else {
		alert("Out of Stock");
	}

	useEffect(`http://192.168.0.3:8080/item/update/` + item)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data)

			// const itemArray = [];
			// data.forEach(item => {
			// 	console.log(item.category)
			// 	if (item.category == 1) {
			// 		itemArray.push(item);
			// 	}
			// });
			// setStocks(itemArray);
			console.log(stock)
		})
	return stock;
}
