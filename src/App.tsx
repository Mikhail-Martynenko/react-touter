import React, {useState} from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import EntityDetailPage from "./pages/EntityDetailPage";
import EntityListPage from "./pages/EntityListPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css"
import AuthenticatedPage from "./pages/AuthenticatedPage";

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" exact>Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/entities">Список сущностей</NavLink>
                </li>
                <li>
                    <NavLink to="/ggwp">Только для авторизованных</NavLink>
                </li>
            </ul>
        </nav>
    );
};


const App = () => {
    const [isAuth, setAuth] = useState(false);

    const handleLogin = () => {
        setAuth(true);
    };

    const handleLogout = () => {
        setAuth(false);
    };

    return (
        <Router>
            <div className="App">
                <Navigation />
                <button onClick={isAuth ? handleLogout : handleLogin}>
                    {isAuth ? 'Выйти' : 'Войти'}
                </button>
                <Switch>
                    <Route path="/" exact component={() => <h2>Главная страница</h2>} />
                    <Route path="/entities/:id" component={EntityDetailPage} />
                    <Route path="/entities" component={EntityListPage} />
                    <Route path='/ggwp'>
                        {isAuth ? <AuthenticatedPage /> : <Redirect to={'/'} />}
                    </Route>
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
