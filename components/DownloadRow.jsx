'use strict'
var React = require('react');
var injectTapEventPlugin = require('react-tap-event-plugin');
var materialUI = require('material-ui');
var Paper = materialUI.Paper;
var TextField = materialUI.TextField;
var FlatButton = materialUI.FlatButton;
var Nav = require('./Nav.jsx');
var Home = require('./Home.jsx');
var About = require('./About.jsx');
var ApplicationStore = require('../stores/ApplicationStore');
var RouterMixin = require('flux-router-component').RouterMixin;
var FluxibleMixin = require('fluxible').FluxibleMixin;

var DownloadRow = React.createClass({
    render: function() {
        return (
            <div>
                <TextField id='video-url-text-field'/>
                <FlatButton label="Download this!" primary={true} onTouchTap={}/>
            </div>
        );
    },

    _handleSubmit: function(url) {
        // This should probably be farther up the inheritance chain.
        // Maybe in Application.jsx?
    },

    _chooseLocation: function() {
        // This is where we should return the url to save to and append it to
        // the file name of the download library. Maybe use fs or os .join
        // and get that shit going.

        // This should probably open up a nice little folder open window.
        // See if Material UI has this included.
    },

    dehydrate: function () {
        // So I don't know if anything should actually happen here..
        // This would be where I take the internal state and return it to the
        // front-end for rendering, but as of now, there IS no state.
        // So fuck ur mum.
    }


});
