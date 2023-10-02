/* eslint-disable react/prop-types */
const Buttons = ({ event }) => {
	return (
		<div>
			<div className=' '>
				<button
					className=' bg-primary text-white rounded-md px-[2rem] py-[0.5rem] absolute right-[1rem] top-2 max-md:px-[1rem] '
					onClick={event}
				>
					Search
				</button>
			</div>
		</div>
	)
}

export default Buttons
