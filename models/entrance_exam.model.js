const sql = require('./db');

//constructor

const Entrance_exam = function(EntranceExam) {
    this.sesion = EntranceExam.sesion;
    this._accademic_year = EntranceExam._accademi_year;

};

//1.Insert an entrance exam

Entrance_exam.create = (newEntrance_exam, result) => {
    sql.query("INSERT INTO entrance_exam SET ?", newEntrance_exam, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }

        console.log("created Entrance_exam:", { id: res.insertId, ...newEntrance_exam });
        result(null, { id: res.insertId, ...newEntrance_exam });
    });
};

//2. Find entrance exam by id

Entrance_exam.findById = (Entrance_examId, result) => {
    sql.query(`SELECT * FROM entrance_exam WHERE id = ${Entrance_exam}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found Entrance_exam: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};


//3. Get all Entrance_exam
Entrance_exam.getAll = (result) => {
    sql.query("SELECT * FROM entrance_exam", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Entrance_exam: ", res);
        result(null, res);
    });
};


//4. Update an Entrance_exam

Entrance_exam.updateById = (id, Entrance_exam, result) => {
    sql.query(
        "UPDATE entrance_exam SET sesion = ?, _accademic_year = ? WHERE id = ?", [Entrance_exam.sesion, Entrance_exam._accademic_year, id],
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

            console.log("updated Entrance_exam: ", { id: id, ...Entrance_exam });
            result(null, { id: id, ...Entrance_exam });
        }
    );
};


//5. Remove an Entrance_exam

Entrance_exam.remove = (id, result) => {
    sql.query("DELETE FROM entrance_exam WHERE id = ?", id, (err, res) => {
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

        console.log("deleted Entrance_exam with id: ", id);
        result(null, res);
    });
};


//6. Remove all Entrance_exam
Customer.removeAll = (result) => {
    sql.query("DELETE FROM entrance_exam", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} Entrance_exam`);
        result(null, res);
    });
};

module.exports = Entrance_exam;