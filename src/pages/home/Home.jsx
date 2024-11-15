import Layout from '../../components/layout/Layout.jsx'
import styles from './Home.module.scss'

import { useState } from 'react'
import searchIcon from '../../components/icons/icon-search.svg'
import { MovieRecommendedList } from '../../components/movie-list/recommended-list/MovieRecommendedList.jsx'
import { MovieTrendList } from '../../components/movie-list/trending-list/MovieTrendList.jsx'

const Home = () => {
	const [search, setSearch] = useState('')

	const handleSearch = (e) => {
		setSearch(e.target.value)
	}

	return (
		<Layout>
			<div className={styles.input_bar}>
				<img src={searchIcon} className={styles.search_icon} alt='' />
				<input
					type='text'
					className={styles.input}
					value={search}
					onChange={handleSearch}
					placeholder='Search for movies or TV series'
				/>
			</div>
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
