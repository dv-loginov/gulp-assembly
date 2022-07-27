import gulp from "gulp";
import {path} from "./gulp/config/path.js";

 //Передаем значения в глобальную переменную
 global.app = {
    gulp: gulp,
    path: path,
 }

 //импорт задач
 import {copy} from "./gulp/tasks/copy.js";
 import {reset} from "./gulp/tasks/reset.js";
 import {html} from "./gulp/tasks/html.js";

 //Наблюдатели
 function watcher() {
    gulp.watch(app.path.watch.files, copy);
    gulp.watch(app.path.watch.html, html);
 }

 
 //Сценарии
const mainTasks =  gulp.parallel(copy, html);
const dev = gulp.series(reset, mainTasks, watcher)

 gulp.task('default', dev ); 