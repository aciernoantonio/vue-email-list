const app = new Vue({
    el: `#app`,

    data:{},

    methods:{},

    mounted() {

        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)

    }
})