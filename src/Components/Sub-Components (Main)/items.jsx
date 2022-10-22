import "../../sass/SassComponents/main.css"; 
import Object from '../../Raw Data/MOCK_DATA'; 

const Items = ( { item_name, icon } ) => {

    const itemDesign = (
        <div className="item point_me">
            {icon}
            <div className="des">
                <p id="name">{item_name}</p>
            </div>
        </div>
    )

    return (
        <div className="item">
            {itemDesign}
        </div>
    )
}

export default Items; 