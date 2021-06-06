import "antd/dist/antd.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import HeaderView from "./component/screen/HeaderView";
import HomeScreen from "./component/screen/homeScreens/HomeScreen";
import SingleMenu from "./component/screen/homeScreens/SingleMenu";
import ResturantCart from "./component/screen/resturants/ResturantCart";

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderView/>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/menu" component={ResturantCart} />
          <Route exact path="/menu/:id" component={SingleMenu} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
