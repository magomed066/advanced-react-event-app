import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, Button, Card, Form, Input } from 'antd'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/useActions'
import { IUser } from '../../models/IUser'
import { login } from '../../store/slices/auth/auth'
import { rules } from '../../utils/rules'

const LoginForm = () => {
	// const dispatch = useAppDispatch()
	const { error, isLoading } = useAppSelector((store) => store.auth)
	const { login } = useActions()

	const handleSubmit = (data: IUser) => {
		login(data)
	}

	return (
		<Card style={{ width: 400 }}>
			<Form onFinish={handleSubmit} layout="vertical">
				{error ? (
					<Alert
						closable={true}
						message={error}
						type="error"
						style={{ marginBottom: '10px' }}
					/>
				) : null}
				<Form.Item
					label="User name"
					name="userName"
					rules={[rules.required('Please input your username!')]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[rules.required('Please input your password!')]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
					/>
				</Form.Item>
				<Form.Item>
					<Button
						style={{ width: '100%' }}
						type="primary"
						htmlType="submit"
						className="login-form-button"
						loading={isLoading}
					>
						Log in
					</Button>
				</Form.Item>
			</Form>
		</Card>
	)
}

export default LoginForm
