import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { $CombinedState } from 'redux'
import { useAppSelector } from '../../hooks/redux'
import { privateRoutes, publicRoutes, RouteNames } from '../../routes'

const AppRouter = () => {
	const navigate = useNavigate()
	const isAuth = useAppSelector((state) => state.auth.isAuth)

	useEffect(() => {
		if (isAuth) {
			navigate(RouteNames.EVENT)
		} else {
			navigate(RouteNames.LOGIN)
		}
	}, [isAuth])

	return isAuth ? (
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
