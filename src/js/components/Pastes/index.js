import React, {
    Component,
} from 'react';
import Relay from 'react-relay';


export default class Pastes extends Component {
    _renderPaste(paste) {
        return <Paste paste={paste} />;
    }

    render() {
        const pastes = this.props.pastes;
        return <div>
            {pastes.map(this._renderPaste)}
        </div>;
    }
}


export default Pastes;
