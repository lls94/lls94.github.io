## npm 命令

- ```shell
  npm init  // 初始化 package.json文件（会问一些配置问题）
  ```

- ```bash
  npm login  // 登录账户
  ```

- ```shell
  npm whoami // 查看当前登录的 账户名
  ```

- ```shell
  npm install npm@latest -g  // 安装最新稳定版本的 npm
  ```

- ```shell
  npm install npm@next -g  // 安装下一版本的 npm
  ```
  

## node 版本管理工具

- [nvm](https://github.com/creationix/nvm) ([nvm-windows](https://github.com/coreybutler/nvm-windows))    支持 linux 和 windows

- [n](https://github.com/tj/n)  支持linux
- [nodist](https://github.com/marcelklehr/nodist)  支持windows

## npm registry 管理


1. ```shell
    npm config set registry https://registry.your-registry.npme.io/  //把  第三方仓库设置为 默认仓库
    ```
    
2. 安装 [npmrc](https://www.npmjs.com/package/npmrc)  包，切换不同的 registry  配置   

    ```shell
    npm i npmrc -g
    ```

3. ```shell
    npm login --scope=@company-scope --registry=https://registry.company-registry.npme.io/   // 为特定的包 设置 registry 
    ```

    