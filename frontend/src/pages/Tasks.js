import React, { useEffect, useState } from "react";
import API from "../api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await API.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error.response?.data?.error || error.message);
    }
  };

  const addTask = async (title) => {
    try {
      const { data } = await API.post("/tasks", { title });
      setTasks((prev) => [...prev, data]);
    } catch (error) {
      console.error("Failed to add task:", error.response?.data?.error || error.message);
    }
  };

  const completeTask = async (id) => {
    try {
      const { data } = await API.patch(`/tasks/${id}`);
      setTasks((prev) => prev.map((task) => (task._id === id ? data : task)));
    } catch (error) {
      console.error("Failed to complete task:", error.response?.data?.error || error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} />
    </div>
  );
};

export default Tasks;
