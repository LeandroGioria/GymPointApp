import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import user from '../app/models/User';

const models = [user];

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
