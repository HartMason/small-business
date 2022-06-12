import { connect } from "react-redux";
import Navigation from "../components/Navigation"
import { logOut } from "../redux/actions"


const mapStateToProps = (state) => {
  return {  
    user:state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return { logOut: () => dispatch(logOut())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);