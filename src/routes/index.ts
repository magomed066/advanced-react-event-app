import React, { JSXElementConstructor, ReactNode } from 'react'
import { Event, Login } from '../pages'

export interface IRoute {
	path: string
	Component: () => JSX.Element
}

export enum RouteNames {
	LOGIN = '/login',
	EVENT = '/',
}

export const publicRoutes: IRoute[] = [
	{ path: RouteNames.LOGIN, Component: Login },
]

export const privateRoutes: IRoute[] = [
	{ path: RouteNames.EVENT, Component: Event },
]
