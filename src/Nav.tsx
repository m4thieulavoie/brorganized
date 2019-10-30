import React from 'react';
import './nav.scss';
import { WebsiteApp } from './website-apps.class';

interface INavProps {
    selectApp: (appName: string) => void
    apps: WebsiteApp[]
}

class Nav extends React.Component<INavProps> {
  render() {
    return (
        <nav>
            {this.props.apps.map(app => <button key={app.name} onClick={() => this.props.selectApp(app.name)}>
                <img src={app.image} alt={app.name}/>
            </button>)}
        </nav>
      );
  }
}

export default Nav;
