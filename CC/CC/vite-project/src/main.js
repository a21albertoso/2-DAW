// main.js
import { createApp } from "vue";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import ejercicio2 from "./components/ejercicio2.vue";
import ejercicio3 from "./components/ejercicio3.vue";
import ejercicio4 from "./components/ejercicio4.vue";


const app = createApp(App);
app.component("HelloWorld", HelloWorld);
app.component("ejercicio2",ejercicio2);
app.component("ejercicio3",ejercicio3);
app.component("ejercicio4",ejercicio4);

app.mount("#app");