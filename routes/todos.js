const express = require('express');
const axios = require('axios').default;
const router = express.Router();
const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(TODO_URL);
    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`${TODO_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.post('/', async (req, res) => {
  try {
    const response = await axios.post(TODO_URL, req.body);
    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const response = await axios.put(`${TODO_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const response = await axios.delete(`${TODO_URL}/${req.params.id}`);

    res.json(response.data);
  } catch (error) {
    res.sendStatus(400);
  }
});
module.exports = router;
