import { moviesData } from '../../../assets/data'

import styles from './MovieRecommendedList.module.scss'

export const MovieRecommendedList = () => {
	const recommendedMovies = moviesData.filter((movie) => movie.isTrending === false)

	return (
		<div className={styles.recommended_movies}>
			{recommendedMovies.map((movie) => (
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
