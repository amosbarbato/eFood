import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../services/store'
import Cart from '../cart'

import * as S from './styles'
import { closeSidebar } from '../../services/store/reducers/sidebar'
import Form from '../form'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { component } = useSelector((state: RootReducer) => state.sidebar)

  const switchComponents = () => {
    switch (component) {
      case 'cart':
        return <Cart />
      case 'form':
        return <Form />
      default:
        return null
    }
  }

  const toClose = () => {
    dispatch(closeSidebar())
  }

  return (
    <S.SidebarModal>
      <S.Overlay onClick={toClose} />
      <S.SidebarContent>{switchComponents()}</S.SidebarContent>
    </S.SidebarModal>
  )
}

export default Sidebar