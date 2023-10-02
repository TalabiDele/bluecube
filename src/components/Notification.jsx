import jack from '../assets/imgs/user-2.jpg'
import mike from '../assets/imgs/user-3.jpg'
import { FaHeart, FaCommentAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Notification = () => {
	const notify = [
		{
			id: 1,
			image: mike,
			text: 'Micheal liked you',
			time: '20 minutes',
			type: 'like',
		},
		{
			id: 2,
			image: jack,
			text: 'Jack liked you',
			time: '40 minutes',
			type: 'like',
		},
		{
			id: 3,
			image: mike,
			text: 'Martin commented on your photo',
			time: '56 minutes',
			type: 'comment',
		},
	]

	return (
		<div>
			<motion.div
				initial={{ y: -20 }}
				animate={{ y: 0 }}
				exit={{ y: -20 }}
				className=' bg-white rounded-lg shadow-lg fixed z-[3] top-[5rem] right-[5rem] max-md:right-[3rem] max-md:top-[4rem] max-md:w-[80vw] max-sm:w-[90vw] max-sm:right-[0]'
			>
				<div className=' relative'>
					<div className='absolute left-52 -top-2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white  max-xl:left-1/2 max-lg:left-60 max-md:left-1/2'></div>
					<div className=''>
						{notify.map((e) => (
							<div
								className='  text-gray-400 border-b border-gray-400 border-opacity-30 w-[100%]'
								key={e.id}
							>
								<div className=' flex items-center p-[1rem] w-[90%]'>
									<img
										src={e.image}
										alt=''
										className=' w-[2rem] h-[2rem] rounded-full object-cover'
									/>
									<div className=' mx-[1rem] w-[80%]'>
										<p className=' text-sm'>{e.text}</p>
										<p className=' text-[0.7rem]'>About {e.time} minutes ago</p>
									</div>
									{e.type === 'like' ? (
										<FaHeart className=' text-secondary' />
									) : (
										<FaCommentAlt className=' text-primary' />
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Notification
