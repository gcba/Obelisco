/* Large panel */
export const TITLE = 'Nombre del titular';
export const DESCRIPTION =
  'Descripción de hasta 3 líneas para mantener los estándares de lectura en los componentes de Obelisco.';
export const TITLE_HIGHLIGHTED = 'Título del destacado';
export const DESCRIPTION_HIGHLIGHTED =
  'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';
export const DESCRIPTION_HIGHLIGHTED_LATERAL =
  'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces.';
export const BUTTON_ARR = [
  {
    name: 'Botón',
    className: 'btn btn-lg btn-primary card-link'
  }
];
export const BUTTONS_ARR = [
  {
    name: 'Botón',
    className: 'btn btn-lg btn-primary card-link'
  },
  {
    name: 'Botón',
    className: 'btn btn-lg btn-secondary card-link'
  }
];
export const LINK = {
  name: 'Enlace',
  url: '#'
};
export const LINK_DOWNLOAD = {
  name: 'Descargar',
  className: 'download',
  isDownload: true
};
export const LINK_DOWNLOAD_BUTTON = {
  name: 'Descargar',
  className: 'btn btn-secondary btn-lg download-link',
  isDownload: true
};
export const LINK_DOWNLOAD_BUTTON_ICON = {
  name: 'Descargar',
  className: 'btn btn-secondary btn-lg btn-icon card-link',
  icon: 'file_download',
  isDownload: true
};
export const PICTURE = {
  src: 'panel/hlarreta.jpg',
  alt: 'descripción alternativa'
};
export const PICTURE_HIGHLIGHTED = {
  src: 'panel/destacado-bs-as.jpg',
  alt: 'descripción de imagen'
};
export const VIDEO = {
  src: 'panel/videoBuenosAires.mp4',
  title: 'Buenos Aires se escribe en plural',
  caption: 'panel/videoBuenosAires.vtt'
};
export const IFRAME = {
  src: 'https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw',
  title: 'Buenos Aires se escribe en plural'
};
/* Small Panel */
export const SMALL_BUTTONS_ARR = [
  {
    name: 'Acción 1',
    className: 'btn btn-secondary btn-sm card-link'
  },
  {
    name: 'Acción 2',
    className: 'btn btn-link btn-sm card-link'
  }
];
export const SMALL_PICTURE = {
  src: 'cards/paseobajo-wide.png',
  alt: 'descripción alternativa',
  className: 'rounded-lg',
  size: 154
};

export const SMALL_PICTURE_XS = {
  src: 'cards/paseobajo-wide.png',
  alt: 'descripción alternativa',
  className: 'rounded-lg',
  size: 104
};
export const SMALL_LINK_DOWNLOAD = {
  name: 'Descargar',
  className: 'download',
  url: '#',
  isDownload: true
};
export const LINK_LIST = {
  listTitle: 'Título de una lista de enlaces',
  links: [
    { name: 'Enlace predeterminado', url: '#' },
    { name: 'Enlace predeterminado', url: '#' },
    { name: 'Enlace predeterminado', url: '#' },
    { name: 'Enlace predeterminado', url: '#' },
    { name: 'Enlace predeterminado', url: '#' },
    { name: 'Enlace predeterminado', url: '#' }
  ]
};
export const LINK_DOWNLOAD_LIST = {
  listTitle: 'Título de una lista de enlaces',
  links: [
    { name: 'Enlace de descarga', className: 'download', url: '#', isDownload: true },
    { name: 'Enlace de descarga', className: 'download', url: '#', isDownload: true },
    { name: 'Enlace de descarga', className: 'download', url: '#', isDownload: true },
    { name: 'Enlace de descarga', className: 'download', url: '#', isDownload: true },
    { name: 'Enlace de descarga', className: 'download', url: '#', isDownload: true },
    { name: 'Enlace de descarga', className: 'download', url: '#', isDownload: true }
  ]
};
export const LINK_LIST_BUTTONS = [
  {
    listTitle: 'Nombre del archivo',
    name: 'Descargar',
    className: 'btn btn-secondary btn-sm download-link card-link',
    url: '#',
    isDownload: true
  },
  {
    listTitle: 'Nombre del archivo',
    name: 'Descargar',
    className: 'btn btn-secondary btn-sm download-link card-link',
    url: '#',
    isDownload: true
  },
  {
    listTitle: 'Nombre del archivo',
    name: 'Descargar',
    className: 'btn btn-secondary btn-sm download-link card-link',
    url: '#',
    isDownload: true
  }
];
