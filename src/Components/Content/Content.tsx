import { Navigate, Route, Routes } from "react-router-dom";
import "./Content.scss";
import LoginForm from "./LoginForm/LoginForm";
import HomePage from "./HomePage/HomePage";

function Content(): JSX.Element {
    return (
        <div className="Content">
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
}

export default Content;
