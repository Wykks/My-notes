import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';
import StyleSheet from 'react-style';

class Html extends React.Component {
    getStyles() {
        return StyleSheet.create({
            body: {
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: '#e8e8e8'
            }
        });
    }
    render() {
        const styles = this.getStyles();
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                    <meta name="viewport" content="width=device-width, user-scalable=no" />
                    <link href="http://fonts.googleapis.com/css?family=Roboto:400,300,500" rel="stylesheet" type="text/css" />
                </head>
                <body styles={[styles.body]}>
                    <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
                </body>
                <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
                <script src={'/public/js/' + this.props.clientFile}></script>
            </html>
        );
    }
}

export default Html;
