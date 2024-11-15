import Layout from '../../components/layout/Layout.jsx'
import styles from './Home.module.scss'

import { useState } from 'react'
import { MovieRecommendedList } from '../../components/movie-list/recommended-list/MovieRecommendedList.jsx'
import { MovieTrendList } from '../../components/movie-list/trending-list/MovieTrendList.jsx'
import { SearchBar } from '../../components/search-bar/SearchBar.jsx'

const Home = () => {
	const [search, setSearch] = useState('')

	const handleSearch = (e) => {
		setSearch(e.target.value)
	}

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
					<div>1111</div>
				)}
			</div>
		</Layout>
	)
}

export default Home
