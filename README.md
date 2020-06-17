# Obelisco
Obelisco es el nuevo sistema de diseño basado en componentes para los productos digitales de la ciudad de Buenos Aires.
Fue creado para reemplazar [BAstrap](https://github.com/gcba/bastrap).

[Lista de componentes](https://gcba.github.io/Obelisco/).

<!--
## Uso (Esto es mentira porque todavía no está publicado)

Obelisco está publicado en npm, por lo que se puede instalar de la siguiente forma:
```
npm install --save obelisco
```
-->


## Desarrollo
Obelisco está desarrollado principalmente en [Sass](https://sass-lang.com/) y [TypeScript](http://typescriptlang.org/) y utiliza las siguientes herramientas:

- [Bootstrap 4](https://getbootstrap.com/) como base de diseño. Algunos componentes se toma de esta librería modificando los estilos.
- [Storybook](https://storybook.js.org) como base para definir y documentar cada componente.
- [React](https://reactjs.org/) para generar los componentes de la documentación.
- [Chromatic](https://www.chromatic.com/) para gestionar los cambios visuales en los componentes.
- [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/) y [Prettier](https://prettier.io/) para estandarizar los estilos del código.

---

Para desarrollar en Obelisco hay que clonar el proyecto e instalar dependencias.
```
npm install
```

Una vez instalado, se puede correr con el siguiente comando.
```
npm start
```

### Recomendaciones

Es recomandable utilizar [VScode](https://code.visualstudio.com/) como editor de código con las extensiones de [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Stylelint](https://marketplace.visualstudio.com/items?itemName=Daosro.stylelint) y [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) para asegurarse que los estilos del código sigan las convenciones.

## Integración continua

![Deploy storybook](https://github.com/gcba/Obelisco/workflows/Deploy%20storybook/badge.svg?branch=master)

Obelisco tiene tests automáticos e integración continua.
Cada vez que se genera un nuevo PR, se corren los siguientes procesos:

- **linter** para corroborar que los cambios sigan los lineamientos de estilos de código.
- **Tests de chromatic** para verificar si hay cambios visuales.

Al hacer el merge en la branch `master` se corre el siguiente proceso:

1. Corrobora el formato del código.
2. Corre las pruebas automáticas para chequear que pasen.
3. Genera el build de la nueva versión.
4. Publica los cambios en github pages.


## Colaboración

El mantenimiento y desarrollo de Obelisco lo hace el equipo de la Dirección General de Experiencia Digital, pero lo utilizan tanto equipos de gobierno como proveedores externos.

Para agilizar y hacer más transparente el proceso, cualquier persona puede contribuir con aguna de estas acciones.

[Conocé cómo hacerlo en la sección contribuir](CONTRIBUTING.md).
