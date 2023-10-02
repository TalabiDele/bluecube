import CardGrid from '../components/CardGrid'
import Selection from '../components/Selection'

const Home = () => {
	return (
		<div>
			<div className=' relative left-[14rem] w-[75vw] ml-[3rem] max-lg:left-[11rem] max-md:left-[2rem] max-xl:left-[11rem] max-md:w-[80vw] max-sm:left-[0rem] max-sm:w-[75vw]'>
				<Selection />
				<CardGrid />
			</div>
		</div>
	)
}

export default Home
