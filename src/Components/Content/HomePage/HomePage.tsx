import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

function HomePage(): JSX.Element {
    const navigate = useNavigate();


    return (
        <div className="HomePage">
            <header>
                <h1>Wellcome To FridgeNote</h1>
                <p>stay organized and efficient while grocery shopping.</p>


                <div className="call-to-action">
                    <button
                        className="action-btn dark-btn"
                        onClick={() => navigate('/login')}>
                        Login
                    </button>
                    <button
                        className="action-btn transperent-btn"
                        onClick={() => navigate('/register')}
                    >register</button>
                </div>
            </header>

            <div className="home-section">
                <span>Create smart shopping lists with the power of Fridge Note</span>
                <img src="./src/assets/images/basket-with-vegetables.jpg" alt="basket with vegetables" />
            </div>
            <div className="home-section">
                <img src="./src/assets/images/basket-with-vegetables.jpg" alt="basket with vegetables" />
                <span>Create smart shopping lists with the power of Fridge Note</span>
            </div>
            <div className="home-section">
                <span>Create smart shopping lists with the power of Fridge Note</span>
                <img src="./src/assets/images/basket-with-vegetables.jpg" alt="basket with vegetables" />
            </div>
        </div>
    );
}

export default HomePage;
