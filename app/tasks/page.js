import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskFormCustom from "@/components/TaskFormCustom";

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
    </div>
  );
};
export default TasksPage;
