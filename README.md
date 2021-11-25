# Fashion

## Build Setup

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## 技术选型

### 框架

- Vue2
- Nuxt: ssr

### 样式

- Tailwindcss: 标准化的页面格式，支持 tree-shaking。
- ElementUI: 组件库，支持按需加载。（待废弃）

### networking

- axios

### 项目管理

- prettier + eslint: 代码格式化。
- husky + lint-staged: git 提交前进行代码检验。
- github action: CI 集成。

### 开发环境说明

开发环境采用 Vscode，搭配几个实用的插件：

- ESLint: ESLint 校验
- Prettier - Code formatter: 代码格式化
- Prettier ESLint: Prettier 兼容 ESLint
- Tailwind CSS IntelliSense: Tailwind CSS 智能提示
- Vetur: Vue 开发工具
- Code Spell Checker: 单词检错与纠错

几个实用的代码片段

```json
{
  "html:template": {
    "prefix": "html:template",
    "body": "<template>$0</template>"
  },
  "script:js": {
    "prefix": "script:js",
    "body": ["<script>", "export default {", "\t$0", "}", "</script>"]
  },
  "script:js-with-name": {
    "prefix": "script:js-with-name",
    "body": [
      "<script>",
      "export default {",
      "\tname: '${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/g}'",
      "\t$0",
      "}",
      "</script>"
    ]
  },
  "style:scss": {
    "prefix": "style:scss",
    "body": ["<style lang=\"scss\">", "$0", "</style>"]
  },
  "style:scss-scoped": {
    "prefix": "style:scss-scoped",
    "body": ["<style lang=\"scss\" scoped>", "$0", "</style>"]
  },
  "vue:scss-scoped": {
    "prefix": "vue:scss-scoped",
    "body": [
      "<template>",
      "\t<div class=\"${TM_FILENAME_BASE}\">$0</div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "\tname: '${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/g}',",
      "}",
      "</script>",
      "",
      "<style lang=\"scss\" scoped></style>"
    ]
  },
  "vue:scss-scoped-custom": {
    "prefix": "vue:scss-scoped-custom",
    "body": [
      "<template>",
      "\t<div class=\"${1:${TM_FILENAME_BASE}}\">$0</div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "\tname: '${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/g}}',",
      "}",
      "</script>",
      "",
      "<style lang=\"scss\" scoped></style>"
    ]
  },
  "options:asyncData": {
    "prefix": "options:asyncData",
    "body": ["async asyncData() {", "$0", "},"]
  }
}
```

### 类型检测

类型检测采用 TypeScript + jsDoc

### 注意事项

1. 尽可能采用函数式编程而不是面向对象，方便后续调试与复用。
2. 使用 JavaScript 进行开发，如果需要类型定义的话，添加 `.d.ts` 文件。

## 规范

### 命名

#### 文件命名

|                     |                命名规范                |          示例           |
| :-----------------: | :------------------------------------: | :---------------------: |
|        file         |               kebap-case               |     `m-header.vue`      |
|   const-variables   | snake_case with capitalizing all words |    `DEFAULT_OPTIONS`    |
| non-const-variables |               camelCase                |       `isLoading`       |
|        class        |               PascalCase               |         `User`          |
|  custom-component   |              kebpap-case               | `<m-header></m-header>` |

#### 前缀

|   prefix    |                                          说明                                           |         示例          |
| :---------: | :-------------------------------------------------------------------------------------: | :-------------------: |
|   `m-xxx`   | 组件前缀（Vue 会识别 HTML 默认标签，对于某些组件，如果需要添加前缀的话，默认采用 `m-`） |      `m-header`       |
| `fetchXXX`  |                                      网络请求前缀                                       |      `fetchUser`      |
| `handleXXX` |                                      事件回调函数                                       | `handleLogInBtnClick` |
|   `M_XXX`   |                                 Vuex 中 mutation 的类型                                 |     `M_SET_USER`      |
|   `A_XXX`   |                                  Vuex 中 action 的类型                                  |     `A_SET_USER`      |

### 网络请求说明

所有的网络请求放在 `request` 文件夹中。每一个单独的文件导出网络请求函数，以及对应 key 组成的数组。通过 `plugins/api.js` 在运行时绑定到 `$axios` 实例上，通过 `$axios[key](...args)` 进行调用。同时，在运行时，会将 `context` 绑定到该函数上，所以只需要传请求函数后面的参数即可（具体可以看代码）。

在每一个 Vue 实例上，可以通过 `this.$axios` 发起网络请求。

### store 说明

为了消除魔法字符串的影响，要求 store 中每一个模块需要导出当前模块名，
在 nuxt 中，约定模块名为当前文件夹名。同时，还需要导出对应的 mutation 和 action 名，采用 `MODULE_M_XXX` 和 `MODULE_A_XXX` 导出。

### utils 说明

为了方便后续维护和新人进入，对于业务代码不要太多的技巧，更多要求实用。
几个比较实用的工具函数（部分来自 Vue 源码中的 `shared/util.js`）：

- `isVoid`: 判断 value 是否定义或者是空字符串。
- `isDef`: 判断 value 是否定义。
- `isUnDef`: 判断 value 是否我未定义。

## TODO

- [ ] : 分页面 SSR - custom head.
- [ ] : 404 页面
- [ ] : loading 组件
- [ ] : 页面过渡动画
- [ ] : 部署前 ElementUI 按需加载
- [ ] : 登录表单提供回滚功能
- [ ] : 修改 element ui 中的变量，实现自定义主题功能。

- [ ] : auth 页面对 form 进行抽离
- [ ] : auth 页面表单填写时，清楚错误信息
- [ ] : auth 页面确定 `bindOld` 和 `isLoggedIn` 逻辑。
- [ ] : auth 页面添加关闭、后退功能。
- [ ] : auth 页面添加回车提交表单功能。
- [ ] : auth 页面多设备登录出现错误？

- [ ] : aside-public 实现 overflow scroll
- [ ] : aside-private 图标对齐

- [ ] : clean code - 将相同类型的代码放置在一起。
- [ ] : clean code - 优化 store 文件结构
- [ ] : clean code - 抽离 Aside 组件逻辑

- [ ] : perf - promise cache category list

## **`打包发布流程`**

-1.本地上传代码到 github；
-2.进入 Google gcloud 控制台，选择 fashion-express 项目，打开控制台的 cloud shell；
-3.进入 fashion 文件夹，git pull 拉取代码；
-4.运行 yarn build 打包；
-5.gcloud app deploy app.yaml --project fashion-express-321810。

## Reference

- [NuxtJS](https://nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/docs/use)
- [Element](https://element.eleme.cn/2.0/#/)
- [Nuxt.js 免费视频教程 开启 SSR 渲染](https://www.bilibili.com/video/BV1Xt41117Kg)
- [千锋教育\_前端 Nuxt 框架教程 开启 SSR（服务器端渲染）](https://www.bilibili.com/video/BV13Z4y1T74J)
- [Vue-Lazyload](https://github.com/hilongjw/vue-lazyload)
