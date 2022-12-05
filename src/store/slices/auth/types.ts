export interface AuthState {
	isAuth: boolean
}

export enum AuthActionsEnum {
	SET_AUTH = 'SET_AUTH',
}

// interface SetAuthAction {
// 	auth: boolean
// }

interface SetUser {
	type: AuthActionsEnum.SET_AUTH
	payload: boolean
}

interface SetLoading {
	type: AuthActionsEnum.SET_AUTH
	payload: boolean
}

// export type AuthAction = SetAuthAction
