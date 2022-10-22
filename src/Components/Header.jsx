import '../sass/SassComponents/main.css'; 
import SearchBox from './Sub-Components (Header)/searchBox';

const Header = () => {

    const Heading = (
        <div className='Head'>
            <div className='Head_up'>
                <div className='Head_up_left'>
                    <SearchBox />
                </div>
                
                <div className='Head_up_right'>
                </div>
            </div>
        </div>
    )
    return (
        Heading
    )
}

export default Header; 