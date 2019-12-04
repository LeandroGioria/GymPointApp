import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import authMiddleware from './app/middlewares/auth';
import PlanController from './app/controllers/PlanController';
import EnrollmentController from './app/controllers/EnrollmentController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ status: 'ok' });
});
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/students/:student_id/checkins', CheckinController.index);
routes.post('/students/:student_id/checkins', CheckinController.store);

routes.post('/students/:student_id/help-orders', HelpOrderController.store);
routes.get('/students/:student_id/help-orders', HelpOrderController.show);

// Only the routes below will use the middleware auth
routes.use(authMiddleware);

routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:name', StudentController.update);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.get('/enrollments', EnrollmentController.index);
routes.post('/enrollments', EnrollmentController.store);
routes.put('/enrollments', EnrollmentController.update);
routes.delete('/enrollments/:id', EnrollmentController.delete);

routes.get('/help-orders', HelpOrderController.index);
routes.put('/help-orders/:order_id/answer', HelpOrderController.update);

export default routes;
