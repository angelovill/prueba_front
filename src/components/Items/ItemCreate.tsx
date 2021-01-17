
import React, { useState } from 'react';
import * as ItemService from './ItemService';

export default ({}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const saveItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        ItemService.submitItem(name, description);
        setName('');
        setDescription('');
    }

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        className="form-control"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Descripción</label>
                    <input
                        type="text"
                        value={description}
                        className="form-control"
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" >Guardar</button>
            </form>
        </div>
    );
}