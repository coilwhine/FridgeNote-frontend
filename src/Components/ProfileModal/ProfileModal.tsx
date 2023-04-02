import { FaPlus } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import "./ProfileModal.scss";
import { useSelector } from "react-redux";
import { ChosenModal } from "../../App/modalsSlice";


function ProfileModal(): JSX.Element {

    const modal = useSelector((state: { modals: ChosenModal }) => state.modals);

    function goToListsClick(): void {
        console.log('Lists...');
    }

    function logOutClick(): void {
        console.log('LogOut...');
    }

    function addListClick() {
        console.log('addList...');
    }

    function aditProfileClick() {
        console.log('editProfile...');
    }

    function listItemClick(num: any) {
        console.log(`${num} - listItem...`);
    }

    return (
        <div className={modal === ChosenModal.profile ? "ProfileModal activate-modal" : "ProfileModal"} >
            <header>
                <img src="./src/assets/images/testImg.png" alt="Profile Image" />
                <div className="name">
                    <span>Daniel</span>
                    <span>Hen</span>
                </div>
                <button
                    className="action-btn light-btn edit-btn"
                    onClick={() => aditProfileClick()}>
                    <MdModeEdit className="edit-icon" />
                </button>
            </header>
            <div className="shopping-list-section">
                <h3>Shopping lists</h3>
                <div className="shopping-list-wraper">
                    <ul className="shopping-list">
                        <li className="list-item" onClick={() => listItemClick(1)}>
                            <h4 className="list-name">Long list name for testing</h4>
                            <span className="items-in-list">20 items</span>
                        </li>
                        <li className="list-item" onClick={() => listItemClick(2)}>
                            <h4 className="list-name">Short list name</h4>
                            <span className="items-in-list">8 items</span>
                        </li>
                    </ul>
                    <div className="add-btn-wraper">
                        <button
                            className="add-list-btn action-btn light-btn"
                            onClick={() => addListClick()}>
                            <FaPlus className="add-list-icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="buttons-section">
                <button className="action-btn dark-btn to-lists-btn" onClick={() => goToListsClick()}>Lists</button>
                <button className="action-btn logout-btn" onClick={() => logOutClick()}>Logout</button>
            </div>
        </div>
    );
}

export default ProfileModal;
