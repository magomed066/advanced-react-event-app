import { Layout } from 'antd'
import { Routes } from 'react-router-dom'
import { AppRouter, Navbar } from './components'

function App() {
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
