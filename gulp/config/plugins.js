import browsersync from "browser-sync";
import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify";   //сообщения
import ifPlugin from "gulp-if";    //ветвление
import newer from "gulp-newer";     //проверка обновления

export const plugins = {
    browsersync: browsersync,
    if: ifPlugin,
    replace: replace,
    plumber: plumber,
    notify: notify,
    newer: newer,
}