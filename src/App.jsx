import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import TopNav from './components/TopNav'

function App() {
	return (
		<>
			<BrowserRouter>
				<div className='flex'>
					<Nav />
					<TopNav />
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
