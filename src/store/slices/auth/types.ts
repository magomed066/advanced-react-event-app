import { IUser } from '../../../models/IUser'

export interface AuthState {
	isAuth: boolean
	user: IUser
	isLoading: boolean
	error: string
}

export enum AuthActionsEnum {
	SET_AUTH = 'SET_AUTH',
	SET_ERROR = 'SET_ERROR',
	SET_USER = 'SET_USER',
	STE_IS_LOADING = 'STE_IS_LOADING',
}

interface SetUser {
	type: AuthActionsEnum.SET_AUTH
	payload: boolean
}

interface SetLoading {
	type: AuthActionsEnum.SET_AUTH
	payload: boolean
}

// export type AuthAction = SetAuthAction
