import freelancers from '../models/freelances'

function getFreelance(id) {
	return freelancers.find(freelancer => freelancer.id === id)
}

export default getFreelance
