//ECMA Script

const {render} = ReactDOM

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}

 
render(
    <h1 id='title'
        className='header'
        style = {{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'
}}>
    Hello World
    </h1>, 
    document.getElementById('react-container') //target the DOM element
)

////original

// const title = React.createElement(
//     'hi',
//     {id:'title', className: 'header'},
//     'Hello World'
// )

// ReactDOM.render(
//     title, //what we want to render
//     document.getElementById('react-container') //target the DOM element
// )