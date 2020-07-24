
### 功能描述

用户通过输入自己的账号和密码，来查询自己教务系统中的成绩

### 请求说明

> 请求方式：<request-method http_methods="GET"/>  请求URL ：v1/grades/getgrades

### 请求参数

| 字段           | 字段类型 | 字段说明     |
| :------------- | :------- | :----------- |
| openid(HEADER) | String   | 用户的openid |
| username       | String   | 教务系统账户 |
| password       | String   | 教务系统密码 |

### 返回结果

200 : OK  请求成功，返回token

```json
{
    "msg": "OK",
    "error_code": 0,
    "data": [
        [
            {
                "Course_Name": "大学英语口语",
                "Course_Credit": 1,
                "Course_Grade": 95,
                "Course_Grade_Point": 4.5,
                "Course_Type": "必修",
                "Course_Year": "2016",
                "Course_Year_Range": "2016-2017",
                "Record_Id": "2016-2017-1-1-N01140101-01-1614010222"
            },
            {
                "Course_Name": "C语言程序设计",
                "Course_Credit": 3.5,
                "Course_Grade": 81,
                "Course_Grade_Point": 3.1,
                "Course_Type": "必修",
                "Course_Year": "2016",
                "Course_Year_Range": "2016-2017",
                "Record_Id": "2016-2017-1-1-N02140102-01-1614010222"
            },
            {
                "Course_Name": "体育1",
                "Course_Credit": 2,
                "Course_Grade": 83,
                "Course_Grade_Point": 3.3,
                "Course_Type": "必修",
                "Course_Year": "2016",
                "Course_Year_Range": "2016-2017",
                "Record_Id": "2016-2017-1-1-N01110001-170-1614010222"
            },
            {
                "Course_Name": "学期平均绩点",
                "Course_Grade_Point": 3.1
            }
            
            .....
            
            {
                "Course_Name": "学期平均绩点",
                "Course_Grade_Point": 4.21
            },
            {
                "Course_Name": "总平均绩点",
                "Course_Grade_Point": 3.38
            }
        ]
    ]
}
```

data数据中，按照学期划分，如图所示有8个学期的成绩，但是有的低年级同学学期并非是8个学期

<img src="./2020072023451545SS.png" style="zoom:80%;" />

200 : OK     code: -3 密码错误

```json
{
    "msg": "账号或密码错误",
    "error_code": -3,
    "data": []
}
```

400 : Bad Request    

```json
{
    "msg": [
        "username字段是必填参数",
        "password字段是必填参数"
    ],
    "error_code": 10001,
    "request": "POST /v1/grades/getgrades"
}
```

### 返回参数

| 字段               | 字段类型 | 字段说明 |
| :----------------- | :------- | :------- |
| Record_Id       | String   | 学生成绩记录ID(可以用作前端Diff树的key) |
|Course_Year_Range|String|学年范围|
|Course_Year|String|学年|
| Course_Name        | String   | 课程名称 |
| Course_Credit      | Integer  | 课程学分 |
| Course_Grade       | Integer  | 课程成绩 |
| Course_Grade_Point | Integer  | 课程绩点 |

### 错误状态码

| 状态码 | 说明                             |
| :----- | :------------------------------- |
| 10006  | 账号或密码错误，无法登陆教务系统 |

### 示例代码
```javascript
getGrade: function () {
    wx.request({
        url: 'http://localhost:3000/v1/grades/getgrades',
        method: 'GET',
        header: {
            openid: 'otXqb5S1_gqZy',
            Authorization: this._echcode(wx.getStorageSync('token'))
        },
        data: {
            username: "1614010222",
            password: "zbdx******"
        },
        success(res) {
            console.log(res)
        }
    })
}
```

