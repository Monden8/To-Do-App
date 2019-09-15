import update from 'immutability-helper';

/**
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Go to Interview at 14:00pm.',
            completed: false
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
