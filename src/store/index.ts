import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices'

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	devTools: import.meta.env.MODE === 'production' ? false : true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
