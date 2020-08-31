## 课表查询

### 功能描述

<d-tips type="point">由于课表部分的数据较为复杂多变，在系统设计上并没有使用 Restful 而使用了 GraphQL 作为查询语言。</d-tips>

<d-req-title title="根据班级号查询课表(区分大小写)" http_methods="GET" url="https://miniapp.zb2l3.com/curriculum"></d-req-title>

<d-req>
<d-req-parm title="Request Parameters">
<d-req-parm-item name="query" necess="required" type="String" desc="GraphQL的查询模型"></d-req-parm-item>
</d-req-parm>
</d-req>

GraphQL 支持自定义组合查询的字段与结果，系统中提供的字段如表所示，客户端可以根据自己的需要按需组合：

| 字段名         | 字段说明   | 示例                           |
| :------------- | :--------- | :----------------------------- |
| \_id           | 数据库 id  | 5f1d0b30d1c6a4d3f1305508       |
| year           | 年度       | 2019                           |
| yearRange      | 学期范围   | 2019-2020                      |
| semester       | 学期       | 2                              |
| grade          | 年级       | 2016                           |
| college        | 学院       | 软件学院                       |
| class_id       | 班级号     | 16140Y02                       |
| teachingScheme | 教学方案   | 软件工程（云计算与大数据分析） |
| kbList         | 课表列表   | 见下表                         |
| sjkList        | 实践课列表 | 见下表                         |

课程属性 kbList
| 字段名 | 字段说明 | 示例 |
| :------------- | :--------- | :----------------------------- |
| jxb_id | 课程 id | 9A553B711DBF4018E050007F01006803 |
| jxbmc | 课程完成名名称 | 大数据分析与应用-0001 |
| jxbrs | 未知 | 137 |
| jxbzc | 课程班级 | 17130Y01;17130Y02;17130Y03 |
| kcmc | 课程简称(推荐使用) | 大数据分析与应用 |
| kcxszc | 课程学时 | 理论学时:32 |
| kcxzjc | 课程属性 | 必修 |
| khfsmc | 未知 | 未安排 |
| cdmc | 上课教室 | 09302H |
| jc | 节数 | 1-2 节 |
| jcor | 节数数字 | 1-2 |
|xf|学分|2|
|xkbz|未知|无|
|xkrs|未知|137|
|xm|老师姓名|周耀鉴|
|xnm|未知|2019|
|xqdm|未知|0|
|xqh1|未知|01|
|xqh_id|未知| 01|
|xqj|星期几|1|
|xqjmc|星期几(推荐使用)|星期一|,
|xqm|未知|12|
|xqmc|校区|本部|
|xsdj|未知|1-2|
|year|未知|2020|
|zcd|上课时间周|1-8 周|
|zhxs|未知|4|
|zxs|学时|32|
|zyfx_id|未知|wfx|
|zyfxmc|未知|无方向|
|zzrl|未知|137|

| 字段名 | 字段说明 | 示例 |
| :------------- | :--------- | :----------------------------- |
| qtkcgs | 实践课程内容|公益劳动白利波(共1周)/1周 |

<d-tips type="point">表中的字段并非是固定的，包括顺序，组合方式，名称（GraphQL可以在客户端请求时指定返回API的字段名称）</d-tips>


组合示例：

```js
query {
  getSysCurriculumByClassId(class_id:"17010141",yearRange:"2020-2021",semester:"1"){
        _id,
        year,
        yearRange,
        semester,
        grade,
        college,
        class_id,
        teachingScheme,
        kbList{
            jxb_id,
            jxbmc,
            jxbrs,
            jxbzc,
            jxb_id,
            jxbmc,
            jxbrs,
            jxbzc,
            kcmc,
            kcxszc,
            kcxzjc,
            khfsmc,
            cdmc,
            jc,
            jcor,
            xf ,
            xkbz ,
            xkrs ,
            xm ,
            xnm ,
            xqdm ,
            xqh1 ,
            xqh_id ,
            xqj ,
            xqjmc ,
            xqm ,
            xqmc ,
            xsdj ,
            year ,
            zcd ,
            zhxs ,
            zxs ,
            zyfx_id ,
            zyfxmc ,
            zzrl
        }
        sjkList{
            qtkcgs
        }
  }
}
```

<d-tips type="attention">{ \_id, year, yearRange .....},此处使用的对象查询并非是 ES6 中的对象特性，而是 GraphQL 的查询规范。</d-tips>

<d-rep>
<d-rep-title title="请求成功，返回结果">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code>

```json
{
  "data": {
    "getSysCurriculumByClassId": [
      {
        "_id": "5f1d0db87777aa1a8d054a96",
        "year": "2019",
        "yearRange": "2019-2020",
        "semester": "2",
        "grade": "2017",
        "college": "软件学院",
        "class_id": "17130Y02",
        "teachingScheme": "软件工程（云计算与大数据分析）",
        "kbList": [
          {
            "jxb_id": "9A553B711DBF4018E050007F01006803",
            "jxbmc": "大数据分析与应用-0001",
            "jxbrs": "137",
            "jxbzc": "17130Y01;17130Y02;17130Y03",
            "kcmc": "大数据分析与应用",
            "kcxszc": "理论学时:32",
            "kcxzjc": "必修",
            "khfsmc": "未安排",
            "cdmc": "09302H",
            "jc": "1-2节",
            "jcor": "1-2",
            "xf": "2",
            "xkbz": "无",
            "xkrs": "137",
            "xm": "周耀鉴",
            "xnm": "2019",
            "xqdm": "0",
            "xqh1": "01,",
            "xqh_id": "01",
            "xqj": "1",
            "xqjmc": "星期一",
            "xqm": "12",
            "xqmc": "本部",
            "xsdj": "1-2",
            "year": "2020",
            "zcd": "1-8周",
            "zhxs": "4",
            "zxs": "32",
            "zyfx_id": "wfx",
            "zyfxmc": "无方向",
            "zzrl": "137"
          },
        ],
        "sjkList": [
          {
            "qtkcgs": "公益劳动白利波(共1周)/1周"
          },
          {
            "qtkcgs": "软件工程项目实训孙乔(共20周)/1-20周"
          },
          {
            "qtkcgs": "大数据分析与应用实验周耀鉴(共15周)/1-15周"
          },
          {
            "qtkcgs": "数据仓库与数据挖掘实验张静(共15周)/1-15周"
          }
        ]
      }
    ]
  }
}
```
</d-rep-code>
</d-rep>
