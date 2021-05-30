import { connect } from "react-redux";

function DialogConnected(props:any): JSX.Element{
    console.log('props',props.userid);
    return(
      <div>
        <h2>id: {props.username}</h2>
        <h2>focus: {props.stackFocus}</h2>
        <h2>compensation: {props.compensation}$/H</h2>
        <ul>
          {props.stack.map((s:any)=> <li itemType="square" >{s}</li>)}
        </ul>        
      </div>
    );
  }
  
function mapStateToProps(state:any){
    console.log("mapStateToProps",state.userReducer.userid)
    return { username: state.userReducer.userid, 
      stack: state.userReducer.stack, 
      stackFocus: state.userReducer.stackFocus,
      jobTime: state.userReducer.jobTime,
      compensation: state.userReducer.compensation,      
    };
};

const Dialog = connect(mapStateToProps)(DialogConnected);
export default Dialog;