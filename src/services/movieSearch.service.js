export const searchMovies = (movies, query) => {
	const lowerCaseQuery = query.toLowerCase()
	return movies.filter(
		(movie) =>
			movie.title.toLowerCase().includes(lowerCaseQuery) ||
			movie.category.toLowerCase().includes(lowerCaseQuery)
	)
}
