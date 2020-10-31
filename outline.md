## JS In Ten: Node/Express Todo Server

### Outline

1. Basic Setup
2. Create Routes
3. Connect to 3rd Party API
4. Conclusion

#### Getting Started

1. **Node - (https://nodejs.org/)**
2. **Express - (https://expressjs.com/)**
3. **Axios - (https://github.com/axios/axios)**
4. **JSONPlaceHolder - (https://jsonplaceholder.typicode.com/)**

#### Basic Setup

1. Initialize project: _npm init --y_
2. Install Dependencies: _npm i express body-parser_
3. Create server.js: **touch server.js**
4. Setup basic express server

```javascript
(async () => {
  const express = require('express');
  const bodyParser = require('body-parser');

  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const PORT = Number(process.env.PORT) || 4000;

  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();
```

#### Create Routes

1. Create routes folder: _mkdir routes_
2. Create todos route file: _touch routes/todos.js_
3. Create basic get, post, put, delete routes

```javascript
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json([]);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.get('/:id', async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.sendStatus(400);
  }
});

router.post('/', async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.sendStatus(400);
  }
});

router.put('/', async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.sendStatus(400);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.sendStatus(400);
  }
});
module.exports = router;
```

4. Add routes to server.

```javascript
(async () => {
  const express = require('express');
  const bodyParser = require('body-parser');
  const todos = require('./routes/todos');
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api/v1/todos', todos);

  const PORT = Number(process.env.PORT) || 4000;

  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();
```

## Connect to 3rd Party API

1. Install axios: _npm i axios_
2. Create axios instance in routes/todos.js

```javascript
const axios = require('axios').default;
```

3. Create todo url const

```javascript
const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';
```

2. Get all todos

```javascript
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(TODO_URL);
    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});
```

3. Get todo by id

```javascript
router.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`${TODO_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});
```

4. Add new todo

```javascript
router.post('/', async (req, res) => {
  try {
    const response = await axios.post(TODO_URL, req.body);
    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});
```

5. Update todo by id

```javascript
router.put('/:id', async (req, res) => {
  try {
    const response = await axios.put(`${TODO_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});
```

6. Delete todo by id

```javascript
router.delete('/:id', async (req, res) => {
  try {
    const response = await axios.delete(`${TODO_URL}/${req.params.id}`);
    console.log('response', response);
    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});
```

## Conclusion

1. Save Code to GitHub

   > - git init
   > - touch .gitignore
   > - add node_modules to .gitignore
   > - git add .
   > - git commit -m "first commit"
   > - git remote add origin https://github.com/mike-munchdev/rest-api-demo.git
   > - git push -u origin master
