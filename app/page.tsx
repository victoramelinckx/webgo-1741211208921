
"use client";

import { Hero } from "./components/Hero";
import { How } from "./components/How";
import { Aboutus } from "./components/Aboutus";
import { Services } from "./components/Services";
import { BeforeAndAfter } from "./components/BeforeAndAfter";
import { Faq } from "./components/Faq";
import { BookAppointment } from "./components/BookAppointment";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Impulsa tus Ventas Online con Webgo: Transforma tu Presencia en Internet"
              subheadline="En Webgo, no nos limitamos al diseño. Tomamos tu antigua, poco práctica y costosa web, y la convertimos en una máquina de ventas optimizada y fácil de usar. Nos enfocamos en la integración de tecnología avanzada y UX para potenciar tu negocio online, no solo en su apariencia. Además, si aún no tienes presencia online, te ofrecemos la creación de páginas web profesionales ¡gratis!"
              cta1="¡Dale un giro a tu negocio online con Webgo ahora!"
              cta2="Comienza tu viaje digital gratis con Webgo hoy"
            />

            <How
              step1Title="Escoge Tu Diseño"
              step1Desc="Selecciona entre nuestros diseños gratuitos, optimizados para emprendedores sin presencia web."
              step2Title="Personaliza Tu Sitio"
              step2Desc="Adapta tu página a tu estilo, sin necesidad de conocimientos técnicos y con asistencia de IA."
              step3Title="Optimiza y Lanza"
              step3Desc="Mejora tu SEO con nuestros servicios y deslumbra a tu audiencia con un sitio de alta tecnología."
            />

            <Aboutus
              step1Title="Acerca de nosotros"
              step1Desc="Descripción"
              step2Title="Beneficio 1"
              step2Desc="Descripción beneficio 1"
              step3Title="Beneficio 2"
              step3Desc="Descripción beneficio 2"
            />

            <Services
              heading="Nuestros Servicios"
              description="Ofrecemos una gran variedad de servicios."
              services={[]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Por qué mi empresa necesita una página web si ya tengo presencia en redes sociales?","respuesta":"Las redes sociales son valiosas, pero no reemplazan a un sitio web profesional. Con un sitio web, tienes un control total sobre tu marca, puedes optimizarlo para SEO con [services] y Webgo, y puedes utilizar tecnologías avanzadas como IA para mejorar la experiencia del usuario. Además, un sitio web bien diseñado aumenta la reputación y la credibilidad de tu [companyName]."},{"pregunta":"¿Es necesario gastar dinero en la creación de un sitio web cuando puedo obtener uno gratis?","respuesta":"Un sitio web gratis puede parecer atractivo, pero a menudo presenta limitaciones significativas. Puede que no sea posible optimizarlo para SEO, puede carecer de funcionalidades clave, y podría no proporcionar la mejor representación de tu [companyName]. Invertir en un sitio web profesional puede generar un retorno significativo en términos de [targetAudience] alcanzada y ventas realizadas."},{"pregunta":"Mi sitio web es antiguo, pero ¿realmente necesito actualizarlo?","respuesta":"Definitivamente. Un sitio web anticuado puede dar la impresión de que tu [companyName] también lo está. Además, los sitios web más antiguos a menudo no están optimizados para dispositivos móviles, lo que significa que podrías estar perdiendo una gran cantidad de [targetAudience]. Actualizar tu sitio web puede ser una inversión valiosa que se traduce en más ventas y mejor percepción de tu marca."},{"pregunta":"¿Por qué debería preocuparme por el diseño de mi sitio web?","respuesta":"El diseño de tu sitio web es crucial porque es a menudo la primera impresión que los clientes tienen de tu [companyName]. Un diseño pobre puede disuadir a los visitantes de quedarse y explorar, mientras que un diseño atractivo y fácil de navegar puede animarlos a quedarse y, en última instancia, a comprar tus [services]."},{"pregunta":"¿Cómo puede la tecnología y la IA mejorar mi sitio web?","respuesta":"La tecnología y la IA pueden mejorar tu sitio web de varias maneras. Pueden ayudar a personalizar la experiencia del usuario, pueden proporcionar análisis útiles sobre el comportamiento del visitante, y pueden ayudar a optimizar tu sitio para SEO. Además, la IA puede automatizar ciertas tareas, como el servicio al cliente, liberando tiempo para que te centres en otros aspectos de tu [companyName]."}]}
            />

            <BookAppointment
              heading="¡Empresas con presencia online, es hora de actuar! ¿Estás cansado de gastar en anuncios sin resultados? ¿Tu web parece antigua y poco práctica? ¿Sientes que estás perdiendo dinero y que tu presentación online es pobre? ¿Falta tecnología para optimizar tu sistema? ¿No estás integrando la inteligencia artificial en tu estrategia? ¡En Webgo podemos ayudarte!"
              description="En Webgo sabemos que una web optimizada puede marcar la diferencia en tu negocio. Por eso, ofrecemos páginas web gratuitas para aquellos que aún no tienen presencia online. Si ya tienes una web, te ayudamos a darle un lavado de cara y a optimizarla para conseguir mejores resultados. Nuestro equipo de profesionales se encarga de crear sitios web eficientes y atractivos, siempre con el objetivo de mejorar tu presencia online y maximizar tus ventas."
              services={[{"name":"Creación de sitios web gratuitos"},{"name":"Optimización de sitios web existentes"},{"name":"Diseño web profesional"},{"name":"Integración de tecnología y AI"},{"name":"Estrategias de SEO y marketing online"}]}
            />
<Footer />
    </main>
  );
}
    