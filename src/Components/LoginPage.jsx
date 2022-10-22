import { useState } from 'react';
import '../sass/SassComponents/login.css';
import Register from './RegisterScreen';
import axios from "axios";
import { ImCross } from 'react-icons/im';
import { Link, redirect, useNavigate } from 'react-router-dom';

const Login = ({ sB }) => {

    const navigate = useNavigate();

    const [infoHolder, infoManager] = useState({
        email: '',
        password: ''
    })


    const getter = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/backend/display/email/${infoHolder.email}`);
            const homePath = `backend/${infoHolder.email}/Home`;
            const homeDefination = await axios.get(`http://localhost:3001/${homePath}`);
            console.log(`Headers: ${JSON.stringify(homeDefination.headers, null, 4)}`);
            console.log(`Response:\nName: ${res.data.first_name + ' ' + res.data.last_name}\nPassword: ${res.data.password}`);
            passwordChecker(infoHolder.password, res.data.password, homeDefination.status, homePath);
        } catch (err) {
            console.log(err);
        }
    }

    const passwordChecker = (passwordEntered, passwordCorrect, redirector, homeWay) => {
        if (passwordEntered !== passwordCorrect) {
            console.log(`Wrong Password!`);
            sB(<ImCross />, "Incorrect Password. Try Again!", "red");
            infoManager(prev => {
                return {
                    ...prev,
                    email: '',
                    password: ''
                }
            });
            return;
        } else if (passwordEntered === passwordCorrect) {
            (redirector === 200) ? navigate("/backend/" + infoHolder.email + "/Home") : console.log(`Server Error!`);
        }
    }

    const [val, fun] = useState(false);

    const clicks = () => {
        fun(!val);
    }

    const loginText = (
        <div className="login_text">
            <h1
                id="headin"
            >
                facebook
            </h1>
            <p
                id="para"
            >
                Connect with friends and the world around you on Facebook.
            </p>
        </div>
    )

    const createAccButton = (
        <div className="create_button">
            <button
                type={"button"}
                id="create_account_button"
                onClick={clicks}
            >
                Create new account
            </button>
        </div>
    )

    const buttonFields = (
        <div className="button">
            <button
                type={"submit"}
                id="login_button"
                onClick={e => {
                    e.preventDefault();
                    getter();
                }}
            >
                Log In
            </button>

            <button
                type={"button"}
                id="forgot_password_button"
            >
                Forgot password?
            </button>
        </div>
    )

    const inputFields = (
        <div className="input_fields">
            <input
                placeholder="Email or Mobile Number"
                type={"email"}
                id="email"
                value={infoHolder.email}
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
                placeholder="Password"
                type={"password"}
                id="password"
                value={infoHolder.password}
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
    )

    const loginBox = (
        <form action={e => { e.preventDefault(); }} className="login">
            <div className="login_text">
                {loginText}
            </div>
            {val && <Register
                onclick={clicks}
                fun={sB}
            />}
            <div className='login_box'>
                {inputFields}
                {buttonFields}
                {createAccButton}
            </div>
        </form>
    )

    return (
        loginBox
    )
}

export default Login; 