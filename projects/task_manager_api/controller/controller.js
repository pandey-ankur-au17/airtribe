const helper = require("../helper/helper");
const validator = helper.validator;
const findTask = helper.findTask;
const findExistedTask = helper.findExistedTask;

let tasks = [];

function createTask(req, res) {
  const body = req.body;
  const validateRequest = validator(body);
  if (!validateRequest) {
    return res.send({
      statusCode: 400,
      message: "Data Validation Failed",
    });
  }
  const existed = findExistedTask(tasks, body.taskId, res);
  if (!existed) {
    tasks.push(body);
    return res.send({
      statusCode: 201,
      message: "Task Saved Successfully",
    });
  }
}

function fetchAllTask(req, res) {
  res.send({
    statusCode: 200,
    Tasks: tasks,
  });
}

function fetchTaskById(req, res) {
  const taskId = req.params.taskId;
  const task = findTask(tasks, taskId);
  if (task) {
    return res.send({
      statusCode: 200,
      message: "Task fetched successfully",
      Tasks: task,
    });
  } else {
    return res.send({
      statusCode: 404,
      message: "Task Not Found",
    });
  }
}

function updateTaskById(req, res) {
  const body = req.body;
  const taskId = req.params.taskId;
  const index = tasks.findIndex((task) => task.taskId == taskId);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...body };
    return res.send({
      statusCode: 200,
      message: "Task updated successfully.",
    });
  } else {
    return res.send({
      statusCode: 404,
      message: "Task not found",
    });
  }
}

function deleteTaskById(req, res) {
  const taskId = req.params.taskId;
  const index = tasks.findIndex((task) => task.taskId == taskId);
  if (index !== -1) {
    tasks.pop(tasks[index]);
    return res.send({
      statusCode: 200,
      message: "Task deleted successfully.",
    });
  } else {
    return res.send({
      statusCode: 404,
      message: "Task not found",
    });
  }
}

function deleteAllTask(req, res) {
  tasks = [];
  return res.send({
    statusCode: 200,
    message: "All Task deleted successfully.",
  });
}

const controller = {
  createTask,
  updateTaskById,
  fetchAllTask,
  fetchTaskById,
  deleteAllTask,
  deleteTaskById,
};

module.exports = controller;
