import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import user from '../app/models/User';
import student from '../app/models/Student';

const models = [student, user];

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
