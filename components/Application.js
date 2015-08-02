/*globals document*/

import React from 'react';
import Nav from './Nav';
import ApplicationStore from '../stores/ApplicationStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';

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
    render() {
        var Handler = this.props.currentRoute.get('handler');

        return (
            <div>
                <Nav selected={this.props.currentPageName} links={this.props.pages} />
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
