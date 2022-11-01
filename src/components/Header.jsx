import TaskForm from "./TaskForm";

function Header() {
  return (
    <header className="Font-bold text-4xl py-5 font-sans-serif border-b border-black">
      <h1>Task Tracker</h1>
      <TaskForm />
    </header>
  );
}

export default Header;
