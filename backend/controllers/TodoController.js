const Todo = require("../models/TodoModel");

const getAll = (req, res) => {
  res.json(Todo.getAll());
}

const getById = (req, res) => {
  res.json(Todo.getById(req.params.id));
}

const add = (req, res) => {
  res.json(Todo.add(req.body));
}

const deleteById = (req, res) => {
  res.json(Todo.deleteById(req.params.id));
}

module.exports = { getAll, getById, add, deleteById };
