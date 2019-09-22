## outline 输出 
```json
    {
        "apiUrl":"https://149.28.226.95:20386/qK5Vvymy8xspNYKMxK-2HQ","certSha256":"CDFEEFD9D2A701E698A516E6B06BC6728D3F9F5BA16EFCC23D5746AEC57D8ED4"
    }
```
* 查看防火墙状态 firewall-cmd --state
* 关闭防火墙 systemctl stop firewalld.service
* 禁止开机启动 systemctl disable firewalld.service 

## ss 链接
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmTFJtcnlnOW95QW8=@149.28.226.95:51581/?outline=1

## outline 安装失败 
```sh
    $ systemctl daemon-reload
    $ sudo service docker restart
```

## shadowsocks
https://github.com/shadowsocks

## bbr 一键安装脚本
```sh
    wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```
