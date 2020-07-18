## 全局请求规范

客户端在请求时需要传递token令牌，在发送token令牌时，不应该使用‘token’字段进行传输。而应该遵循HTTP协议中的认证标准，本系统使用Basic Authentication进行认证。在header中使用‘Authorization’字段来传输token。对于向服务端发送的token其格式为‘BASIC Base64加密文本’（请注意中间有空格）详细的请求方式请见示例代码。

```javascript
getUserInformation:function(){
        const that = this
        wx.request({
          url: 'http://locahost:3000/v1/user/getinfor',
          method:'GET',
          header:{
              openid:'otXqb5S1_gqhulI1j0fBt0',
              Authorization:this._echcode(wx.getStorageSync('token'))
          }
        })
    },

_echcode(){
        const token = wx.getStorageSync('token')
        const base64 = Base64(token + ':')
        return 'Basic ' + base64
    }
```

