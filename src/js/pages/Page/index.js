import React, {
    Component,
    PropTypes,
} from 'react';


export default class Page extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}
