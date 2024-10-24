import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from '../routes.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</StrictMode>
)