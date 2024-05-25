const Todo = require("../models/Todo");

exports.getIndex = (req, res, next) => {
  Todo.findAll()
    .then((results) => {
      res.render("index", {
        todos: results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createTodo = (req, res, next) => {
  const request = req.body.title;

  Todo.create({
    title: request,
    completed: 0,
  })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.deleteTodo = (req, res, next) => {
  const todoId = req.body.todoId;

  Todo.findByPk(todoId)
    .then((result) => {
        result.destroy();
        res.redirect("/");
    })
    .catch((err) => console.log(err));
};
