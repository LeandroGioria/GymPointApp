import * as Yup from 'yup';
import { Op, fn, where, col } from 'sequelize';

import Student from '../models/Student';
import User from '../models/User';

// index – List table data
// show – Show specfic item
// create – Return a View to create table item
// store – Save new item
// edit – Return a View to edit table item
// update – Update item
// destroy – Remove Item
class StudentController {
    async index(req, res) {
        const isAdmin = User.findOne({ where: { id: req.userId } });

        if (!isAdmin) {
            return res.status(401).json({
                error: 'You can only list plans as administrator',
            });
        }

        const { name } = req.query;
        let students;

        if (name) {
            students = await Student.findAll({
                where: where(fn('lower', col('name')), {
                    [Op.like]: fn('lower', `%${name}%`),
                }),
            });
        } else {
            students = await Student.findAll();
        }

        const studentsPublicData = students.map(student => {
            return {
                id: student.id,
                name: student.name,
                email: student.email,
                age: student.age,
                peso: student.peso,
                altura: student.altura,
            };
        });

        return res.json(studentsPublicData);
    }

    async show(req, res) {
        const { id } = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            return res
                .status(404)
                .json({ errors: [{ msg: 'Student not found.' }] });
        }

        return res.json(student);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            age: Yup.number().required(),
            peso: Yup.number().required(),
            altura: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { email } = req.body;

        const student = await Student.findOne({ where: { email } });

        if (student) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const { name, age } = await Student.create(req.body);

        return res.json({ name, email, age });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            name: Yup.string(),
            email: Yup.string().email(),
            age: Yup.number(),
            peso: Yup.number(),
            altura: Yup.number(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const student = await Student.findByPk(req.body.id);

        if (!student) {
            return res.status(400).json({ error: 'Student does not exists' });
        }

        const { emailInformed } = req.body;

        if (emailInformed && emailInformed !== student.email) {
            const studentExists = Student.findOne({
                where: { email: emailInformed },
            });

            if (studentExists) {
                return res
                    .status(400)
                    .json({ error: 'Email already registered' });
            }
        }

        student.update(req.body);

        return res.json({
            status: 'ok',
            msg: `Student ${student.name} updated!`,
        });
    }

    async delete(req, res) {
        const isAdmin = await User.findOne({ where: { id: req.userId } });

        if (!isAdmin) {
            return res.status(401).json({
                error: 'Only administrators can delete students',
            });
        }

        if (!req.params.id) {
            return res.status(401).json({
                error: 'Invalid id',
            });
        }

        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(400).json({ error: 'Student does not exists' });
        }

        student.destroy();

        return res.json({
            ok: `Student "${student.name}" deleted with success!`,
        });
    }
}

export default new StudentController();
