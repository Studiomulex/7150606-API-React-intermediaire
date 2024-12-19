import surveyData from '../models/survey'

function getSurvey(questionNumber) {
	return surveyData[questionNumber];
}

export default getSurvey
