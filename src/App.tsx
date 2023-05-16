import React, {useState} from 'react';
import {Routes, Route, NavLink, Navigate} from 'react-router-dom';
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
                    <NavLink to="/" end>Главная</NavLink>
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
    const [isAuth, setAuth] = useState<boolean>(false);
    return (
        <div className="App">
            <Navigation />
            <button onClick={() => setAuth(!isAuth)}>Получить права суперпользователя</button>
            <Routes>
                <Route path="/" element={<h2>Главная страница</h2>} />
                <Route path="/entities" element={<EntityListPage />} />
                <Route path="/entities/:id" element={<EntityDetailPage />} />
                <Route path='/ggwp' element={isAuth ? <AuthenticatedPage /> : <Navigate to={'/'} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;
