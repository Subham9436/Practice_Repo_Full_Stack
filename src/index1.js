import {Hono} from 'hono';
import {serve} from '@hono/node-server';

const app = new Hono();

let patients =[
    {
        id : 1,
        name : "Saanvi",
        age : 25,
        disease : "Diabetes",
    },
    {
        id : 2,
        name : "Shriya",
        age : 30,
        disease : "Hypertension",
    },
    {
        id : 3,
        name : "Rashi",
        age : 28,
        disease : "Asthma",
    },
];

app.get('/patients',(c)=>{
  return c.json(patients);
});

app.get('/patients/:id',(c)=>{
    const patientId = parseInt(c.req.param('id'));
    const patient = patients.find(p => p.id === id);
    if (patient) {
        return c.json({patient});
    } 
    return c.json({message: "Patient not found"}, 404);
});

app.post('/patients', async (c) => {
    const body = await c.req.json();
    const patient = {
    id: patients.length + 1,
    name: body.name,
    age: body.age,
    disease: body.disease,
};

patients.push(patient);

return c.json(patient,201);
});



app.put("/patients/:id", async(c)=>{
    const patientId = parseInt(c.req.param('id'));
    const patient = patients.find((u) => u.id == patientId);
    if(!patient){
        return c.json({error: 'User not found'}, 404);
    }
 const body = await c.req.json();
 patient.name = body.name;
 patient.age = body.age;

 return c.json({patient});

});

app.delete("/patients/:id", (c) => {
  const patientId = parseInt(c.req.param('id'));
  const patient = patients.find((p) => p.id === patientId); 
  if(!patient){
    return c.json({error: 'User not found'}, 404);
  }
  patients = patients.filter((p) => p.id !== patientId);
  return c.json({ message: 'User deleted successfully', remaining: patients });
});

serve({
    fetch: app.fetch,
    port: 3000,
});

console.log('Server is running on http://localhost:3000')