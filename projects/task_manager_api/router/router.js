const express = require("express");
const router = express.Router();
const controller = require('../controller/controller')

router.get('/', controller.fetchAllTask);
router.get('/:taskId', controller.fetchTaskById);
router.post('/', controller.createTask);
router.put('/:taskId', controller.updateTaskById);
router.delete('/:taskId', controller.deleteTaskById);
router.delete('/', controller.deleteAllTask);

module.exports = router;