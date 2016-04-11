define({ "api": [
  {
    "type": "delete",
    "url": "/api/answer/like",
    "title": "Unlike Answer",
    "version": "0.1.0",
    "group": "Answer",
    "description": "<p>取消点赞某个回答</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer_id",
            "description": "<p>某个回答的 ID</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/answer/like.py",
    "groupTitle": "Answer",
    "name": "DeleteApiAnswerLike",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/answer/like"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/answer",
    "title": "Get Answer Detail",
    "version": "0.1.0",
    "group": "Answer",
    "description": "<p>获取某个回答的详情</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer_id",
            "description": "<p>回答 ID</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/answer/answer.py",
    "groupTitle": "Answer",
    "name": "GetApiAnswer",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/answer"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/answer/comments",
    "title": "Get Comments",
    "version": "0.1.0",
    "group": "Answer",
    "description": "<p>获取某个回答下的所有评论</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer_id",
            "description": "<p>某个回答的 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_id",
            "description": "<p>分页中的初始 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "count",
            "description": "<p>该分页的大小<code>（默认为 10）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/answer/comments.py",
    "groupTitle": "Answer",
    "name": "GetApiAnswerComments",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/answer/comments"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/answer/score",
    "title": "Get Score Detail",
    "version": "0.1.0",
    "group": "Answer",
    "description": "<p>获取给某个回答的打分</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer_id",
            "description": "<p>某个回答的 ID</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/answer/score.py",
    "groupTitle": "Answer",
    "name": "GetApiAnswerScore",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/answer/score"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/answers",
    "title": "Get Answers",
    "version": "0.1.0",
    "group": "Answer",
    "description": "<p>获取某个问题下的所有回答</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question_id",
            "description": "<p>问题 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_id",
            "description": "<p>分页中的初始 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "count",
            "description": "<p>该分页的大小<code>（默认为 10）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/answer/answers.py",
    "groupTitle": "Answer",
    "name": "GetApiAnswers",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/answers"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/answer",
    "title": "Make Or Edit Answer",
    "version": "0.1.0",
    "group": "Answer",
    "description": "<p>添加或者编辑回答</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question_id",
            "description": "<p>问题 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>回答内容</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>回答图片</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/answer/answer.py",
    "groupTitle": "Answer",
    "name": "PostApiAnswer"
  },
  {
    "type": "post",
    "url": "/api/answer/comment",
    "title": "Make Comment",
    "version": "0.1.0",
    "group": "Answer",
    "description": "<p>评论某个回答</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer_id",
            "description": "<p>某个回答的 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "target_id",
            "description": "<p>要回复用户的 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/answer/comment.py",
    "groupTitle": "Answer",
    "name": "PostApiAnswerComment",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/answer/comment"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/answer/like",
    "title": "Like Answer",
    "version": "0.1.0",
    "group": "Answer",
    "description": "<p>点赞某个回答</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer_id",
            "description": "<p>某个回答的 ID</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/answer/like.py",
    "groupTitle": "Answer",
    "name": "PostApiAnswerLike",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/answer/like"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/answer/score",
    "title": "Give Or Edit Score",
    "version": "0.1.0",
    "group": "Answer",
    "description": "<p>给某个回答打分</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer_id",
            "description": "<p>某个回答的 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "score",
            "description": "<p>分数<code>（0~100，默认为 50）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/answer/score.py",
    "groupTitle": "Answer",
    "name": "PostApiAnswerScore",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/answer/score"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/feeds",
    "title": "Get Feeds",
    "version": "0.1.0",
    "group": "Feed",
    "description": "<p>获取 Feed 列表</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>获取某类型的 feed <code>{ &quot;following&quot;: 身边（校内 or 关注者）, &quot;discover&quot;: 其他的（校外 or 热门）}</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/feed/feeds.py",
    "groupTitle": "Feed",
    "name": "GetApiFeeds",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/feeds"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/notification",
    "title": "Get Notifications",
    "version": "0.1.0",
    "group": "Notification",
    "description": "<p>获取消息列表</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_id",
            "description": "<p>分页中的初始 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "count",
            "description": "<p>该分页的大小<code>（默认为 10）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/notification/notification.py",
    "groupTitle": "Notification",
    "name": "GetApiNotification",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/notification"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/notification/test",
    "title": "Test Notification",
    "version": "0.1.0",
    "group": "Notification",
    "description": "<p>推送测试消息给某用户</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/notification/notification.py",
    "groupTitle": "Notification",
    "name": "GetApiNotificationTest",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/notification/test"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/notification/read",
    "title": "Read Notifications",
    "version": "0.1.0",
    "group": "Notification",
    "description": "<p>标记某消息为已读</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notification_ids",
            "description": "<p>需要标记的所有回答 ID<code>（使用英文逗号分隔）</code>，若为空则将默认清空所有未读消息</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/notification/read.py",
    "groupTitle": "Notification",
    "name": "PostApiNotificationRead",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/notification/read"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/question/follow",
    "title": "Unfollow Question",
    "version": "0.1.0",
    "group": "Question",
    "description": "<p>取消跟踪某个问题</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question_id",
            "description": "<p>某个问题的 ID</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/question/follow.py",
    "groupTitle": "Question",
    "name": "DeleteApiQuestionFollow",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/question/follow"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/question",
    "title": "Get Question Detail",
    "version": "0.1.0",
    "group": "Question",
    "description": "<p>获取某个问题详情</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question_id",
            "description": "<p>问题 ID</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/question/question.py",
    "groupTitle": "Question",
    "name": "GetApiQuestion",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/question"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/question",
    "title": "Make Question",
    "version": "0.1.0",
    "group": "Question",
    "description": "<p>添加问题</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>问题标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>问题内容</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>问题图片</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/question/question.py",
    "groupTitle": "Question",
    "name": "PostApiQuestion"
  },
  {
    "type": "post",
    "url": "/api/question/follow",
    "title": "Follow Question",
    "version": "0.1.0",
    "group": "Question",
    "description": "<p>跟踪某个问题</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question_id",
            "description": "<p>某个问题的 ID</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/question/follow.py",
    "groupTitle": "Question",
    "name": "PostApiQuestionFollow",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/question/follow"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/user/logout",
    "title": "Logout",
    "version": "0.1.0",
    "group": "User",
    "description": "<p>注销用户</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/logopt.py",
    "groupTitle": "User",
    "name": "DeleteApiUserLogout",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/logout"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "Get Profile",
    "version": "0.1.0",
    "group": "User",
    "description": "<p>获取用户资料</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>用户 id</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/profile.py",
    "groupTitle": "User",
    "name": "GetApiUser",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/login",
    "title": "Login",
    "version": "0.1.0",
    "group": "User",
    "description": "<p>用户登录</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Token",
            "description": "<p>用户已登陆 Token<code>（当不提供 mobile 和 pwd 时，可用于刷新 Token）</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>用户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pwd",
            "description": "<p>用户密码<code>（使用加盐 md5 处理）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/logopt.py",
    "groupTitle": "User",
    "name": "GetApiUserLogin",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/login"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/schools",
    "title": "Schools",
    "version": "0.1.0",
    "group": "User",
    "description": "<p>获取学校列表</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/schools"
      }
    ],
    "filename": "XiaoxiaoTuServer/handler/api/user/register.py",
    "groupTitle": "User",
    "name": "GetApiUserSchools"
  },
  {
    "type": "post",
    "url": "/api/user/avatar",
    "title": "Upload Avatar",
    "version": "0.1.0",
    "group": "User",
    "description": "<p>上传用户头像，使用 <code>multipart/form-data</code> 类型 Post</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像图片数据</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/profile.py",
    "groupTitle": "User",
    "name": "PostApiUserAvatar"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "Register",
    "version": "0.1.0",
    "group": "User",
    "description": "<p>注册接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>用户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>用户密码<code>（使用加盐 md5 处理）</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "school_id",
            "description": "<p>学校 id</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/register.py",
    "groupTitle": "User",
    "name": "PostApiUserRegister",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/register"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/user",
    "title": "Edit Profile",
    "version": "0.1.0",
    "group": "User",
    "description": "<p>修改用户资料</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "gender",
            "description": "<p>用户性别 {0：女，1：男}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>一句话描述</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/profile.py",
    "groupTitle": "User",
    "name": "PutApiUser",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/user/following",
    "title": "UnFollow User",
    "version": "0.1.0",
    "group": "User_Activity",
    "description": "<p>取消关注某人</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>需要取消关注的用户 ID</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/follow_user.py",
    "groupTitle": "User_Activity",
    "name": "DeleteApiUserFollowing",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/following"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/followed_users",
    "title": "Get Followed Users",
    "version": "0.1.0",
    "group": "User_Activity",
    "description": "<p>获取某用户的关注者列表</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>需要查询的用户 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_id",
            "description": "<p>分页中的初始 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "count",
            "description": "<p>该分页的大小<code>（默认为 10）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/follow_user.py",
    "groupTitle": "User_Activity",
    "name": "GetApiUserFollowed_users",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/followed_users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/following",
    "title": "Follow User",
    "version": "0.1.0",
    "group": "User_Activity",
    "description": "<p>关注某人</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>需要关注的用户 ID</p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/follow_user.py",
    "groupTitle": "User_Activity",
    "name": "GetApiUserFollowing",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/following"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/following_questions",
    "title": "Get Followed Questions",
    "version": "0.1.0",
    "group": "User_Activity",
    "description": "<p>获取某个用户关注的问题</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>需要查询的用户 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_id",
            "description": "<p>分页中的初始 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "count",
            "description": "<p>该分页的大小<code>（默认为 10）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/question_following.py",
    "groupTitle": "User_Activity",
    "name": "GetApiUserFollowing_questions",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/following_questions"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/following_users",
    "title": "Get Following Users",
    "version": "0.1.0",
    "group": "User_Activity",
    "description": "<p>获取某用户的关注列表</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>需要查询的用户 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_id",
            "description": "<p>分页中的初始 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "count",
            "description": "<p>该分页的大小<code>（默认为 10）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/follow_user.py",
    "groupTitle": "User_Activity",
    "name": "GetApiUserFollowing_users",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/following_users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/liked_answers",
    "title": "Get Liked Answers",
    "version": "0.1.0",
    "group": "User_Activity",
    "description": "<p>获取某个用户点赞过的答案</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>需要查询的用户 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_id",
            "description": "<p>分页中的初始 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "count",
            "description": "<p>该分页的大小<code>（默认为 10）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/answer_liked.py",
    "groupTitle": "User_Activity",
    "name": "GetApiUserLiked_answers",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/liked_answers"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/participated_questions",
    "title": "Get Participated Questions",
    "version": "0.1.0",
    "group": "User_Activity",
    "description": "<p>获取某个用户参与过的问题</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>用户登陆 Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>需要查询的用户 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_id",
            "description": "<p>分页中的初始 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "count",
            "description": "<p>该分页的大小<code>（默认为 10）</code></p>"
          }
        ]
      }
    },
    "filename": "XiaoxiaoTuServer/handler/api/user/question_participated.py",
    "groupTitle": "User_Activity",
    "name": "GetApiUserParticipated_questions",
    "sampleRequest": [
      {
        "url": "http://192.168.10.99/api/user/participated_questions"
      }
    ]
  }
] });
