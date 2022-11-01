package com.task.tracker.view;

import com.task.tracker.model.Tasks;
import org.apache.coyote.http11.filters.VoidInputFilter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class jdbcTaskDao implements TaskDao{
    private JdbcTemplate jdbcTemplate;

    public jdbcTaskDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Tasks> findAll() {
        List<Tasks> tasks = new ArrayList<>();
        String sql = "SELECT * from task";
        SqlRowSet row = jdbcTemplate.queryForRowSet(sql);
        while (row.next()){
            Tasks task = mapRowToTask(row);
            tasks.add(task);
        }
        return tasks;
    }

    @Override
    public void deleteTask(Long task_id) {
        String sql = "DELETE FROM task WHERE task_id = ?";
        jdbcTemplate.update(sql, task_id);
    }

    @Override
    public void create(Tasks task) {
        String sql = "INSERT into task (title, date) VALUES (? , ?)";
        jdbcTemplate.update(sql, task.getTitle(), task.getDate());
    }

    @Override
    public void update(Tasks updatedTask) {
        String sql = "UPDATE task SET title = ? " +
                "WHERE task_id = ?";
        jdbcTemplate.update(sql, updatedTask.getTitle(), updatedTask.getTask_id());
    }



    private Tasks mapRowToTask(SqlRowSet rs) {
        Tasks task = new Tasks();
        task.setTask_id(rs.getLong("task_id"));
        task.setTitle(rs.getString("title"));
        task.setDate(rs.getString("date"));
        return task;
    }
}
