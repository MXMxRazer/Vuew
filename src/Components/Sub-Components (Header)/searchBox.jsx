import '../../sass/SassComponents/main.css'; 
import { BsFacebook } from 'react-icons/bs'; 

const SearchBox = () => {

    const logo = (
        <div className="logo">
            <BsFacebook 
            id="facebook_logo" 
            className="point_me"
            />
        </div>
    )

    const inputField = (
        <div className="input_field">
            <input 
            placeholder="Search Box"
            id="field"
            />
        </div>
    )

    return (
        <div className='search_box'>
            {logo}
            {inputField}
        </div>
    )
}

export default SearchBox; 