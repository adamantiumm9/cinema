import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useAuth } from '../../../../hooks/useAuth'
import { RatingService } from '../../../../services/rating.service'
import { toastrError } from '../../../../utils/toastr-error'

export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)
	const { user } = useAuth()

	const { refetch } = useQuery(
		['your movie rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess: ({ data }) => {
				setRating(data)
			},
			onError: (error) => {
				toastrError(error, 'Get rating')
			},
			enabled: !!movieId && !!user,
		}
	)

	const { mutateAsync } = useMutation(
		'',
		({ value }: { value: number }) => RatingService.setRating(movieId, value),
		{
			onError: (error) => {
				toastrError(error, 'Rate movie')
			},
			onSuccess: () => {
				toastr.success('Rate movie', 'You have successful rated!')

				setIsSended(true)
				refetch()

				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await mutateAsync({ value: nextValue })
	}

	return { handleClick, isSended, rating }
}
