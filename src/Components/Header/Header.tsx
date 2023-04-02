import { useSelector, useDispatch } from "react-redux";
import "./Header.scss";
import { FaUser } from 'react-icons/fa';
import { ChosenModal, chosenModal, clearAllModals } from "../../App/modalsSlice";
import { useNavigate } from "react-router-dom";

function Header(): JSX.Element {

    const navigate = useNavigate();
    const modal = useSelector((state: { modals: ChosenModal }) => state.modals);
    const dispatch = useDispatch();

    function clickProfileBtn(): void {
        console.log('profile btn click');
        if (modal !== ChosenModal.profile) {
            dispatch(clearAllModals());
            dispatch(chosenModal(ChosenModal.profile));
        } else {
            dispatch(clearAllModals());
        }

    }

    return (
        <div className="Header">
            <button
                className="action-btn dark-btn logo"
                onClick={() => navigate('/home')}
            >Fridge Note
            </button>
            <button
                className="profile-btn"
                onClick={() => clickProfileBtn()}>
                <FaUser className="user-icon" />
            </button>
        </div>
    );
}

export default Header;
