import { Link, useLocation } from 'react-router-dom'

import styles from './Sidebar.module.scss'

import moviesIcon from '../icons/icon-category-movie.svg'
import bookmarkIcon from '../icons/icon-nav-bookmark.svg'
import homeIcon from '../icons/icon-nav-home.svg'
import tvSeriesIcon from '../icons/icon-nav-tv-series.svg'

const navLinks = [
	{
		name: 'Home',
		icon: homeIcon,
		link: '/'
	},
	{
		name: 'Movies',
		icon: moviesIcon,
		link: '/movies'
	},
	{
		name: 'Bookmark',
		icon: bookmarkIcon,
		link: '/bookmark'
	},
	{
		name: 'Tv-Series',
		icon: tvSeriesIcon,
		link: '/tv-series'
	}
]

export const Sidebar = () => {
	const { pathname } = useLocation()
	return (
		<div className={styles.sidebar}>
			<div className={styles.menu}>
				<div className={styles.nav_links}>
					<h1 className={styles.heading}>UniMovies</h1>
					{navLinks.map((item) => (
						<Link key={item.name} to={item.link}>
							<div className={styles.link_info}>
								<img className={styles.img} src={item.icon} alt={item.name} />
								{item.name}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
