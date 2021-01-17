import React, { useEffect, useState } from 'react';
import * as ItemService from './ItemService';
import  Iitem from './ItemTypes';
import ItemCreate from './ItemCreate';

export default () => {

    const [items, setItems] = useState<Iitem[]>([]);

    const fetchItems = async () => {
        const payload = await ItemService.fetchItems();
        setItems(payload.data);
    }

    const deleteItem = async (item: string) => {
        const payload = await ItemService.deleteItem(item);
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Crear nuevo item</h1>
            <ItemCreate />
            <hr/>

            <h1>Listado de items</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Eliminado</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        return (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    {item.deleted ? "Eliminado" : "Activo"}
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteItem(item._id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}