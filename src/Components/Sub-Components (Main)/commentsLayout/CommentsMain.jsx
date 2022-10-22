import '../../../sass/SassComponents/main.css'; 

const CommentSection = () => {

    const commentDesign = (
        <div className="comment_person">
            <div className='comment_background'>
                <img 
                id="img"
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>

                <div className="info">
                    <p id="name">Name</p>
                    <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem, sequi temporibus, provident maiores nemo rerum aspernatur veritatis totam doloremque ipsam facilis eos illum minus quo? Magnam quos assumenda quas.</p>
                </div>
            </div>
        </div>
    )

    const mainBody = (
        <div className='comment_main'>
            {commentDesign}
        </div>
    )

    return (
        mainBody
    )
}

export default CommentSection; 