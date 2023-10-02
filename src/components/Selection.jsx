import { BiChevronDown } from 'react-icons/bi'

const Selection = () => {
	return (
		<div className=' max-md:w-[90%]'>
			<div className='   rounded-md text-gray-500 grid grid-cols-7 max-md:grid-cols-5 max-sm:grid-cols-2 shrink-0 justify-center mt-[2rem] w-[80%] max-lg:w-[70vw] max-xl:w-[70vw] relative max-sm:left-[1rem] max-sm:w-[60vw]'>
				<div className=' border-r border-gray-500 border-opacity-10 cursor-pointer bg-white rounded-md max-md:mb-[1rem] justify-items-center shadow-lg'>
					<div className=' flex items-center px-[1rem] py-[0.5rem]'>
						<p className=' text-sm max-md:text-[0.5rem]'>World</p>
						<BiChevronDown className=' ml-[0.2rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer bg-white rounded-md max-md:mb-[1rem] justify-items-center shadow-lg'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] max-lg:px-[0.5rem]'>
						<p className=' text-sm max-md:text-[0.5rem]'>Following</p>
						<BiChevronDown className=' ml-[0.2rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer bg-white rounded-md max-md:mb-[1rem] justify-items-center shadow-lg'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] max-lg:px-[0.5rem]'>
						<p className=' text-sm max-md:text-[0.5rem]'>Popular</p>
						<BiChevronDown className=' ml-[0.2rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer bg-white rounded-md max-md:mb-[1rem] justify-items-center shadow-lg'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] max-lg:px-[0.5rem]'>
						<p className=' text-sm max-md:text-[0.5rem]'>Post</p>
						<BiChevronDown className=' ml-[0.2rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer bg-white rounded-md max-md:mb-[1rem] justify-items-center shadow-lg'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] max-lg:px-[0.5rem]'>
						<p className=' text-sm max-md:text-[0.5rem]'>Gender</p>
						<BiChevronDown className=' ml-[0.2rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer bg-white rounded-md max-md:mb-[1rem] justify-items-center shadow-lg'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] max-lg:px-[0.5rem]'>
						<p className=' text-sm max-md:text-[0.5rem]'>Location</p>
						<BiChevronDown className=' ml-[0.2rem]' />
					</div>
				</div>
				<div className=' cursor-pointer bg-white rounded-md max-md:mb-[1rem] justify-items-center shadow-lg'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] max-lg:px-[0.5rem]'>
						<p className=' text-sm max-md:text-[0.5rem]'>Profession</p>
						<BiChevronDown className=' ml-[0.2rem]' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Selection
