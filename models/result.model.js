const sql = require('./db');

//constructor

// This constructs the object Result

const Result = function(Result) {
    this._student_candidate = Result._student_candidate;
    this._entrance_exam = Result._entrance_exam;
    this.mark = Result.mark;
};


// Note: In this module we are just going to get informations from the students


//1. Get student Result by Id

Reault.findById = (resultId, result) => {
    sql.query(`SELECT * FROM result WHERE id = ${resultId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found result: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Result with the id
        result({ kind: "not_found" }, null);
    });
};


//2. Get all student Result

Result.getAll = (result) => {
    sql.query("SELECT * FROM result", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("result: ", res);
        result(null, res);
    });
};

//3. Get all student Result count

Result.getResultBySession = (session, result) => {
    sql.query("SELECT * FROM result WHERE _entrance_exam = ?", session, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("results: ", res);
        result(null, res);
    });
};



module.exports = Result;