import { connect } from "react-redux";

function DialogConnected(props:any): JSX.Element{
    console.log('props',props.userid);
    return(
      <h1>{props.username}</h1>
    );
  }
  
function mapStateToProps(state:any){
    console.log("mapStateToProps",state.userReducer.userid)
    return { username: state.userReducer.userid };
};

const Dialog = connect(mapStateToProps)(DialogConnected);
export default Dialog;