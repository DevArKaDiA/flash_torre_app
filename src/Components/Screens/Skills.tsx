import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { JsxElement } from "typescript";


let testSkills: Array<skill> = [
    {
        name: 'Python',
        ico: 'python'
    },
    {
        name: 'React',
        ico: 'react'
    },
    {
        name: 'React',
        ico: 'react'
    },
    {
        name: 'React',
        ico: 'react'
    },
    {
        name: 'React',
        ico: 'react'
    },
    
]

interface skill {
    name:string,
    ico?:string
}

function Skill(props:skill){
    return(        
        <div className="col-3">
            <i className={'devicon-'+ props.ico + '-plain-wordmark'}/>
        </div>
    );
}


function SkillsScreen(){    
    let skillsEndPoint:string = "https://torre.co/api/genome/bios/jfernandorojasc/implicit-skills";    
    let history = useHistory();

    let onNextClick = ():void => {
        history.push('/type');
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div>
                    Select your Stack
                </div>
                <div className="row">
                    <div className="col-3 bg-warning">
                        <h2>LOGO</h2>
                    </div>
                    <div className="col-9 bg-secondary">
                        <h2>SKILLS</h2>
                        
                        <div className="row">
                            {
                                testSkills.map((s) => { 
                                    return(<Skill name={s.name} ico={s.ico}/>);
                                })
                            }    
                        </div>
                    </div>
                </div>
                <div className="row">                    
                    <button className="col">Back</button>
                    <button onClick={onNextClick} className="col">Next</button>
                </div>
            </div>
        </div>
    );
}


export default SkillsScreen;