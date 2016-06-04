import Relay from 'react-relay';


const ViewerQueries = {
    pastes: () => Relay.QL`
        query {
            pastes
        }`,
};

export default ViewerQueries;
