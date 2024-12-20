import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.scss'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'

import Home from './pages/home/Home.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}>
			<Home />
		</RouterProvider>
	</StrictMode>
)
