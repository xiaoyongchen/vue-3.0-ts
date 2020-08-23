import Vue, { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "normalize.css/normalize.css";
import router from "./router";
import store from "./store";
// 移动端适配37.5为基准。入口处需要引入的文件
import "amfe-flexible/index.js";
import "vant/lib/index.css";


const app = createApp(App);
app
	.use(store)
	.use(router)
	.mount("#app");
