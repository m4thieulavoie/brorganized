import React from 'react';
import './WebViewTabs.scss';
import { WebsiteApp } from '../website-apps.class'

interface IWebViewTabsProps {
    app: WebsiteApp
    className: string
}

class WebViewTabs extends React.Component<IWebViewTabsProps> {
    getClasses = () => `${this.props.className} container`
    
  render() {
    return <div className={this.getClasses()}>{this.props.app.tabs.map(tab => <div key={tab.url}>
            {tab.url}
        </div>)} 
    </div>;
  }
}

export default WebViewTabs;
