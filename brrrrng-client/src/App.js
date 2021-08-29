import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./component/MainPage/Main";
import LoginPage from "./component/LoginPage/Login";
import SignupPage from "./component/SignupPage/Signup";
import SearchPage from "./component/SearchPage/Search";
import ResultPage from "./component/SearchPage/Result";
import MyPage from "./component/Mypage/Main_menu/Dashboard";
import CarListPage from "./component/Mypage/Carlist_menu/Carlist";
import CarSearchPage from "./component/Mypage/Carlist_menu/CarSearch"
import AddrListPage from "./component/Mypage/Addrlist_menu/Addrlist";
import UserInfoPage from "./component/Mypage/EditProfile_menu/UserInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/search" component={SearchPage} exact />
          <Route path="/search/result" component={ResultPage} exact />
          <Route path="/mypage" component={MyPage} exact />
          <Route path="/mypage/carlist" component={CarListPage} exact />
          <Route path="/mypage/carsearch" component={CarSearchPage} exact />
          <Route path="/mypage/addrlist" component={AddrListPage} exact />
          <Route path="/mypage/user" component={UserInfoPage} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
