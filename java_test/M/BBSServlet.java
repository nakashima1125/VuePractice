package la.servlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/BBSServlet")
public class BBSServlet extends HttpServlet {

// コレクション
List<String> articles = new ArrayList<String>();

protected void doPost(HttpServletRequest request, HttpServletResponse
response) throws ServletException, IOException {

request.setCharacterEncoding("UTF-8");
String message = request.getParameter("message");
if(message != null && message.length() != 0) {
articles.add(message);
}
// 送信する文字コードの指定
response.setContentType("text/html;charset=UTF-8");

// 文字出力用のストリーム(文字が順番に連続して並んでいる入れ物)の取得
PrintWriter out = response.getWriter();

out.println("<html><head><title>Nakashima</title></head><body>");

// フォームデータの送信先を指定する。ここでは/lessonのBBSServletへpostリクエストを送る
out.println("<form action='/lesson/BBSServlet' method='post'>");

out.println("メッセージ:<br />");

out.println("<textarea name='message' cols='40' rows='5'>");
out.println("</textarea>");
out.println("<br /> <input type='submit' value='書き込み'></form>");

// 区切り線
out.println("<hr/>");
for(String article : articles) {
  out.println(article);
out.println("<hr/>");
}
out.println("</body></html>");
}
}
