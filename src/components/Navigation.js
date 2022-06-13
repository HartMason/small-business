import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ButtonAppBar(props) {
  const dispatch = useDispatch();
  const { user } = props;

  const handleClick = () => {
    console.log("logout");
    dispatch(props.logOut());
  };

  useEffect(() => {
    console.log(user.online, "effect");
  }, [user.online]);

  console.log(props, "nav");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navBar" position="static" style={{backgroundColor: "rgb(60,179,113)"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Business
          </Typography>
          {console.log(user.online, "check online")}
          {user.online === true ? (
            <Button onClick={handleClick} color="inherit">
              Logout
            </Button>
          ) : (
            <Button component={Link} to={"/"} color="inherit">
              Login
            </Button>
          )}
          <Button component={Link} to={"/Listings"} color="inherit">
            Listings
          </Button>
          <Button component={Link} to={"/AddNewListing"} color="inherit">
            Add New Listing
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
