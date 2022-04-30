#NECO課題新人課題 morijellyfish

##できること
RESTのそれぞれが簡潔に作られてると思います

##使い方
NODE.js製なので適当にポチポチしてあげてください。
モジュールを入れて```node hoge.js```とか叩けば動くと思います、

##叩き方例
POST:
`curl -i -X POST -H "Content-Type:application/json" -d '{\"id\":\"1024\",\"name\":\"morijellyfish\"}' localhost:3000/adduser`<br>
GET:
`curl -i localhost:3000/userlist`<br>
PUT:
`curl -i -X PUT -H "Content-Type: application/json" -d '{\"id\":\"1024\",\"name\":\"morimori\"}' localhost:3000/rename`<br>
DELETE:
`curl -i -X DELETE -H "Content-Type:application/json" -d '{\"id\":\"1024\"}' localhost:3000/delete`<br>

##なにをしてるの
辞書型で書いたり消したりしてます、止めれば消えます。IDとNAMEのセットで"追加","リストの取得","NAMEの変更","ID指定での削除"の四つができます