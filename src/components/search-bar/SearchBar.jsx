import styles from './SearchBar.module.scss'

import searchIcon from '../../components/icons/icon-search.svg'

export const SearchBar = ({ search, handleSearch }) => {
	return (
		<div className={styles.input_bar}>
			<img src={searchIcon} className={styles.search_icon} alt='' />
			<input
				type='text'
				className={styles.input}
				value={search}
				onChange={handleSearch}
				placeholder='Search for movies or TV series'
			/>
		</div>
	)
}
