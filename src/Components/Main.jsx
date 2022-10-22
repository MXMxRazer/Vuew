import '../sass/SassComponents/main.css';
import Post from './Sub-Components (Main)/postLayout';
import Chat from './Sub-Components (Main)/chatLayout';
import Items from './Sub-Components (Main)/items';
import Object from '../Raw Data/MOCK_DATA';
import Data from '../Raw Data/INFORMATION';
import { useState } from 'react';

const Main = ({ }) => {

    let counter = -1;
    const a = [1, 2, 3, 4];

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