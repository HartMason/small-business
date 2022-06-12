import Listings from "../components/Listings"
import { connect } from "react-redux";
import { removeBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
      businesses: state.businesses,
      user: state.user
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return { removeBusiness: (index) => dispatch(removeBusiness(index))}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Listings);