import styles from './MovieTrendList.module.scss'

import { moviesData } from '../../../assets/data'

import { MovieCard } from '../../movie-card/MovieCard'

export const MovieTrendList = () => {
	const trendingMovies = moviesData.filter((movie) => movie.isTrending)

	return (
		<div className={styles.trending_movies}>
			{trendingMovies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	)
}
