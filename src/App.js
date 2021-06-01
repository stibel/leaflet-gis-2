import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header";
import { StyleContextProvider } from "./contexts/StyleContext";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";

function App() {
  return (
    <StyleContextProvider>
      <Router>
        <Header destFirst={"Strona główna"} destSecond={"Mapa"} />
        <Switch>
          <Route exact path={'/'}>
            <HomeScreen />
          </Route>
          <Route path={"/map"}>
            <MapScreen />
          </Route>
          <Route path={'*'}>
            <Redirect exact to={'/'} />
          </Route>
        </Switch>
      </Router>
    </StyleContextProvider>
  );
}

export default App;
