import React, {
    Component,
    PropTypes,
} from 'react';
import { Link } from 'react-router';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import styles from './styles';


export class PasteListItem extends Component {
    static propTypes = {
        paste: PropTypes.object,
    };

    render() {
        const paste = this.props.paste;

        return <div>
            <Link to={`pastes/${paste.hashId}/`}>
                {paste.name}
            </Link>
        </div>;
    }
}

export default Relay.createContainer(CSSModules(PasteListItem, styles), {
    fragments: {
        paste: () => Relay.QL`
            fragment on PasteNode {
                name
                hashId
                isMyPaste
            }`,
    },
});
