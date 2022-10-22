import { CgProfile } from 'react-icons/cg'; 
import { CgHome } from 'react-icons/cg'; 
import { FaUserFriends } from 'react-icons/fa'; 
import { HiOutlineLogout } from 'react-icons/hi'; 
import { FiSettings } from 'react-icons/fi'; 

    const item_names = [
        "Home", 
        "Profile",
        "Friends", 
        "Settings",
        "Log Out" 
    ]

    const icon = [
        <CgHome id="icon" />, 
        <CgProfile id="icon" />, 
        <FaUserFriends id="icon" />,
        <FiSettings id="icon" />, 
        <HiOutlineLogout id="icon" />
    ]

    const ret = {
        "itemN": item_names, 
        "itemJ": icon
    }

    export default ret; 