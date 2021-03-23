const createError = require('http-errors');
const {getSample} = require('../services/getSampleData');

async function sampleController(req,res){
  /* GET Request for some data from frontend */
  const data = await getSample();
  if (!data) {
    throw createError(404, 'Data was not found')
  }
  res.status(200).send(data);
}

module.exports = sampleController;