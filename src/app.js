const app = Vue.createApp({
    // data, functions
    // template: '<h2>Template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon',
            age: '45',
            css: {
                headerTitle: {
                    color: 'red',
                    fontFamily: 'Nunito',
                    fontSize: '20px'
                }
            }
        }
    },
    methods: {
        changeTitle() {
            this.title = 'hello'
            console.log(`Title is`, this.title)
        }
    }
})

app.mount('#app')
