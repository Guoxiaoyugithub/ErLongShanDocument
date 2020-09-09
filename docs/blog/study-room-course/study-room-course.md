### 功能描述

查询每个教室的课表

<d-req-title title="查询每个教室的课表" http_methods="GET" url="https://miniapp.zb2l3.com/studyroom/course"></d-req-title>

### 请求参数

| 字段      | 字段类型 | 字段说明                              |
| :-------- | :------- | :------------------------------------ |
| classroom | String   | 教室的编号（区分大小写），例如 06402H |

### 返回结果

<d-rep-status status_code="200" status_des="OK"/> 请求成功，返回结果

```json
{
    "cdbh": "06402H",
    "cdlbmc": "教学东区",
    "cdmc": "06402H",
    "jgpxzd": "1",
    "jxlmc": "6#教学楼",
    "kszws1": "76",
    "lh": "06",
    "xqmc": "本部",
    "zws": "228",
    "courseinfor": [
        {
            "cdmc": "06402H",
            "xqjmc": "星期一",
            "xsdj": "5-6",
            "xsdj_num": [ 5,6],
            "zcd": "15-18周",
            "zcd_num": [15,16,17,18],
            "kcmc": "形势与政策",
            "kcxzjc": "必修",
            "khfsmc": "其它",
            "xm": "雷丽蓉"
        },
        {
            "cdmc": "06402H",
            "xqjmc": "星期五",
            "xsdj": "1-2",
            "xsdj_num": [1,2],
            "zcd": "11-16周",
            "zcd_num": [11,12,13,14,15,16],
            "kcmc": "模具CAD/CAE技术",
            "kcxzjc": "必修",
            "khfsmc": "未安排",
            "xm": "贾润礼"
        },

        ......
    ]
}
```
