import { Component, ReactElement } from "react";
import logo from '../../img/logo192.png'

import { Link, NavLink, Redirect, useHistory } from 'react-router-dom'
import { JsxElement } from "typescript";




function WelcomeSearch(){
    let history = useHistory();

    let hadleSubmit = (e:any) => {        
        e.preventDefault();
        history.push('/skills');
    }

    return(
        <div>
            <div>          
                <img src={logo} alt="" />
                <form>
                    <input type="text" name="" id="" />                    
                    <button onClick={(e) => hadleSubmit(e)}>Buscar</button>
                </form>
            </div>
        </div>      
    );
}

export default WelcomeSearch;

