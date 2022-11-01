package com.task.tracker.model;

import java.util.Objects;

public class Tasks {

    private long task_id;
    private String title;
    private String date;

    public Tasks(long task_id, String title, String date) {
        this.task_id = task_id;
        this.date = date;
        this.title = title;
    }

    public Tasks() {
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public long getTask_id() {
        return task_id;
    }

    public void setTask_id(long task_id) {
        this.task_id = task_id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tasks tasks = (Tasks) o;
        return task_id == tasks.task_id && Objects.equals(title, tasks.title) && Objects.equals(date, tasks.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(task_id, title, date);
    }

    @Override
    public String toString() {
        return "Tasks{" +
                "id=" + task_id +
                ", title='" + title + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
