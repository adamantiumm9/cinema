import axios from '../api/interceptors'
import { IProfileInput } from '../components/screens/profile/profile.interface'
import { getUsersUrl } from '../config/api.config'
import { IUser } from '../shared/types/user.types'

export const UserService = {
	async getAll(searchTerm?: string) {
		return await axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getProfile() {
		return axios.get<IUser>(getUsersUrl('/profile'))
	},
	async updateProfile(data: IProfileInput) {
		return axios.put<string>(getUsersUrl(`/profile`), data)
	},
	async getById(_id: string) {
		return axios.get<IUser>(getUsersUrl(`/${_id}`))
	},
	async update(_id: string, data: IProfileInput) {
		return axios.put<string>(getUsersUrl(`/${_id}`), data)
	},

	async create() {
		return axios.post<string>(getUsersUrl('/'))
	},

	async delete(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
}
