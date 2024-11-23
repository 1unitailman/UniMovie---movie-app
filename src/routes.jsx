import { createBrowserRouter } from 'react-router-dom'

import MovieInfo from './components/movie-info/MovieInfo'
import Error from './pages/error/Error'
import Home from './pages/home/Home'
import Movies from './pages/movies/Movies'
import TvSeries from './pages/tv-series/TvSeries'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />
	},
	{
		path: '/movies',
		element: <Movies />,
		errorElement: <Error />
	},
	{
		path: '/tv-series',
		element: <TvSeries />,
		errorElement: <Error />
	},
	{
		path: '/movie-info/:id',
		element: <MovieInfo />,
		errorElement: <Error />
	}
])
