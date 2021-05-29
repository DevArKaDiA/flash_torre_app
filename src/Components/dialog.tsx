import { connect } from "react-redux";

function DialogConnected(props:any): JSX.Element{
    console.log('props',props.userid);
    return(
      <div>
        <h2>id: {props.username}</h2>
        <ul>
          {props.stack.map((s:any)=> <li itemType="square" >{s}</li>)}
        </ul>
      </div>
    );
  }
  
function mapStateToProps(state:any){
    console.log("mapStateToProps",state.userReducer.userid)
    return { username: state.userReducer.userid, stack: state.userReducer.stack};
};

const Dialog = connect(mapStateToProps)(DialogConnected);
export default Dialog;