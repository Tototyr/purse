# purse

Проект реализован на Vue.js. Для работы со стилями установлен scss.
Компонент с таблицей лежит в  `./src/components/market-table`.
Компонент разбит на три файла: `market-table.html`, `market-table.scss`, `market-table.vue`. Общие методы вынесены в `./utils/`. Для работы с http подключен axios.
Реализованы фильры. Путь до фильтров `./utils/filters/`.
В компоненте подключены вебсокеты.

Общие стили вынесены в `./styles/`. В `./styles/theme/color.scss` – цветовая палитра для проекта. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
