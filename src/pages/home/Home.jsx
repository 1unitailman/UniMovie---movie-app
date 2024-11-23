import Layout from '../../components/layout/Layout.jsx'
import styles from './Home.module.scss'

import { useEffect, useState } from 'react'
import { moviesData } from '../../assets/data.js'
import { MovieCard } from '../../components/movie-card/MovieCard.jsx'
import { MovieRecommendedList } from '../../components/movie-list/recommended-list/MovieRecommendedList.jsx'
import { MovieTrendList } from '../../components/movie-list/trending-list/MovieTrendList.jsx'
import { SearchBar } from '../../components/search-bar/SearchBar.jsx'

const Home = () => {
	const [search, setSearch] = useState('')
	const [filteredMovies, setFilteredMovies] = useState([])

	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase()
		setSearch(query)
	}

	useEffect(() => {
		const newFilteredMovies = moviesData.filter(
			(movie) =>
				movie.title.toLowerCase().includes(search) ||
				movie.category.toLowerCase().includes(search)
		)

		setFilteredMovies(newFilteredMovies)
	}, [search])

	return (
		<Layout>
			<SearchBar handleSearch={handleSearch} />
			<div className={styles.home_info}>
				{search === '' ? (
					<>
						<div className={styles.trending}>
							<h2 className={styles.trending_text}>Trending</h2>
							<MovieTrendList />
						</div>
						<div className={styles.trending}>
							<h2 className={styles.recommended_text}>Recommended For You</h2>
							<MovieRecommendedList />
						</div>
					</>
				) : (
					<div className={styles.search_result}>
						<h2 className={styles.search_text}>Search Result</h2>
						<div className={styles.movie_list}>
							{filteredMovies.length > 0 ? (
								filteredMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)
							) : (
								<p>No movies found for "{search}"</p>
							)}
						</div>
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Home
