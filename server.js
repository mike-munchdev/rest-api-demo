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
