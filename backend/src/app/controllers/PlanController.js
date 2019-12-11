import * as Yup from 'yup';
import Plan from '../models/Plan';
import User from '../models/User';

class PlanController {
    async index(req, res) {
        const isAdmin = User.findOne({ where: { id: req.userId } });

        if (!isAdmin) {
            return res.status(401).json({
                error: 'You can only list plans as administrator',
            });
        }

        const plans = await Plan.findAll({
            attributes: ['id', 'title', 'price', 'duration'],
        });

        if (!plans || plans.length === 0) {
            return res.status(401).json({ error: 'No plans registered' });
        }

        return res.json(plans);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            duration: Yup.number().required(),
            price: Yup.number().required(),
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const isAdmin = await User.findOne({ where: { id: req.userId } });
        if (!isAdmin) {
            return res.status(401).json({
                error: 'You can only create plans as administrator',
            });
        }

        const alreadyExists = await Plan.findOne({
            where: { title: req.body.title },
        });
        if (alreadyExists) {
            return res.status(400).json({ error: 'Plan already exists' });
        }

        const plan = await Plan.create(req.body);

        return res.json(plan);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string(),
            duration: Yup.number(),
            price: Yup.number(),
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

        const plan = await Plan.findByPk(req.body.id);
        if (!plan) {
            return res.status(400).json({ error: 'Plan not found' });
        }

        plan.update(req.body);

        return res.json({
            status: 'ok',
            msg: `Student ${plan.title} updated!`,
        });
    }

    async delete(req, res) {
        const isAdmin = await User.findOne({ where: { id: req.userId } });

        if (!isAdmin) {
            return res.status(401).json({
                error: 'Only administrators can delete plans',
            });
        }

        if (req.params.id === 'undefined') {
            return res.status(401).json({
                error: 'Invalid id',
            });
        }

        const plan = await Plan.findByPk(req.params.id);
        if (!plan) {
            return res.status(400).json({ error: 'Plan does not exists' });
        }

        plan.destroy();

        return res.json({ ok: `Plan "${plan.title}" deleted with success!` });
    }
}

export default new PlanController();
