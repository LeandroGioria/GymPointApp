import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import user from '../app/models/User';
import student from '../app/models/Student';
import plan from '../app/models/Plan';

const models = [student, user, plan];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
