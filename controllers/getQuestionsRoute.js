const createError = require('http-errors');
const getQuestions = require('../services/getQuestions');

async function questionsController(req,res){
  /* GET Request for the questions in the quiz */
  
  const data = await getQuestions();
  if (!data || data.length === 0) {
    throw createError(404, 'Data was not found')
  }
  res.status(200).send(data);
}

module.exports = questionsController;