var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    // Define a set of Default props. If they are provided we'll use them, if not we will use our defaults.
    getDefaultProps: function () {
        return {
            title: 'Error'
        }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    componentDidMount: function () {
        var {title, message} = this.props;

        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>

            </div>
        );

        // Create variables to add to the DOM.
        // return the string and it's gonna let us create our elements and show them on the screen
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));

        // Add to the DOM. findDOMNode takes the component (this) and returns the DOM node where that component lives.
        // We then use jQuerys HTML method to pass in the markup we want to show on the screen which is $modal

        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
    },
    render: function () {

        return (
          <div>

          </div>
        );


    }
});

module.exports = ErrorModal;