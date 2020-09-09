### 功能描述

查询每个教室的无课情况

<d-req-title title="每个教室的无课情况" http_methods="GET" url="https://miniapp.zb2l3.com/studyroom"></d-req-title>

### 请求参数

| 字段  | 字段类型 | 字段说明          |
| :---- | :------- | :---------------- |
| week | String   | 第几周传递一个数字，例如 5 |
| tody | String   | 周几，例如 星期二 |

### 返回结果

<d-rep-status status_code="200" status_des="OK"/> 请求成功，返回验证结果

```json
// true 表示无课，可以自习；false表示有课 一天中一共11小节课
{
    "06401H": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true,
        "8": true,
        "9": false,
        "10": false,
        "11": false
    },
    "06402H": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true,
        "8": true,
        "9": false,
        "10": false,
        "11": false
    },

    ....
}
```


### 功能描述

查询所有的教室信息

<d-req-title title="查询所有的教室信息" http_methods="GET" url="https://miniapp.zb2l3.com/studyroom/classroomlist"></d-req-title>

### 请求参数

无

### 返回结果

<d-rep-status status_code="200" status_des="OK"/> 请求成功，返回验证结果

```json
// lh 楼号； kszwsl：考试座位数量；  zws：座位数量；  bz：备注   
{
    "06401H": {
        "cdbh": "06401H",
        "cdlbmc": "教学东区",
        "cdmc": "06401H",
        "jgpxzd": "1",
        "jxlmc": "6#教学楼",
        "kszws1": "76",
        "lh": "06",
        "xqmc": "本部",
        "zws": "228"
    },
    "06402H": {
        "cdbh": "06402H",
        "cdlbmc": "教学东区",
        "cdmc": "06402H",
        "jgpxzd": "1",
        "jxlmc": "6#教学楼",
        "kszws1": "76",
        "lh": "06",
        "xqmc": "本部",
        "zws": "228"
    },
    "15403Z": {
        "bz": "活动桌椅",
        "cdbh": "15403Z",
        "cdlbmc": "教学西区",
        "cdmc": "15403Z",
        "jgpxzd": "1",
        "jxlmc": "15#教学楼",
        "kszws1": "20",
        "lh": "15",
        "xqmc": "本部",
        "zws": "60"
    },
    ....

}
```