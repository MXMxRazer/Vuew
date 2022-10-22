import { useState } from "react";
import "../../sass/SassComponents/main.css";
import ChatBox from '../Sub-Components (Main)/chatBoxLayout/ChatBox';

const Chat = ({ }) => {

    const [show, showFun] = useState(false);

    const toggler = () => {
        showFun(
            ele => !ele
        );
    }

    const chatDesign = (
        <div
            className="chat point_me"
            onClick={() => showFun(true)}
        >
            <img
                id="img"
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />

            <div className="des">
                <p id="name">Name</p>
                <p id="active">Active</p>
            </div>
        </div>
    );

    return (
        <div className="chat">
            {chatDesign}
            {show
                &&
                <ChatBox
                    toggle={toggler}
                />
            }
        </div>
    )
}

export default Chat; 