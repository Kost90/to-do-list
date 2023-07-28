import './app/styles/reset.css';
import './app/styles/styles.css';
import createelement from "./app/helpers/createelement.js";
import Modalwindow from "./app/tasks/ui/Modalwindow.js";
import { tasks } from "./app/tasks/api/tasksdata.js";

const app = document.querySelector("#app");

const modal = Modalwindow(tasks);

app.appendChild(modal);