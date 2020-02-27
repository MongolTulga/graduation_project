package servlet;

import dao.LoginUserDao;
import dao.implement.UserDaoImplement;
import domain.User;
import org.springframework.beans.BeanUtils;
import service.implement.UserServiceImplement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Map;

//登录
@WebServlet("/loginServlet")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        //设置编码
        req.setCharacterEncoding("utf-8");

        //获取请求参数
        String name = req.getParameter("name");
        String password = req.getParameter("password");
        Map<String, String[]> map = req.getParameterMap();

        //封装user对象
        User loginUser = new User();
        loginUser.setName(name);
        loginUser.setPassword(password);

        //调用service
        UserServiceImplement service = new UserServiceImplement();
        User user = service.login(loginUser);

        //判断user
        if (user == null) {
            //登录失败
            req.getRequestDispatcher("/failServlet").forward(req, resp);
        }
        HttpSession session = req.getSession();
        session.setAttribute("user",user);
        //验证权限
        Integer authoritiy = user.getAuthoritiy();
        if (authoritiy == 2) {
            //req.getRequestDispatcher("/admin.jsp").forward(req, resp);
            resp.sendRedirect("/admin.jsp");
            return;
        }
        else {
            //登录成功
            //将用户存入session

            //转发
            //req.getRequestDispatcher("/successServlet").forward(req, resp);
            System.out.println(session);
            //转发 回主页
            resp.sendRedirect("index.jsp");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
