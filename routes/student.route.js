module.exports = (app1) => {

    const candidate = require("../controllers/student_candidate.controller").findAll;
    // Retrieve all Customers
    app1.get('/candidate', candidate.findAll);



}