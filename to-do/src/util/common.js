import React from 'react';

/**
 * @param  {Object} object     
 * @param  {Array}  Array 
 * @return {Object}           
 */
export function objectWithOnly(object, attrs) {
    let newObject = {};

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });

    return newObject;
}

export function wrapChildrenWith(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props));
}

/**
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringInclues(str, substr) {
    return str.indexOf(substr) !== -1;
}
