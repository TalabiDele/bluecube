import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import { Toaster } from 'react-hot-toast'

function App() {
	return (
		<>
			<BrowserRouter>
				<Toaster position='top-center' reverseOrder={false} />
				<div className=''>
					<Nav />
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
