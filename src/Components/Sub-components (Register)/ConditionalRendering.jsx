import { useEffect } from "react";


const Renderer = ({ item, className, info, infoManager }) => {

    let months = [
        'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
        'aug', 'sep', 'oct', 'nov', 'dec'];
    let days = [];
    for (let i = 0; i < 31; i++) {
        const a = i + 1;
        days.push(a);
    }
    let years = [];
    for (let i = 1900; i < 2041; i++) {
        const b = i;
        years.push(b);
    }

    let Y = (
        years.map(ele => {
            return (
                <option id="year" value={ele} key={ele.id}>{ele}</option>
            )
        }
        )
    )

    const M = (
        months.map(ele => {
            return (
                <option value={ele} key={ele.id}>{ele}</option>
            )
        }
        )
    );

    const D = (
        days.map(ele => {
            return (
                <option value={ele} key={ele.id}>{ele}</option>
            )
        }
        )
    )

    const returner = (item) => {
        if (item === "Year") {
            return Y;
        } else if (item === "Month") {
            return M;
        } else if (item === "Day") {
            return D;
        }
    }

    return (
        <select name={{ item } + "s"} id={item} className={className}
            onChange={e => {
                if (item == "Year") {
                    infoManager(prev => {
                        return {
                            ...prev,
                            Year: e.target.value
                        }
                    })
                } else if (item == "Month") {
                    infoManager(prev => {
                        return {
                            ...prev,
                            Month: e.target.value
                        }
                    })
                } else {
                    infoManager(prev => {
                        return {
                            ...prev,
                            Day: e.target.value
                        }
                    })
                }
            }
            }
        >
            {returner(item)}
        </select>
    )
}

export default Renderer; 