import React, { useState } from "react";
import * as Components from './LoginStyles';
import { GoogleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import Cookies from "universal-cookie";

function Login() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [signIn, toggle] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        navigate("/xiaomi");
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        if (validateEmail(email)) {
            setError('');
            handleSignIn();
        } else {
            setError('Email không hợp lệ');
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token-nghiep", result.user.refreshToken);
            console.log(result.user.displayName);
            localStorage.setItem('user', result.user.displayName);
            //   console.log(result);
            navigate('/xiaomi');

        } catch (err) {
            console.error(err);
        }
    };

    

    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button onClick={handleButtonClick}>Sign In</Components.Button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
                            <div style={{ height: 30, width: 30 }} onClick={signInWithGoogle}>
                                <img style={{ width: '100%',cursor: 'pointer' }} src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png" />
                            </div>
                            <div style={{ height: 30, width: 30, margin: '0 20px' }}>
                                <img style={{ width: '100%',cursor: 'pointer' }} src="https://mewxu.net/wp-content/uploads/2017/03/fb_icon.png" />
                            </div>
                            <div style={{ height: 30, width: 30 }}>
                                <img style={{ width: '100%',cursor: 'pointer' }} src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" />
                            </div>
                        </div>

                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>
    );
}

export default Login;
