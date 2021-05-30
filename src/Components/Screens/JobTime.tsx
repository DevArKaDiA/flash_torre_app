import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Dialog from "../dialog";
import { setJobTime, setPaymentAmount } from "../store";

interface skillRoleInterface {
    "skill/role": {
        'text': string,
        'experience': "potential-to-develop"
    }    
}

interface compensationInterface {
    "compensation" : {
        "amount": number,
        "currency": "USD$",
        "periodicity": "hourly",
        "scope": "with-compensation-only"
    }
}

interface bestForInterface {
    "bestfor": {
        "username": string
    }    
}

interface jobTypeInterface{
    "type": {
        "code": string
    }
}

interface statusInterface{
    "status": {
        "code": string
    }
}



function JobTime(){
    let JobTimeType = [
        {'name': "Full Time", 'key': "full-time-employment"},
        {'name': "Part Time", 'key': "part-time-employment"},        
        {'name': "Internships", 'key': "internships"},
    ]

    
    let storedJobTimeType = useSelector((state: any) => state.userReducer.jobTime);
    let selectedStack = useSelector((state: any) => state.userReducer.stack);        
    let compensation = useSelector((state: any) => state.userReducer.compensation);        
    let [paymentAmount, setPaymentAmountstate] = useState<number>(compensation === undefined ? 0 : compensation);
    let [jobTimeType, setJobTimeType] = useState<{'name':string, 'key': string}>(storedJobTimeType === undefined ? JobTimeType[0] : storedJobTimeType);    

    let [result, setResult] = useState<[]>([]);
    const navigator = useHistory();
    const dispatch = useDispatch();
    
    function onClickHandle(e:any){
        dispatch(setJobTime(jobTimeType.key))
        dispatch(setPaymentAmount(paymentAmount));
        console.log("SELECTED STACK: ", selectedStack)
        let http = axios.create();
        let payload: {'and': (
            skillRoleInterface
            |compensationInterface
            |jobTypeInterface
            |statusInterface)[]} = {
            'and': []
        }

        let jobType: jobTypeInterface = {
            "type": {
                "code": jobTimeType.key
            }
        }

        payload.and.push(jobType)

        let compensation: compensationInterface = {
            "compensation" : {
                "amount": paymentAmount,
                "currency": "USD$",
                "periodicity": "hourly",
                "scope": "with-compensation-only"
            }
        }

        payload.and.push(compensation);
        
        let status: statusInterface = {
            "status": {
                code:"open"
            }
        }


        payload.and.push(status);

        selectedStack.forEach((element:string) => {
            let newSkill: skillRoleInterface = {
                "skill/role" : {
                    "text": element,                    
                    "experience": "potential-to-develop"

                }
            }
            payload.and.push(newSkill);
        });

        let corsProxy = "https://cors-anywhere.herokuapp.com/"
        http.post(
            'https://search.torre.co/opportunities/_search/?size=50&aggregate=1',
            payload
            ).then((response:any) => {    
                console.log(response.data);
                setResult(response.data.results);
            });

    }

    return(
        <div className="container-fluid">
            <div className="row">           
                <div className="row">
                    <div>
                        Work Time and Search:
                    </div>
                    <div className="col-3 bg-warning">
                        <h2>LOGO</h2>
                    </div>
                    <div className="col-9 bg-secondary">
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    {JobTimeType.map((i)=>{
                                        let isSelected = jobTimeType.key == i.key ? ' bg-danger' : '';
                                        return(
                                            <div className={'col-4 ' + isSelected}>
                                                <div onClick={()=> setJobTimeType(i)}>{i.name}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>  
                        <div className="row">
                            <h4>Payment Range</h4>
                            <div className="col-3">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <label htmlFor="payment">Payment Per Hour: $ / h</label>
                                        <input className="form-control" onChange={(e) => {
                                            setPaymentAmountstate(parseInt(e.currentTarget.value));
                                            dispatch(setPaymentAmount(parseInt(e.currentTarget.value)));
                                        }} type="number" name="" id="payment" />
                                    </div>          
                                </form>
                            </div>
                        </div>                      
                    </div>
                </div>
                <div className="row">                    
                    <button onClick={()=>{
                        navigator.push('/type')
                    }} className="col">Back</button>
                    <button onClick={(e)=>{onClickHandle(e)}} className="col">Look for opportunities with f(T) app</button>
                </div>
            </div>
            <div className="row">
                {
                    result.map((r:any) => {
                        
                        const Job = (props:any) => {
                            return(
                                <div className="card col-1">
                                    <div className="card-header">
                                        <p>{props.name}</p>
                                        <a href={"https://torre.co/jobs/" + props.code}>Read More</a>
                                    </div>
                                </div>
                            );
                        }
                        
                        return(<Job name={r.objective} code={r.id}/>)
                        
                    })
                }
            </div>
            <Dialog/>
        </div>
    );
}

export default JobTime;