/*globals document*/

import React from 'react';
import AddNote from './AddNote';
import ApplicationStore from '../stores/ApplicationStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';
import StyleSheet from 'react-style';

@provideContext
@handleHistory
@connectToStores([ApplicationStore], (context, props) => {
    const appStore = context.getStore(ApplicationStore);
    return {
        currentPageName: appStore.getCurrentPageName(),
        pageTitle: appStore.getPageTitle(),
        pages: appStore.getPages()
    };
})
class Application extends React.Component {
    getStyles() {
        return StyleSheet.create({
            app: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
                lineHeight: '20px',
                textAlign: 'center',
                marginTop: '30px'
            }
        });
    }

    render() {
        let Handler = this.props.currentRoute.get('handler');
        const styles = this.getStyles();
        return (
            <div styles={[styles.app]}>
                <AddNote />
                <Handler />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
}

export default Application;
