// import Vue from 'vue'
//
// new Vue({
//     el: '#app',
//     template: '<h1>Hello world</h1>'
// })

import './bootstrap'

import Vue from 'vue'

// ルーティングの定義をインポートする
import router from './router'

import store from './store' // ★　追加

// ルートコンポーネントをインポートする
import App from './App.vue'




const createApp = async () => {
    await store.dispatch('auth/currentUser')

    new Vue({
        el: '#app',
        router, // ルーティングの定義を読み込む
        store, // ★　追加
        components: { App }, // ルートコンポーネントの使用を宣言する
        template: '<App />' // ルートコンポーネントを描画する
    })
}

createApp()