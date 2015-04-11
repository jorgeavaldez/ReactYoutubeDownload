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
                <TextField id='video-url-text-field'/> <FlatButton label="Download this!" primary={true} onTouchTap={}/>
            </div>
        );
    },

    _handleSubmit: function(url) {

    }
});
