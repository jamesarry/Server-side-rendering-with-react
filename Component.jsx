//Grab react package
var  React = require('react');

//Export the react class
module.exports = React.createClass({

    //Create an event  handler function that will trigger an alert box when click me btn is clicked
    _handleClick: function(){
       alert();
    },
   render: function() {
      return (
         
         <html>
             <head>
                 <title>{this.props.title}</title>
                 <link rel='stylesheet' href='/style.css'/>
             </head>
             <body>
                  
                       <h1>{this.props.title}</h1>
                       <p>Example of server-side rendering with react</p>
                       <button onClick={this._handleClick}>Click me</button>
                       
                       <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(this.props)
                       }}/>
                  <script src="bundle.js"/>
             </body>
         </html>
              
      );



   }
});
