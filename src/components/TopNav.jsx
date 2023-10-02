import Input from './Input'
import { FaBell, FaSearch } from 'react-icons/fa'
import img from '../assets/imgs/user.jpg'
import { BiChevronDown } from 'react-icons/bi'
import { useContext, useState } from 'react'
import Notification from './Notification'
import { MdCancel } from 'react-icons/md'
import Context from './context/Context'

const TopNav = () => {
	const [isNotify, setIsNotify] = useState(false)

	const { isSearch, setIsSearch } = useContext(Context)

	return (
		<div className='relative left-[14rem] max-lg:left-[11rem] max-xl:left-[11rem] max-md:left-[2rem]'>
			{isNotify && <Notification />}
			<div className=' mt-[1rem] ml-[3rem] flex items-center max-md:justify-between max-md:w-[70vw] max-sm:w-[60vw]'>
				<FaSearch
					className='  text-text_light text-2xl cursor-pointer hidden max-md:block'
					onClick={() => setIsSearch(true)}
				/>
				<div className=' max-md:hidden'>
					<Input />
				</div>
				{isSearch && (
					<div className=' bg-black bg-opacity-70 fixed w-[100vw] h-[100vh] top-0 left-0 right-0 z-[5] flex justify-center items-center flex-col'>
						<MdCancel
							className=' text-white text-3xl absolute z-[6] top-[1rem] right-[2rem] cursor-pointer'
							onClick={() => setIsSearch(false)}
						/>
						<Input />
					</div>
				)}
				<div
					className=' relative cursor-pointer'
					onClick={() => setIsNotify(!isNotify)}
				>
					<FaBell className=' text-primary text-3xl mx-[3rem] max-lg:mx-[2rem] max-lg:text-xl' />
					<p className=' text-white bg-secondary rounded-full h-[1rem] w-[1rem] flex items-center justify-center text-[0.7rem] font-medium absolute right-[3rem] bottom-0 max-lg:right-[2rem] max-lg:h-[0.7rem] max-lg:w-[0.7rem]'>
						3
					</p>
				</div>

				<div className=' flex items-center font-medium text-md text-gray-500'>
					<div className=''>
						<img
							src={img}
							alt=''
							className=' w-[3rem] h-[3rem] rounded-full object-cover max-lg:h-[2rem] max-lg:w-[2rem]'
						/>
					</div>
					<div className=' ml-[0.5rem] flex items-center'>
						<p className=' max-md:hidden'>Abigail</p>
						<BiChevronDown />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopNav
