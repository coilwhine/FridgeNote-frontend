import { useForm } from "react-hook-form";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";

interface LoginForm {
    email: string;
    password: string;
}

function LoginForm(): JSX.Element {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<LoginForm>();

    function onSubmit(data: LoginForm) {

        console.log(data)
    }

    return (
        <div className="LoginForm">
            <header>
                <h1>Welcome Back! 👋</h1>
                <span>We are happy to see you again</span>
            </header>

            <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="email"
                    {...register('email')}
                    required
                />

                <input
                    type="password"
                    placeholder="password"
                    {...register('password')}
                    required
                />
                <button className="action-btn dark-btn">Login</button>
            </form>
            <span className="register-span">Don't have an acount?
                <button
                    className="action-btn color-btn"
                    onClick={() => navigate('/register')}
                >Register
                </button>
            </span>
        </div >
    );
}

export default LoginForm;
