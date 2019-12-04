import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentUpdateMail {
    get key() {
        return 'EnrollmentUpdateMail';
    }

    async handle({ data }) {
        const { student, plan, start_date, end_date } = data;

        await Mail.sendMail({
            to: `${student.name} <${student.email}>`,
            subject: 'Matrícula Atualizada - GymPoint',
            template: 'enrollmentUpdate',
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

export default new EnrollmentUpdateMail();
