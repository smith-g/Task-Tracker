package com.task.tracker.controller;

import com.task.tracker.model.Tasks;
import com.task.tracker.view.TaskDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;

@CrossOrigin
@RestController
public class TaskController {

    private final TaskDao taskDao;

    @Autowired
    public TaskController(TaskDao taskDao) {
        this.taskDao = taskDao;
    }

    @RequestMapping(path = "/tasks", method = RequestMethod.GET)
    public List<Tasks> tasks() {
        return taskDao.findAll();
    }


    @RequestMapping(path = "/task/{task_id}", method = RequestMethod.DELETE)
    public void deleteTask(@PathVariable Long task_id) throws HttpClientErrorException.NotFound {
        taskDao.deleteTask(task_id);
    }

    @RequestMapping(path = "/task/create", method = RequestMethod.POST)
    public void createTask(@RequestBody Tasks tasks) {
         taskDao.create(tasks);
    }




}
