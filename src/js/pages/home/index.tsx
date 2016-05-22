import * as React from 'react';
import * as CSSModules from 'react-css-modules';

const styles = require('./styles');


export class Home extends React.Component<any, any> {
    render() {
        return <div styleName="test">
            Home
        </div>;
    }
}


export default CSSModules(styles)(Home);
