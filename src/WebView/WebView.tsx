import React from 'react';
import './WebView.scss';

interface IWebViewProps {
    url: string
    className: string
}

class WebView extends React.Component<IWebViewProps> {
  render() {
    return <webview src={this.props.url} className={this.props.className} allowpopups={true}></webview>;
  }
}

export default WebView;
