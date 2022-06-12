import { connect } from "react-redux";
import AddNewListing from "../components/AddNewListing";
import { addBusiness } from "../redux/actions";


const mapDispatchToProps = (dispatch) => {
    return {
        newBusiness: (business) => dispatch(addBusiness(business))
    }
}

export default connect(null, mapDispatchToProps)(AddNewListing)