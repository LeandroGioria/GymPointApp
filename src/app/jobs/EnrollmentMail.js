import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentMail {
    get key() {
        return 'EnrollmentMail';
    }

    async handle({ data }) {
        const { student, plan, start_date, end_date } = data;

        await Mail.sendMail({
            to: `${student.name} <${student.email}>`,
            subject: 'Matrícula GymPoint',
            template: 'enrollment',
            context: {
                student: student.name,
                plan: plan.title,
                price: plan.price,
                startDate: format(
                    parseISO(start_date),
                    "'dia' dd 'de' MMMM 'de' yyyy",
                    {
                        locale: pt,
                    }
                ),
                endDate: format(
                    parseISO(end_date),
                    "'dia' dd 'de' MMMM 'de' yyyy",
                    {
                        locale: pt,
                    }
                ),
            },
        });
    }
}

export default new EnrollmentMail();
