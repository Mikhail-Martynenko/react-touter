import React, {useState} from 'react';
import "./App.css"
import Navigation from "./router/Navigation";
import AllRouters from "./router/AllRouters";
export const MainPage = () => <h1>main</h1>
const App = () => {
    const [isAuth, setAuth] = useState<boolean>(false);

    return (
        <div className="App">
            <Navigation />
            <button onClick={() => setAuth(!isAuth)}>{isAuth ? 'Отказаться от прав суперпользователя' : 'Получить права суперпользователя'}</button>
            <AllRouters isAuth={isAuth}/>
        </div>
    );
};
export default App;
