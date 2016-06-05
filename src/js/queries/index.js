import Relay from 'react-relay';


export const PastesQueries = {
    pastes: () => Relay.QL`
        query {
            pastes
        }`,
    me: () => Relay.QL`
        query {
            me
        }`,
};

export const PasteQueries = {
    paste: () => Relay.QL`
        query {
            paste(hashId: $hashId)
        }`,
};
