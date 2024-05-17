# Web Application - Agroec Comprador

Como correr la Aplicacion Frontend y compilar la Mobile.abc

## Espacios de trabajo.

[VSCode](https://code.visualstudio.com/) 
[Android Studio](https://developer.android.com/studio)
[Node](https://nodejs.org/en/download)



## Instalar dependencias.

Una vez descargado los archivos, abre la consola de comandos y asegurate de estar en el directorio donde estan los archivos.
Puedes dirigirte a la carpeta donde estan guardados, y al buscador de arriba y copiar la direccion, en mi caso seria.
"C:\Users\santi\OneDrive\Escritorio\agroec vendedor", una vez en este directorio, puedes ejecutar comandos relacionados a la app, asegurate de tener descargado Node y NPM, no es necesario descargar VSCode para correr la aplicacion, si para cambiar el codigo.

```sh
cd *direccion*
```

```sh
npm install
```

### Deploy en Modo de Desarrollo

Si quieres ver la aplicacion web de manera local, asegurate de correr este comando.

```sh
npm run dev
```

### Compilar para produccion

Este comando te servira archivos estaticos en la carpeta /dist, que podras utilizar en Netlify o tu hosting de CPanel para subir la version web.

```sh
npm run build
```

### Como generar un APK o AAB?.

Debes tener Android Studio descargado, para realizar estos comandos.

(Compilar Web App)
```sh
npm run build
```

(Generar Android Native Files)
```sh
npx cap add android
```

(Generar recursos graficos como iconos para la app.)
```sh
npx capacitor-assets generate
```

(Abrir android studio con la aplicacion a compilar)
```sh
npx cap open android
```

Esperas que cargue Android Studio, tarda 1-2 minutos, luego veras en la barra de herramientas arriba "Build", ahi buscas la opcion Bundle/APK y seleccionas la APK, esto te dara una version de debug.




## Tecnologias
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![Vue 3](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D) 
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=Capacitor&logoColor=white) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) 

		