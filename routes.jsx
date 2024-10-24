import { createBrowserRouter } from 'react-router-dom'

import Bookmark from './src/pages/bookmark/Bookmark.jsx'
import Error from './src/pages/error/Error.jsx'
import Home from './src/pages/home/Home.jsx'
import Movies from './src/pages/movies/Movies.jsx'
import TvSeries from './src/pages/tv-series/TvSeries.jsx'

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
		path: '/bookmark',
		element: <Bookmark />,
		errorElement: <Error />
	},
	{
		path: '/tv-series',
		element: <TvSeries />,
		errorElement: <Error />
	}
])
