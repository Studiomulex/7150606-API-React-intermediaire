import { find } from '../models/freelances'

function getFreelance(id) {
	return find((freelancer => freelancer.id === id))
}

export default getFreelance
