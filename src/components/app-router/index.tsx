import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../../routes'

const AppRouter = () => {
	const navigate = useNavigate()
	const auth = true

	useEffect(() => {
		if (auth) {
			navigate(RouteNames.EVENT)
		} else {
			navigate(RouteNames.LOGIN)
		}
	}, [auth])

	return auth ? (
		<Routes>
			{privateRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
		</Routes>
	)
}

export default AppRouter
