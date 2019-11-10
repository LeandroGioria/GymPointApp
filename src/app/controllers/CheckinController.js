import * as Yup from 'yup';
import { isSameWeek, parseISO } from 'date-fns';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
    async index(req, res) {
        const { student_id } = req.params;
        const checkins = await Checkin.findAll({
            where: { student_id },
            attributes: ['student_id', 'createdAt'],
        });
        if (!checkins || checkins.length === 0) {
            return res.status(401).json({ error: 'No checkins registered' });
        }

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

        return res.json({ ok: `Success checkin for student: ${student.name}` });
    }
}

export default new CheckinController();
