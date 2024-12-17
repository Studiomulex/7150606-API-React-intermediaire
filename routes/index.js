import { Router } from 'express'
const router = Router()
import getSurvey from '../controllers/survey'
import getFreelances from '../controllers/freelances'
import getFreelance from '../controllers/freelance'
import getResults from '../controllers/results'

router.get('/survey', function (req, res) {
	const surveyData = getSurvey()
		if (!surveyData) {
			res.status(400).send('Not found.')
		} else {
			res.send({ surveyData })
		}
})

router.get('/freelance', function (req, res) {
	const { id } = req.query
	const freelanceData = getFreelance(id)
		if (!freelanceData) {
			res.status(400).send('Not found.')
		} else {
			res.send({ freelanceData })
		}
})

router.get('/results', function (req, res) {
	const { a1, a2, a3, a4, a5, a6 } = req.query
	const resultsData = getResults(a1, a2, a3, a4, a5, a6)
	if (!resultsData) {
		res.status(400).send('Not found.')
	} else {
	res.send({ resultsData })
	}
})

router.get('/freelances', function (req, res) {
	const freelancersList = getFreelances()
	res.send({ freelancersList })
})


router.get('/', function (req, res) {
	res.render('index', { title: 'API - React intermédiaire' })
})

export default router
