#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# yarn build

# 拷贝文件到项目根目录
cp ./dist/*.html ./

# 进入生成的文件夹
# cd docs/.vuepress/dist
# cd ../

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'vuepress deploy'

# 如果发布到 https://<USERNAME>.github.io
git push
# git push -f git@github.com:lls94/lls94.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -