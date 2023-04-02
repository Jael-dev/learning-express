const sql = require('./db');

//constructor

const Entrance_exam_subject = function(EntranceExamSubject) {
    this.code = EntranceExamSubject.code;
    this.subject_name = EntranceExamSubject.subject_name;

};

//1.Insert an Entrance_exam_subject

Entrance_exam_subject.create = (newEntrance_exam_subject, result) => {
    sql.query("INSERT INTO entrance_exam_subject SET ?", Entrance_exam_subject, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }

        console.log("created Entrance_exam_subject :", { id: res.insertId, ...newEntrance_exam_subject });
        result(null, { id: res.insertId, ...newEntrance_exam_subject });
    });
};

//2. Find Entrance_exam_subject  by id

Entrance_exam_subject.findById = (Entrance_exam_subjectId, result) => {
    sql.query(`SELECT * FROM entrance_exam_subject WHERE id = ${Entrance_exam_subject }`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found Entrance_exam_subject : ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};


//3. Get all Entrance_exam_subject
Entrance_exam.getAll = (result) => {
    sql.query("SELECT * FROM entrance_exam_subject", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Entrance_exam_subject : ", res);
        result(null, res);
    });
};


//4. Update an Entrance_exam_subject

Entrance_exam_subject.updateById = (id, Entrance_exam_subject, result) => {
    sql.query(
        "UPDATE entrance_exam_subject SET code = ?, subject_name = ? WHERE id = ?", [Entrance_exam_subject.code, Entrance_exam_subject.subject_name, id],
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

            console.log("updated Entrance_exam_subject : ", { id: id, ...Entrance_exam_subject });
            result(null, { id: id, ...Entrance_exam_subject });
        }
    );
};


//5. Remove an Entrance_exam_subject

Entrance_exam_subject.remove = (id, result) => {
    sql.query("DELETE FROM entrance_exam_subject WHERE id = ?", id, (err, res) => {
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

        console.log("deleted Entrance_exam_subject  with id: ", id);
        result(null, res);
    });
};


//6. Remove all Entrance_exam_subject
Entrance_exam_subject.removeAll = (result) => {
    sql.query("DELETE FROM entrance_exam_subject", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} Entrance_exam_subject `);
        result(null, res);
    });
};

module.exports = Entrance_exam_subject;