import logo from '../assets/imgs/bluecube.png'
import { FaHome, FaChess } from 'react-icons/fa'
import { BiSolidNotification } from 'react-icons/bi'
import { GiCornerFlag, GiPartyPopper, GiWalk } from 'react-icons/gi'
import { BsLink45Deg } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
	const location = useLocation()

	return (
		<div className=' flex'>
			<div className=' pl-[5rem] border-r border-text_light w-[20rem] border-opacity-30 py-[2rem] h-[100vh]'>
				<div className=''>
					<img src={logo} alt='' className=' w-[10rem] mb-[3rem]' />
				</div>

				<ul className=' text-text_light font-medium text-md'>
					<li
						className={` ${
							location.pathname === '/' &&
							'border border-text_light border-opacity-30 rounded-lg py-[0.5rem] text-gray-800 font-bold'
						} hover:text-primary transition-all duration-300 ease-in-out mb-[1rem] flex w-[10rem]`}
					>
						<Link to={'/'} className=' flex items-center ml-[1rem]'>
							<FaHome
								className={`${
									location.pathname === '/' && 'text-primary'
								} mr-[1rem]`}
							/>
							Home
						</Link>
					</li>
					<li
						className={`hover:text-primary transition-all duration-300 ease-in-out mb-[1rem] flex w-[10rem]`}
					>
						<Link to={''} className=' flex items-center ml-[1rem]'>
							<BiSolidNotification className=' mr-[1rem]' />
							Message
						</Link>
					</li>
					<li
						className={`hover:text-primary transition-all duration-300 ease-in-out mb-[1rem] flex w-[10rem] text-gray-800`}
					>
						SHARE
					</li>
					<li
						className={`hover:text-primary transition-all duration-300 ease-in-out mb-[1rem] flex w-[10rem]`}
					>
						<Link to={''} className=' flex items-center ml-[1rem]'>
							<FaChess className=' mr-[1rem]' />
							Ranking
						</Link>
					</li>
					<li
						className={`hover:text-primary transition-all duration-300 ease-in-out mb-[1rem] flex w-[10rem]`}
					>
						<Link to={''} className=' flex items-center ml-[1rem]'>
							<GiCornerFlag className=' mr-[1rem]' />
							Challenge
						</Link>
					</li>
					<li
						className={`hover:text-primary transition-all duration-300 ease-in-out mb-[1rem] flex w-[10rem]`}
					>
						<Link to={''} className=' flex items-center ml-[1rem]'>
							<GiPartyPopper className=' mr-[1rem]' />
							Party
						</Link>
					</li>
					<li
						className={`hover:text-primary transition-all duration-300 ease-in-out mb-[1rem] flex w-[10rem]`}
					>
						<Link to={''} className=' flex items-center ml-[1rem]'>
							<BsLink45Deg className=' mr-[1rem]' />
							Connect
						</Link>
					</li>
					<li
						className={`hover:text-primary transition-all duration-300 ease-in-out mb-[1rem] flex w-[10rem]`}
					>
						<Link to={''} className=' flex items-center ml-[1rem]'>
							<GiWalk className=' mr-[1rem]' />
							Parade
						</Link>
					</li>
					<li
						className={`hover:text-primary transition-all duration-300 ease-in-out mb-[1rem] flex w-[10rem]`}
					>
						<Link to={''} className=' flex items-center ml-[1rem]'>
							<HiUserGroup className=' mr-[1rem]' />
							Group
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Nav
