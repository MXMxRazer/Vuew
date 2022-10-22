import '../sass/SassComponents/SecondaryMain.css';
import Post from './Sub-Components (Main)/postLayout';
import Chat from './Sub-Components (Main)/chatLayout';
import Items from './Sub-Components (Main)/items';
import Data from '../Raw Data/INFORMATION';
import { useState } from 'react';
import axios from 'axios';

const Main = ({ }) => {

    const [file, fileFun] = useState();

    let counter = -1;
    const a = [1, 2, 3, 4];

    const onChg = (e) => {
        const { files } = e.target;
        if (files && files.length !== 0) {
            fileFun(prev => files);
            console.log(file);
        }
    }

    const onClickFileHandler = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const upload = await axios({
            url: '',
            method: '',
            headers: {
                Authorization: `Bearer your token`
            },
            data: formData
        })
        console.log(`Upload: ${upload}`);
        const status = upload.status;
        if (status === 201) {
            console.log(`Successfully uploaded the file!`);
        }
    }



    const main = (
        <div className='main'>
            <div className='main_items'>
                {
                    Data["itemN"].map(item => {
                        counter++;
                        return (<Items
                            key={item.id}
                            item_name={item}
                            icon={Data["itemJ"][counter]}
                        />)
                    })
                }
            </div>
            <div className='main_left'>
                <form
                    onSubmit={e => e.preventDefault()}
                    className='file_inputs'>
                    <input
                        type={"file"}
                        id="file_input_handler"
                        onChange={onChg}
                        multiple
                    />
                    <button
                        onClick={onClickFileHandler}
                    >
                        Click me!
                    </button>
                </form>
                {
                    a.map(item => {
                        return (<Post
                            key={item.id}
                        />)
                    }
                    )
                }
            </div>
            <div className="main_right">
                <Chat
                />
            </div>
        </div>
    )

    return (
        main
    )
}

export default Main; 