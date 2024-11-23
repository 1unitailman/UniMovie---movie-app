import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

export const SwiperElement = ({ children }) => {
	return (
		<Swiper spaceBetween={10} slidesPerView={4} loop={true}>
			{children}
		</Swiper>
	)
}
