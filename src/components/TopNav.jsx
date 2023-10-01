import Input from './Input'
import { FaBell } from 'react-icons/fa'
import img from '../assets/imgs/user.jpg'

const TopNav = () => {
	return (
		<div>
			<div className=' mt-[1rem] ml-[3rem] flex items-center'>
				<Input />
				<div className=' relative'>
					<FaBell className=' text-primary text-3xl mx-[3rem]' />
					<p className=' text-white bg-secondary rounded-full h-[1rem] w-[1rem] flex items-center justify-center text-sm font-medium absolute right-[3rem] bottom-0'>
						3
					</p>
				</div>

				<div className=''>
					<img src={img} alt='' className=' w-[4rem] h-[4rem] rounded-full' />
				</div>
			</div>
		</div>
	)
}

export default TopNav
