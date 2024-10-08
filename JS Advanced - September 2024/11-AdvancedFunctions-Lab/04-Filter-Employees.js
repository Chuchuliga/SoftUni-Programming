function filterEmployees(data, criteria) {
  data = JSON.parse(data);
  criteria = criteria.split("-");
  let i = 0;

  for (const personInfo of data) {
    if (personInfo[criteria[0]] === criteria[1]) {
      console.log(
        `${i}. ${personInfo.first_name} ${personInfo.last_name} - ${personInfo.email}`
      );
      i++;
    }
  }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female");
// 0. Ardine Bassam - abassam0@cnn.com
// 1. Kizzee Jost - kjost1@forbes.com