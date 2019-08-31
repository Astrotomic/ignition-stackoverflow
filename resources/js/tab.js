Ignition.registerTab((Vue) => {
    Vue.use(require('vue-moment'));
    Vue.component('ignition-stackoverflow', require('./components/Tab'))
});
