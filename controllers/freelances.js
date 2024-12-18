import { map } from '../models/freelances'

function getFreelances() {
	return map(({ id, name, job, picture }) => ({
		id,
		name, 
		job, 
		picture
	}))
}

export default getFreelances
