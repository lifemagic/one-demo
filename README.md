# one

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project Catalog analysis `项目目录分析`

> node_modules文件夹：项目依赖文件

> public文件夹：一般放置一些静态资源(图片)
>
> 注意：**放在public文件夹中的静态资源，webpack在打包时会原封不动打包到dist文件夹中**

> src文件夹(源代码文件夹)：
>
> > assets文件夹：一般也放置静态文件(一般放置多个组件共用的静态资源)
>
> > components文件夹：一般放置的是非路由组件(全局组件)
>
> > App.vue：唯一的根组件
>
> > main.js：程序入口文件，也是整个程序最先执行的文件

> .gitignore：git忽略文件

> babel.config.js：配置文件(babel相关)

> package.json：认为项目的身份证，记录项目叫什么、项目中有哪些依赖、项目怎么运行。

> package-lock.json：缓存性文件

> README.md：说明文件

> vue.config.js：eslint校验功能