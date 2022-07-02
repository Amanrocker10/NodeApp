import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Home = () => {
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.user)
  console.log("Home", myData)

  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page {myData.name}</h1>
        <hr />
        <p>Home Hi Welcome to my shop.</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
