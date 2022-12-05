import { Layout } from 'antd'
import { useEffect } from 'react'
import { AppRouter, Navbar } from './components'
import { useActions } from './hooks/useActions'
import { IUser } from './models/IUser'

function App() {
	const { setUser, setAuth } = useActions()

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setUser({ userName: localStorage.getItem('userName') } as IUser)
			setAuth(true)
		}
	}, [])

	return (
		<Layout>
			<Navbar />
			<Layout.Content>
				<AppRouter key={'as'} />
			</Layout.Content>
		</Layout>
	)
}

export default App
