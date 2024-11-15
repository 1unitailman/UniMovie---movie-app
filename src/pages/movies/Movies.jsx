import Layout from '../../components/layout/Layout'
import { SearchBar } from '../../components/search-bar/SearchBar'

import styles from './Movies.module.scss'

import { moviesData } from '../../assets/data'

const Movies = ({ handleSearch }) => {
	const movieCategory = moviesData.filter((item) => item.category === 'Movie')

	return (
		<Layout>
			<SearchBar handleSearch={handleSearch} />
			<div className={styles.movies_info}>
				<div className={styles.movies}>
					{movieCategory.map((movie) => (
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

export default Movies
