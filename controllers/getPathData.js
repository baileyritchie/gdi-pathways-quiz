const createError = require('http-errors');
const getPathway = require('../services/getPathway');

async function pathwayController(req,res){
  /* GET Request for the pathway (career) the user selected */
  let pathname = req.params.pathname;
  const careerPath = await getPathway(pathname);
  if (!careerPath  || careerPath.length === 0) {
    throw createError(404, 'Data was not found')
  }
  res.status(200).send(careerPath);
}

module.exports = pathwayController;