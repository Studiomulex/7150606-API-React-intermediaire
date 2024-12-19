import { Router } from 'express'
const router = Router()
import getSurvey from '../controllers/survey'
import getFreelances from '../controllers/freelances'
import getFreelance from '../controllers/freelance'
import getResults from '../controllers/results'

router.get('/survey', function (req, res) {
    try {
        const surveyData = getSurvey()
        if (!surveyData) {
            res.status(404).json({ error: 'Survey not found.' })
        } else {
            res.json({ surveyData })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/freelance', function (req, res) {
    try {
        const { id } = req.query
        const freelanceData = getFreelance(id)
        if (!freelanceData) {
            res.status(404).json({ error: 'Freelance not found.' })
        } else {
            res.json({ freelanceData })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/results', function (req, res) {
    try {
        const { a1, a2, a3, a4, a5, a6 } = req.query
        const resultsData = getResults(a1, a2, a3, a4, a5, a6)
        if (!resultsData) {
            res.status(404).json({ error: 'Results not found.' })
        } else {
            res.json({ resultsData })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/freelances', function (req, res) {
    try {
        const freelancersList = getFreelances()
        res.json({ freelancersList })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/', function (req, res) {
    res.render('index', { title: 'API - React intermédiaire' })
})

export default router
