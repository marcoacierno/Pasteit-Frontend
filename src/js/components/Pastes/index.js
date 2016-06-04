import React, {
    Component,
    PropTypes,
} from 'react';
import Relay from 'react-relay';
import Paste from '../Paste/';


class Pastes extends Component {
    static propTypes = {
        pastes: PropTypes.object,
    };

    renderPaste(paste) {
        return <Paste paste={paste.node} />;
    }

    render() {
        const pastes = this.props.pastes;
        return <div>
            {pastes.edges.map(this.renderPaste)}
        </div>;
    }
}


export default Relay.createContainer(Pastes, {
    fragments: {
        pastes: () => Relay.QL`
            fragment on PasteNodeDefaultConnection {
                edges {
                    node {
                        ${Paste.getFragment('paste')}
                    }
                }
            }
        `,
    },
});
