require( 'es6-promise' ).polyfill();
import { getRESTAPIUrl, getRESTAPINonce } from './helpers';
import 'whatwg-fetch';

function MeetupFetcher() {

    const url = getRESTAPIUrl();
    const nonce = getRESTAPINonce();

    const request = function( url, params ) {
        return fetch( url, params )
            .then( ( response ) => {
                return response.json();
            });
    };

    return {
        getTodos: () => {
            let params = {
                credentials: 'same-origin',
                headers: {
                    'X-WP-Nonce': nonce
                }
            };
            return request( `${url}/todo`, params );
        }
    };
}

const Fetcher = new MeetupFetcher();
export default Fetcher;