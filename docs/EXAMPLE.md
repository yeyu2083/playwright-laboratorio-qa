# Ejemplo rápido de ejecución

Pasos mínimos para ejecutar el test de ejemplo incluido en `tests/example.spec.js`:

1. Instalar dependencias si no están instaladas:

```bash
npm install
```

2. Instalar navegadores de Playwright (necesario la primera vez):

```bash
npx playwright install --with-deps
```

3. Ejecutar todos los tests:

```bash
npx playwright test
```

4. Ejecutar el test de ejemplo:

```bash
npx playwright test tests/example.spec.js
```
