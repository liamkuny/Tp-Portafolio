import aboutpic from "./components/Access/mePhoto.jpg"

const about = {
  photo:aboutpic,

  name: 'Liam Kuniewsky',
  role: 'Estudiante de informatica de ort',
  description:
    'En esta pagina web van a poder mis proyectos, mis skills y en el caso que quieran podran contactarme.',
  social: {
    linkedin: 'https://www.linkedin.com/in/liam-kuniewsky-b306592a0/',
    github: 'https://github.com/liamkuny',
  },
}

const projects = [
  
  {
    name: 'Catalogo de productos de tecnologia',
    description:
      'Con mis compañeros creamos un catalogo de productos de tecnologia donde se pueden visualizar toda la mercaderia de manera linda y ordenada',
    stack: ['React', 'Axios', 'CSS', "Api Productos"],
    sourceCode: 'https://github.com/gaston1805/catalogo.git',
    
  },
  {
    name: 'App para Telefono con distintas funcionalidades',
    description:
      'Este proyecto se baso en crear una app para telefono que tiene funcionalidades fundamentales de hoy en dia, como el obtener el clima, manejar los contactos, etc.',
    stack: ['JavaScript', 'React Native', 'Axios','Expo'],
    sourceCode: 'https://github.com/liamkuny/TpHardware',
  },
  {
    name: 'App de comidas para un restaurante',
    description:
      'Esta es una app que permite ver la comida de un restaurante y poder hacer el pedido online, donde se puede obtener un registro de distintas cosas que le importan al cliente',
    stack: ['React native', 'axios', 'yarn', 'Api comida'],
    sourceCode: 'https://github.com/liamkuny/TpComida',
  },
  {
    name: 'App turistica para extranjeros',
    description:
      'Esta app esta echa para extranjeros que deciden venir a conoces el pais, donde les muestra los disitntos lugares turisticos, da informacion de colectivos y otras ayudas para manejarse en nuestro pais',
    stack: ['MVC', 'MySQL', 'Axios'],
    sourceCode: 'https://github.com/liamkuny/Tp09_Kuniewsky_Grimberg.git',
    
  },
  {
    name: 'Juego adivina las banderas',
    description:
      'Esta es un videojuego el cual consta en adivinar la bandera que se muestra en pantalla, poniendo a prueba el conocimiento del jugador a nivel internacional. Se puede utilizar tanto en computadora como en telefono ',
    stack: ['CSS', 'axios', 'React'],
    sourceCode: 'https://github.com/liamkuny/Tp-Banderas.git',
  },
  {
    name: 'Pagina de venta de libros',
    description:
      'Esta es una pagina de venta de libros, donde los padres podran meterse para comprar libros a sus hijos, o mismo publicar si lo quieren vender. Esta pagina todavia no estac en uso pero esperamos que pronto salga al mundo ',
    stack: ['Sql', 'axios', 'React', 'node'],
    sourceCode: 'https://github.com/MatiasBurecovics/ProyectoFinal.git',
  }
]

const skills = [

  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'C#',
  'React',
  'React Native'
  
]

const contact = {
  email: 'liamkuniewsky@gmail.com',
}

export { about, projects, skills, contact }
