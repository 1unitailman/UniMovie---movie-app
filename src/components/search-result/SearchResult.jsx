import { MovieCard } from '../movie-card/MovieCard'
import styles from './SearchResult.module.scss'

export const SearchResult = ({ search, filteredMovies }) => {
	return (
		<div className={styles.search_result}>
			<h2 className={styles.search_text}>Search Result</h2>
			<div className={styles.movie_list}>
				{filteredMovies.length > 0 ? (
					filteredMovies.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))
				) : (
					<p>No movies found for "{search}"</p>
				)}
			</div>
		</div>
	)
}


