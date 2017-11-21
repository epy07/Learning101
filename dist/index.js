const {createElement} = React
const {render} = ReactDOM

const title = createElement(
    'hi',
    {id:'title', className: 'header'},
    'Hello World'
)

render(
    title, //what we want to render
    document.getElementById('react-container') //target the DOM element
)



// const title = React.createElement(
//     'hi',
//     {id:'title', className: 'header'},
//     'Hello World'
// )

// ReactDOM.render(
//     title, //what we want to render
//     document.getElementById('react-container') //target the DOM element
// )