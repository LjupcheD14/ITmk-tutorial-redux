let nextItemId = 0;

export function addItem(name, price) {
    return {
        type: 'ADD_ITEM',
        payload: {
            id: nextItemId++,
            name,
            price,
        },
    };
}

export function removeItem(id) {
    return {
        type: 'REMOVE_ITEM',
        payload: id,
    };
}



