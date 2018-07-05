var jsondata = {
    "title": "newFlow_1",
    "nodes": {
        "demo_node_1": {//流程图标ID
            "name": "开始",//流程图标name
            "left": 42,//流程图标据左边框距离
            "top": 38,//流程图标据上边框距离
            "type": "start round mix",//流程图标据类型
            "width": 26,//流程图标据宽
            "height": 26,//流程图标据高
            "alt": true//（没看出有啥功能，传数据时传上）
        },
        "demo_node_2": {
            "name": "结束",
            "left": 797,
            "top": 42,
            "type": "end round mix",
            "width": 26,
            "height": 26,
            "alt": true
        },
        "demo_node_3": {
            "name": "入职申请",
            "left": 155,
            "top": 39,
            "type": "task",
            "width": 104,
            "height": 26,
            "marked": true,
            "alt": true
        },
        "demo_node_4": {
            "name": "人力审批",
            "left": 364,
            "top": 42,
            "type": "task",
            "width": 104,
            "height": 26,
            "alt": true
        },
        "demo_node_8": {
            "name": "工资判断",
            "left": 571,
            "top": 43,
            "type": "node",
            "width": 104,
            "height": 26,
            "alt": true
        },
        "demo_node_9": {
            "name": "经理终审",
            "left": 559,
            "top": 141,
            "type": "task",
            "width": 104,
            "height": 26,
            "alt": true
        }
    },
    "lines": {//线条
        "demo_line_5": {//线条id
            "type": "sl",//线条类型
            "from": "demo_node_3",//线条从哪里
            "to": "demo_node_4",//线条指向哪里
            "name": "提交申请"//线条上的字（注释）
        },
        "demo_line_6": {
            "type": "sl",
            "from": "demo_node_1",
            "to": "demo_node_3",
            "name": ""
        },
        "demo_line_7": {
            "type": "tb",
            "M": 18.5,
            "from": "demo_node_4",
            "to": "demo_node_3",
            "name": "不通过"
        },
        "demo_line_10": {
            "type": "sl",
            "from": "demo_node_4",
            "to": "demo_node_8",
            "name": "通过"
        },
        "demo_line_11": {
            "type": "tb",
            "M": 157,
            "from": "demo_node_9",
            "to": "demo_node_4",
            "name": "不接受"
        },
        "demo_line_12": {
            "type": "sl",
            "from": "demo_node_8",
            "to": "demo_node_9",
            "name": "大于8000"
        },
        "demo_line_13": {
            "type": "sl",
            "from": "demo_node_8",
            "to": "demo_node_2",
            "name": "小于8000"
        },
        "demo_line_14": {
            "marked": true,
            "type": "sl",
            "from": "demo_node_9",
            "to": "demo_node_2",
            "name": "接受"
        }
    },
    "areas": {
        "1497581247380": {
            "name": "审议会",
            "left": 451,
            "top": 110,
            "color": "red",
            "width": 226,
            "height": 108,
            "alt": true
        }
    },
    "initNum": 16//（没看出有什么作用，传数据时传上）
};