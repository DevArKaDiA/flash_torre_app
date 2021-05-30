import axios from "axios";
import { MouseEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { JsxElement } from "typescript";
import Genoma from "../../interfaces/Genoma";
import userState from "../../interfaces/userState";
import Dialog from "../dialog";
import iconsMap from "../iconsMap";
import { addStackLenguaje, removeStackLenguaje } from "../store";


// let skillsPlaceHolder: Array<skill> = [
//     {
//         name: 'Python',
//         ico: 'python',
//         onclick: () => {}
//     }
    
// ]

interface skill {
    name:string,
    ico?:string,
}



function SkillsSection(){

}

function SkillsScreen(){
    let history = useHistory();
    let genome:Genoma = useSelector((state: any) => state.userReducer.genoma);
    let stack = useSelector((state: any) => state.userReducer.stack);    
    let [skillsSelected, setSkillsSelected] = useState<string[]>(stack);
    
    const dispatch = useDispatch();

    function Skill(props:skill){    
        let isSelected = skillsSelected.includes(props.name) ? 'bg-danger' : '';
        let className = 'devicon-'+ props.ico;
        
        return(        
            <div onClick={()=> onClickSkill(props)} className={'col-3 ' + isSelected}>            
                {
                    props.ico != undefined ? <i className={className}></i> : '' 
                    
                }
                <p>{props.name}</p>
            </div>
        );
    }
    

    let onClickSkill = (props:any) => {               
        if(stack.includes(props.name)){
            setSkillsSelected(skillsSelected.filter((i)=> i != props.name));
            dispatch(removeStackLenguaje(props.name));    
        }else{
            setSkillsSelected(skillsSelected.concat(props.name));
            dispatch(addStackLenguaje(props.name));
        }            
    }

    if(genome == undefined){
        history.push('/')
    }
    let strengths = genome.strengths.map((s) => {
        let names = s.name.split(' ')        
        names[0] = names[0].includes('+') ? names[0].replaceAll('+', 'plus'): names[0];
        names[0] = names[0].includes('#') ? names[0].replaceAll('#', 'sharp'): names[0];
        names[0] = names[0].includes('MSSQL') ? names[0].replaceAll('MSSQL', 'microsoftsqlserver'): names[0];
        
        let posibleIcons = iconsMap.filter((i) => {            
            if (i.name.includes(names[0].toLowerCase())){
                return i
            }            
        });

        posibleIcons = posibleIcons.sort((pi1, pi2) => pi1.name.length - pi2.name.length)
        let skillobj: skill = {
            name: s.name,
            ico: posibleIcons[0] != undefined ? posibleIcons[0].name + '-' + posibleIcons[0].versions.font[0] : undefined            
        }
        return({'icon': Skill(skillobj)});
    });
    
    
    let onSelectLenguaje = (e:any):void =>{
        
    }

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
                                strengths.map((s) => { 
                                    return(s.icon);
                                })
                            }    
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="col" onClick={() => history.push('/')}>Back</button>
                    <button onClick={onNextClick} className="col">Next</button>
                </div>
            </div>
            <Dialog/>
        </div>
    );
}


export default SkillsScreen;