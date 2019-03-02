new Vue({
    el: "#app",
    data: {
        username: "",
        password: "",
        auth: false,
        img: "",
        answer: "",
    },
    methods: {
        async login() {
            if (this.username === "ali"
            && this.password === "ali"
            ) {
                this.auth = true;
                try {
                    let req = await fetch("https://yesno.wtf/api");
                    req = await req.json();
                    this.img = req.image;
                    this.answer = req.answer;
                } catch(e) {
                    this.img = ""; // Fallback image
                }
            } else {
                alert("Check your credentials!");
            }
        }
    }
})