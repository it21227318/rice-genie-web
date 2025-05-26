import "./App.css";
import Footer from "./components/organisms/Footer";
import NavBar from "./components/organisms/NavBar";
import HomePage from "./components/pages/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="font-rubik">
      <NavBar />
      <main>
        <HomePage />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
