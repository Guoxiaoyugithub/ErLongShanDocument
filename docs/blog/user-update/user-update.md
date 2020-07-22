## 3.1 更新用户的微信信息

### 功能描述

小程序端通过用户授权后获取用户的个人信息，之后将信息上传到服务器。

### 请求说明

> 请求方式：GET  请求URL ：**/v1/user/updatewxinfo**

### 请求参数

| 字段             | 字段类型 | 字段说明                           |
| :--------------- | :------- | :--------------------------------- |
| openid  (HEADER) | String   | 小程序用户的openid，通过header传参 |
| openid           | String   | 小程序用户的openid，通过body传参   |
| nickname         | String   | 用户昵称                           |
| gender           | Integer  | 用户性别， 0：未知、1：男、2：女   |
| city             | String   | 城市                               |
| province         | String   | 省份                               |
| country          | String   | 国家                               |
| avatarurl        | String   | 头像地址                           |
| unionid          | String   | 小程序用户的unionid                |
| language         | String   | 用户系统语言                       |

### 返回结果

200 : OK  请求成功，返回用户信息

```json
{
    "msg": 更新成功/更新失败
}
```

### 返回参数

| 字段 | 字段类型 | 字段说明 |
| :--- | :------- | :------- |
| msg  | String   | 提示信息 |

### 错误状态码

| 状态码 | 说明        |
| :----- | :---------- |
| 10006  | 非法的token |

### 示例代码

```javascript
bindGetUserInfo: function (e) {
    const userInfo = e.detail.userInfo
    wx.request({
        url: 'http://localhost:3000/v1/user/updatewxinfo',
        method: 'POST',
        header: {
            openid: 'otXqb5S1_gqZyOEuOhul',
            Authorization: this._echcode(wx.getStorageSync('token'))
        },
        data: {
            openid: 'otXqb5S1_gqZyOEuOhul',
            nickname: userInfo.nickName,
            gender: userInfo.gender,
            city: userInfo.city,
            province: userInfo.province,
            country: userInfo.country,
            avatarurl: userInfo.avatarUrl,
            unionid: userInfo.unionid,
            language: userInfo.language,
        },
        success(res){
            console.log(res)
        }
    })
}
```

