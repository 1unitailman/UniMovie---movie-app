import Layout from '../../components/layout/Layout'
import { SearchBar } from '../../components/search-bar/SearchBar'

import styles from './Movies.module.scss'

import { useEffect, useState } from 'react'
import { moviesData } from '../../assets/data'
import { MovieCard } from '../../components/movie-card/MovieCard'
import { SearchResult } from '../../components/search-result/SearchResult'
import { searchMovies } from '../../services/movieSearch.service'

const Movies = () => {
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

	const movieCategory = moviesData.filter((item) => item.category === 'Movie')

	return (
		<Layout>
			<SearchBar handleSearch={handleSearch} />
			<div className={styles.movies_info}>
				{search === '' ? (
					<>
						<div className={styles.movies}>
							{movieCategory.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
						</div>
					</>
				) : (
					<SearchResult filteredMovies={filteredMovies} />
				)}
			</div>
		</Layout>
	)
}

export default Movies
