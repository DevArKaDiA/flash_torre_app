import logo from '../../img/logo192.png'

import { useHistory } from 'react-router-dom'
import React, { SyntheticEvent, useState } from 'react';





function WelcomeSearch(){
    let history = useHistory();
    let [isCorrectUsername, setIsCorrectUsername] = useState<Boolean>(false);

    let hadleSubmit = (e:any) => {        
        e.preventDefault();
        history.push('/skills');
    }

    let onChangeUsername = (e:React.FormEvent<HTMLInputElement>) => {
        let regex: RegExp = /[.*+?^${}()|[\]\\]/g;
        let username: string = e.currentTarget.value;
        //Check user
        if(!regex.test(username)){
            if(!isCorrectUsername) setIsCorrectUsername(true);

            //Store User on app State Redux
            //...
            return;
        }
        setIsCorrectUsername(!isCorrectUsername);

    }

    return(
        <div>
            <div>          
                <img src={logo} alt="" />
                <form>
                    <input 
                    className={" " + isCorrectUsername ? '' : ''}
                    type="text" 
                    name="username" 
                    id="username" 
                    onChange={(e) => onChangeUsername(e)}
                    />
                    <button 
                    onClick={(e) => hadleSubmit(e)}
                    disabled={!isCorrectUsername}
                    >                        
                        Buscar
                    </button>
                </form>
            </div>
        </div>      
    );
}

export default WelcomeSearch;

