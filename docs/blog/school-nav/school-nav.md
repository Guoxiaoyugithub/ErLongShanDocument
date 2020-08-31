
### 功能描述

根据分类来获取校园导览中的数据点

<d-req-title title="根据分类获取数据" http_methods="GET" url="https://miniapp.zb2l3.com/schoolmap"></d-req-title>

### 请求参数

| 字段  | 字段类型 | 字段说明          |
| :---- | :------- | :---------------- |
| query | String   | GraphQL查询模型 |

### 组合示例
```js
// 宿舍楼、运动场、银行、教学楼、食堂、景点、停车场、礼堂、医院
query{
  getMapDataByCategory(category:"宿舍楼"){
    _id,
    title,
    description,
    logo,
    image,
    latitude,
    longitude,
    category,
    priority,
    status,
    created_at,
    updated_at,
    minappid
  }
}
```

### 返回结果

<d-rep-status status_code="200" status_des="OK"/> 请求成功，返回验证结果

```json
{
    "data": {
        "getMapDataByCategory": [
            {
                "_id": "5f3ddd96d9876a29fef27192",
                "title": "文韬苑-6号、7号",
                "description": "文韬苑宿舍区位于东区新食堂附近。化学工程与技术学院（简称4院）与环境与安全工程学院（简称14院）本科男女生，6号楼为女生，7号楼为男生。",
                "logo": "https://cloud-minapp-17677.cloud.ifanrusercontent.com/1fhRIDXkegzNZjYI.jpg",
                "image": [
                    "https://cloud-minapp-17677.cloud.ifanrusercontent.com/1fhRIDXkegzNZjYI.jpg"
                ],
                "latitude": "38.017846",
                "longitude": "112.454478",
                "category": "宿舍楼",
                "priority": "16",
                "status": "1",
                "created_at": "1532315580",
                "updated_at": "1536202291",
                "minappid": "5b5547d08fe7860df73752c8"
            },

            ......    
        ]
    }
```


### 返回参数

| 字段   | 字段类型 | 字段说明   |
| :----- | :------- | :--------- |
| result | Boolean  | 验证的结果 |


### 示例代码

你可以按照分类读取
```javascript
getSchoolMapByCategory: function (e) {
    let category = "宿舍楼"
    wx.request({
      url: 'https://miniapp.zb2l3.com/schoolmap',
      method: 'GET',
      data: {
        //   这里的query字符串可以格式化，也可以写在一起
        query: `query{getMapDataByCategory(category:"${category}"){
          _id,title,description,logo,image,latitude,longitude,priority,status,created_at,updated_at,minappid
        }}`
      },
      success(res) {
        console.log(res)
      }
    })
},
```

当然也可以一次性读取全部的地图信息
```javascript
getSchoolMapAllPoint: function (e) {
    wx.request({
      url: 'https://miniapp.zb2l3.com/schoolmap',
      method: 'GET',
      data: {
        query: `query{
          getALlMapData{
            _id,title,description,logo,image,latitude,longitude,priority,status,created_at,updated_at,minappid
          }
        }`
      },
      success(res) {
        console.log(res)
      }
    })
  }
```

如果你不想要最后的四个字段，那么就在query参数中删去他，那么结果就不会返回他们
```javascript
data: {
    query: `
    query{
        getALlMapData{
            _id,title,description,logo,image,latitude,longitude,priority
        }
    }`
},
```

如果你觉得getAllMapData这个名字不好听，或者你想把每次请求的结果都统一命名，那么试着这样写：
```javascript
data: {
    query: `
    query{
        AGoodName:getALlMapData{
            _id,title,description,logo,image,latitude,longitude,priority
        }
    }`
},
```

同样如果字段的名字你不喜欢，那么试着使用 你想使用的名字:原来的字段名称
```javascript
data: {
    query: `
    query{
        AGoodName:getALlMapData{
            AGoodId:_id, #看这里
            title,description,logo,image,latitude,longitude,priority
        }
    }`
},
```

如果你想同时发起多个请求，那么也是可以的，但是名字不能一样：
```javascript
data: {
    query: `
    query{
        data1:getMapDataByCategory(category:"宿舍楼"){
                _id,title,description,logo,image,latitude,longitude,priority,status,created_at,updated_at,minappid
        }
        data2:getMapDataByCategory(category:"银行"){
                _id,title,description,logo,image,latitude,longitude,priority,status,created_at,updated_at,minappid
        }
    }`
},
```