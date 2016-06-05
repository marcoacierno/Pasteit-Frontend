import React, {
    Component,
    PropTypes,
} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles';
import Relay from 'react-relay';
import PasteControlPanel from '../../components/PasteControlPanel/';


class ViewPaste extends Component {
    static propTypes = {
        paste: PropTypes.object,
    };

    render() {
        const paste = this.props.paste;

        return <div>
            <h2>Viewing paste "{paste.name}"</h2>

            <code>
                {paste.content}
            </code>

            {paste.isMyPaste && <PasteControlPanel />}
        </div>;
    }
}

export default Relay.createContainer(CSSModules(ViewPaste, styles), {
    fragments: {
        paste: () => Relay.QL`
            fragment on PasteNode {
                hashId
                name
                content
                isMyPaste
            }
        `,
    },
});
