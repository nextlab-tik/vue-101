new Vue({
    el: "#app",  // HTML element with id 'app'
    // template: `<h1>Hello {{ username }}</h1>`,
    data: {
        username: "",
        nom: "",
        btn_clicked: false
    },
    methods: {
        afficher() {
            this.nom = this.username;
            this.btn_clicked = true;
        }
    }
});