import BusinessDetailsPage from "../components/BusinessDetailsPage"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
      businesses: state.businesses,
    };
  };
  
  export default connect(mapStateToProps)(BusinessDetailsPage);