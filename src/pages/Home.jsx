import CardGrid from '../components/CardGrid'
import Selection from '../components/Selection'

const Home = () => {
	return (
		<div>
			<div className=' relative left-[14rem] w-[75vw] ml-[3rem] max-lg:left-[11rem] max-md:left-[3rem] max-[600px]:left-[1rem] max-xl:left-[11rem] max-md:w-[80vw] max-[360px]:w-[70vw] max-[360px]:left-[0rem]'>
				<Selection />
				<CardGrid />
			</div>
		</div>
	)
}

export default Home
