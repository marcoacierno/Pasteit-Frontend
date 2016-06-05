import React, {
    Component,
    PropTypes,
} from 'react';
import Relay from 'react-relay';


class PasteControlPanel extends Component {
    render() {
        return <div>
            <span>Delete</span>
            <span>Edit</span>
        </div>;
    }
}

export default Relay.createContainer(PasteControlPanel, {
    fragments: {},
});
