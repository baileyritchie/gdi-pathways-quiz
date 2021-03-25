/* service that gets questions from airtable */
const Airtable = require('airtable');

const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

async function getQuestions() {
  let result = [];
  let data = await airtable.table('Questions').select({view:'model'}).all();
  data.forEach((record) => {
    let {id,category,content,a1ID,a2ID,a3ID,a4ID,a5ID,a1Content,a2Content,a3Content,a4Content,a5Content,a1Points,a2Points,a3Points,a4Points,a5Points} = record.fields;
    console.log(record);
    let a1 = new Answer(a1ID[0],a1Content[0],a1Points[0]);
    let a2 = new Answer(a2ID[0],a2Content[0],a2Points[0]);
    let a3 = new Answer(a3ID[0],a3Content[0],a3Points[0]);
    let a4 = new Answer(a4ID[0],a4Content[0],a4Points[0]);
    let a5 = new Answer(a5ID[0],a5Content[0],a5Points[0]);
    result.push(new Question(category,id,content,[a1,a2,a3,a4,a5]));
  });
  return result;
}

class Question{
  constructor(category,id,content,answerArr) {
    this.category = category;
    this.id = id;
    this.content = content;
    this.answers = answerArr;
  }

}

class Answer {
  constructor(id,content,points) {
    this.points = points;
    this.content = content;
    this.id = id;
  }
}

module.exports = getQuestions;