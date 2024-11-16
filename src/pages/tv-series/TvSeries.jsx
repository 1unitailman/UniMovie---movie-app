import Layout from '../../components/layout/Layout'
import { SearchBar } from '../../components/search-bar/SearchBar'

import styles from './TvSeries.module.scss'

import { moviesData } from '../../assets/data'
import { MovieCard } from '../../components/movie-card/MovieCard'

const TvSeries = ({ handleSearch }) => {
	const tvSeriesCategory = moviesData.filter(
		(item) => item.category === 'TV Series'
	)

	return (
		<Layout>
			<SearchBar handleSearch={handleSearch} />
			<div className={styles.tv_series_info}>
				<div className={styles.tv_series}>
					{tvSeriesCategory.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		</Layout>
	)
}

export default TvSeries
