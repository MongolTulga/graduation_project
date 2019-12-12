package dao;

import domain.User;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import util.JDBCUtils;

//操作数据库中User表的类
public class UserDao {
    //声明JDBCTemplate对象共用
    private JdbcTemplate template = new JdbcTemplate(JDBCUtils.getDataSourse());
    //登录方法
    //loginUser只有用户名和密码
    //user包含用户全部数据
    public User login(User loginUser) {
        //try {//编写sql
            String sql = "select * from user where name = ? and password = ?";
            //调用query方法
            User user = template.queryForObject(sql, new BeanPropertyRowMapper<User>(User.class), loginUser.getName(), loginUser.getPassword());
            return user;
       /* }
        catch (DataAccessException e) {
            e.printStackTrace();
            return null;
        }*/
    }
        //return (User) template.queryForObject(sql, new BeanPropertyRowMapper<User>(User.class), loginUser.getName(), loginUser.getPassword());
        //queryForList(sql, new BeanPropertyRowMapper<User>(User.class), loginUser.getName(), loginUser.getPassword());
}
