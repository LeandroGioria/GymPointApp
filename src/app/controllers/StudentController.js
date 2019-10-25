import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
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

        const studentExists = await Student.findOne({
            where: { email: req.body.email },
        });

        if (studentExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const { name, email, age } = await Student.create(req.body);

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

        const { name, email, age, peso, altura } = student.update(req.body);

        return res.json({ name, email, age, peso, altura });
    }
}

export default new StudentController();
