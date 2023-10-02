import CardGrid from '../components/CardGrid'
import Selection from '../components/Selection'

const Home = () => {
	return (
		<div>
			<div className=' relative left-[14rem] w-[75vw] ml-[3rem]'>
				<Selection />
				<CardGrid />
			</div>
		</div>
	)
}

export default Home
