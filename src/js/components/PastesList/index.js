import React, {
    Component,
    PropTypes,
} from 'react';
import Relay from 'react-relay';
import PasteListItem from '../PasteListItem/';


class PastesList extends Component {
    static propTypes = {
        pastes: PropTypes.object,
    };

    renderPaste(paste) {
        return <PasteListItem paste={paste.node} />;
    }

    render() {
        const pastes = this.props.pastes;
        return <div>
            {pastes.edges.map(this.renderPaste)}
        </div>;
    }
}


export default Relay.createContainer(PastesList, {
    fragments: {
        pastes: () => Relay.QL`
            fragment on PasteNodeDefaultConnection {
                edges {
                    node {
                        ${PasteListItem.getFragment('paste')}
                    }
                }
            }
        `,
    },
});
