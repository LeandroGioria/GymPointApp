import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import user from '../app/models/User';
import student from '../app/models/Student';
import plan from '../app/models/Plan';
import enrollment from '../app/models/Enrollment';

const models = [student, user, plan, enrollment];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
