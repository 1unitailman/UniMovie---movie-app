import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../layout/Layout'

import { moviesData } from '../../assets/data'

import styles from './MovieInfo.module.scss'

import arrowLeft from '../../components/icons/left-arrow.svg'

const MovieInfo = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const currentMovie = moviesData.find((movie) => movie.id === id)
	const imagePath = currentMovie.thumbnail.regular.large?.slice(1)

	return (
		<Layout>
			<div className={styles.arrowLeft}>
					<img
						src={arrowLeft}
						className={styles.arrow}
						onClick={() => navigate(-1)}
						alt=''
					/>
				</div>
			<div className={styles.info}>
				<div className={styles.info_img}>
					<img src={imagePath} className={styles.img} />
				</div>
				<div className={styles.info_main}>
					<h1 className={styles.info_title}>{currentMovie.title}</h1>
					<p className={styles.info_year}>{currentMovie.year}</p>
					<p>Category: {currentMovie.category}</p>
					<p>Rating: {currentMovie.rating}</p>
					<p>{currentMovie.isTrending ? 'IS TRENDING!' : null}</p>
					<p className={styles.info_description}> {currentMovie.description}</p>
				</div>
			</div>
		</Layout>
	)
}

export default MovieInfo
