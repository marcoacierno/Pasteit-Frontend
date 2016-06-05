import React, {
    Component,
    PropTypes,
} from 'react';
import { Link } from 'react-router';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import PastesList from '../../components/PastesList/';
import styles from './styles';


export class Home extends Component {
    static propTypes = {
        pastes: PropTypes.object,
    };

    render() {
        return <div styleName="test">
            Hello.

            <hr />
            Public pastes:

            <PastesList pastes={this.props.pastes} />

            <hr />

            <ul>
                <li>
                    <Link to="pastes/new/">+ Create paste</Link>
                </li>
            </ul>
        </div>;
    }
}


export default Relay.createContainer(CSSModules(styles)(Home), {
    fragments: {
        pastes: () => Relay.QL`
            fragment on PasteNodeDefaultConnection {
                ${PastesList.getFragment('pastes')}
            }
        `,
        me: () => Relay.QL`
            fragment on UserNode {
                username
            }
        `,
    },
});
