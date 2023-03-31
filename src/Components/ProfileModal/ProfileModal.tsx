import { FaPlus } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import "./ProfileModal.scss";

function ProfileModal(): JSX.Element {

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
        <div className="ProfileModal">
            <header>
                <img src="src/assets/testImg.png" alt="Profile Image" />
                <div className="name">
                    <span>Daniel</span>
                    <span>Hen</span>
                </div>
                <button
                    className="action-btn edit-btn"
                    onClick={() => aditProfileClick()}>
                    <MdModeEdit className="edit-icon" />
                </button>
            </header>
            <div className="shopping-list-section">
                <h3>Shopping lists</h3>
                <div className="shopping-list-wraper">
                    <ul className="shopping-list">
                        <li className="list-item" onClick={() => listItemClick(1)}>testing very long list</li>
                        <li className="list-item" onClick={() => listItemClick(2)}>test short list</li>
                    </ul>
                    <div className="add-btn-wraper">
                        <button
                            className="add-list-btn action-btn"
                            onClick={() => addListClick()}>
                            <FaPlus className="add-list-icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="buttons-section">
                <button className="action-btn to-lists-btn" onClick={() => goToListsClick()}>Lists</button>
                <button className="action-btn logout-btn" onClick={() => logOutClick()}>Logout</button>
            </div>
        </div>
    );
}

export default ProfileModal;
