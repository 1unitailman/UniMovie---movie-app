import { moviesData } from '../../../assets/data'
import { MovieCard } from '../../movie-card/MovieCard'

import styles from './MovieRecommendedList.module.scss'

export const MovieRecommendedList = () => {
	const recommendedMovies = moviesData.filter(
		(movie) => movie.isTrending === false
	)

	return (
		<div className={styles.recommended_movies}>
			{recommendedMovies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	)
}
