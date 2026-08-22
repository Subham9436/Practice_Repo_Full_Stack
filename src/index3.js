import {Hono} from 'hono';
import {serve} from '@hono/node-server';
import patientRoutes from './routes/patient.routes.js';

const app = new Hono();
   
 app.route("/patients", patientRoutes);


serve({
    fetch:app.fetch,
    port:3000,
});

console.log(`Serverr is running on${3000}`);