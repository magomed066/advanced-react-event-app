import { bindActionCreators } from 'redux'
import { allActionCreators } from '../store/slices/action-creators'
import { useAppDispatch } from './redux'

export const useActions = () => {
	const dispatch = useAppDispatch()

	return bindActionCreators(allActionCreators, dispatch)
}
