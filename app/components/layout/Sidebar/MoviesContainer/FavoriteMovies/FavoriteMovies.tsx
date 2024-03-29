import { FC } from 'react'

import { useAuth } from '../../../../../hooks/useAuth'
import { useFavorite } from '../../../../screens/favorite/useFavorite'
import SkeletonLoader from '../../../../ui/SkeletonLoader'
import MovieList from '../MovieList'

import NotAuthFavorites from './NotAuthFavorites'

const FavoriteMovies: FC = () => {
	const { isLoading, favoritesMovies } = useFavorite()
	const { user } = useAuth()

	if (!user) return <NotAuthFavorites />

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : favoritesMovies?.length ? (
		<MovieList
			title="Favorites"
			link="/favorites"
			movies={favoritesMovies?.slice(0, 3) || []}
		/>
	) : (
		<div>your don't have favorites</div>
	)
}

export default FavoriteMovies
