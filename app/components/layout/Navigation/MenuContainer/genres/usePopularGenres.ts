import { useQuery } from 'react-query'

import { getGenreUrl } from '../../../../../config/url.config'
import { GenreService } from '../../../../../services/genre.service'
import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) => {
				return data
					.filter((genre) => genre.icon)
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 5)
			},
		}
	)
	return queryData
}
