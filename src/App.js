import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem} from './actions';
import style from './App.css'

function App() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();

    function handleAddItem(e) {
        e.preventDefault();
        dispatch(addItem(name, price));
        setName('');
        setPrice('');
    }

    function handleRemoveItem(id) {
        dispatch(removeItem(id));
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <form onSubmit={handleAddItem}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Price:
                    <input
                        type="text"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </label>
                <br/>
                <button type="submit">Add Item</button>
            </form>


            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;




