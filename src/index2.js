import {Hono} from 'hono';
import {serve} from '@hono/node-server';
import sql from "./db/db.js";
import { parse } from 'dotenv';

const app = new Hono();

app.get('/users', async (c) =>{
 const users = await sql `SELECT * FROM users
 ORDER BY id`;
 return c.json(users);
});

app.get('/users/:id', async(c)=>{
 const UserId = parseInt(c.req.param('id'));
 const result = await sql `SELECT * FROM users WHERE id = ${UserId}`;
 if(result.length==0){  
  return c.json({ error: 'User not found' }, 404);
 };
  return c.json(result);
});

app.post('/users', async(c)=>{
 const body = await c.req.json();
 const result = await sql `INSERT INTO users (name,email) VALUES (${body.name},${body.email}) RETURNING *`;
 return c.json(result,201);
});

app.put('/users/:id', async(c)=>{
 const userId = parseInt(c.req.param('id'));
 const body = await c.req.json();
 const result = await sql `UPDATE users SET name = ${body.name}, email = ${body.email} WHERE id = ${userId} RETURNING *`;
 if(result.length==0){
    return c.json({ error: 'User not found' }, 404);
 }
 return c.json(result);
});

app.delete('/users/:id', async (c)=>{
    const userId = parseInt(c.req.param('id'));
    const result = await sql `DELETE FROM users WHERE id = ${userId} RETURNING *`;
     if(result.length==0){
    return c.json({ error: 'User not found' }, 404);
    }
    return c.json(result);
});

serve({
    fetch : app.fetch,
    port : 3000
});

console.log(`Server is running on ${3000}`);