import React, {
    Component,
} from 'react';

import Relay from 'react-relay';


class ViewPaste extends Component {
    render() {
        console.log('props', this.props)

        return <div>
            {this.props.params.hashId}
        </div>;
    }
}

export default Relay.createContainer(ViewPaste, {
    fragments: {
        paste: () => Relay.QL`
            fragment on PasteNodeDefaultConnection {
                edges {
                    node {
                        hashId
                        isMyPaste
                    }
                }
            }
        `,
    },
});
