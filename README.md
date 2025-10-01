# CardAK Documentation Website

Este sitio web de documentación fue creado con Docusaurus para CardAK (Card Army Knife) v0.8.x.

## Instalación

```bash
npm install
```

## Desarrollo Local

```bash
npm start
```

Este comando inicia un servidor de desarrollo local y abre una ventana del navegador. La mayoría de los cambios se reflejan en vivo sin necesidad de reiniciar el servidor.

## Build

```bash
npm run build
```

Este comando genera el contenido estático en el directorio `build` que puede ser servido usando cualquier servicio de hosting de contenido estático.

## Servir el Build Localmente

```bash
npm run serve
```

Este comando sirve el contenido del directorio `build` localmente para probar el sitio de producción.

## Transferir a Servidor Remoto

Una vez que hayas construido el sitio, puedes transferir el directorio `build` a tu servidor remoto:

```bash
# Opción 1: Usando scp
scp -r build/* user@remote-server:/path/to/webroot/

# Opción 2: Usando rsync
rsync -avz build/ user@remote-server:/path/to/webroot/
 or 
rsync -avz /home/eduardo/projects/cardak_webdoc/build/ felippone.com:/var/www/cardak/

# Opción 3: Usando FTP/SFTP (con tu cliente preferido)
```

## Estructura del Proyecto

```
cardak_webdoc/
├── docs/                    # Archivos de documentación en Markdown
│   ├── intro.md            # Página de introducción
│   ├── caracteristicas.md  # Características
│   ├── casos-de-uso.md     # Casos de uso
│   ├── comandos/           # Documentación de comandos
│   ├── flags-filtros.md    # Flags y filtros
│   └── tui.md              # Interfaz de usuario TUI
├── src/
│   └── css/
│       └── custom.css      # Estilos personalizados
├── static/
│   └── img/                # Imágenes y assets estáticos
├── docusaurus.config.js    # Configuración de Docusaurus
├── sidebars.js             # Configuración del sidebar
└── package.json            # Dependencias del proyecto
```

## Documentación Incluida

El sitio incluye documentación completa de:

- **Introducción**: Qué es CardAK y cómo usarlo
- **Características**: Funcionalidades principales
- **Casos de Uso**: Escenarios comunes de uso
- **Comandos**: Documentación detallada de todos los comandos
  - CHOP, CONVERT, CREATE, DELETE, DESCRIBE
  - DISTRIBUTE, DUPLICATES, EXPORT, FILTER, FIX
  - GREP, IDENTIFY, IMPORT, JOIN, OPEN
  - PRINT, REPLACE, SPLIT, VALIDATE
- **Flags y Filtros**: Opciones comunes y filtros disponibles
- **TUI**: Interfaz de usuario de texto interactiva

## Personalización

### Modificar Contenido

Los archivos de documentación están en el directorio `docs/` en formato Markdown. Puedes editarlos directamente.

### Cambiar Configuración

Edita `docusaurus.config.js` para:
- Cambiar el título y tagline
- Modificar la URL de producción
- Ajustar el tema y colores
- Configurar navbar y footer

### Modificar Sidebar

Edita `sidebars.js` para reorganizar o agregar secciones al menú lateral.

### Estilos Personalizados

Modifica `src/css/custom.css` para ajustar colores y estilos.

## Despliegue

### Hosting Estático

El directorio `build` contiene archivos HTML, CSS y JavaScript estáticos que pueden ser servidos por cualquier servidor web:

- Apache
- Nginx
- IIS
- Node.js (con express o similar)
- Servicios cloud (AWS S3, Google Cloud Storage, Azure)

### Ejemplo Nginx

```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /ruta/a/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Ejemplo Apache

```apache
<VirtualHost *:80>
    ServerName tu-dominio.com
    DocumentRoot /ruta/a/build

    <Directory /ruta/a/build>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        FallbackResource /index.html
    </Directory>
</VirtualHost>
```

## Soporte

Para más información sobre Docusaurus, visita: https://docusaurus.io/

## Licencia

Documentación de CardAK v0.8.x