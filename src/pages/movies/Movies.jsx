import Layout from '../../components/layout/Layout'
import { SearchBar } from '../../components/search-bar/SearchBar'

import styles from './Movies.module.scss'

import { moviesData } from '../../assets/data'
import { MovieCard } from '../../components/movie-card/MovieCard'

const Movies = ({ handleSearch }) => {
	const movieCategory = moviesData.filter((item) => item.category === 'Movie')

	return (
		<Layout>
			<SearchBar handleSearch={handleSearch} />
			<div className={styles.movies_info}>
				<div className={styles.movies}>
					{movieCategory.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		</Layout>
	)
}

export default Movies
