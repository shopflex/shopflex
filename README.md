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

## 规范

### 前缀

对于组件而言，如果需要前缀的话，默认以 `m-` 开头。

### 命名规范

文件采用 **-** 作为分为分隔符命名。

### 目录说明

#### `components`

- `components/common`: 存放与业务无关的组件。可以直接用于下一个 app 的构建。
- `components/content`: 存放于业务有关但公用组件。

## **`打包发布流程`**

-1.本地上传代码到 github；
-2.进入 Google gcloud 控制台，选择 fashion-express 项目，打开控制台的 cloud shell；
-3.进入 fashion 文件夹，git pull 拉取代码；
-4.运行 yarn build 打包；
-5.gcloud app deploy app.yaml --project fashion-express-321810。
