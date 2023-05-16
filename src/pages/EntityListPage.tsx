import React from 'react';
import {Link} from "react-router-dom";

const EntityListPage = () => {
    return (
        <div>
            <h2>Список сущностей</h2>
            <ul>
                <li>
                    <Link to="/entities/1">Сущность 1</Link>
                </li>
                <li>
                    <Link to="/entities/2">Сущность 2</Link>
                </li>
                <li>
                    <Link to="/entities/3">Сущность 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default EntityListPage;