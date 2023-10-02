/* eslint-disable react/prop-types */
import { FaMapMarkerAlt, FaRegThumbsDown } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { useContext, useState } from 'react'
import Context from './context/Context'
import { motion } from 'framer-motion'

const Card = ({ image, name, location }) => {
	const [isShow, setIsShow] = useState(false)

	const { loading } = useContext(Context)

	return (
		<>
			{loading ? (
				<div className=''>
					<div className='animate-pulse space-x-4'>
						<div className='rounded-lg w-[12rem] h-[20rem] shadow-md bg-slate-700'></div>
					</div>
				</div>
			) : (
				<div>
					<div
						className=' rounded-lg w-[12rem] h-[20rem] shadow-md relative cursor-pointer mb-[2rem] max-md:w-[12rem] max-[475px]:w-[10rem] max-[350px]:w-[12rem]'
						onMouseEnter={() => setIsShow(true)}
						onMouseLeave={() => setIsShow(false)}
					>
						<div className='flex justify-between w-[95%] absolute top-2 mx-auto'>
							<div className=' h-[0.1rem] mx-auto w-[2.5rem] max-lg:w-[2rem] rounded-lg bg-white'></div>
							<div className=' h-[0.1rem] mx-auto w-[2.5rem] max-lg:w-[2rem] rounded-lg bg-gray-500'></div>
							<div className=' h-[0.1rem] mx-auto w-[2.5rem] max-lg:w-[2rem] rounded-lg bg-gray-500'></div>
							<div className=' h-[0.1rem] mx-auto w-[2.5rem] max-lg:w-[2rem] rounded-lg bg-gray-500'></div>
						</div>
						<img
							src={image}
							alt=''
							className=' rounded-lg object-cover h-[20rem]'
							loading='lazy'
						/>
						<div className='absolute text-white bottom-0 bg-gradient-to-t from-black to-transparent w-full rounded-lg px-[1rem] py-[3rem]'>
							<p className=' text-lg font-medium w-[90%] break-all'>{name}</p>
							{location && (
								<div className=' flex items-center text-[0.7rem]'>
									<FaMapMarkerAlt />

									<p className=' ml-[0.5rem]'>{location}</p>
								</div>
							)}
						</div>

						{isShow && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className=' bg-white absolute bottom-0 w-full rounded-b-lg p-[1rem] shadow-lg'
							>
								<p className=' mb-[0.5rem]'>{name}</p>
								{location && (
									<div className=' flex items-center text-[0.7rem] mb-[1rem]'>
										<FaMapMarkerAlt />
										<p className=' ml-[0.5rem]'>{location}</p>
									</div>
								)}
								<div className=' flex items-center justify-between'>
									<AiOutlineHeart className=' bg-secondary text-white rounded-sm w-[4.5rem] py-[0.3rem] text-3xl cursor-pointer' />
									<FaRegThumbsDown className='bg-primary text-white rounded-sm w-[4.5rem] py-[0.3rem] text-3xl cursor-pointer' />
								</div>
							</motion.div>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default Card
