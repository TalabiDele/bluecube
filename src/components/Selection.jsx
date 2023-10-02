import { BiChevronDown } from 'react-icons/bi'

const Selection = () => {
	return (
		<div className=' '>
			<div className=' bg-white shadow-lg rounded-md text-gray-500 flex justify-center mt-[2rem] w-[80%]'>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer'>
					<div className=' flex items-center px-[1rem] py-[0.5rem]'>
						<p className=' text-sm'>World</p>
						<BiChevronDown className=' ml-[0.5rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] p-[1rem]'>
						<p className=' text-sm'>Following</p>
						<BiChevronDown className=' ml-[0.5rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] p-[1rem]'>
						<p className=' text-sm'>Popular</p>
						<BiChevronDown className=' ml-[0.5rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] p-[1rem]'>
						<p className=' text-sm'>Post</p>
						<BiChevronDown className=' ml-[0.5rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] p-[1rem]'>
						<p className=' text-sm'>Gender</p>
						<BiChevronDown className=' ml-[0.5rem]' />
					</div>
				</div>
				<div className='  border-r border-gray-500 border-opacity-10 cursor-pointer'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] p-[1rem]'>
						<p className=' text-sm'>Location</p>
						<BiChevronDown className=' ml-[0.5rem]' />
					</div>
				</div>
				<div className=' cursor-pointer'>
					<div className=' flex items-center px-[1rem] py-[0.5rem] p-[1rem]'>
						<p className=' text-sm'>Profession</p>
						<BiChevronDown className=' ml-[0.5rem]' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Selection
