import Card from './Card'
import { useContext } from 'react'
import Context from './context/Context'
import { motion } from 'framer-motion'

const CardGrid = () => {
	const { images } = useContext(Context)

	return (
		<div className=' mt-[2rem]'>
			<div className=' grid grid-cols-5 max-lg:grid-cols-3 max-xl:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center'>
				{images?.map((e) => (
					<motion.div
						initial={{ opacity: 0, scale: 0, x: 50 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						className=''
						key={e.id}
					>
						<Card
							image={e.urls.regular}
							// age={e.age}
							location={e.user.location}
							name={e.user.username}
						/>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default CardGrid
