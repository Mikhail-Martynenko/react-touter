import React from 'react';
import {useParams} from "react-router-dom";

const EntityDetailPage = () => {
    const {id} = useParams<{ id: string }>()
    return (
        <div>
            <h2>Детальная страница сущности {id}</h2>
            <span>Дополнительная информация о сущности {id}</span>
        </div>
    );
};

export default EntityDetailPage;