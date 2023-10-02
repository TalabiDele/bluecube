import Input from './Input'
import { FaBell } from 'react-icons/fa'
import img from '../assets/imgs/user.jpg'
import { BiChevronDown } from 'react-icons/bi'
import { useState } from 'react'
import Notification from './Notification'

const TopNav = () => {
	const [isNotify, setIsNotify] = useState(false)

	return (
		<div className='relative left-[14rem]'>
			{isNotify && <Notification />}
			<div className=' mt-[1rem] ml-[3rem] flex items-center'>
				<Input />
				<div
					className=' relative cursor-pointer'
					onClick={() => setIsNotify(!isNotify)}
				>
					<FaBell className=' text-primary text-3xl mx-[3rem]' />
					<p className=' text-white bg-secondary rounded-full h-[1rem] w-[1rem] flex items-center justify-center text-[0.7rem] font-medium absolute right-[3rem] bottom-0'>
						3
					</p>
				</div>

				<div className=' flex items-center font-medium text-md text-gray-500'>
					<div className=''>
						<img
							src={img}
							alt=''
							className=' w-[3rem] h-[3rem] rounded-full object-cover'
						/>
					</div>
					<div className=' ml-[0.5rem] flex items-center'>
						<p className=''>Abigail</p>
						<BiChevronDown />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopNav
