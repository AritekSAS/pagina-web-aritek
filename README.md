## Desarrollo local

Para ver el sitio localmente, inicia un servidor estático desde la raíz del repositorio (la carpeta que contiene `index.html`).

### Node.js

```bash
npx serve .
```

### Python

```bash
python -m http.server 8000
```

## Configuración de hosting

Al desplegar el sitio en un hosting estático, configura la **carpeta raíz** apuntando a esta misma carpeta, ya que aquí se encuentra `index.html` y los demás archivos públicos.

## Resolución de problemas

- **Error 404**: verifica que las rutas de archivos (imágenes, hojas de estilo, scripts) sean correctas y relativas a la carpeta raíz. Asegúrate de que los nombres y extensiones coincidan exactamente.

