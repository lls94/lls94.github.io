## 关于npm

npm 由三个部分组成

1.  一个 npm 网站 （https://www.npmjs.org/）
2. 命令行界面 CLI
3. 软件仓库（registry）

## npm 入门

- 登录 npm 账户

  - ```
     npm login
    ```

- 查看当前登录的用户

  - ```
     npm whoami
    ```

- 查看/修改 账户配置信息

  - ```
    npm profile get  // 查看配置
    ```

  - ```
    npm profile set <prop> <value>  // 修改 配置
    ```

  - ```
    npm profile set password // 修改 账户密码
    ```

    

- 关于 npm CLI 版本

  - ```
    npm install npm@latest -g  // 安装 npm 的 最新稳定版本  === npm install npm -g
    ```

  - ```
    npm install npm@next -g  // 安装 npm 的 最新 未发布版本  === npm install npm@next -glatest
    ```

- node 管理工具

  - [nvm](https://github.com/creationix/nvm)   （osx  or   Linux）
  - [n](https://github.com/tj/n)  （osx  or   Linux）
  - [nodist](https://github.com/marcelklehr/nodist)   windows
  - [nvm-windows](https://github.com/coreybutler/nvm-windows)   windows
  
- npm 仓库（registry ） 管理工具

  -  [npmrc](https://www.npmjs.com/package/npmrc) 

- 设置npm仓库

  - ```
    npm config set registry https://registry.your-registry.npme.io/
    ```

- 登录 特定的 仓库

  - ```
    npm login --registry=https://registry.company-name.npme.io
    ```

- install 和 publish 时生成 日志  （**npm-debug.log**）

  - ```
    npm install --timing
    ```

  - ```
    npm publish --timing
    ```

- npm  错误

  - 一些奇怪的错误

    - ```
      npm cache clean   // 清楚缓存
      ```

    - ```
      npm install-verbose  // 查看更多信息
      ```

  - ```
    git config --global url."https://github.com/".insteadOf git@github.com:
    git config --global url."https://".insteadOf git://
    ```

  - [查看 npm 服务器状态]: https://status.npmjs.org/

  - 查看所有 npm 配置

    - ```
      npm config ls -l
      ```



# Packages and modules

### packages

- 关于 包的格式
  - a) A folder containing a program described by a file.`package.json`
  - b) A gzipped tarball containing (a).
  - c) A URL that resolves to (b).
  - d) A that is published on the registry with (c).`<name>@<version>`
  - e) A that points to (d).`<name>@<tag>`
  - f) A that has a tag satisfying (e).`<name>``latest`
  - g) A url that, when cloned, results in (a).`git`

- git  url格式的包  （可以通过以下方式格式化用于npm软件包的Git URL：）

  - `git://github.com/user/project.git#commit-ish`
  - `git+ssh://user@hostname:project.git#commit-ish`
  - `git+http://user@hostname/project/blah.git#commit-ish`
  - `git+https://user@hostname/project/blah.git#commit-ish`

  The can be any tag, sha, or branch that can be supplied as an argument to . The default is .`commit-ish``git checkout``commit-ish``master`



### modules

模块是目录中可以由Node.js函数加载的任何文件或目录。

- 模块具有以下特点
  - A folder with a file containing a field.`package.json``"main"`
  - A folder with an file in it.`index.js`
  - A JavaScript file.



## scope

A scope allows you to create a package with the same name as a package created by another user or Org without conflict.

```
@npm/package-name   // npm 就是作用域
```

### scope 和 包的 可见性

- Unscoped packages are always public.
- [Private packages](https://docs.npmjs.com/about-private-packages) are always scoped.
- Scoped packages are private by default; you must pass a command-line flag when publishing to make them public.



## package.json

```json
{
    "name": "当前目录名称",  // 必须包含  必须是小写
    "version": "1.0.0",   // 必须包含  x.x.x
    "main":"index.js",
    "description":"有这个字段更容易被搜到",
    "author":"Your Name <email@example.com> (http://example.com)",
    "dependencies":"", // 应用程序生产中 所用到的包    npm install packageName --save-prod
    "devDependencies":""  // 本地开发和测试 用到的包  npm install packageName --save-dev
}
```

- ```
  npm init  // 生成 package.json文件
  ```

- 创建 package.json 模板

  - 在当前 用户 根目录 创建  **.npm-init.js** 文件

    - ```javascript
      //  此文件 要放到 当前用户根目录下
      module.exports = {
        name: require("path").resolve().split("\\").reverse()[0],
        version: "0.0.1",
        项目类型: prompt(
          "what's your favorite flavor of ice cream, buddy?",
          "I LIKE THEM ALL"
        ),
        license: "MIT",
      };
      ```

- ```
  npm init --yes  // 使用 默认模板 生成 package.json
  ```

- ```
  npm init --scope=@scope-name // 限制组织范围
  ```

- ```
  npm init --scope=@my-username // 用户范围包
  ```

- 为 init 命令 设置 默认配置

  - ```
    > npm set init.author.email "example-user@example.com"
    > npm set init.author.name "example_user"
    > npm set init.license "MIT"
    ```

    

## npm 命令

- ```
  npm set init.license "MIT"  // 为 init 指令 设置 默认值
  ```

- ```shell
  npm init  // 初始化 package.json文件（会问一些配置问题）
  ```

- ```
  npm init --yes (-y) // 创建一个 默认的 package.json 文件
  ```

  - `name`: 当前目录名称
  - `version`: 总是 `1.0.0`
  - `description`:  使用 README 文件内容 或者 空字符串 `""`
  - `main`: 总是 `index.js`
  - `scripts`:  默认创建一个空的 `test` 脚本
  - `keywords`: `""`
  - `author`: `""`
  - `license`: [`ISC`](https://opensource.org/licenses/ISC)
  - `bugs`: 当前目录的信息（如果存在）
  - `homepage`: 当前目录的信息（如果存在）

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

    

##  .npm-init.js

```javascript
//  此文件 要放到 当前用户根目录下
module.exports = {
  name: require("path").resolve().split("\\").reverse()[0],
  version: "0.0.1",
  项目类型: prompt(
    "what's your favorite flavor of ice cream, buddy?",
    "I LIKE THEM ALL"
  ),
  license: "MIT",
};
```



[semver计算器]: https://semver.npmjs.com/

| 代码状态             | 阶段         | 规则                                         | 示例版本 |
| -------------------- | ------------ | -------------------------------------------- | -------- |
| 第一个版本           | 新产品       | 从 1.0.0 开始                                | 1.0.0    |
| 向后兼容的错误修复   | 修补程序发布 | 增量第三个数字                               | 1.0.1    |
| 向后兼容的新功能     | 次要释放     | 增量中间数字，将最后一个数字重置为零         | 1.1.0    |
| 破坏向后兼容性的更改 | 主要版本     | 递增第一个数字，将中间和最后一个数字重置为零 | 2.0.0    |



## 设置分发标签

```
npm publish --tag <tag>
```

```
npm dist-tag add <package-name>@<version> [<tag>]  // npm dist-tag add example-package@1.4.0 stable 向包的特定版本添加 标记
```





## 更改包的可见性

- ```
  npm access restricted <package-name>  // 把 公共包 设置为 私有包
  ```

- ```
  npm access public <package-name>  // 把 私有包 设置为 公共包
  ```

## 增加协作者

- ```
  npm owner add <user> <your-package-name>
  ```

## 更新包的 版本号

- ```
  npm version <update_type>
  ```

  

## 弃用包  

- ```
  npm deprecate <package-name> "<message>"   // 弃用整个包
  ```

- ```
  npm deprecate <package-name>@<version> "<message>"  // 弃用包的某个版本
  ```

- ```
  // 将包 转移给 其他 维护者 
  npm owner add npm <package-name> --otp=一次性密码
  npm owner rm <user> <package-name> --otp=一次性密码
  ```

  

## 取消发布包

- ```
  npm unpublish <package-name>@<version> // 取消发布包的某个版本
  ```

- ```
  npm unpublish <package-name> -f  // 取消发布包
  ```



## 安装 特定标记 包

- ```
  npm install <package_name>@<tag>
  ```

  

## 更新包

- ```
  npm outdated  // 查看 有哪些包 过期了
  ```

- ```
  npm update  // 更新 包
  ```

- ```
  npm outdated -g --depth=0  // 查看全局 哪些包 需要 更新
  ```

- ```
  npm update -g <package_name>  // 更新某个全局包
  ```

- ```
  npm update -g  // 更新 所有 全局包
  ```



## 卸载包

- ```
  npm uninstall <package_name> // 卸载包
  ```

- ```
  npm uninstall --save <package_name>  // 卸载 并 删除 package.json 中 的 依赖
  ```

- ```
  npm uninstall -g <package_name>  // 卸载 全局依赖
  ```



## 审核 包 的 漏洞

- ```
  npm audit
  ```

- ```
  npm audit fix  // 自动 将兼容的更新安装到易受攻击的依赖项
  ```

- ```
  npm install example-package-name --no-audit  // 安装某个包时 关闭 审核
  ```

- ```
  npm set audit false  // 关闭 全局 审核
  ```

  

