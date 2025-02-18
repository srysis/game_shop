import React from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Catalog from "./pages/catalog.jsx"
import ProductPage from "./pages/product_page.jsx"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Catalog />} />
				<Route path="/product/:id" element={<ProductPage />} />
			</Routes>
		</Router>
	);
}

export default App;
