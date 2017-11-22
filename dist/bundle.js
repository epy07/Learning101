'use strict';

//ECMA Script

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
    'h1',
    { id: 'title',
        className: 'header',
        style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'
        } },
    'Hello qweqwr'
), document.getElementById('react-container') //target the DOM element
);
