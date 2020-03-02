<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>实验室概况</title>

    <link rel="stylesheet" href="css/bace.css" type="text/css">
    <link rel="stylesheet" href="css/style.css" type="text/css">

    <script language="Javascript" type="text/javascript">
        setInterval("timer.innerHTML=new Date().toLocaleString()");
        window.onload = function (){
            setInterval("timer.innerHTML=new Date().toLocaleString()",1000);
        }
    </script>

    <style>
        #li_sysjj {
            color: #0069cc;
            font-weight: bold;
        }
    </style>
</head>

<body>
<div class="top">
    <p>${user.name}你好，现在是
        <span id="timer"></span>
        <a href="/logoutServlet">注销</a>
    </p>
</div>

<header>
    <h1>内蒙古师范大学机器人创新实验室</h1>
    <a href="http://www.imnu.edu.cn/"><img src="image/logo.jpg"></a>
</header>

<div class="daohang">
    <ul>
        <a href="index.jsp"><li>首页</li></a>
        <a href="sysjj.jsp"><li>实验室概况</li></a>
        <a href="yjfx.jsp"><li>研究方向</li></a>
        <a href="jsjs.jsp"><li>人员介绍</li></a>
        <a href=""><li>获奖成果</li></a>
        <a href="xgxz.jsp"><li>相关下载</li></a>
        <a href="login.jsp"><li>登录</li></a>
        <a href="jrwm.jsp"><li>加入我们</li></a>
        <a href="lxwm.jsp"><li>联系我们</li></a>
    </ul>
</div>

<div class="big">
    <div class="picture">
        图片集
    </div>

    <div class="weizhi">
        <p>
            当前位置：<a href="index.jsp">首页</a> > <a href="sysjj.jsp">实验室概况</a> > <a href="sysjj.jsp">实验室简介</a>
        </p>
    </div>

    <div class="main">
        <div class="list_left">
            <p id="li_head">
                实验室概况
            </p>
            <ul>
                <a href="sysjj.jsp"><li id="li_sysjj" class="li_item">实验室简介</li></a>
                <a href="fzlc.jsp"><li class="li_item">发展历程</li></a>
                <a href="zzjg.jsp"><li class="li_item">组织机构</li></a>
            </ul>
        </div>

        <div class="content_right">
            <h3>实验室简介</h3>
            <span></span>
            <p>
                这里是实验室的简介...
            </p>
        </div>
    </div>
</div>

<footer>
    <p>
        版权所有 © 内蒙古师范大学机器人创新实验室
    </p>
</footer>
</body>
</html>