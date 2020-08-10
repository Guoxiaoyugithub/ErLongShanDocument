## 发送短信
<d-tips type="point">目前系统只支持11位中国大陆手机号进行该操作。</d-tips>

<d-req-title title="发送短信" http_methods="GET" url="http://localhost:4001/v1/shortmsg/sendverifcationcode"></d-req-title>

<d-req>
<d-req-parm title="Request Parameters">
<d-req-parm-item name="phone" necess="required" type="String" desc="11位中国大陆手机号(+86)"></d-req-parm-item>
</d-req-parm>
</d-req>

在使用发送验证码功能时，由于运营商等不确定因素可能会出现接口返回成功，但是实际用户并没有收到验证码的情况。

<d-rep>
<d-rep-title title="请求成功，成功的发送验证码">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code>

```json
{
    "sendresult": {
        "errorCode": 0,
        "errorMessage": "send success"
    },
    "phone": "18406586071"
}
```
</d-rep-code>

<d-rep-title title="请求成功，手机号不符合规则">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code>

```json
{
    "msg": [
        "phone非法的手机号"
    ],
    "error_code": 10001,
    "request": "GET /v1/shortmsg/sendverifcationcode"
}
```
</d-rep-code>

</d-rep>

示例代码

```js
sendShortMessage: function (e) {
    wx.request({
        url: 'http://localhost:4001/v1/shortmsg/sendverifcationcode',
        method: 'GET',
        data: {
            phone: '18406586071'
        },
        success(res){
            console.log(res)
        }
    })
}
```

## 绑定手机号码
<d-req-title title="绑定手机号" http_methods="GET" url="http://localhost:4001/v1/user/bindphone"></d-req-title>

<d-req>
<d-req-parm title="Request Parameters">
<d-req-parm-item name="type" necess="required" type="Integer" desc="用户的类型"></d-req-parm-item>
<d-req-parm-item name="openid" necess="required" type="String" desc="用户的openid"></d-req-parm-item>
<d-req-parm-item name="code" necess="required" type="String" desc="用户填写的6位纯数字验证码"></d-req-parm-item>
<d-req-parm-item name="phone" necess="required" type="String" desc="要绑定的11位中国大陆手机号(+86)"></d-req-parm-item>
</d-req-parm>
</d-req>

<d-rep>

<d-rep-title title="请求成功，校验码校验失败(可能是错误或者过期，两种情况暂时未分开提示)">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code>

```json
{
    "verifyresult": false,
    "msg": "验证码校验失败",
    "phone": "18406586071",
    "code": "123456"
}
```
</d-rep-code>


<d-rep-title title="请求成功，手机号已经绑定平台其他账号，同一平台只能绑定一次">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code>

```json
{
    "verifyresult": false,
    "msg": "手机号已经绑定平台其他账号",
    "phone": "18406586071",
    "code": "632713"
}
```
</d-rep-code>

<d-rep-title title="请求成功，绑定成功">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code>

```json
{
    "verifyresult": true,
    "msg": "绑定成功",
    "phone": "18406586071",
    "code": "632713"
}
```
</d-rep-code>
</d-rep>

 示例代码
```js
submitVertofyCode: function () {
    const that = this
    wx.request({
        url: 'http://localhost:4001/v1/user/bindphone',
        method: 'POST',
        header: {
            Authorization: that._echcode(wx.getStorageSync('token'))
        },
        data: {
            type: 100,
            openid: wx.getStorageSync('openid'),
            code: that.data.inputValue + '',
            phone: '18406586071'
        },
        success(res) {
            console.log(res)
        }
    })
}
```
