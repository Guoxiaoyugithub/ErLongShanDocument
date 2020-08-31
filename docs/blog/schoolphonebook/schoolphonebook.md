### 功能描述

获取电话簿中的分类

<d-req-title title="获取分类数据" http_methods="GET" url="https://miniapp.zb2l3.com/phonebook"></d-req-title>

### 请求参数

| 字段  | 字段类型 | 字段说明          |
| :---- | :------- | :---------------- |
| query | String   | GraphQL查询模型 |

### 组合示例
```javascript
query{
  getCallnumCategory{
    _id
    class_name
    class_url
    parent_id
    view_index
    isPublic
    status
    created_at
    updated_at
    id_label
  }
}
```

### 返回结果

<d-rep-status status_code="200" status_des="OK"/> 请求成功，返回验证结果

```json
{
  "data": {
    "getCallnumCategory": [
      {
        "_id": "5f477848437add9945fdeda0",
        "class_name": "国防教育学院(武装部)",
        "class_url": "",
        "parent_id": "5b7eb6fb5e6a270c3c3482f0",
        "view_index": 20,
        "isPublic": 1,
        "status": 1,
        "created_at": 1535032581,
        "updated_at": 1535092012,
        "id_label": "5b7ebd055e6a271b3f486e93"
      },
      {
        "_id": "5f477848437add9945fdeda1",
        "class_name": "团委",
        "class_url": "",
        "parent_id": "5b80150829844a23adaa9f1b",
        "view_index": 2,
        "isPublic": 1,
        "status": 1,
        "created_at": 1535120905,
        "updated_at": 1535120905,
        "id_label": "5b80160929844a23a8c08ca7"
      },

      ....
    ]}
}
```

### 功能描述

获取分类下的详细列表信息

<d-req-title title="获取分类下的详细数据" http_methods="GET" url="https://miniapp.zb2l3.com/phonebook"></d-req-title>

### 请求参数

| 字段  | 字段类型 | 字段说明          |
| :---- | :------- | :---------------- |
| query | String   | GraphQL查询模型 |

### 组合示例
```javascript
query{
  getCallNumDetailByCategory(classid:"5b7ebbef5e6a271b3f486e76"){
    _id,
    company_name,
    company_call_num,
    company_contact,
    company_contact_mobile,
    detail_address,
    latitude,
    longitude,
    company_info_pic,
    company_info_text,
    building_name,
    company_url,
    parent_id,
    status,
    created_at,
    updated_at,
    id_label
  }
}
```

### 返回结果

<d-rep-status status_code="200" status_des="OK"/> 请求成功，返回验证结果

```json
{
  "data": {
    "getCallNumDetailByCategory": [
      {
        "_id": "5f478388232c794a49afc17a",
        "company_name": "人文学院团委",
        "company_call_num": "0351-3559510",
        "company_contact": "",
        "company_contact_mobile": "",
        "detail_address": "",
        "latitude": "",
        "longitude": "",
        "company_info_pic": "",
        "company_info_text": "",
        "building_name": "",
        "company_url": "http://shss.nuc.edu.cn/",
        "parent_id": "5b7ebbef5e6a271b3f486e76",
        "status": 1,
        "created_at": 1535381549,
        "updated_at": 1535381549,
        "id_label": "5b84102d28e70f1b6f81dc9a"
      },
      {
        "_id": "5f478388232c794a49afc19d",
        "company_name": "人文学院副书记兼副院长办公室",
        "company_call_num": "0351-3922295",
        "company_contact": "",
        "company_contact_mobile": "",
        "detail_address": "",
        "latitude": "",
        "longitude": "",
        "company_info_pic": "",
        "company_info_text": "",
        "building_name": "",
        "company_url": "http://shss.nuc.edu.cn/",
        "parent_id": "5b7ebbef5e6a271b3f486e76",
        "status": 1,
        "created_at": 1535381297,
        "updated_at": 1535381297,
        "id_label": "5b840f3128e70f1b6a81dc8f"
      },

      ....

    ]}
}
```

### 示例代码参考校园导览部分

