import React, {
    Component,
    PropTypes,
} from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import Pastes from '../../components/Pastes/';
import styles from './styles';


export class Home extends Component {
    static propTypes = {
        pastes: PropTypes.object,
    };

    render() {
        return <div styleName="test">
            Hello.
            <br />
            Public pastes:

            <Pastes pastes={this.props.pastes} />
        </div>;
    }
}


export default Relay.createContainer(CSSModules(styles)(Home), {
    initialVariables: {},
    fragments: {
        pastes: () => Relay.QL`
            fragment on PasteNodeDefaultConnection {
                ${Pastes.getFragment('pastes')}
            }
        `,
    },
});
