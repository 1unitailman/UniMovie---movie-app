import Layout from '../../components/layout/Layout'
import { SearchBar } from '../../components/search-bar/SearchBar'

import styles from './TvSeries.module.scss'

import { useEffect, useState } from 'react'
import { moviesData } from '../../assets/data'
import { MovieCard } from '../../components/movie-card/MovieCard'
import { SearchResult } from '../../components/search-result/SearchResult'
import { searchMovies } from '../../services/movieSearch.service'

const TvSeries = () => {
	const [search, setSearch] = useState('')
	const [filteredMovies, setFilteredMovies] = useState([])

	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase()
		setSearch(query)
	}

	useEffect(() => {
		const newFilteredMovies = searchMovies(moviesData, search)
		setFilteredMovies(newFilteredMovies)
	}, [search])

	const tvSeriesCategory = moviesData.filter(
		(item) => item.category === 'TV Series'
	)

	return (
		<Layout>
			<SearchBar handleSearch={handleSearch} />
			<div className={styles.tv_series_info}>
				{search === '' ? (
					<div className={styles.tv_series}>
						{tvSeriesCategory.map((movie) => (
							<MovieCard key={movie.id} movie={movie} />
						))}
					</div>
				) : (
					<SearchResult filteredMovies={filteredMovies} />
				)}
			</div>
		</Layout>
	)
}

export default TvSeries
