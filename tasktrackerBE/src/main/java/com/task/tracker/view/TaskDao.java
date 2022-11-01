package com.task.tracker.view;

import com.task.tracker.model.Tasks;
import org.springframework.scheduling.config.Task;

import java.util.List;

public interface TaskDao {

    List<Tasks> findAll();

    void deleteTask(Long task_id);

    void create(Tasks task);

    void update(Tasks updatedTask);
}
