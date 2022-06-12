import CustomStack from "./CustomStack";
import CustomCard from "./CustomCard";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import Map from "./Map";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const AddNewListing = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listing, setListing] = useState({
    business_name: "",
    address: "",
    operating_hours: "",
    description: "",
  });

  const handleSubmit = () => {
      dispatch(props.newBusiness(listing))
      navigate("/Listings")
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setListing((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <CustomCard sx={{ margin: "40px auto 40px auto", textAlign: "center" }}>
      <h3>Add Business</h3>
      <CustomStack sx={{ width: "auto", margin: "40px" }}>
          {console.log(listing)}
        <TextField
          name="business_name"
          type="text"
          label="Name"
          variant="outlined"
          onBlur={(event) => {
            handleInput(event);
          }}
        />
        <TextField
          name="address"
          type="text"
          label="Address"
          variant="outlined"
          onBlur={(event) => {
            handleInput(event);
          }}
        />
        <TextField
          name="operating_hours"
          type="text"
          label="Hours"
          variant="outlined"
          onBlur={(event) => {
            handleInput(event);
          }}
        />
        <TextField
          name="description"
          type="text"
          label="Description"
          variant="outlined"
          onBlur={(event) => {
            handleInput(event);
          }}
        />
        <Button variant="contained" onClick={() => handleSubmit()}>
          Save
        </Button>
        <Map business={listing}/>
      </CustomStack>
    </CustomCard>
  );
};

export default AddNewListing;
