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

## **`打包发布流程`**

-1.本地上传代码到 github；
-2.进入 Google gcloud 控制台，选择 fashion-express 项目，打开控制台的 cloud shell；
-3.进入 fashion 文件夹，git pull 拉取代码；
-4.运行 yarn build 打包；
-5.gcloud app deploy app.yaml --project fashion-express-321810。
