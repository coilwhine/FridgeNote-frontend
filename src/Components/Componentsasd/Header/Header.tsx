import "./Header.scss";
import { FaUser } from 'react-icons/fa';

function Header(): JSX.Element {

    function clickProfileBtn(): void {
        console.log('profile btn click');
    }

    return (
        <div className="Header">
            <span className="heading">Fridge Note</span>
            <button
                className="profile-btn"
                onClick={() => clickProfileBtn()}>
                <FaUser className="user-icon" />
            </button>
        </div>
    );
}

export default Header;
