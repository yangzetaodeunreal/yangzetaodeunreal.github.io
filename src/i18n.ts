import { createI18n } from 'vue-i18n'

//i18n
export const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages: {
        "zh-CN": {
            layout: {
                home: "首页",
                blogPosts: "我的博客",
                footerBless: "編程愉快！"
            },
            home: {
                wechat: "微信号",
                email: '邮箱',
                mySkills: "技能",
                careerLine: "职业生涯故事线",
                contactMe: "联系我",
                shortIntro: "你好啊！<br>我叫杨泽韬，一个后端程序员，目前在厦门工作。<br>我相信工作也能造就一个人，以社会福祉和弱势群体为方向付出贡献！<br><br><br>此致敬礼！<br><br>杨泽韬",
                skillCSharp: "拥有3年的C# ASP.NET Core工作经验",
                skillGolang: "Golang也是我近来热爱的编程语言",
                skillVue: "熟悉运用HTML/CSS/JS和Vue.js框架来开发前端页面",
                skillSQL: "工作中少不了与各种类型的数据库打交道，经常运用的是SQL Server",
                skillGit: "这不是一个人的战斗，团队协作需要Git来管理代码任务的PR和冲突",
                skillK8s: "工作需要的Kubernetes配置和命令当然也要啦！",
                skillMore: "列表太长先到这！",
                careerIntern: { title: "在亚尔迪Kooboo团队实习", date: "2022年3月18日 ~ 2022年6月30日" },
                careerGraduated: { title: "从厦门理工学院毕业", date: "2022年7月1日" },
                careerVitaminstore: { title: "加入亚尔迪的Vitaminstore团队工作", date: "2022年7月1日至今" }
            }
        },
        en: {
            layout: {
                home: "Home",
                blogPosts: "Blog Posts",
                footerBless: "Happy coding!"
            },
            home: {
                wechat: "Wechat",
                email: 'Email',
                mySkills: "My skills",
                careerLine: "My career line",
                contactMe: "Contact me",
                shortIntro: 'Hi!<br>My name is Zetao Yang. I am a backend developer, currently located in Xiamen City, Fujian Province, China.<br>I believe that work can also build up a person and make contributions in the direction of social welfare and disadvantaged groups!<br><br><br>Best regards,<br>Zetao',
                skillCSharp: "At least 3 years of working experience in C# ASP.NET Core",
                skillGolang: "Golang is also my favorite programming language recently",
                skillVue: "Familiar with using HTML/CSS/JS and Vue.js framework to develop front-end pages",
                skillSQL: "Being met with various types of databases at work is inevitable, and SQL Server is often used.",
                skillGit: "Of course, there are also various tools needed for development! For example, Git",
                skillK8s: "Of course, you also need the Kubernetes configuration and commands required to deployed your microservices",
                skillMore: "The list could be longer...",
                careerIntern: { title: "Internship with the Kooboo team at Yardi", date: "March 18th, 2022 - July 1st, 2022" },
                careerGraduated: { title: "Graduated from Xiamen University of Technology", date: "July 1st, 2022" },
                careerVitaminstore: { title: "Working on the Vitaminstore Team at Yardi", date: "July 1st, 2022 - Now" }
            }
        }
    }
})
