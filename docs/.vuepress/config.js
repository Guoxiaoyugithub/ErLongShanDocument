module.exports = {
    base: '/elsdoc/',
    title: '中北二龙山开发文档',
    description: '~~~~~~~~~',
    configureWebpack: {
        
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        // repo: 'https://github.com/Guoxiaoyugithub/ErLongShanDocument',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        nav: [
            { text: '主页', link: '/' },
            { text: '博客', link: '/blog/firstBlog.md' },
            {
                text: '求索',
                items: [
                    // link：指向链接也可以是外网链接
                    { text: 'Segmentfault', link: 'https://guowy.club' },
                ]
            },
        ],
        sidebar: [
            ['/', '首页'],

            {
                title: '全局相关配置',
                children: [
                    ['/blog/global-api-summary/global-api-summary.md','全局接口总览'],
                    ['/blog/global-exception-handling/global-exception-handling.md', '全局异常处理'],
                    ['/blog/global-configuration-item/global-configuration-item.md', '全局配置项'],
                    ['/blog/global-request-specification/global-request-specification.md', '全局请求规范'],
                    ['/blog/proxy-server/proxy-server.md', '代理服务器']
                ]
            },
            {
                title: '用户相关业务',
                children: [
                    ['/blog/user-related-services/user-related-services.md', '1. 用户登录'],
                    ['/blog/user-query/user-query.md', '2. 用户查询'],
                    ['/blog/user-update/user-update.md', '3. 用户信息更新'],
                    ['/blog/user-bind-phone/user-bind-phone.md', '4. 用户绑定手机'],
                    ['/blog/user-bind-email/user-bind-email.md', '5. 用户绑定邮箱'],
                ]
            },
            {
                title: '课表相关业务',
                children: [
                    ['/blog/demand-analysis-of-curriculum/demand-analysis-of-curriculum.md', '课表需求分析'],
                    ['/blog/overall-curriculum-design/overall-curriculum-design.md', '课表总体设计'],
                    ['/blog/query-curriculum-by-classid/query-curriculum-by-classid.md', '根据班级查询课表'],
                ]
            },
            {
                title: '成绩查询相关业务',
                children: [
                    ['/blog/design-and-implementation-of-grade-query/design-and-implementation-of-grade-query.md', '1.成绩查询技术设计实现'],
                    ['/blog/edu-sys-get-data/edu-sys-get-data.md', '2.教务系统获取数据'],
                ]
            },
            {
                title: '蹭课相关业务',
                children: [
                    ['/blog/design-and-implementation-of-sub-lessons/design-and-implementation-of-sub-lessons.md', '1.蹭课设计实现'],
                    ['/blog/skimming-lessons-service-api/skimming-lessons-service-api.md', '2.蹭课业务接口'],
                ]
            },
        ]
    }
}
