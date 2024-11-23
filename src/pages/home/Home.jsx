import Layout from '../../components/layout/Layout.jsx'
import styles from './Home.module.scss'

import { useEffect, useState } from 'react'
import { moviesData } from '../../assets/data.js'
import { MovieRecommendedList } from '../../components/movie-list/recommended-list/MovieRecommendedList.jsx'
import { MovieTrendList } from '../../components/movie-list/trending-list/MovieTrendList.jsx'
import { SearchBar } from '../../components/search-bar/SearchBar.jsx'
import { SearchResult } from '../../components/search-result/SearchResult.jsx'
import { searchMovies } from '../../services/movieSearch.service.js'

const Home = () => {
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
					<SearchResult filteredMovies={filteredMovies} />
				)}
			</div>
		</Layout>
	)
}

export default Home
