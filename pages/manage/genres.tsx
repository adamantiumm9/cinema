import GenreList from '../../app/components/screens/admin/genres/GenreList'
import { NextPageAuth } from '../../app/shared/types/auth.types'

const GenreListPage: NextPageAuth = () => {
	return <GenreList />
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage
