import * as Yup from 'yup';
import User from '../models/User';

// index – List table data
// show – Show specfic item
// create – Return a View to create table item
// store – Save new item
// edit – Return a View to edit table item
// update – Update item
// destroy – Remove Item

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
                .required()
                .min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const userExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const { id, name, email } = await User.create(req.body);

        return res.json({ id, name, email });
    }
}

export default new UserController();
