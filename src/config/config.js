export const STRINGS = {
  // Header
  NAVBAR_BUTTON_LOGIN: "LOGIN",
  NAVBAR_BUTTON_TITLE_DESIDERIUM: "Desiderium",
  NAVBAR_BUTTON_TITLE_DESIDERIUM_1: "s e x ",
  NAVBAR_BUTTON_TITLE_DESIDERIUM_2: " s h o p",
  // Formulario de registro
  TITLE_FORM_REGISTER: "Formulario de registro",
  FIELD_NAME_FORM_REGISTER: "Nombre",
  FIELD_LASTNAME_FORM_REGISTER: "Apellidos",
  FIELD_EMAIL_FORM_REGISTER: "Email",
  FIELD_PHONE_FORM_REGISTER: "Telefono",
  FIELD_CITY_FORM_REGISTER: "Ciudad de residencia",
  FIELD_DEPARTMENT_FORM_REGISTER: "Departamento",
  FIELD_ADDRESS_FORM_REGISTER: "Dirección",
  FIELD_ADDRESS_FORM_REGISTER: "Dirección",
  FIELD_DATE_BORN_FORM_REGISTER: "Fecha de nacimiento",
  FIELD_PASSWORD_FORM_REGISTER: "Contraseña",
  FIELD_CONFIRM_PASSWORD_FORM_REGISTER: "Confirmar contraseña",
  HISTORY: `Desiderium Sex Shop es una empresa ubicada en la ciudad de Armenia,
  Quindío, que se especializa en ofrecer productos y servicios
  relacionados con la sexualidad y el erotismo. Con una amplia variedad de
  artículos, Desiderium Sex Shop se esfuerza por proporcionar a sus
  clientes una experiencia cómoda, discreta y educativa. Uno de los
  aspectos destacados de Desiderium Sex Shop es su enfoque en el bienestar
  y la salud sexual. La empresa se compromete a brindar información
  precisa y educación sobre sexualidad, promoviendo así una actitud
  abierta y saludable hacia el tema. Sus empleados están capacitados para
  ofrecer asesoramiento experto y responder a cualquier pregunta o
  inquietud que los clientes puedan tener. El sex shop ofrece una amplia
  gama de productos, que incluyen juguetes sexuales, lencería erótica,
  lubricantes, afrodisíacos y otros accesorios íntimos. Desiderium Sex
  Shop se esfuerza por seleccionar cuidadosamente sus productos,
  priorizando la calidad, la seguridad y la satisfacción del cliente.
  Además, se enorgullece de mantener una atmósfera acogedora y respetuosa,
  donde los clientes pueden sentirse cómodos y seguros al explorar su
  sexualidad.`,
};
export const CATALOGOS = [
  { name: "Juguetes", imagePath: "https://res.cloudinary.com/dydd1uh4n/image/upload/v1688925635/DESIDERIUM/Vibradores/VIBRADOR_RABBIT.jpg", link: "/public/catalogo/CATÁLOGO_JUGUETES_SEXUALES_DICIEM_2023_2024.pdf" },
  { name: "Lenceria", imagePath: "https://res.cloudinary.com/dydd1uh4n/image/upload/v1689290050/DESIDERIUM/Lenceria/1684271650908_hlviwf.jpg", link: "/public/catalogo/CATALOGO_LENCERIA_2023_DESIDERIUM_SEX_SHOP.pdf" },
  { name: "Lubricantes", imagePath: "https://res.cloudinary.com/dydd1uh4n/image/upload/v1701790640/DESIDERIUM/Lubricantes/ubricanteIntimoAnalCorpoLub_2.jpg", link: "/public/catalogo/Catalogo_Digital_Lubricantes_DICIEM_2023_2024_.pdf" },
];
export const TITLE_MENU_NAVBAR = [
  { name: "INICIO", link: "/" },
  { name: "GETIONAR PRODUCTOS", link: "/FormInsertProduct" },
  { name: "GESTIONAR CATEGORIAS", link: "/categories" },
  { name: "OTROS", link: "/otros" },

];
export const MENU_LENCERIA = [
  { name: "Disfraces Eróticos", link: "/lenceria" },
  { name: "Lencería para ella", link: "/lenceria" },
  { name: "Pesoneras", link: "/lenceria" },
];
export const MENU_PIJAMAS = [
  { name: "Pijamas piel de durazno", link: "/pijamasPielDeDurazno" },
  { name: "Pijamas satin", link: "/pijamasSatin" },
  { name: "Otras", link: "/otras" },
];
export const MENU_LUBRICANTES_COSMETICA = [
  { name: "Lubricantes anales", link: "/lubricante" },
  { name: "Lubricantes a prueba de agua", link: "/lubricante" },
  {
    name: "Lubricantes frios y calientes",
    link: "/lubricante",
  },
  { name: "Lubricantes saborizados", link: "/lubricante" },
  { name: "Lubricantes neutros", link: "/lubricante" },
  { name: "Aceites para masajes", link: "/lubricante" },
  { name: "Multiorgasmos", link: "/lubricante" },
  { name: "Retardantes", link: "/lubricante" },
  { name: "Estrechantes", link: "/lubricante" },
  { name: "Estimulantes sexuales", link: "/lubricante" },
  { name: "Otros", link: "/lubricante" },
];
export const MENU_JUGUETES = [
  {
    name: "Dildos",
    link: "/dildo",
    submenu: [
      { name: "Realistas", link: "/realistas" },
      { name: "Vidrio", link: "/vidrio" },
      { name: "Tematico", link: "/tematico" },
    ],
  },
  {
    name: "Vibradores",
    link: "/vibrador",
    submenu: [
      { name: "Anillos para pene", link: "/anillosParaPene" },
      { name: "Balas y huevos", link: "/balasYHuevos" },
      { name: "Doble estimulación", link: "/dobleEstimulacion" },
      { name: "Punto G", link: "/puntoG" },
      { name: "Estimulación Anal", link: "/estimulacionAnal" },
      { name: "Estimulación clitorial", link: "/estimulacionClitorial" },
      { name: "Vibrador con App", link: "/VibradorConApp" },
      { name: "Vibrador realista", link: "/VibradorRealista" },
    ],
  },
];

export const MENU_MODAL = [
  {
    name: "Lencería",
    products: [
      { name: "Disfraces Eróticos", link: "/lenceria" },
      { name: "Lencería para ella", link: "lenceria" },
      { name: "Pesoneras", link: "/lenceria" },
    ],
  },
  {
    name: "Pijamas",
    products: [
      { name: "Pijamas piel de durazno", link: "/pijamasPielDeDurazno" },
      { name: "Pijamas satin", link: "/pijamasSatin" },
      { name: "Otras", link: "/otras" },
    ],
  },
  {
    name: "Lubricantes y Cosmética",
    products: [
      { name: "Lubricantes anales", link: "/lubricante" },
      {
        name: "Lubricantes a prueba de agua",
        link: "/lubricantesAPruebaDeAgua",
      },
      {
        name: "Lubricantes frios y calientes",
        link: "/lubricante",
      },
      { name: "Lubricantes saborizados", link: "/lubricante" },
      { name: "Lubricantes neutros", link: "/lubricante" },
      { name: "Aceites para masajes", link: "/lubricante" },
      { name: "Multiorgasmos", link: "/lubricante" },
      { name: "Retardantes", link: "/lubricante" },
      { name: "Estrechantes", link: "/lubricante" },
      { name: "Estimulantes sexuales", link: "/lubricante" },
      { name: "Otros", link: "/lubricante" },
    ],
  },
  {
    name: "Juguetes",
    products: [
      {
        name: "Dildos",
        link: "/dildo",
        submenu: [
          { name: "Realistas", link: "/juguete" },
          { name: "Vidrio", link: "/juguete" },
          { name: "Tematico", link: "/juguete" },
        ],
      },
      {
        name: "Vibradores",
        link: "/vibrador",
        submenu: [
          { name: "Anillos para pene", link: "/anillosParaPene" },
          { name: "Balas y huevos", link: "/balasYHuevos" },
          { name: "Doble estimulación", link: "/dobleEstimulacion" },
          { name: "Punto G", link: "/puntoG" },
          { name: "Estimulación Anal", link: "/estimulacionAnal" },
          { name: "Estimulación clitorial", link: "/estimulacionClitorial" },
          { name: "Vibrador con App", link: "/VibradorConApp" },
          { name: "Vibrador realista", link: "/VibradorRealista" },
        ],
      },
    ],
  },
  {
    name: "Masturbadores",
    link: "/masturbador",
    products: [
      { name: "Masturbadores", link: "/masturbador" },
    ],
  },
  {
    name: "Plug Anal",
    link: "/plugAnal",
    products: [
      { name: "Plug Anal", link: "/plugAnal" },
    ],
  },
  {
    name: "Succionadores de clitoris",
    link: "/succionadoresDeClitoris",
    products: [],
  },
  {
    name: "Bombas para el pene",
    link: "/bombasParaElPene",
    products: [],
  },
  {
    name: "Estimulación anal",
    link: "/estimulacionAnal",
    products: [],
  },
  {
    name: "Estimulación próstata",
    link: "/estimulacionProstata",
    products: [],
  },
  {
    name: "Masturbadores",
    link: "/masturbadores",
    products: [],
  },
  {
    name: "Bolas vaginales",
    link: "/bolasVaginales",
    products: [],
  },
  {
    name: "Sex Machines",
    link: "/sexMachines",
    products: [],
  },
];
