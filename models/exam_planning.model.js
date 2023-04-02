const sql = require('./db');

//constructor

const Exam_planning = function(Exam_planning) {
    this.planing_date = Exam_planning.planing_date;
    this._branch = Exam_planning._branch;
    this._entrance_exam_subject = Exam_planning._entrance_exam_subject
    this._entrance_exam = Exam_planning._entrance_exam;

};

//1.Insert an Exam_planning

Entrance_exam_subject.create = (newEntrance_exam_subject, result) => {
    sql.query("INSERT INTO exam_planning SET ?", Exam_planning, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }

        console.log("Exam_planning :", { id: res.insertId, ...newExam_planning });
        result(null, { id: res.insertId, ...newExam_planning });
    });
};

//2. Find Exam_planning  by id

Exam_planning.findById = (Exam_planningId, result) => {
    sql.query(`SELECT * FROM exam_planning WHERE id = ${Exam_planning }`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found Exam_planning : ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};


//3. Get all Exam_planning
Exam_planning.getAll = (result) => {
    sql.query("SELECT * FROM exam_planning", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Exam_planning : ", res);
        result(null, res);
    });
};


//4. Update an Exam_planning

Exam_planning.updateById = (id, Exam_planning, result) => {
    sql.query(
        "UPDATE exam_planning SET planning_date = ?, _branch = ? , _entrance_exam_subject =? , _entrance_exam = ? WHERE id = ?", [Exam_planning.planing_date, Exam_planning._branch, Exam_planning._entrance_exam_subject, Exam_planning._entrance_examid],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Entrance_exam with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated Exam_planning : ", { id: id, ...Exam_planning });
            result(null, { id: id, ...Exam_planning });
        }
    );
};


//5. Remove an Exam_planning

Exam_planning.remove = (id, result) => {
    sql.query("DELETE FROM exam_planning WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Exam_planning with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted Exam_planning  with id: ", id);
        result(null, res);
    });
};


//6. Remove all Exam_planning
Entrance_exam_subject.removeAll = (result) => {
    sql.query("DELETE FROM exam_planning", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} Exam_planning `);
        result(null, res);
    });
};

module.exports = Exam_planning;