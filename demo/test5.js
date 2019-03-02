new Vue({
    el: "#app",
    data: {
        task: "",
        tasks: []
    },
    methods: {
        addTask() {
            if (this.task) {
                this.tasks.unshift(this.task);
                this.task = "";
            }
        },
        deleteTask(i) {
            this.tasks = this.tasks.filter((val, idx) => idx != i);
        }
    },
})