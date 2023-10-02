/* eslint-disable react/prop-types */
const Buttons = ({ event }) => {
	return (
		<div>
			<div className=' '>
				<button
					className=' bg-primary text-white rounded-lg px-[3rem] py-[0.5rem] absolute right-[1rem] top-2'
					onClick={event}
				>
					Search
				</button>
			</div>
		</div>
	)
}

export default Buttons
