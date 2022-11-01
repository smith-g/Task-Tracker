import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import AboutLink from "./components/AboutLink";
import About from "./pages/about";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="relative flex items-center justify-center bg-blue-900 min-h-screen">
          <div className="bg-white rounded-3xl p-6 m-3 shadow-2xl">
            <Routes>
              <Route
                exact
                path=""
                element={
                  <>
                    <Header />
                    <TaskList />
                  </>
                }
              ></Route>
            </Routes>
          </div>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>

          <AboutLink />
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
