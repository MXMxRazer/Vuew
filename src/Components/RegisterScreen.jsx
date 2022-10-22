import '../sass/SassComponents/login.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import Renderer from './Sub-components (Register)/ConditionalRendering';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TiTick } from 'react-icons/ti';

const Register = ({ onclick, fun }) => {

    const getter = async () => {
        try {
            const URL = 'http://localhost:3001/backend/inputs/';
            const OPTIONS = {
                firstName: info.firstName,
                lastName: info.lastName,
                email: info.email,
                password: info.password,
                year: info.Year,
                month: info.Month,
                day: info.Day,
                gender: info.Gender
            };
            const req = await axios.post(URL, OPTIONS);

            if (req.status === 201) {
                fun(<TiTick />, "Account Created Successfully!", "green");
                onclick();
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getter();
    }, []);

    const policy_first = "People who use our service may have uploaded your contact information to Facebook. Learn more.";
    const policy_second = "By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.";
    const [info, infoManager] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        Year: "",
        Month: "",
        Day: "",
        Gender: ""
    });

    const selectors = [
        'Year', 'Month', 'Day'
    ];
    const radioSelectors = [
        'Male', 'Female'
    ];

    const contents = (
        <div className='register_box_contents'>
            <form method='post' className='register_form'>
                <div className='register_head'>
                    <span className='text'>
                        <h3>Sign Up</h3>
                        <small>It's quick and easy.</small>
                    </span>
                    <span className='close'>
                        <AiFillCloseCircle
                            className='point_me register_close'
                            onClick={onclick}
                        />
                    </span>
                </div>
                <div className='text_fields'>
                    <span className='name_field'>
                        <input
                            type={"text"}
                            placeholder={"First Name"}
                            id="first_name"
                            onChange={e => {
                                infoManager(prev => {
                                    return {
                                        ...prev,
                                        firstName: e.target.value
                                    }
                                })
                            }}
                        />
                        <input
                            type={"text"}
                            placeholder={"Last Name"}
                            id="last_name"
                            onChange={e => {
                                infoManager(prev => {
                                    return {
                                        ...prev,
                                        lastName: e.target.value
                                    }
                                })
                            }}
                        />
                    </span>

                    <input
                        type={"email"}
                        placeholder={"Email"}
                        id="email"
                        onChange={e => {
                            infoManager(prev => {
                                return {
                                    ...prev,
                                    email: e.target.value
                                }
                            })
                        }}
                    />
                    <input
                        type={"password"}
                        placeholder={"Password"}
                        id="password"
                        onChange={e => {
                            infoManager(prev => {
                                return {
                                    ...prev,
                                    password: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className='select_fields'>
                    {
                        selectors.map(item => {
                            return (
                                <div className='selection_fields' key={item.id}>
                                    <label
                                        for={item}
                                        className="selection_names"
                                    >
                                        {item}:
                                    </label>
                                    <Renderer
                                        item={item}
                                        className="options"
                                        info={info}
                                        infoManager={infoManager}
                                    />
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <div className='radio_fields'>
                    <p
                        id="radio_header"
                    >
                        Gender:
                    </p>
                    {
                        radioSelectors.map(item => {
                            return (<div className={'radio_field'} key={item.id}>
                                <label for={item.toLowerCase()}>{item}</label>
                                <input
                                    type={"radio"}
                                    id={item.toLowerCase()}
                                    name={{ item } + "_name"}
                                    value={item}
                                    onClick={e => {
                                        infoManager(prev => {
                                            return {
                                                ...prev,
                                                Gender: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>)
                        }
                        )
                    }
                </div>
                <div className='policies'>
                    <p id="policy1">
                        {policy_first}
                    </p>
                    <p id="policy_2">
                        {policy_second}
                    </p>
                </div>
                <div className='sup_button'>
                    <button
                        id="sign_button"
                        type={"submit"}
                        onClick={e => {
                            e.preventDefault();
                            getter();
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )

    const registerBox = (
        <div className='register_box'>
            {contents}
        </div>
    )

    let register = (
        <div className="register">
            {registerBox}
        </div>
    )

    return (
        register
    )
}

export default Register;