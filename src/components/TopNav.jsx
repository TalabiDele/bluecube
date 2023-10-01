import Input from './Input'
import { FaBell } from 'react-icons/fa'
import img from '../assets/imgs/user.jpg'
import { BiChevronDown } from 'react-icons/bi'

const TopNav = () => {
	return (
		<div className='relative left-[20rem]'>
			<div className=' mt-[1rem] ml-[3rem] flex items-center'>
				<Input />
				<div className=' relative'>
					<FaBell className=' text-primary text-3xl mx-[3rem]' />
					<p className=' text-white bg-secondary rounded-full h-[1rem] w-[1rem] flex items-center justify-center text-sm font-medium absolute right-[3rem] bottom-0'>
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
