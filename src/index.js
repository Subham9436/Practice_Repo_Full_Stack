import {Hono} from 'hono';
import {serve} from '@hono/node-server';

const app = new Hono();

let users = [
  {
    id: 1,
    name: "Subham",
    email: "subham@example.com",
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@example.com",
  },
  {
    id: 10,
    name: "Anjali",
    email: "anjali@example.com",
  }
];  

app.get('/users', (c) => {
  return c.json({ users });
});

app.get('/users/:id', (c) => {
  const userId = parseInt(c.req.param('id'));
  const user = users.find((u) => u.id === userId);
  if (user) {
    return c.json({ user });
  }
  return c.json({ error: 'User not found' }, 404);
});

app.post("/users", async (c) => {
  const body = await c.req.json();

  const user = {
    id: users.length + 1,
    name: body.name,
    email: body.email,
  };

  users.push(user);

  return c.json(user, 201);
});

app.put("/users/:id", async (c)=>{
  const userId = parseInt(c.req.param('id'));
  const user = users.find((u) => u.id === userId);
  if(!user){
    return c.json({error: 'User not found'}, 404);
  }
  const body = await c.req.json();
  user.name = body.name;
  user.email = body.email;

  return c.json({ user });

});

app.delete("/users/:id", (c)=>{
  const userId = parseInt(c.req.param('id'));
  const user = users.find((u) => u.id ===userId);
  console.log(userId);
  console.log(user);

  if(!user){
    return c.json({error: 'User not found'}, 404);
  }
  const remaining = users.filter((user)=> user.id !== userId);
  console.log(remaining);
    return c.json({ message: 'User deleted successfully', remaining });
  
});

serve({
    fetch: app.fetch,
    port: 3000,
});

console.log('Server is running on http://localhost:3000')