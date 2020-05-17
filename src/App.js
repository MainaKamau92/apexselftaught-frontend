import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/navbar";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/*{*/}
                {/*    window.location.pathname !== '/' &&  window.location.pathname !== '/register' && <Navbar />*/}
                {/*}*/}
                <Switch>
                    {/*<Route exact path="/employees/new" component={NewEmployee} />*/}
                    <Route exact path="/profile/:username" component={Profile}/>
                    {/*<Route exact path="/employees" component={Employees} />*/}
                    {/*<Route exact path="/new-time-off" component={NewLeaveRecord} />*/}
                    {/*<Route exact path="/home" component={Home} />*/}
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/index" component={Home}/>
                    <Route exact path="/register" component={Register}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
