
const db = require('../Models');

const employee = db.employee;

module.exports = {
    getAllEmp: (req, res) => {
        // sequelize.query('select * from users');

        employee.findAll().then((emp) => {
            res.send(emp);
        }).catch((err) => {
            res.send(err.message);
        })
    },

    createEmp: (req, res) => {
        // sequelize.query('select * from users');
        const emp = {
            empName: req.body.empName,
            empMobile: req.body.empMobile,
            empSalary: req.body.empSalary,
            empCompany: req.body.empCompany
        }
        employee.create(emp).then((Newemp) => {
            res.send(Newemp);
        }).catch((err) => {
            res.send(err.message);
        })
    },
    updateEmp: (req, res) => {
        let id = req.params.id;
        const emp = {
            empName: req.body.empName,
            empMobile: req.body.empMobile,
            empSalary: req.body.empSalary,
            empCompany: req.body.empCompany
        }
        users.update(emp, { where: { empid: id } }).then((data) => {
            if (data > 0) {
                res.send({ error: false, message: "Employee details updated!!" });
            } else {
                res.send({ error: false, message: "Emp details not updated" });
            }

        }).catch((err) => {
            res.send(err);
        });
    },
    deleteEmp: (req, res) => {
        deleteEmp: (req, res) => {
            let id = req.params.id;
            dept.destroy({ where: { empid: id }, truncate: false }).then((data) => {
                if (data > 0) {
                    res.send({ error: false, message: "dept deleted" });
                } else {
                    res.send({ error: false, message: "dept not deleted" });
                }

            }).catch((err) => {
                res.send(err);
            });
        }
    }
}