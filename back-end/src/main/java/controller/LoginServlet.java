package controller;

import dao.UserDao;

import java.io.IOException;
import java.security.SecureRandom;
import java.util.Base64;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Obtener los parámetros del formulario de login
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        

        // Instanciar el DAO para validar las credenciales
        UserDao userDao = new UserDao();
        boolean usuarioValido = userDao.validarUsuario(email, password);

        // Redirigir según la validación
        if (usuarioValido) {
             //metodo inseguro
            // Establece el email del usuario como atributo de sesión
            request.getSession().setAttribute("email", email);

            // Crear una cookie con el email
            Cookie emailCookie = new Cookie("emailCookie", email);
            emailCookie.setMaxAge(3600); // Tiempo de vida de la cookie en segundos (1 hora)
            response.addCookie(emailCookie);
            
         
            /* metodo seguro   
            
            // Generar un token de sesión seguro
        String sessionToken = generateSessionToken();

        // Establecer el token de sesión como atributo de sesión
        HttpSession session = request.getSession();
        session.setAttribute("sessionToken", sessionToken);

        // Crear una cookie segura con el token de sesión
        Cookie tokenCookie = new Cookie("sessionToken", sessionToken);
        tokenCookie.setMaxAge(60 * 60); // Tiempo de vida de la cookie en segundos (1 hora)
        tokenCookie.setSecure(true);    // Solo enviar a través de HTTPS
        tokenCookie.setHttpOnly(true);  // No accesible a través de JavaScript
        tokenCookie.setPath("/");       // Válido para toda la aplicación

        // Agregar la cookie a la respuesta
        response.addCookie(tokenCookie);

        // Añadir manualmente el atributo SameSite
        String cookieHeader = String.format("%s=%s; Max-Age=%d; Path=%s; Secure; HttpOnly; SameSite=Strict",
                tokenCookie.getName(),
                tokenCookie.getValue(),
                tokenCookie.getMaxAge(),
                tokenCookie.getPath());
        response.addHeader("Set-Cookie", cookieHeader);
        
        // Almacenar el email en la sesión para su uso en el lado del servidor
        session.setAttribute("email", email);
            */
            
            if ("admin@prueba.com".equals(email) && "admin".equals(password)) {
                response.sendRedirect("/javabackend/pages/gestionUsuarios.html");
            }else{
                ///pagina del usuario no admin
                response.sendRedirect("/javabackend/pages/usuarios.html");
            }
        } else {
            response.sendRedirect("index.html");
        }
    }
    // Método para generar un token de sesión seguro
private String generateSessionToken() {
    SecureRandom random = new SecureRandom();
    byte[] bytes = new byte[24];
    random.nextBytes(bytes);
    return Base64.getUrlEncoder().encodeToString(bytes);
}
}
