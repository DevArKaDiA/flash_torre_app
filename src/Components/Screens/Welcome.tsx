import logo from '../../img/logo192.png'

import { useHistory } from 'react-router-dom'

import React, { useState } from 'react';

// import { AxiosResponse } from 'axios';
import torreApi from '../http';
import Genoma from '../../interfaces/Genoma';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setGenoma, setStack, setUser } from '../store';



function mapStateToProps(state:any){
    console.log("mapStateToProps",state.userReducer.userid)
    return { username: state.userReducer.userid };
};

function WelcomeSearchConnected(props:any): JSX.Element{
    const history = useHistory();
    const dispatch = useDispatch();    
    let storeUsername = useSelector((state:any) => state.userReducer.userid);
    let genoma : Genoma | undefined = useSelector((state:any) => state.userReducer.genoma);

    let [isGenomaSet, setIsGenomaSet] = useState<Boolean>(genoma === undefined ? false : true);
    let [isCorrectUsername, setIsCorrectUsername] = useState<Boolean>(false);
    let [Username, setUsername] = useState<string>(props.username ? props.username : storeUsername);

    

    function getUserGnome(userId : string): void {
        let gnome: Genoma;
        torreApi.get('bios/'+ userId).then((response) => {        
            gnome = response.data;            
            dispatch(setGenoma(gnome));            
            history.push('/skills');
        }).catch((err:any) => {
            console.log(err);
        });

    }

    function hadleSubmit(e:any) {        
        e.preventDefault();
        dispatch(setUser(Username));
        if(!isGenomaSet || genoma?.person.publicId !== Username){
            dispatch(setStack([]));
            getUserGnome(Username);        
        }else{
            history.push('/skills');
        }
        
        
        
    }
    function onChangeUsername(e:React.FormEvent<HTMLInputElement>) {
        let regex: RegExp = /[.*+?^${}()|[\]\\]/g;
        let username: string = e.currentTarget.value;        
        setUsername(username);
        //Check user
        if(!regex.test(username)){
            if(!isCorrectUsername){
                
                setIsCorrectUsername(true);                
            }
            //Store User on app State Redux
            //...            
        }else{
            setIsCorrectUsername(false);
        }

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
                    defaultValue={Username}
                    onChange={(e) => onChangeUsername(e)}
                    />
                    <button 
                    onClick={(e) => hadleSubmit(e)}
                    disabled={Username !== undefined ? false : !isCorrectUsername}
                    >                        
                        Buscar
                    </button>
                </form>
            </div>
        </div>      
    );
}

const WelcomeSearch = connect(mapStateToProps)(WelcomeSearchConnected);

export default WelcomeSearch;

