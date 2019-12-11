import * as Yup from 'yup';
import { addMonths, parseISO, isBefore } from 'date-fns';
import Enrollment from '../models/Enrollment';
import User from '../models/User';
import Plan from '../models/Plan';
import Queue from '../../lib/Queue';
import Student from '../models/Student';
import EnrollmentMail from '../jobs/EnrollmentMail';
import EnrollmentUpdateMail from '../jobs/EnrollmentUpdateMail';

class EnrollmentController {
    async index(req, res) {
        const isAdmin = User.findOne({ where: { id: req.userId } });

        if (!isAdmin) {
            return res.status(401).json({
                error: 'You can only list plans as administrator',
            });
        }

        const enrollments = await Enrollment.findAll({
            attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
        });

        if (!enrollments) {
            return res.status(401).json({ error: 'No enrollments registered' });
        }

        return res.json(enrollments);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            start_date: Yup.date().required(),
            plan_id: Yup.number().required(),
            student_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const isAdmin = await User.findOne({ where: { id: req.userId } });
        if (!isAdmin) {
            return res.status(401).json({
                error: 'You can only create enrollments as administrator',
            });
        }

        const studentHasEnrollment = await Enrollment.findOne({
            where: { student_id: req.body.student_id },
        });
        if (studentHasEnrollment) {
            return res
                .status(401)
                .json({ error: 'Student already has enrollment' });
        }

        const plan = await Plan.findByPk(req.body.plan_id);
        if (!plan) {
            return res.status(400).json({ error: 'Plan not found' });
        }

        /**
         * Check for past dates
         */
        const start_date = parseISO(req.body.start_date);

        if (isBefore(start_date, new Date())) {
            return res
                .status(400)
                .json({ error: 'Past dates are not permitted' });
        }

        const price = plan.price * plan.duration;
        const end_date = addMonths(start_date, plan.duration);

        const enrollment = await Enrollment.create({
            student_id: req.body.student_id,
            plan_id: req.body.plan_id,
            start_date,
            end_date,
            price,
        });

        const student = await Student.findByPk(req.body.student_id);
        if (!student) {
            return res.status(400).json({ error: 'Student not found' });
        }

        await Queue.add(EnrollmentMail.key, {
            student,
            plan,
            start_date,
            end_date,
        });

        return res.json(enrollment);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            student_id: Yup.number(),
            plan_id: Yup.number(),
            start_date: Yup.date(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const isAdmin = await User.findOne({ where: { id: req.userId } });

        if (!isAdmin) {
            return res.status(401).json({
                error: 'You can only update plans as administrator',
            });
        }

        const enrollment = await Enrollment.findByPk(req.body.id);

        if (!enrollment) {
            return res.status(400).json({ error: 'Enrollment not found' });
        }

        const plan = await Plan.findByPk(req.body.plan_id);
        if (!plan) {
            return res.status(400).json({ error: 'Plan id not found' });
        }

        /**
         * Check for past dates
         */
        const start_date = parseISO(req.body.start_date);

        if (isBefore(start_date, new Date())) {
            return res
                .status(400)
                .json({ error: 'Past dates are not permitted' });
        }

        const price = plan.price * plan.duration;
        const end_date = addMonths(start_date, plan.duration);

        enrollment.update({
            student_id: req.body.student_id,
            plan_id: req.body.plan_id,
            start_date,
            end_date,
            price,
        });

        const student = await Student.findByPk(req.body.student_id);

        if (!student) {
            return res.status(400).json({ error: 'Student not found' });
        }

        await Queue.add(EnrollmentUpdateMail.key, {
            student,
            plan,
            start_date,
            end_date,
        });

        return res.json({
            status: 'ok',
            msg: 'Enrollment updated!',
        });
    }

    async delete(req, res) {
        const isAdmin = await User.findOne({ where: { id: req.userId } });

        if (!isAdmin) {
            return res.status(401).json({
                error: 'Only administrators can delete enrollments',
            });
        }

        if (!req.params.id) {
            return res.status(401).json({
                error: 'Invalid id',
            });
        }

        const enrollment = await Enrollment.findByPk(req.params.id);

        if (!enrollment) {
            return res
                .status(400)
                .json({ error: 'Enrollment does not exists' });
        }

        enrollment.destroy();

        return res.json({ ok: 'Enrollment deleted with success!' });
    }
}

export default new EnrollmentController();
