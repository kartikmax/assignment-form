import { useState } from "react";
import "./App.css";
import { Card, Grid } from "@mui/material";
import Counter from "./components/Counter";
import TextEditor from "./components/TextEditor";
import UserData from "./components/UserData";
import UserList from "./components/UserList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid container spacing={2} item xs={12} style={{ height: "50%" }}>
          <Grid item xs={7} style={{ height: "100%" }}>
            <TextEditor />
          </Grid>
          <Grid item xs={5} style={{ height: "100%" }}>
            <UserData />
           
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2} style={{ height: "50%" }}>
          <Grid item xs={5} style={{ height: "100%" }}>
            <Counter />
          </Grid>
          <Grid item xs={7} style={{ height: "100%" }}>
          <UserList/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
