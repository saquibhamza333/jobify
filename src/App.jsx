import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import ApplicationForm from "./components/ApplicationForm.jsx";
import { Header } from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobDetailsPage from "./pages/JobDetailsPage.jsx";
import ApplicationListPage from "./pages/ApplicationListPage.jsx";
import ApplicationSummaryPage from "./pages/ApplicationSummaryPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <Router>
        <div className="min-w-[320px] w-full bg-gray-950 text-white">
          
            <Header />

        
            <div className="container mx-auto min-w-[320px] max-w-6xl px-4 mt-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/job/:id" element={<JobDetailsPage />} />
                <Route path="/apply/:id" element={<ApplicationForm />} />
                <Route path="/applications" element={<ApplicationListPage />} />
                <Route path="/application/:id" element={<ApplicationSummaryPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </UserProvider>
    </Provider>
  );
}

export default App;

