import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { useParams } from 'react-router-dom';




function App() {
		return (
			<>
				<Router>
					<Navbar />

					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/services" element={<Services />} />
						<Route path="/products" element={<Products />} />
						<Route path="/sign-up" element={<SignUp />} />
					</Routes>


				</Router>
			</>
		);
	}

export default App;
