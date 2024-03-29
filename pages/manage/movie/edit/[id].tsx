import MovieEdit from '../../../../app/components/screens/admin/movie/MovieEdit'
import { NextPageAuth } from '../../../../app/shared/types/auth.types'

const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isOnlyAdmin = true

export default MovieEditPage
