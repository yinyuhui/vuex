# vuex

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 1.1 Vuex构成

- State 数据源 存储状态
- Mutation 同步修改状态值，一般用于页面交互导致的变更
- Action 异步修改状态值，一般用于接口请求后修改值
- Getter 取值或其衍生值

## 1.2 Vuex 实现

使用方法

1. 在 store 中引入 Vue 和 Vuex 
2. `Vue.use(Vuex)`
3. 在 main.js 中引入 store
4. 在 new Vue 中传入 store 

### 1.2.1 实现 use

`Vue.use` 执行时需提供 install 方法，该方法可获取一个传入参数 Vue

由于在每个组件中均能通过 `this.$store` 访问 vuex 中的组成内容，因此需要给组件中注入 store，最好时机就是在执行 install 时，通过 vue 的 mixin 注入

### 1.2.2 实现 Store 类

在 store 类中，构造函数中接收创建 store 时传入的参数并处理，主要是实现数据的双向绑定

在 install 中接收到了传入的 Vue，可以在构造函数中 new Vue，将 state 传入 data 中，让 Vue 监听变化

getters 也是直接在 this.$store 上访问的，在构造函数中也要对 getters 处理，将传入的 getters 赋值给 this.getters，还要保证可选参数正确传入

接下来分别实现 mutation、action，实现修改状态值

### 1.2.3 实现 Mutation 和 Action

这两个是差不多的，都是要提交变更状态值

如通过调用 commit 来提交 Mutation，需要在 store 上实现 commit 方法

接收两个参数，一个是 mutationName，确定执行哪个 mutation 方法；一个是 payload，修改状态时可能用到的值，可以是值或对象

根据传入的 mutationName，在 this.mutations 中找到相应的方法，传入 state 和 payload 执行该方法即可

Action 也是一样，实现 dispatch 方法，接收 actionName 和 payload，this.actions 中找到对应的方法，传入 this 和 payload 执行该方法

## 1.3 代码实现

完成简单示例，不包含 module 和对象形式的提交，仓库地址：

https://github.com/yinyuhui/form
