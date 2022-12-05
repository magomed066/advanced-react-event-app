import { IUser } from './../../../models/IUser'
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthState } from './types'
import axios from 'axios'

const initialState: AuthState = {
	isAuth: false,
	error: '',
	isLoading: false,
	user: {} as IUser,
}

export const setAuth = createAction<boolean>('auth/setAuth')
export const setUser = createAction<IUser>('auth/setUser')
export const setLoading = createAction<boolean>('auth/setLoading')
export const setError = createAction<string>('auth/setError')

export const login = createAsyncThunk(
	'auth/login',
	async (body: IUser, thunkAPI) => {
		try {
			thunkAPI.dispatch(setLoading(true))
			setTimeout(async () => {
				const data = await axios.get<IUser[]>('./users.json')
				const mockUser = data.data.find(
					(u) => u.userName === body.userName && u.password === body.password,
				)

				if (mockUser) {
					localStorage.setItem('auth', 'true')
					localStorage.setItem('userName', mockUser.userName)

					thunkAPI.dispatch(setAuth(true))
					thunkAPI.dispatch(setUser(mockUser))
				} else {
					thunkAPI.dispatch(setError('Not valid user name or password!'))
				}

				thunkAPI.dispatch(setLoading(false))
			}, 2000)
		} catch (error) {
			thunkAPI.dispatch(setError('Something went wrong'))
		}
	},
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		localStorage.removeItem('auth')
		localStorage.removeItem('userName')

		thunkAPI.dispatch(setUser({} as IUser))
		thunkAPI.dispatch(setAuth(false))
	} catch (error) {}
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(setAuth, (state, action) => {
				state.isAuth = action.payload
				state.isLoading = false
			})
			.addCase(setUser, (state, action) => {
				state.user = action.payload
			})
			.addCase(setLoading, (state, action) => {
				state.isLoading = action.payload
			})
			.addCase(setError, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			}),
})

export const authActionCreators = {
	login,
	logout,
	setAuth,
	setUser,
	setError,
	setLoading,
}

export default authSlice.reducer
