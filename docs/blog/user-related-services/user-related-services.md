## 1.1 登录

### 功能描述

用户通过多种方式进行系统的登录，包括通过微信小程序登录，手机号登录，邮箱及密码登录

### 请求说明
<!-- <request-title title="获取Token" http_methods="POST"></request-title> -->

> 请求方式：<request-method http_methods="POST"/> 请求URL ：v1/token

### 请求参数

| 字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| type | Integer | 用户登录的类型 |
| account | String | 账户 |
| secret | String | 密码 |

登录用户的类型：

| 用户类型       | 对应编号 | 是否支持 |
| :------------- | :------- | :------- |
| 微信小程序用户 | 100      | √        |
| 邮箱密码登录   | 101      | √        |
| 手机号登录     | 102      | ×        |
| 管理员登录     | 200      | ×        |

### 返回结果

200 : OK  请求成功，返回token

```json
{ "token": "eyJhbGciOiJ.eyJ1aWQiOjgsInNjb3BlIjo4LCJpYX" }
```

401: Unauthorized 无效的openid

```json
{
    "msg": "openid acquisition failed ,errcode:40029",
    "error_code": 10004,
    "request": "POST /v1/token"
}
```

503: Service Unavailable 无法与微信服务器建立连接

```json
{
    "msg": "openid acquisition failed due to network problems",
    "error_code": 10004,
    "request": "POST /v1/token"
}
```

### 返回参数

| 字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| token | string | token值 |

### 错误状态码

| 状态码 | 说明 |
| :--- | :--- |
| 10004 | 认证失败 |

### 示例代码

```javascript
userlogin: function () {
        wx.login({
            success(res) {
                if (res.code) {
                    wx.request({
                        url: 'http://localhost:3000/v1/token',
                        method: 'POST',
                        data: {
                            account: res.code,
                            type:100
                        },
                        success(res){
                            const code = res.statusCode.toString()
                            if(code.startsWith('2')){
                                wx.setStorageSync('token', res.data.token)
                            }
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
    }
```



## 1.2 验证Token

### 功能描述

客户端主动验证token是否合法或者token是否过期，然后决定是否获取新的token

### 请求说明

> 请求方式：<request-method http_methods="POST"/>  请求URL ：/v1/token/verify

### 请求参数

| 字段  | 字段类型 | 字段说明          |
| :---- | :------- | :---------------- |
| token | String   | 待验证的token令牌 |

### 返回结果

200 : OK  请求成功，返回验证结果

```json
{ result: false }
```

200 : OK 请求成功，但无法达到预期，参数错误

```json
{
    msg: ["token字段是必填参数"],
    error_code: 10001,
    request: "POST /v1/token/verify"
}
```

### 返回参数

| 字段   | 字段类型 | 字段说明   |
| :----- | :------- | :--------- |
| result | Boolean  | 验证的结果 |

### 错误状态码

| 状态码 | 说明     |
| :----- | :------- |
| 10001  | 参数错误 |

### 示例代码

```javascript
verifytoken: function () {
        wx.request({
            url: 'http://localhost:3000/v1/token/verify',
            method: 'POST',
            data: {
                token:wx.getStorageSync('token')
            },
            success: (res) => {
                console.log(res.data)
            }
        })
    }
```

