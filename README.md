### 备注：
0. 相关目录
仓库目录：/mnt/install/joolun-plus/myweek/
nginx目录：/etc/nginx/nginx.conf
1. 服务器需要全局安装json-server, node 
2. 后台启动json-server
nohup json-server --watch db.json --port 8888 &
3. 关闭json-server
a. 使用 ps aux | grep json-server 查找 JSON Server 的进程 ID（PID）。
b. 使用 kill PID 来终止 JSON Server 进程，其中 PID 是您在前一步中找到的进程 ID。
4. 重启nginx
systemctl restart/start/status/stop nginx
