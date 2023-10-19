# Obelisco
[![Versión de Obelisco en npm](https://img.shields.io/npm/v/@gcba/obelisco?label=Obelisco%20en%20npm&logo=npm)](https://www.npmjs.com/package/@gcba/obelisco)
![Deploy storybook](https://github.com/gcba/Obelisco/workflows/Deploy%20storybook/badge.svg?branch=master)

Obelisco es el nuevo sistema de diseño basado en componentes para los productos digitales de la ciudad de Buenos Aires.
Fue creado para reemplazar [BAstrap](https://github.com/gcba/bastrap).

### [Ver la documentación de componentes](https://gcba.github.io/estandares/componentes/web//).

## Cómo usarlo

Obelisco se distribuye por medio del [paquete publicado en npm](https://www.npmjs.com/package/@gcba/obelisco).
Es recomendable usar este sistema para definir la versión a usar y poder actualizarla fácilmente.

### Instalación

Para instalarlo en un proyecto que ya usa npm, hay que ejecutar:
```
npm install @gcba/obelisco
```

### Actualización

Si Obelisco ya está instalado en el proyecto y necesitás actualizarlo a la última versión, en el directorio del proyecto hay que ejecutar:
```
npm update @gcba/obelisco
```

### Sin usar npm

Si en cambio, se necesitan los archivos para importarlos en algún proyecto, se pueden descargar desde la [sección de versiones](https://github.com/gcba/Obelisco/releases).  
En caso de tener que actualizar a la última versión, hay que volver a descargar los archivos y reemplazarlos.

## Cómo importarlo

Obelisco cuenta de dos partes principales que se pueden importar de varias formas.

### Estilos (css o sass)

Las hojas de estilos se pueden importar tanto en **sass** como en **css** ya compilado.
El archivo css está ubicado en `/dist/obelisco.css` y el archivo principal de sass en `/src/scss/obelisco.scss`.

Para importar el css, podemos hacerlo de la siguiente forma:
```
<link rel="stylesheet" href="ruta/al/proyecto/dist/obelisco.css">
```

### Tipografías

Obelisco requiere las tipografías **Nunito** y **Open sans** disponibles en google fonts, para utilizarlas con su CDN podemos hacerlo de la siguiente forma:
```
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
```

### Iconografía

Obelisco utiliza las librerías de Boxicons y Material Icons que se pueden instalar de las siguientes maneras:

Utilizando el paquete npm:
```
npm install boxicons
npm install material-icons@latest
```

Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:
```
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
```

### Javascript

Como Obelisco está construido sobre bootstrap 4, [debemos tener esas dependencias](https://getbootstrap.com/docs/4.6/getting-started/introduction/#js).

Un ejemplo de cómo importalas es:
```
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
```

> **Importante**<br>
> Revisá las [versiones y herramientas aceptadas](https://asijira-confluence.buenosaires.gob.ar/display/ASI/Versiones++y+Herramientas+aceptadas+por+la+ASI) por la **Agencia de Seguridad Informática (ASI)** del Gobierno de la Ciudad antes de elegir una versión de estas dependencias.

## Desarrollo

[En la wiki del repositorio](https://github.com/gcba/Obelisco/wiki) está toda la información necesaria para entender cómo se organizan las diferentes partes del proyecto, cómo funciona y los procesos de trabajo que definimos.


## Mantenimiento y colaboración

El mantenimiento y desarrollo de Obelisco lo hace el equipo de la Dirección General de Experiencia Digital, pero lo utilizan tanto equipos de gobierno como proveedores externos.

Para agilizar y hacer más transparente el proceso, cualquier persona puede [contribuir de varias formas](CONTRIBUTING.md).
