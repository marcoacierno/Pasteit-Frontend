import React, {
    Component,
} from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import Pastes from '../../components/pastes/';
import styles from './styles';


export class Home extends Component {
    render() {
        return <div styleName="test">
            Hello.
            <br />
            Public pastes:

            <Pastes />
        </div>;
    }
}


export default Relay.createContainer(CSSModules(styles)(Home), {
    initialVariables: {},
    fragments: {},
});
