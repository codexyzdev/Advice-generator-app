import { useEffect, useState } from "react"

export default function Advice() {
	const url = "https://api.adviceslip.com/advice"
	const [adviceData, setAdviceData] = useState({}) // State for advice data

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url)
				if (!response.ok) {
					throw new Error(`Error fetching advice: ${response.status}`)
				}
				const data = await response.json()
				setAdviceData(data.slip) // Update state with advice slip
			} catch (error) {
				console.error("Error:", error)
			}
		}

		fetchData()
	}, [])

	const getNewAdvice = async () => {
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error(`Error fetching advice: ${response.status}`)
			}
			const data = await response.json()
			return data.slip
		} catch (error) {
			console.error("Error:", error)
		}
	}

	return (
		<section className="relative px-6 py-11 text-center md:px-12">
			<h1 className="mb-5 text-NeonGreen">Advice # {adviceData.id}</h1>
			<p className="text-[28px] font-extrabold text-LightCyan">❝{adviceData.advice}❞</p>
			<picture className="mt-5 flex justify-center">
				<source media="(min-width: 500px)" srcSet="images/pattern-divider-desktop.svg" />
				<img src="/images/pattern-divider-mobile.svg" alt="pattern" />
			</picture>
			<button
				onClick={async () => {
					const newAdviceData = await getNewAdvice()
					setAdviceData(newAdviceData)
				}}
				className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-NeonGreen p-4 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-full before:bg-NeonGreen before:transition before:duration-300 before:content-[''] hover:before:blur-md"
			>
				<img src="/images/icon-dice.svg" alt="icon dice" />
			</button>
		</section>
	)
}
