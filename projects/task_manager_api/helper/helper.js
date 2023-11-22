function validator(data) {
  if(data.taskId && data.description && typeof(data.is_completed)== "boolean"){
    return true
  } else {
    return false
  }
}

function findExistedTask(tasks, taskId, res) {
  const task = tasks.some((task) => task.taskId === taskId);
  if (task) {
    res.send({
      statusCode: 409,
      message: "Task with taskId already exist",
    });
  }
  return task;
}

function findTask(tasks, taskId) {
  const task = tasks.find((task) => task.taskId == taskId);
  return task;
}

module.exports = { validator, findExistedTask, findTask };
