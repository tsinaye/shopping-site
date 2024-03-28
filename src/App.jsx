import React from 'react'
import Home from './components/Home'
import Blouse from './components/Blouse'
import Skirt from './components/Skirt'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom'
import StockDetails from './components/StockDetails';
import NotFound from './components/NotFound';

const App = () => {
	return (
		<div>
			<Routes>

				<Route path='/' element={<Main />}></Route>
				<Route path='/Category/Blouse' element={<Blouse />}></Route>
				<Route path='/Category/Skirt' element={<Skirt />}></Route>
				<Route path='stocks/:id' element={<StockDetails />}></Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App

