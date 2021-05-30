import React, { ChangeEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Dialog from "../dialog";
import { setStackFocus } from "../store";

function DevType(){
    const navigator = useHistory();
    const dispatch = useDispatch();
    let storeSpecialty = useSelector((state: any) => state.userReducer.stackFocus);
    let [specialty, setSpecialty] = useState<string>(storeSpecialty == undefined ? 'Full-Stack': storeSpecialty);    

    const devSpecialty = [
        {
            "name": 'Back-End',
            "range": [0,30]
        },
        {
            "name": 'Full-Stack',
            "range": [30,70]
        },
        {
            "name": 'Front-End',
            "range": [70,100]
        }
    ]

    function onRangeChange(e: React.FormEvent<HTMLInputElement> | undefined) : void{
        if(e != undefined){
            devSpecialty.forEach((ds) => {
                let value = parseInt(e.currentTarget.value);
                if(value > ds.range[0] && value < ds.range[1]){
                    setSpecialty(ds.name);
                }
            });
        }        
    }

    
    return(
        <div className="container-fluid">
            <div className="row">           
                <div className="row">
                    <div>
                        Now select your specialty
                    </div>
                    <div className="col-3 bg-warning">
                        <h2>LOGO</h2>
                    </div>
                    <div className="col-9 bg-secondary">
                        <div className="row">           
                            <h2 className={specialty == "Back-End" ? 'col bg-danger': 'col'}>Back-End</h2>           
                            <h2 className={specialty == "Front-End" ? 'col bg-danger': 'col'}>Front-End</h2>           
                        </div>
                        <input onChange={(e) => onRangeChange(e)} type="range" defaultValue="50" className="form-range" />
                        <h2 className={specialty == "Full-Stack" ? 'col bg-danger': 'col'}>FullStack</h2>
                    </div>
                </div>
                <div className="row">                    
                    <button onClick={() => navigator.push('/skills')} className="col">Back</button>
                    <button onClick={() => {
                        dispatch(setStackFocus(specialty));
                        navigator.push('/jobTime');
                    }} className="col">Next</button>
                </div>
            </div>
            <Dialog/>
        </div>
    );
}

export default DevType;