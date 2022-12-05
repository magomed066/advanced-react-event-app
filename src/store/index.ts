import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {},
	devTools: import.meta.env.MODE === 'production' ? false : true,
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
