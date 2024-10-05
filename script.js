// Funcionalidad para cambiar entre secciones al hacer clic en el menú
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute('data-section');

        document.querySelectorAll('main section').forEach(section => {
            section.classList.remove('active-section');
        });

        document.getElementById(sectionId).classList.add('active-section');
    });
});

// Funcionalidad del selector de idioma
document.getElementById('language').addEventListener('change', function () {
    const lang = this.value;
    const translations = {
        en: {
            inicio: 'Welcome to Telecom Solutions',
            servicios: 'Our Services',
            acerca: 'About Us',
            contacto: 'Contact Us',
            texto_inicio: 'We are leaders in telecommunications solutions, providing advanced technology for global connectivity and communication.',
            texto_servicios: [
                'High-speed enterprise networks',
                'Telecommunication infrastructure',
                'Technological consulting',
                'Cloud services'
            ],
            texto_acerca: 'With over 20 years of experience in the telecommunications sector, we offer solutions tailored to the needs of our clients.'
        },
        es: {
            inicio: 'Bienvenidos a Telecom Soluciones',
            servicios: 'Nuestros Servicios',
            acerca: 'Acerca de Nosotros',
            contacto: 'Contacto',
            texto_inicio: 'Somos líderes en soluciones de telecomunicaciones, brindando tecnología avanzada para conectividad y comunicación global.',
            texto_servicios: [
                'Redes empresariales de alta velocidad',
                'Infraestructura de telecomunicaciones',
                'Consultoría tecnológica',
                'Servicios en la nube'
            ],
            texto_acerca: 'Con más de 20 años de experiencia en el sector de las telecomunicaciones, ofrecemos soluciones adaptadas a las necesidades de nuestros clientes.'
        }
    };

    // Cambiar el contenido según el idioma seleccionado
    const selectedLang = translations[lang];
    document.querySelector('#inicio h2').textContent = selectedLang.inicio;
    document.querySelector('#servicios h2').textContent = selectedLang.servicios;
    document.querySelector('#acerca h2').textContent = selectedLang.acerca;
    document.que
