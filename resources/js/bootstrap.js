// window._ = require('lodash');
//
// /**
//  * We'll load the axios HTTP library which allows us to easily issue requests
//  * to our Laravel back-end. This library automatically handles sending the
//  * CSRF token as a header based on the value of the "XSRF" token cookie.
//  */
//
// window.axios = require('axios');
//
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//
// /**
//  * Echo exposes an expressive API for subscribing to channels and listening
//  * for events that are broadcast by Laravel. Echo and event broadcasting
//  * allows your team to easily build robust real-time web applications.
//  */
//
// // import Echo from 'laravel-echo';
//
// // window.Pusher = require('pusher-js');
//
// // window.Echo = new Echo({
// //     broadcaster: 'pusher',
// //     key: process.env.MIX_PUSHER_APP_KEY,
// //     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
// //     encrypted: true
// // });

import { getCookieValue } from './util'

window.axios = require('axios')

// console.log('testesta');
//
// console.log(window.axios);
//
// console.log(window.axios.defaults);
// console.log('testesta');

// Ajaxリクエストであることを示すヘッダーを付与する
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// console.log(window.axios.defaults.headers.common['X-Requested-With']);

window.axios.interceptors.request.use(config => {
    // クッキーからトークンを取り出してヘッダーに添付する
    config.headers['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN')

    console.log('1111111');

    console.log(config);
    console.log('1111111');


    return config
})