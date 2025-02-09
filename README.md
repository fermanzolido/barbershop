# Barbershop Elite - Sitio Web

## 🎯 Descripción
Sitio web elegante y moderno para una barbería de alta gama, diseñado para proporcionar una experiencia de usuario premium y sofisticada. El sitio presenta un diseño responsive con una paleta de colores dorado y negro que transmite lujo y profesionalismo.

## ✨ Características Principales

### 🎨 Diseño
- Interfaz elegante y moderna con animaciones suaves
- Paleta de colores premium (dorado/negro)
- Diseño totalmente responsive
- Cursor personalizado con forma de tijeras
- Efectos de hover y transiciones elegantes

### 📱 Secciones
- **Hero Section**: Presentación visual impactante
- **Horarios**: Información clara de horarios de atención
- **Galería**: 
  - Imágenes con efecto de hover
  - Modal con zoom interactivo
  - Navegación táctil y con mouse
- **Ubicación**: Mapa interactivo y datos de contacto
- **Reservas**: Botón de llamada directa
- **Redes Sociales**: Integración con TikTok, Instagram, Facebook y Spotify

## 🛠 Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript moderno
- Bootstrap 5
- Bootstrap Icons
- Google Maps API

## ⚡ Características Técnicas
- Optimización SEO
- Accesibilidad (ARIA labels, roles semánticos)
- Rendimiento optimizado
- Sin dependencia de cookies de terceros
- Código modular y mantenible

## 📱 Funcionalidades Interactivas
- Zoom en imágenes de galería con control de mouse
- Navegación suave entre secciones
- Botones de redes sociales con efectos
- Menú responsive para dispositivos móviles

## 🎨 Personalización
El sitio utiliza variables CSS para una fácil personalización de:
- Colores principales
- Tipografías
- Espaciados
- Efectos y animaciones

## 📦 Estructura de Archivos
```
barbershop/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    ├── hero-bg.png
    ├── reservar-bg.png
    ├── corte1.png
    ├── corte2.png
    └── corte3.png
```

## 🚀 Configuración y Uso
1. Clona el repositorio
2. Personaliza las imágenes en la carpeta `img/`
3. Actualiza los enlaces de redes sociales en el footer
4. Modifica el mapa con tu ubicación real
5. Actualiza la información de contacto y horarios

## ⚙️ Personalización de Contenido
Para personalizar el contenido, modifica:
- Horarios de atención
- Número de teléfono para reservas
- Dirección en el mapa
- Enlaces a redes sociales
- Imágenes de la galería

## 🎯 Mejores Prácticas Implementadas
- Código semántico y accesible
- Optimización de imágenes
- Eventos pasivos para mejor rendimiento
- Manejo responsivo de recursos
- Almacenamiento local cuando está disponible

## 📦 Comandos Git

### Inicializar el Repositorio
```bash
# Inicializar un nuevo repositorio Git
git init

# Agregar el repositorio remoto (reemplazar con tu URL)
git remote add origin https://github.com/fermanzolido/barbershop-elite.git
```

### Configuración Inicial
```bash
# Configurar nombre de usuario y email
git config --global user.name "Tu Nombre"
git config --global user.email "fernandomanzolido@gmail.com"
```

### Comandos Básicos
```bash
# Ver estado del repositorio
git status

# Agregar todos los archivos
git add .

# Crear primer commit
git commit -m "Versión inicial del sitio web de Barbershop Elite"

# Subir cambios a la rama principal
git branch -M main
git push -u origin main
```

### Actualizar Repositorio
```bash
# Obtener cambios del repositorio remoto
git pull origin main

# Agregar nuevos cambios
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

### Comandos Útiles
```bash
# Ver historial de commits
git log --oneline

# Crear una nueva rama
git checkout -b feature/nueva-funcionalidad

# Cambiar entre ramas
git checkout main

# Unir ramas
git merge feature/nueva-funcionalidad
```

### Ignorar Archivos
Crear archivo `.gitignore`:
```bash
# Crear archivo .gitignore
echo "node_modules/
.DS_Store
.env
*.log" > .gitignore
```

## 🔄 Subir al Repositorio desde VS Code

1. **Inicializar Repositorio**:
   - Abre la pestaña de Source Control en VS Code (Ctrl+Shift+G)
   - Click en "Initialize Repository"

2. **Primer Commit**:
   - En Source Control verás todos los archivos marcados con U (Untracked)
   - Click en el "+" junto a cada archivo o junto a "Changes" para preparar todos
   - Escribe un mensaje de commit en el campo de texto
   - Click en el "✓" (Commit) en la parte superior

3. **Conectar con GitHub**:
   - Click en los "..." (más opciones) en Source Control
   - Selecciona "Remote" > "Add Remote"
   - Selecciona "Add Remote from GitHub"
   - Si es la primera vez:
     - Click en "Allow" para que VS Code acceda a GitHub
     - Sigue el proceso de autenticación en el navegador
   - Elige un nombre para el repositorio
   - Selecciona si será público o privado
   - Click en "OK"

4. **Subir Cambios**:
   - Una vez conectado, click en "Publish Branch"
   - O usa los botones de Sync para mantener sincronizado

5. **Actualizaciones Posteriores**:
   - Los cambios aparecerán automáticamente en Source Control
   - Selecciona los archivos a incluir
   - Escribe el mensaje de commit
   - Click en Commit
   - Click en Sync para subir y bajar cambios

6. **Atajos Útiles**:
   - `Ctrl+Shift+G`: Abrir Source Control
   - `Ctrl+Enter`: Confirmar commit
   - `Ctrl+R`: Refrescar cambios

---

📌 **Nota**: Reemplazar las imágenes de ejemplo con fotografías reales de la barbería para una presentación más auténtica.