import Sequelize, { Model } from 'sequelize';

class Checkin extends Model {
    static init(sequelize) {
        super.init(
            {
                student_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        // Adding student collumn to checkin table
        this.belongsTo(models.Student, {
            foreignKey: 'student_id',
            as: 'student',
        });
    }
}

export default Checkin;
