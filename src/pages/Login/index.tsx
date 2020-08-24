import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import Checkbox2 from '../../components/Checkbox';


// import logoImg from '../../assets/images/logo.svg'
// import landingImg from '../../assets/images/landing.svg'
// import studyIcon from '../../assets/images/icons/study.svg'
// import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import logoImg from '../../assets/images/logo.svg'
import './styles.css'
import InputLogin from '../../components/InputLogin';
import InputLoginPassword from '../../components/InputLoginPassword';
// import api from '../../services/api';


function Login() {

    
    // const [totalConnections,setTotalConnections] = useState(0);

    // useEffect(()=>{
    //     api.get('connections').then(response => {
    //         const { total } = response.data;

    //         setTotalConnections(total);
    //     })
    // }, []);


    return (
        <div id="page-login">
            <div className="logo-area">
                <div className="logo-container-login">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de<br /> estudos online</h2>
                </div>
            </div>

            <main>

                <div className="form-login-container">
                    <h3>Fazer Login</h3>

                    <form>
                        <fieldset>

                            <InputLogin
                                name="email"
                                placeholder="E-mail"
                            //value={name}
                            // onChange={(e) => { setName(e.target.value) }}
                            />

                            <InputLoginPassword
                                name="password"
                                placeholder="Senha"
                            //value={name}
                            // onChange={(e) => { setName(e.target.value) }}
                            />

                            <div className="save-password">
                                <div>

                                    <Checkbox2
                                    name="remembeme"
                                    label="Lembrar-me"
                                    />
                                   
                                </div>

                                <span>Esqueci minha senha</span>
                            </div>

                        </fieldset>

                        <button type="submit">
                            Entrar
                        </button>

                        <div className="signup">
                            <p>Não tem conta?</p>
                            <p className='msg-free'>É de graça <img src={purpleHeartIcon} alt="Coração Roxo"/></p>
                            <p>Cadastre-se</p>                            
                        </div>

                    </form>


                </div>

            </main>
           
        </div>
    );
}

export default Login;
