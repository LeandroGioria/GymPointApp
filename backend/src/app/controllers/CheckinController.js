import * as Yup from 'yup';
import { isSameWeek } from 'date-fns';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
    async index(req, res) {
        const { page = 1 } = req.query;
        const { student_id } = req.params;

        const student = await Student.findByPk(student_id);

        if (!student) {
            return res
                .status(404)
                .json({ errors: [{ msg: 'Aluno não encontrado.' }] });
        }

        const checkins = await Checkin.findAll({
            where: {
                student_id,
            },
            limit: 10,
            offset: (page - 1) * 10,
        });

        return res.json(checkins);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            student_id: Yup.number().required(),
        });

        if (!schema.isValid(req.params.student_id)) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const student = await Student.findOne({
            where: { id: req.params.student_id },
            attributes: ['name'],
        });
        if (!student) {
            return res.status(400).json({ error: 'Student not found' });
        }

        const checkins = await Checkin.findAll({
            where: { student_id: req.params.student_id },
        });
        if (checkins && checkins.length >= 5) {
            let count = 0;
            checkins.forEach(checkin => {
                if (isSameWeek(checkin.createdAt, new Date())) {
                    count += 1;
                }
            });

            if (count >= 5) {
                return res
                    .status(400)
                    .json({ error: 'Limit of 5 checkins by week achieved' });
            }
        }

        const checkin = await Checkin.create(req.params);
        if (!checkin) {
            return res.status(400).json({ error: 'Fail on checkin' });
        }

        return res.json(checkin);
    }
}

export default new CheckinController();
