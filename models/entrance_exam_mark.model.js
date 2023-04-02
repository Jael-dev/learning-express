const sql = require('./db');

//constructor

const Entrance_exam_mark = function(Entrance_exam_mark) {
    this.marks = Entrance_exam_mark.marks;
    this._student_candidate = Entrance_exam_mark._student_candidate;
    this._entrance_exam_subject = Entrance_exam_mark._entrance_exam_subject
    this._entrance_exam = Entrance_exam_mark._entrance_exam;

};

//1.Insert an Entrance_exam_mark

Entrance_exam_mark.create = (newEntrance_exam_mark, result) => {
    sql.query("INSERT INTO entrance_exam_mark SET ?", Entrance_exam_mark, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }

        console.log("Entrance_exam_mark :", { id: res.insertId, ...newEntrance_exam_mark });
        result(null, { id: res.insertId, ...newEntrance_exam_mark });
    });
};

//2. Find Entrance_exam_mark  by id

Entrance_exam_mark.findById = (Entrance_exam_markId, result) => {
    sql.query(`SELECT * FROM entrance_exam_planning WHERE id = ${Entrance_exam_mark }`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found Entrance_exam_mark : ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};


//3. Get all Entrance_exam_mark
Exam_planning.getAll = (result) => {
    sql.query("SELECT * FROM entrance_exam_mark", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Entrance_exam_mark : ", res);
        result(null, res);
    });
};


//4. Update an Entrance_exam_mark

Entrance_exam_mark.updateById = (id, Exam_planning, result) => {
    sql.query(
        "UPDATE entrance_exam_planning SET marks = ?, _student_candidate = ? , _entrance_exam_subject =? , _entrance_exam = ? WHERE id = ?", [Entrance_exam_mark.marks, Entrance_exam_mark._student_candidate, Entrance_exam_mark._entrance_exam_subject, Entrance_exam_mark._entrance_examid, id],
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

            console.log("updated Entrance_exam_mark : ", { id: id, ...Entrance_exam_mark });
            result(null, { id: id, ...Entrance_exam_mark });
        }
    );
};


//5. Remove an Entrance_exam_mark

Entrance_exam_mark.remove = (id, result) => {
    sql.query("DELETE FROM entrance_exam_mark WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Entrance_exam_mark with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted Entrance_exam_mark  with id: ", id);
        result(null, res);
    });
};


//6. Remove all Exam_planning
Entrance_exam_mark.removeAll = (result) => {
    sql.query("DELETE FROM entrance_exam_mark", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} Entrance_exam_mark `);
        result(null, res);
    });
};

//6. Calculate the mark of each student
Entrance_exam_mark.markById = (Entrance_exam_markId, result) => {
    sql.query("SELECT SUM(marks) FROM entrance_exam_mark WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} Entrance_exam_mark `);
        result(null, res);
    });
};

module.exports = Entrance_exam_mark;