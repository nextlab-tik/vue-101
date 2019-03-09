<template>
  <ion-app>
    <!--<ion-page>-->
    <ion-header>
      <ion-toolbar color="primary">
        <ion-input
          placeholder="Task..."
          v-model="task"
          :value="task"
          @ionInput="task = $event.target.value"
          @keyup.enter="addTask()"
        />
        <ion-buttons slot="end">
          <ion-button @click="addTask()">
            <ion-icon name="add"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item v-for="(t, index) of tasks" :key="t">
          <ion-label>{{ t }}</ion-label>

          <ion-button color="danger" slot="end" @click="deleteTask(index)">
            <ion-icon name="trash"/>
          </ion-button>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="addTask()">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
    <!--</ion-page>-->
  </ion-app>
  <!--
  <div>

  <input v-model.trim="task" @keyup.enter="addTask()"/>

        <ul>
            <li v-for="(t, index) of tasks" :key="t">
                {{ t }}
                <button @click="deleteTask(index)">x</button>
            </li>
        </ul>
  </div>
  -->
</template>

<script>
export default {
  data: () => ({
    task: "",
    tasks: []
  }),
  methods: {
    addTask() {
      if (this.task) {
        this.tasks.unshift(this.task);
        this.task = "";
      }
    },
    async deleteTask(i) {
      let alert = await this.$ionic.alertController.create({
        header: "Task Done",
        message: "Are you sure to delete task ?",
        buttons: [
          {
            text: "Ok",
            handler: () => {
              this.tasks = this.tasks.filter((val, idx) => idx != i);
            }
          },
          "CANCEL"
        ]
      });
      await alert.present();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
