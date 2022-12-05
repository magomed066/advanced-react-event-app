import { FC } from 'react'
import { Layout, Menu, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../routes'
import { useAppSelector } from '../../hooks/redux'

const Navbar: FC = () => {
	const navigate = useNavigate()
	const isAuth = useAppSelector((state) => state.auth.isAuth)
	const handleClick = () => navigate(RouteNames.LOGIN)

	return (
		<Layout.Header>
			<Row justify="end">
				{isAuth ? (
					<>
						<div key={2} style={{ color: 'white', fontWeight: 'bold' }}>
							Magomed M
						</div>
						<Menu theme="dark" mode="horizontal" selectable={false}>
							<Menu.Item key={1}>Log out</Menu.Item>
						</Menu>
					</>
				) : (
					<Menu theme="dark" mode="horizontal" selectable={false}>
						<Menu.Item onClick={handleClick} key={10}>
							Login
						</Menu.Item>
					</Menu>
				)}
			</Row>
		</Layout.Header>
	)
}

export default Navbar
