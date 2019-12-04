import Mail from '../../lib/Mail';

class HelpOrderMail {
    get key() {
        return 'HelpOrder';
    }

    async handle({ data }) {
        const { student, question, answer } = data;

        await Mail.sendMail({
            to: `${student.name} <${student.email}>`,
            subject: 'Resposta pedido auxílio - GymPoint',
            template: 'helpOrder',
            context: {
                student: student.name,
                question,
                answer,
            },
        });
    }
}

export default new HelpOrderMail();
