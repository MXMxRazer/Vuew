import '../../../sass/SassComponents/main.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const ChatBox = ({ toggle }) => {

    const [temp, setTemp] = useState("");
    const [send_this, send_this_function] = useState([]);

    const chatHead = (
        <div className="chat_head">
            <p>
                Chat Head (Name)
            </p>
            <AiFillCloseCircle
                id="close_icon"
                className="point_me"
                onClick={toggle}
            />
        </div>
    )

    const chat = (
        total.map(item => {
            return (
                <div
                    className={(item.direction === "right") ? "chat" : "receiver_message"}
                >
                    <div className="chat_message">
                        <p
                            id="message"
                        >{item.message}
                        </p>
                    </div>
                </div>
            )
        })
    )

    const chatMain = (
        <div className="chat_main">
            {/* {chat} */}
        </div>
    )

    const chatInput = (
        <div className="chat_input">
            <div className="text_input">
                <input
                    id="writing_section"
                    placeholder='Aa'
                />
                <BsFillEmojiSmileFill
                    id="emoji"
                    className="point_me"
                />
            </div>
        </div>
    )

    const chatBox = (
        <div className='chat_box'>
            {chatHead}
            {chatMain}
            {chatInput}
        </div>
    );

    return (
        chatBox
    )
}


export default ChatBox; 