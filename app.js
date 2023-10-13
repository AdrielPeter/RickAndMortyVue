const Myapp = {
    data() {
        return {
            input: "",
            characters: [],
        }
    },
    mounted() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => this.characters = data.results)
    },

    methods: {
        change() {
            fetch(`https://rickandmortyapi.com/api/character?name=${this.input}`)
                .then(response => response.json())
                .then(data => this.characters = data.results)
        },
    }
};

Vue.createApp(Myapp).mount("#app");