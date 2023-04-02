import sql from './db';

//constructor

// This constructs the object candidate

const Candidate = function(candidate) {};


// Note: In this module we are just going to get informations from the students


//1. Get student candidate by Id

Candidate.findById = (candidateId, result) => {
    sql.query(`SELECT * FROM student_candidate WHERE id = ${candidateId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found candidates: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};


//2. Get all student candidates

Candidate.getAll = (result) => {
    sql.query("SELECT * FROM student_candidate", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("candidates: ", res);
        result(null, res);
    });
};

//3. Get all student candidates count

Candidate.getCount = (session, result) => {
    sql.query("SELECT COUNT(id) FROM student_candidate WHERE _entrance_exam=?", session, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("candidates count: ", res);
        result(null, res);
    });
};



export default Candidate;