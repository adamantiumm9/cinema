import { FC } from 'react'

import Meta from '../../../../utils/meta/Meta'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import AdminHeader from '../../../ui/admin-table/AdminHeader'
import AdminTable from '../../../ui/admin-table/AdminTable/AdminTable'
import Heading from '../../../ui/heading/Heading'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useMovies()
	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				tableItems={data || []}
				headerItems={['Title', 'Genre', 'Rating']}
				removeHandle={deleteAsync}
			/>
		</Meta>
	)
}

export default MovieList
