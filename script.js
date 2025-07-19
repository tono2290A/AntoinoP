// =================== FUNCIONES PARA LAS TARJETAS DE HABILIDADES ===================

// Al hacer clic en una tarjeta de habilidad, se muestra el modal con la descripción correspondiente
const skillCards = document.querySelectorAll('.skill-card');
const skillModal = new bootstrap.Modal(document.getElementById('skillModal'));
const skillModalTitle = document.getElementById('skillModalTitle');
const skillModalBody = document.getElementById('skillModalBody');

// Función para actualizar el contenido del modal
function showSkillModal(skill) {
    // Aquí definimos las descripciones de las habilidades
    const skillDescriptions = {
        html: {
            title: "HTML",
            description: "HTML (HyperText Markup Language) es el lenguaje de marcado estándar utilizado para crear páginas web. Es fundamental para estructurar el contenido de una página web, como encabezados, párrafos, listas, enlaces, imágenes, etc. HTML es la base sobre la cual se construyen todas las páginas web y se utiliza en combinación con otros lenguajes como CSS y JavaScript."
        },
        css: {
            title: "CSS",
            description: "CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado para describir la presentación de un documento escrito en HTML. Permite definir el diseño, los colores, los márgenes, las fuentes y la disposición de los elementos en una página web. Con CSS, se pueden crear diseños responsivos que se adaptan a diferentes tamaños de pantalla."
        },
        sqlserver: {
            title: "SQL Server",
            description: "SQL Server es un sistema de gestión de bases de datos relacional desarrollado por Microsoft. Permite almacenar, organizar y recuperar grandes cantidades de datos de manera eficiente. SQL Server utiliza el lenguaje SQL (Structured Query Language) para realizar consultas, manipular datos y gestionar bases de datos."
        },
        csharp: {
            title: "C#",
            description: "C# es un lenguaje de programación desarrollado por Microsoft que se utiliza principalmente para aplicaciones de escritorio, web y móviles. Es un lenguaje orientado a objetos, lo que significa que se basa en la creación y manipulación de objetos. C# es utilizado en plataformas como .NET y Xamarin."
        },
        javascript: {
            title: "JavaScript",
            description: "JavaScript es un lenguaje de programación que se utiliza para crear contenido interactivo en las páginas web. Se usa principalmente en el lado del cliente, pero también puede ejecutarse en el servidor. JavaScript permite actualizar contenido dinámicamente, validar formularios, crear animaciones y manejar eventos de usuario en tiempo real."
        },
        github: {
            title: "GitHub",
            description: "GitHub es una plataforma de desarrollo colaborativo que utiliza Git para el control de versiones. Permite a los desarrolladores almacenar, gestionar y colaborar en proyectos de software. GitHub facilita la revisión de código, la gestión de versiones y la integración continua, lo que es esencial para proyectos de desarrollo colaborativos y de código abierto."
        }
    };

    // Obtener el nombre y la descripción de la habilidad
    const skillInfo = skillDescriptions[skill];
    skillModalTitle.textContent = skillInfo.title;
    skillModalBody.textContent = skillInfo.description;
    skillModal.show();
}

// Asignamos un evento de clic a cada tarjeta de habilidad
skillCards.forEach(card => {
    card.addEventListener('click', () => {
        const skill = card.getAttribute('data-skill');
        showSkillModal(skill);
    });
});

// =================== FORMULARIO DE CONTACTO ===================

// Aquí podrías agregar la funcionalidad para enviar el formulario. Por ahora, solo se muestra el mensaje de éxito.
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario
    alert('¡Mensaje enviado exitosamente!');
});
