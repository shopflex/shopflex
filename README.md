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
- Nuxt: ssr。

### 样式

- Tailwindcss: 标准化的页面格式。支持 tree-shaking。
- ElementUI: 组件库。支持 tree-shaking。

### networking

- axios

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

|   prefix   |                                          说明                                           |    示例     |
| :--------: | :-------------------------------------------------------------------------------------: | :---------: |
|    `m-`    | 组件前缀（Vue 会识别 HTML 默认标签，对于某些组件，如果需要添加前缀的话，默认采用 `m-`） | `m-header`  |
| `fetchXXX` |                                      网络请求前缀                                       | `fetchUser` |

## TODO

- [ ] : 分页面 SSR - custom head.
- [ ] : 404 页面
- [ ] : loading 组件

## **`打包发布流程`**

-1.本地上传代码到 github；
-2.进入 Google gcloud 控制台，选择 fashion-express 项目，打开控制台的 cloud shell；
-3.进入 fashion 文件夹，git pull 拉取代码；
-4.运行 yarn build 打包；
-5.gcloud app deploy app.yaml --project fashion-express-321810。

## Reference

- [NuxtJS](https://nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Element](https://element.eleme.cn/2.0/#/)
- [Nuxt.js 免费视频教程 开启 SSR 渲染](https://www.bilibili.com/video/BV1Xt41117Kg)
- [千锋教育\_前端 Nuxt 框架教程 开启 SSR（服务器端渲染）](https://www.bilibili.com/video/BV13Z4y1T74J)
