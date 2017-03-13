var React = require('react');
var {Link, IndexLink} = require('react-router');


// Switched from the stateless functional component back to the React.createClass component definition. (Before Nav =>)
var Nav = React.createClass({
   onSearch: function(e){
       e.preventDefault();

       var location = this.refs.search.value;

       // Encode our location
       var encodedLocation = encodeURIComponent(location);

       // clear our input
       if(location.length>0){
           this.refs.search.value='';
           window.location.hash='#/?location=' + encodedLocation;
       }

   },
    render: function () {
       return (
           <div className="top-bar">
               <div className="top-bar-left">
                   <ul className="menu">
                       <li className="menu-text"> React Weather App</li>
                       <li>
                           {/*We use IndexLink since we use IndexRoute on app.jsx*/}
                           <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                       </li>
                       <li>
                           <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                       </li>
                       <li>
                           <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                       </li>
                   </ul>
               </div>
               <div className="top-bar-right">

                   <form onSubmit={this.onSearch}>
                       <ul className="menu">
                           <li>
                               <input type="search" ref="search" placeholder="Search weather by city"/>
                           </li>
                           <li>
                               <input type="submit" className="button" value="Get Weather"/>
                           </li>
                       </ul>
                   </form>
               </div>

           </div>

       );
   }
});

module.exports = Nav;