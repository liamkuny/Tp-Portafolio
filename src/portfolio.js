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
    name: 'GameStoreData(back end)',
    description:
      'GameStoreData is able to let user retrieve the game from database based on its year and category',
    stack: ['Java 8', 'MySQL', 'React'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
    
  },
  {
    name: 'Music Store(back end)',
    description:
      'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien',
    livePreview: 'https://cheng32-musicstore-catalog.herokuapp.com/track',
  },
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
