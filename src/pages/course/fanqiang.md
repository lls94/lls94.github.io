* 查看防火墙状态 firewall-cmd --state
* 关闭防火墙 systemctl stop firewalld.service
* 禁止开机启动 systemctl disable firewalld.service 

## outline 安装失败 
```sh
    $ systemctl daemon-reload
    $ sudo service docker restart
```

## shadowsocks
<https://github.com/shadowsocks>

## outline 官网
<https://getoutline.org/zh-CN/home>

## bbr 一键安装脚本
```sh
    wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```
