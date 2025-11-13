// frontend/src/App.jsx

import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import MessageBox from './components/MessageBox';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import './styles/gradient.css';

// Import all page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CreateEditQuizPage from './pages/CreateEditQuizPage';
import TakeQuizPage from './pages/TakeQuizPage';
import QuizResultsPage from './pages/QuizResultsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    console.log("Gemini API Key:", import.meta.env.VITE_GEMINI_API_KEY);

    const { loadingAuth, message, showMessage } = useAuth();
    const [showLoader, setShowLoader] = useState(true); // local state for loader

    useEffect(() => {
        if (!loadingAuth) {
            // Keep loader visible for at least 1 second
            const timer = setTimeout(() => setShowLoader(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [loadingAuth]);

    // Show the loader while authentication is in progress or during the minimum delay
    if (loadingAuth || showLoader) {
        return <LoadingSpinner show={true} />;
    }

    return (
        <div className="App min-h-screen flex flex-col animated-gradient text-light">
            <Navbar />
            <main className="flex-grow py-8">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/create-quiz" element={<CreateEditQuizPage />} />
                    <Route path="/edit-quiz/:quizId" element={<CreateEditQuizPage />} />
                    <Route path="/take-quiz/:quizId" element={<TakeQuizPage />} />
                    <Route path="/quiz-results/:resultId" element={<QuizResultsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            {message && <MessageBox message={message} type={message.type} onClose={() => showMessage(null)} />}
        </div>
    );
};

const RootApp = () => (
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>
);

export default RootApp;
