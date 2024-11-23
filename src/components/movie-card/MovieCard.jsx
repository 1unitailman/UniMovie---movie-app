import { useNavigate } from 'react-router-dom'
import styles from '../../components/movie-list/trending-list/MovieTrendList.module.scss'

export function MovieCard({ movie }) {
	const navigate = useNavigate()

	const handleClick = () => navigate(`/movie-info/${movie.id}`)

	return (
		<div className={styles.movie_card} onClick={handleClick}>
			<div className={styles.image_container}>
				<img
					src={movie.thumbnail.regular.large}
					className={styles.movie_card_img}
					alt={movie.title}
				/>
				<div className={styles.overlay}>
					<div className={styles.overlay_info}>
						<p className={styles.year}>{movie.year}</p>
						<p className={styles.category}>{movie.category}</p>
						<p className={styles.rating}>Rating: {movie.rating}</p>
					</div>
					<h2 className={styles.title}>{movie.title}</h2>
				</div>
			</div>
		</div>
	)
}
