import React from 'react';
import './App.scss';
import Nav from './Nav';
import { ALL_APPS } from './website-apps.class';
import WebView from './WebView/WebView';
import WebViewTabs from './WebView/WebViewTabs';

interface IAppState {
  selectedAppName: string;
}

class App extends React.Component<{}, IAppState> {
  private apps = ALL_APPS
  private selectApp = (appName: string) => {
    this.setState({
      selectedAppName: appName
    });
  }

  componentDidMount() {
    this.setState({
      selectedAppName: this.apps[0].name
    });
  }

  render() {
    return this.state && (
      <div className="App">
        <Nav selectApp={this.selectApp} apps={this.apps}></Nav>
        <div className="content">
          {
            this.apps.map(app => 
            <>
              <WebViewTabs app={app} key={app.name} 
                className={app.name === this.state.selectedAppName ? '': 'hidden'}></WebViewTabs>
              {app.tabs.map(tab => 
              <WebView key={tab.url} url={tab.url} 
                className={app.name === this.state.selectedAppName ? '': 'hidden'}></WebView>
              )}
            </>)
          }
        </div>
      </div>
    );
  }
}

export default App;
