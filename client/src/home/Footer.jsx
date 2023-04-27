import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href={"https://www.linkedin.com/in/cesarospina92/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href={"https://github.com/capinedaos"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href={"https://api.whatsapp.com/send?phone=573154039956"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </section>

          <section className="mb-4">
            <p>
              Ingresa a los enlaces anteriores donde podrás obtener mayor
              información acerca de mi formación, conocimientos y habilidades.
              Este es un proyecto desarrollado con la finalidad de poner en
              practica conocimientos y uso de herramientas tales como Nodo Js,
              React Js, Redux toolkit, Bootstrap, Bases de datos como postgres,
              express, manejo de rutas y mucho más. Su principal función y
              solución es agilizar y optimizar procesos de gestión
              administrativa para pequeñas empresas y gracias a que es un
              proyecto escalable, más adelante contara con módulos adicionales
              en el área de contabilidad y gestión de seguridad y salud en el
              trabajo.
            </p>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a
            className="text-white"
            href="https://mdbootstrap.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};
