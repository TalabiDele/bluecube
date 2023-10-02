import Buttons from './Buttons'
import { FaSearch } from 'react-icons/fa'
import { useContext, useState } from 'react'
import Context from './context/Context'
import toast from 'react-hot-toast'

const Input = () => {
	const [searchValue, setSearchValue] = useState('')

	const { handleSearch } = useContext(Context)

	const handleSearchImage = () => {
		if (searchValue === '') {
			toast.error('Input field empty, enter a value!')
		} else {
			handleSearch({ search: searchValue })
		}

		setSearchValue('')
	}

	return (
		<div>
			<div className=' relative'>
				<FaSearch className=' absolute text-text_light text-2xl top-4 left-4' />
				<input
					type='text'
					placeholder='Find Something...'
					className=' shadow-lg px-[5rem] rounded-md w-[60vw] py-[1rem] placeholder:text-sm text-text_light outline-none max-lg:w-[50vw] max-xl:w-[50vw] max-md:w-[80vw] max-md:mx-auto max-md:px-[3rem]'
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<Buttons event={handleSearchImage} />
			</div>
		</div>
	)
}

export default Input
