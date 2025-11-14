# NotiLab — demo móvil estática

Pequeña app web móvil estática que demuestra el flujo de permisos y simulación de notificaciones.

Archivos:

- `index.html` — interfaz principal
- `styles.css` — estilos responsivos y paleta accesible
- `script.js` — manejo de `Notification` API y fallback in-app

Cómo probar localmente:

1. Abrir directamente `mobile-app/index.html` en el navegador (recomendado: Chrome o Edge móvil o emulador).

2. Servir via servidor local (recomendado):

```bash
# desde la raíz del repo
cd mobile-app
python3 -m http.server 8000
# abrir http://localhost:8000 en el emulador o navegador
```

Notas:
- Usa la API de notificaciones del navegador cuando el permiso esté concedido.
- Si el permiso está denegado o la API no está disponible, la app muestra un fallback con `toast` dentro de la UI.
- Esta app es un punto de partida para integrarla en una APK o para pruebas automatizadas con Playwright/Appium.
