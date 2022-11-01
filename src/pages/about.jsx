import { Link } from "react-router-dom";

function About() {
  return (
    <div className="card">
      <h1 className="text-lg mb-4 font-bold">About this project</h1>
      <p>This is a React app to leave feedback for a product or a service</p>
      <p>Version 1.0.0</p>

      <p className="underline mt-10 text-purple-700">
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default About;
