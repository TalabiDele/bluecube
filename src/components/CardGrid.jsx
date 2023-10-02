import Card from './Card'
import { useContext } from 'react'
import Context from './context/Context'

const CardGrid = () => {
	const { images } = useContext(Context)

	return (
		<div className=' mt-[2rem]'>
			<div className=' grid grid-cols-5'>
				{images?.map((e) => (
					<div className='' key={e.id}>
						<Card
							image={e.urls.full}
							// age={e.age}
							location={e.user.location}
							name={e.user.username}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default CardGrid
