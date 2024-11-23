import { moviesData } from '../../../assets/data'

import { MovieCard } from '../../movie-card/MovieCard'
import { SwiperElement } from '../../swiper-element/SwiperElement'

import 'swiper/css'
import { SwiperSlide } from 'swiper/react'

export const MovieTrendList = () => {
	const trendingMovies = moviesData.filter((movie) => movie.isTrending)

	return (
		<SwiperElement>
			{trendingMovies.map((movie) => (
				<SwiperSlide key={movie.id}>
					<MovieCard movie={movie} />
				</SwiperSlide>
			))}
		</SwiperElement>
	)
}
