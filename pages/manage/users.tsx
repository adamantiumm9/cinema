import UserList from '../../app/components/screens/admin/users/UserList'
import { NextPageAuth } from '../../app/shared/types/auth.types'

const UsersListPage: NextPageAuth = () => {
	return <UserList />
}

UsersListPage.isOnlyAdmin = true

export default UsersListPage
