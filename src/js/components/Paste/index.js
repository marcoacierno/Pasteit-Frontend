import React, {
    Component,
} from 'react';
import Relay from 'react-relay';
import Paste from '../paste/';


export class Paste extends Component {
    render() {
        const paste = this.props.paste;

        return <div>
            Name: {paste.name}
        </div>;
    }
}

export default Relay.createContainer(Paste, {
    fragments: {
        paste: () => Relay.QL`
            fragment on PasteNode {
                name
            }`,
    },
});
