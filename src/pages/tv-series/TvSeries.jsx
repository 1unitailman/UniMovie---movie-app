import Layout from '../../components/layout/Layout'
import { SearchBar } from '../../components/search-bar/SearchBar'

import styles from './TvSeries.module.scss'

import { moviesData } from '../../assets/data'

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
						<div key={movie.id} className={styles.movie_card}>
							<img
								src={movie.thumbnail.regular.large}
								className={styles.movie_card_img}
								alt={movie.title}
							/>
							<h2>{movie.title}</h2>
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default TvSeries
