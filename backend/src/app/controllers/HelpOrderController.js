import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import HelpOrderMail from '../jobs/HelpOrderMail';
import Student from '../models/Student';
import Queue from '../../lib/Queue';

class HelpOrderController {
    async index(req, res) {
        const helpOrders = await HelpOrder.findAll({
            where: { answer: null },
            include: [
                {
                    model: Student,
                    as: 'student',
                    attributes: ['name'],
                },
            ],
        });
        if (!helpOrders || helpOrders.length === 0) {
            return res.status(400).json({ error: 'You dont have new orders ' });
        }

        return res.json(helpOrders);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            question: Yup.number().required(),
        });

        if (!schema.isValid(req.body)) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { student_id } = req.params;
        const student = Student.findByPk(student_id);

        if (!student) {
            return res.status(400).json({ error: 'Invalid Student ' });
        }
        const { question } = req.body;

        const order = await HelpOrder.create({ student_id, question });

        return res.json(order);
    }

    async show(req, res) {
        const { page = 1 } = req.query;
        const { student_id } = req.params;

        const orders = await HelpOrder.findAll({
            where: { student_id },
            limit: 10,
            offset: (page - 1) * 10,
        });

        return res.json(orders);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            answer: Yup.string().required(),
        });

        if (!schema.isValid(req.body)) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { answer } = req.body;

        const helpOrder = await HelpOrder.findByPk(req.params.order_id, {
            include: [
                {
                    model: Student,
                    as: 'student',
                    attributes: ['name', 'email'],
                },
            ],
        });
        if (!helpOrder) {
            res.status(400).json({ error: 'Order not found' });
        }

        await helpOrder.update({ answer, answer_at: new Date() });

        await Queue.add(HelpOrderMail.key, {
            student: helpOrder.student,
            question: helpOrder.question,
            answer,
        });

        return res.json(helpOrder);
    }
}

export default new HelpOrderController();
