import freelances from '../models/freelances'

function getFreelances() {
	return freelances.map(({ id, name, job, picture }) => ({
		id,
		name, 
		job, 
		picture
	}))
}

export default getFreelances
