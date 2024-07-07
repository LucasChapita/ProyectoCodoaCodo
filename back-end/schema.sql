create database peliculasbdd;
use peliculasbdd;

CREATE TABLE login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50),
    contrasena VARCHAR(50)
);

INSERT INTO login (email,contrasena) values ('admin@prueba.com','admin');

CREATE TABLE RegistroUsuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) ,
    apellido VARCHAR(255) ,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255) ,
    fechaNacimiento DATE ,
    pais VARCHAR(255) 
);
/*
INSERT INTO registroUsuarios (nombre, apellido, email, password, fechaNacimiento, pais)
VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'pass1', '1985-05-15', 'Argentina'),
('María', 'Gómez', 'maria.gomez@example.com', 'pass2', '1990-08-20', 'Bolivia'),
('Carlos', 'Silva', 'carlos.silva@example.com', 'pass3', '1982-12-01', 'Brasil'),
('Ana', 'Fernández', 'ana.fernandez@example.com', 'pass4', '1995-07-07', 'Chile'),
('Luis', 'Martínez', 'luis.martinez@example.com', 'pass5', '1978-03-30', 'Colombia');
*/
INSERT INTO RegistroUsuarios (nombre, apellido, email, password, fechaNacimiento, pais)
VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'pass1', '1985-05-15', 'Argentina'),
('María', 'Gómez', 'maria.gomez@example.com', 'pass2', '1990-08-20', 'Bolivia'),
('Carlos', 'Silva', 'carlos.silva@example.com', 'pass3', '1982-12-01', 'Brasil'),
('Ana', 'Fernández', 'ana.fernandez@example.com', 'pass4', '1995-07-07', 'Chile'),
('Luis', 'Martínez', 'luis.martinez@example.com', 'pass5', '1978-03-30', 'Colombia'),
('Sofía', 'López', 'sofia.lopez@example.com', 'pass6', '1992-01-10', 'Ecuador'),
('Fernando', 'Rodríguez', 'fernando.rodriguez@example.com', 'pass7', '1988-06-25', 'México'),
('Lucía', 'Hernández', 'lucia.hernandez@example.com', 'pass8', '1984-04-14', 'Perú'),
('Miguel', 'Ramírez', 'miguel.ramirez@example.com', 'pass9', '1991-11-22', 'Uruguay'),
('Valentina', 'Castro', 'valentina.castro@example.com', 'pass10', '1980-03-05', 'Paraguay'),
('David', 'Sánchez', 'david.sanchez@example.com', 'pass11', '1993-09-18', 'España'),
('Gabriela', 'Torres', 'gabriela.torres@example.com', 'pass12', '1987-02-11', 'Venezuela'),
('Alejandro', 'Morales', 'alejandro.morales@example.com', 'pass13', '1989-10-29', 'Honduras'),
('Daniela', 'Díaz', 'daniela.diaz@example.com', 'pass14', '1996-07-23', 'El Salvador'),
('Pablo', 'Ortega', 'pablo.ortega@example.com', 'pass15', '1981-05-16', 'Guatemala'),
('Natalia', 'Núñez', 'natalia.nunez@example.com', 'pass16', '1994-12-03', 'Costa Rica'),
('Santiago', 'Rivas', 'santiago.rivas@example.com', 'pass17', '1983-01-20', 'Panamá'),
('Carolina', 'García', 'carolina.garcia@example.com', 'pass18', '1997-08-30', 'Cuba'),
('Andrés', 'Ruiz', 'andres.ruiz@example.com', 'pass19', '1986-06-02', 'Puerto Rico'),
('Isabel', 'Mendoza', 'isabel.mendoza@example.com', 'pass20', '1982-09-13', 'República Dominicana'),
('Francisco', 'Cortés', 'francisco.cortes@example.com', 'pass21', '1979-10-08', 'Nicaragua'),
('Juliana', 'Vargas', 'juliana.vargas@example.com', 'pass22', '1985-04-27', 'Argentina'),
('Matías', 'Ibáñez', 'matias.ibanez@example.com', 'pass23', '1990-11-19', 'Bolivia'),
('Camila', 'Guzmán', 'camila.guzman@example.com', 'pass24', '1988-02-26', 'Brasil'),
('Emiliano', 'Navarro', 'emiliano.navarro@example.com', 'pass25', '1992-09-01', 'Chile'),
('Valeria', 'Álvarez', 'valeria.alvarez@example.com', 'pass26', '1987-05-20', 'Colombia'),
('Sebastián', 'Montoya', 'sebastian.montoya@example.com', 'pass27', '1983-12-29', 'Ecuador'),
('Florencia', 'Paredes', 'florencia.paredes@example.com', 'pass28', '1994-03-12', 'México'),
('Rodrigo', 'Aguirre', 'rodrigo.aguirre@example.com', 'pass29', '1981-07-06', 'Perú'),
('Elena', 'Ríos', 'elena.rios@example.com', 'pass30', '1978-10-18', 'Uruguay');




/*drop table registroUsuarios;*/
select * from registrousuarios;
select * from login;

