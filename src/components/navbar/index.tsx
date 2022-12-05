import { FC } from 'react'
import { Layout, Menu, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../routes'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/useActions'

const Navbar: FC = () => {
	const navigate = useNavigate()
	const { logout } = useActions()
	const {
		isAuth,
		user: { userName },
	} = useAppSelector((state) => state.auth)
	const handleClick = () => navigate(RouteNames.LOGIN)

	return (
		<Layout.Header>
			<Row justify="end">
				{isAuth ? (
					<>
						<div key={2} style={{ color: 'white', fontWeight: 'bold' }}>
							{userName}
						</div>
						<Menu theme="dark" mode="horizontal" selectable={false}>
							<Menu.Item onClick={() => logout()} key={1}>
								Log out
							</Menu.Item>
						</Menu>
					</>
				) : null}
			</Row>
		</Layout.Header>
	)
}

export default Navbar
