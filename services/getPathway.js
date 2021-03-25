const Airtable = require('airtable');

const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

async function getPathway(pathname) {
  let result = [];
  let data = await airtable.table(pathname).select({view:'model'}).all();
  data.forEach((record) => {
    let {fields} = record;
    let {Name} = fields;
    if (fields.links) {
      let {links} = fields;
      result.push({Name, links });
    } else  {
      let {text} = fields;
      result.push({Name,text});
    }
    
  })
  return result;
}



module.exports = getPathway;

