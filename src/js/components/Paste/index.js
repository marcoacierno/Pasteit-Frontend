import React, {
    Component,
    PropTypes,
} from 'react';
import Relay from 'react-relay';


export class Paste extends Component {
    static propTypes = {
        paste: PropTypes.object,
    };

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
