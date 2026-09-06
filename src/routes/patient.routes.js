import {Hono} from 'hono'; 
import { getAllPatientsController } from '../controllers/patient.controller.js';

const patientRoutes = new Hono();

patientRoutes.get("/admit", getAllPatientsController);

export default patientRoutes;