## 项目配置
1. 初始化项目
    npm init -y

2. 若没有cnpm 请下载
    npm i -g cnpm --registry=https://registry.npm.taobao.org

3. 运行
    cnpm install

4. 运行开发环境
    npm run dev

5. 运行node服务器
    npm run server

## 目录说明

```bash
|- proj
    |- dist # 编译输出目录
    |- component # 组件目录
    |- static # 静态资源，图片等
    |- pages # 页面目录
    |- request # 接口相关配置目录
    |- server # node服务器配置
    |- index.html # 入口文件
    |- index.js # 入口js文件
    |- .gitignore # 指定不被git记录的文件, 例如本地配置`config.js`就不应该提交到git
    |- .babelrc # babel配置相关, 可根据需求自行扩展
    |- package.json # 项目基本信息配置
    |- README.md # 文档
```