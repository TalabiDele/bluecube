import Buttons from './Buttons'
import { FaSearch } from 'react-icons/fa'

const Input = () => {
	return (
		<div>
			<div className=' relative'>
				<FaSearch className=' absolute text-text_light text-2xl top-4 left-4' />
				<input
					type='text'
					placeholder='Find Something...'
					className=' shadow-sm px-[5rem] rounded-md w-[50vw] py-[1rem] placeholder:text-sm text-text_light outline-none'
				/>
				<Buttons />
			</div>
		</div>
	)
}

export default Input
