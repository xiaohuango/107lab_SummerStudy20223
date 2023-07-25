import java.sql.*;


public class Main {
    public static void main(String[] args) {
        String sql = "CREATE TABLE orders ("
                + "id INT PRIMARY KEY AUTO_INCREMENT,"
                + "quantity INT,"
                + "price DECIMAL(10, 2),"
                + "user VARCHAR(50),"
                + "status VARCHAR(20),"
                + "operation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
                + ")"
                +"INSERT INTO yangfree (quantity, price, user, status) VALUES (10, 19.99, 'John', 'Active');"
                +"INSERT INTO yangfree (quantity, price, user, status) VALUES (5, 9.99, 'Alice', 'Active');"
                +"INSERT INTO yangfree (quantity, price, user, status) VALUES (3, 14.99, 'Bob', 'Inactive');"
                +"INSERT INTO yangfree (quantity, price, user, status) VALUES (8, 24.99, 'Emma', 'Active');";

        String url = "jdbc:mysql://120.25.170.221:3306/107Lab";
        String username = "107Lab";
        String password = "107Lab_2023";

        try {

            Class.forName("com.mysql.jdbc.Driver");


            Connection connection = DriverManager.getConnection(url, username, password);


            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sql);

            // 处理查询结果


            // 关闭连接
            resultSet.close();
            statement.close();
            connection.close();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }


    }

}
