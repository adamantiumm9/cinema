import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

import { FileService } from '../../../../services/file.service'
import { toastrError } from '../../../../utils/toastr-error'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)
	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => FileService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data[0].url)
			},
			onError: (error) => {
				toastrError(error, 'Upload file')
			},
		}
	)
	const uploadFile = useCallback(
		async (event: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)

			const files = event.target.files
			const formData = new FormData()

			if (!folder?.length) return
			else if (files) formData.append('file', files[0])

			await mutateAsync(formData)

			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[mutateAsync]
	)

	return useMemo(
		() => ({
			uploadFile,
			isLoading,
		}),
		[uploadFile, isLoading]
	)
}
