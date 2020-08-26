## 2.1 用户信息查询

### 功能描述

通过openid查询用户的信息，主要包括用户的数据库id，用户的绑定邮箱以及绑定手机号。因为系统的鉴权机制设计的是一种通用鉴权机制，所以在token的加密中没有包含openid等小程序特有的属性。所以一些接口需要通过header传递openid参数。

<d-req-title title="用户信息查询" http_methods="GET" url="https://miniapp.zb2l3.com/user/v1/user/getinfor"></d-req-title>
### 请求参数

| 字段             | 字段类型 | 字段说明                           |
| :--------------- | :------- | :--------------------------------- |
| openid  (HEADER) | String   | 小程序用户的openid，通过header传参 |

### 返回结果

200 : OK  请求成功，返回用户信息

```json
{
    "id": 8,
    "nickname": null,
    "email": null,
    "openid": "otXqb5S1_gqZyOEuOhulI1j0fBt0",
    "bindphone": null,
}
```

403: Unauthorized 用户token不合法

```json
{
    "msg": "用户token不合法",
    "error_code": 10006,
    "request": "GET /v1/user/getinfor"
}
```

### 返回参数

| 字段      | 字段类型 | 字段说明           |
| :-------- | :------- | :----------------- |
| id        | string   | 用户的id           |
| nickname  | String   | 用户昵称           |
| email     | String   | 用户绑定邮箱       |
| openid    | String   | 用户小程序的openid |
| bindphone | String   | 用户绑定的手机号   |

### 错误状态码

| 状态码 | 说明        |
| :----- | :---------- |
| 10006  | 非法的token |

### 示例代码

```javascript
userlogin: function () {
        const that = this
        wx.request({
          url: 'https://miniapp.zb2l3.com/user/v1/user/getinfor',
          method:'GET',
          header:{
              openid:'otXqb5S1_gqZyOEuOhulI1j0fBt0',
              Authorization:this._echcode(wx.getStorageSync('token'))
          }
        })
    }
```

