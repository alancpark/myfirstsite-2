
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

    Vue.component('tabs', {
        template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs">{{ slot }}</li>
                </ul>
            </div>
        </div>
        `,
        data(){
            return { tabs: [] }
        },
        created(){
            console.log(this.$children);
            this.tabs = this.$children;
        }
    })

    Vue.component('tab',{
        template: `
        <div>
            <slot></slot>
        </div>
        `
    })

/////////////////////////////////////////////////////////////////////////////

// Vue.component('tabs', {
//     template: `
//         <div>
//             <div class="tabs">
//               <ul>
//                 <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive}" @click="selectTab(tab)"><a :href="tab.href">{{ tab.name }}</a></li>
//               </ul>
//             </div>
//
//             <div class="tabs-details">
//                 <slot></slot>
//             </div>
//         </div>
//     `,
//     data(){
//         return { tabs: [] };
//     },
//     created(){
//         console.log(this.$children);
//         this.tabs = this.$children;
//         console.log(this.$children);
//
//     },
//     methods: {
//         selectTab(selectedTab){
//             this.tabs.forEach(tab => {
//                 tab.isActive = (tab.name == selectedTab.name)
//             })
//         }
//     }
// })
//
// Vue.component('tab',{
//     props: {
//         'name' : { required: true },
//         'selected' : false
//     },
//     computed: {
//         href(){
//             return '#' + this.name.toLowerCase().replace(/ /g, '-');
//         }
//     },
//     template: `<div v-show="isActive"><slot></slot></div>`,
//     data(){
//         return { isActive: false }
//     },
//     mounted(){
//         this.isActive = this.selected;
//     }
// })


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data(){
        return {
            showModal: false
        }
    }
});

