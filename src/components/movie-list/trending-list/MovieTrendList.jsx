import { moviesData } from '../../../assets/data'

import styles from './MovieTrend.module.scss'

export const MovieTrendList = () => {
	const trendingMovies = moviesData.filter((movie) => movie.isTrending)

	return (
		<div className={styles.trending_movies}>
			{trendingMovies.map((movie) => (
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
	)
}
