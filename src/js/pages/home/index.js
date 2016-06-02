import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles';


export class Home extends React.Component {
    render() {
        return <div styleName="test">
            Home Hello
        </div>;
    }
}


export default CSSModules(styles)(Home);
