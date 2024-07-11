document.addEventListener("DOMContentLoaded", function() {
    //ocultar el offcanvas segun la pantalla
    const elemento = document.getElementById("offcanvasScrolling");
       
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    
    function handleMediaQueryChange(e) {
        if (e.matches) {
            elemento.classList.remove("show");
            
        } else {
            elemento.classList.add("show");
            
        }
    }

   
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

      
    // mover o colocar el boton de lenguaje dentro o fuera del nav segun la pantalla
    const parent = document.getElementById('language1');
    const container = document.getElementById('language2');
    const mediaQuery2 = window.matchMedia("(max-width: 768px)");

    
    function handleLanguageMediaQueryChange(e) {
        if (e.matches) {
            parent.appendChild(container);
        } else {
            container.appendChild(parent);
        }
    }

    mediaQuery2.addListener(handleLanguageMediaQueryChange);
    handleLanguageMediaQueryChange(mediaQuery2);
    

    /*
    // Función para mover el hijo fuera del padre
    function moveChild() {
    const parent = document.getElementById('language1');
    const container = document.getElementById('language2');

    // Verificar el tamaño de la pantalla
        if (window.innerWidth >= 768) {
        // Mover el hijo fuera del padre
        container.appendChild(parent);
        } else {
        // Devolver el hijo al padre si la pantalla es menor a 768px
        parent.appendChild(parent);
        }
    }

    // Ejecutar la función al cargar la página
    window.onload = moveChild;
    */

    
});
//idioma
    // Obtener los elementos de idioma
    const spain = document.getElementById("spain");
    const england = document.getElementById("england");

    // Establecer el evento de clic para cambiar el estado activo
    spain.addEventListener("click", function() {
	spain.classList.add("active");
	england.classList.remove("active");
    });

    england.addEventListener("click", function() {
	england.classList.add("active");
	spain.classList.remove("active");
    });
    const emotes={
        'emote1' : '\u{1F44B}',
        'emote2' : '\u{1F914}',
        'emote3' : '\u{1F913}',
        'emote4' : '\u{1F4BC}',
        'emote5' : '\u{1F4AC}',
        
    };

    const texts = {
        'en': {
          'iniciol': 'Start',
          'aboutmel': 'About Me',
          'skillsl': 'Skills',
          'projectsl':'Projects',
          'contactl' : 'Contact',
          'inicio1': `Hi There ${emotes['emote1']}!`,
          'inicio2': 'I\'m Maxi Gaitán',
          'inicio3': 'Software Developer',
          'inicio4': 'Contact me!',
          'inicio5': 'Download Curriculm',
          'aboutme1': `About Me ${emotes['emote2']}`,
          'aboutme2': `Graduated from the University Program Analyst Programmer career, where I have acquired and developed various soft and technical skills, including: logical thinking, perseverance, innovation, commitment, object-oriented paradigm, and software quality techniques.`,
          'aboutme3': `I consider myself a self-taught individual with a notable ability to adapt to emerging technologies in the market. I enjoy solving problems and overcoming challenges, which provides me with the motivation to face the diverse adversities that may arise in the professional environment.`,
          'skills1': `My Skills ${emotes['emote3']}`,
          'skills2': 'Thanks to the guidance of my secondary school, I have been involved in programming from an early age, allowing me to develop skills and abilities that have supported me throughout my career. I am a versatile individual, constantly expanding my knowledge in various existing and emerging technologies.',
          'skills3': 'I studied English for seven years during my adolescence, which has enabled me to confidently navigate challenges in the programming world.',
          'proyects1': `My Projects ${emotes['emote4']}`,
          'proyects2': 'REST API developed with Java Spring Boot and Maven following design patterns such as DTO, DI, and Service Layer',
          'proyects3': 'WebApp for meetings and events software, developed with Angular, Node.js, TypeScript, and MongoDB',
          'proyects4': 'Desktop App for parking lot management, developed with .NET, C#, WPF, and SQLServer',
          'proyects5': 'WebApp for sales management and product administration in the car business, developed with Java, Spring Boot, Spring Data, HTML, CSS, Bootstrap, and MySQL',
          'contact1': `Contact Me ${emotes['emote5']}`,
          
         
          // Agrega más texto en inglés según sea necesario
        },
        'es': {
          'iniciol': 'Inicio',
          'aboutmel': 'Sobre mi',
          'skillsl': 'Habilidades',
          'projectsl':'Proyectos',
          'contactl' : 'Contacto',
          'inicio1': `Hola ${emotes['emote1']}`,
          'inicio2': 'Soy Maxi Gaitán',
          'inicio3': 'Desarrollador de Software',
          'inicio4': 'Contactame!',
          'inicio5': 'Descargar Curriculm',
          'aboutme1': `Sobre Mi ${emotes['emote2']}`,
          'aboutme2': `Egresado de la carrera Analista Programador Universitario en la cual he aprendido y adaptado
            distintas competencias blandas y tecnicas, tales como: pensamiento logico, constancia, innovacion, compromiso, 
            paradigma de objetos, tenica de calidad de software.`,
          'aboutme3': `Me considero una persona autodidacta, con una notable capacidad para adaptarme a las diversas 
            tecnologías emergentes del mercado. Disfruto resolver problemas y superar dificultades, lo que me proporciona la 
            motivación necesaria para enfrentar las diversas adversidades que pueden surgir en el ámbito laboral.`,
          'skills1': `Mis Habilidades ${emotes['emote3']}`,
          'skills2': 'Egresado de la carrera Analista Programador Universitario en la cual he aprendido y adaptado distintas competencias blandas y tecnicas, tales como: pensamiento logico, constancia, innovacion, compromiso, paradigma de objetos, tenica de calidad de software.',          
          'skills3': 'Me considero una persona autodidacta, con una notable capacidad para adaptarme a las diversas tecnologías emergentes del mercado. Disfruto resolver problemas y superar dificultades, lo que me proporciona la motivación necesaria para enfrentar las diversas adversidades que pueden surgir en el ámbito laboral.',
          'proyects1': `Mis Proyectos ${emotes['emote4']}`,
          'proyects2': 'Api rest desarrollado con Java Spring Boot y Maven siguiendo patrones de diseños como DTO, DI, Service Layer',
          'proyects3': 'WebApp software de reuiniones y eventos, desarrollado con angular, nodejs, typescript y mongodb',
          'proyects4': 'Desktop App, gestion de playa de estacionamiento desarrollado con .NET, C#, WPF y SQLServer',
          'proyects5': 'WebApp sobre gestion de venta y administracion de productos sobre negocio de autos, desarrollado con eventos, desarrollado con Java, Spring-Boot, Spring-Data, HTML, CSS, Bootstrap, MySql',
          'contact1': `Contactame ${emotes['emote5']}`,
          // Agrega más texto en español según sea necesario
        }
      };
      
      function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
          const key = element.getAttribute('data-i18n');
          element.textContent = texts[lang][key];
        });
       /* const downloadButton = document.getElementById('downloadButton');
        if (lang === 'en') {
            downloadButton.setAttribute('onclick', "window.open('./img/CV-EN.pdf')");
        } else if (lang === 'es') {
            downloadButton.setAttribute('onclick', "window.open('./img/CV-ES.pdf')");
        } else {
            // Establecer un valor predeterminado para el botón en caso de que el idioma no esté definido
            downloadButton.setAttribute('onclick', "window.open('./img/CV-ES.pdf')");
        }*/
      }
    
      changeLanguage('es');