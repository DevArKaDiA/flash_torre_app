import logo from '../../img/logo192.png'

import { useHistory } from 'react-router-dom'
import React, { SyntheticEvent, useState } from 'react';
import torreApi from '../http';

interface Gnome{
    "person": {
        "professionalHeadline": String,
        "completion": Number,
        "showPhone": Boolean,
        "created": Date,
        "verified": Boolean,
        "flags": {
            "benefits": Boolean,
            "canary": Boolean,
            "enlauSource": Boolean,
            "fake": Boolean,
            "featureDiscovery": Boolean,
            "firstSignalSent": Boolean,
            "signalsOnboardingCompleted": Boolean,
            "importingLinkedin": Boolean,
            "onBoarded": Boolean,
            "remoter": Boolean,
            "signalsFeatureDiscovery": Boolean,
            "importingLinkedinRecommendations": Boolean,
            "contactsImported": Boolean,
            "appContactsImported": Boolean,
            "genomeCompletionAcknowledged": Boolean
        },
        "weight": Number
        "locale": String,
        "subjectId": Number,
        "picture": String, // LINK
        "hasEmail": Boolean,
        "isTest": Boolean,
        "name": String,
        "links": Array<{
            "id": String,
            "name": String,
            "address": String // LINK
        }>,
        "location": {
            "name": String,
            "shortName": String,
            "country": String,
            "latitude": Number,
            "longitude": Number,
            "timezone": String,
            "timezoneOffSet": Number
        },
        "theme": String,
        "id": String,
        "pictureThumbnail": String,
        "claimant": Boolean,
        "summaryOfBio": String,
        "weightGraph": String,
        "publicId": String

    },
    "stats": object,
    "strengths": object,
    "interests": object,
    "experiences": object,
    "awards": object,
    "jobs": object,
    "projects": object,
    "publications": object,
    "education": object,
    "opportunities": object,
    "languages": object,
    "personalityTraitsResults": object,
    "professionalCultureGenomeResults": object,
}



function WelcomeSearch(){
    let history = useHistory();
    let [isCorrectUsername, setIsCorrectUsername] = useState<Boolean>(false);
    let [Username, setUsername] = useState<String>('');

    

    function getUserGnome(userId : String): void {

        

        torreApi.get('bios/'+ userId).then((response) => {        
            console.log(response);
        }).catch((err:any) => {
            console.log(err);
        });

    }

    let hadleSubmit = (e:any) => {        
        e.preventDefault();
        console.log(Username);
        getUserGnome(Username);

        //history.push('/skills');
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

