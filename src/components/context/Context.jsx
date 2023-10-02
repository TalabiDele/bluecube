/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'

const Context = createContext()

export const Provider = ({ children }) => {
	const [images, setImages] = useState()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		const handleApi = async () => {
			const res = await fetch(
				`https://api.unsplash.com/photos/?client_id=hAs7lm4ktEI9qj_7s9fapsR-GbyD1sY4aobwrdjpP6k`
			)

			const data = await res.json()

			console.log(data)

			setImages(data)
		}
		setLoading(false)

		handleApi()
	}, [loading])

	const handleSearch = async ({ search }) => {
		setLoading(true)

		const res = await fetch(
			`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=hAs7lm4ktEI9qj_7s9fapsR-GbyD1sY4aobwrdjpP6k`
		)

		const data = await res.json()

		setImages(data?.results)

		setLoading(false)
	}

	return (
		<Context.Provider
			value={{
				images,
				setImages,
				loading,
				setLoading,
				handleSearch,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Context
