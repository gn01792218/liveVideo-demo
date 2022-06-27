# baccart-videodemo

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
### 如何增加、修改視訊串流
視訊流清單檔案位置 : src-->videoStreamList.ts
直接修改清單內容即可。
### 一鍵部署到gitHub page
```
npm run deploy-github
```
### 使用FTP部署到百家測試站點上
npm run build後，使用FTP上傳到百家樂測試站的以下位址 : 
/var/www/baccarat/videoDemo
把打包的東西全部丟進該資料夾中即可。


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

