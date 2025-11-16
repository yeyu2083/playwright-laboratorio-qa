⚠️ **Importante:** Los resultados de pruebas y reportes generados por Playwright/Allure **no deben** subirse al repositorio.

- `allure-results/` y `allure-report/` están en `.gitignore` y no deben comitearse.
- `test-results/`, `playwright-report/` y otros artefactos generados también están ignorados.

🎭 Proyecto de Pruebas Automatizadas con Playwright

## 📋 Descripción

Este repositorio contiene un framework de pruebas automatizadas end-to-end desarrollado con [Playwright](https://playwright.dev/), diseñado para validar aplicaciones web de manera robusta, rápida y confiable. Incluye soporte para múltiples navegadores, ejecución paralela y generación de reportes detallados.



## 🚀 Características Principales

- ✅ **Multi-navegador**: Chromium, Firefox, Safari (WebKit)
- ✅ **Ejecución paralela** por defecto
- ✅ **Auto-wait inteligente** para elementos
- ✅ **Capturas automáticas** de pantalla en fallos
- ✅ **Trazas detalladas** para debugging
- ✅ **Modo headless y headed**
- ✅ **Integración CI/CD**
- ✅ **Reportes HTML interactivos**

## 📋 Requisitos Previos

### Versiones Mínimas Requeridas
- **Node.js**: `>=18.0.0` (recomendado: LTS más reciente)
- **npm**: `>=8.0.0` o **yarn**: `>=1.22.0`

### Verificar versiones instaladas
```bash
node --version
npm --version

🛠️ Instalación y Configuración
1. Configuración inicial del proyecto

# Para proyectos nuevos
npm init playwright@latest

# Para proyectos existentes
npm init -y

2. Instalar Playwright
# Instalar Playwright Test Runner
npm install -D @playwright/test

# Instalar navegadores soportados
npx playwright install

# Instalar dependencias del sistema (Linux/macOS)
npx playwright install-deps

3. Inicializar configuración

# Crear configuración básica interactiva
npm init playwright@latest

# Crear configuración personalizada
npx playwright test --init

📁 Estructura Recomendada del Proyecto

project-root/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── src/
│   ├── pages/                     # Page Object Models
│   │   ├── base.page.ts
│   │   ├── login.page.ts
│   │   └── home.page.ts
│   ├── fixtures/                  # Custom fixtures
│   │   └── test-data.ts
│   └── utils/                     # Helpers
│       ├── api-helpers.ts
│       └── data-generators.ts
├── tests/
│   ├── auth/
│   │   ├── login.spec.ts
│   │   └── auth.setup.ts
│   ├── e2e/
│   │   └── checkout.spec.ts
│   └── api/
│       └── users-api.spec.ts
├── tests-examples/                # Mantén los ejemplos
│   └── demo-todo-app.spec.ts
├── test-results/                  # Auto-generado (gitignored)
├── playwright-report/             # Auto-generado (gitignored)
├── playwright.config.ts
├── .env
├── .env.example
├── package.json
└── README.md

⚙️ Configuración Avanzada de Playwright
playwright.config.ts (Configuración Optimizada)
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config({ path: './playwright.env' });

export default defineConfig({
  // Directorio de tests
  testDir: './tests',
  
  // Ejecutar tests en paralelo completo
  fullyParallel: true,
  
  // No permitir tests con .only() en CI
  forbidOnly: !!process.env.CI,
  
  // Reintentos automáticos en caso de fallo
  retries: process.env.CI ? 2 : 0,
  
  // Número de workers (procesos paralelos)
  workers: process.env.CI ? 1 : undefined,
  
  // Timeout global para tests
  timeout: 30 * 1000,
  
  // Configuración de reportes
  reporter: [
    ['html', { outputFolder: 'target/playwright-reports' }],
    ['junit', { outputFile: 'target/test-results/junit.xml' }],
    ['json', { outputFile: 'target/test-results/results.json' }],
    ['line'] // Para output en consola
  ],
  
  // Configuración global de uso
  use: {
    // URL base desde variables de entorno
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    
    // Configuración de trazas
    trace: 'on-first-retry',
    
    // Screenshots automáticos
    screenshot: 'only-on-failure',
    
    // Videos de las pruebas
    video: 'retain-on-failure',
    
    // Modo headless según entorno
    headless: !!process.env.CI,
    
    // Configuración de viewport
    viewport: { width: 1280, height: 720 },
    
    // Ignorar errores HTTPS
    ignoreHTTPSErrors: true,
    
    // Timeout para acciones individuales
    actionTimeout: 10 * 1000,
    
    // Configuración de navegación
    navigationTimeout: 30 * 1000,
  },

  // Configuración por navegador y dispositivo
  projects: [
    // Desktop browsers
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Storage state si es necesario
        // storageState: './target/state/storage.json'
      },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Microsoft Edge',
      use: { 
        ...devices['Desktop Edge'], 
        channel: 'msedge' 
      },
    },
    {
      name: 'Google Chrome',
      use: { 
        ...devices['Desktop Chrome'], 
        channel: 'chrome' 
      },
    },
    
    // Mobile browsers (opcional)
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  
  // Servidor local para desarrollo (opcional)
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  
  // Configuración de salida
  outputDir: 'target/generated-test-sources',
});

🎯 Comandos Principales y Ejecución
Comandos Básicos de Ejecución
# Ejecutar todos los tests
npx playwright test

# Ejecutar con interfaz gráfica interactiva
npx playwright test --ui

# Ejecutar en modo headed (ver navegador)
npx playwright test --headed

# Ejecutar tests específicos por archivo
npx playwright test tests/auth/login.spec.ts

# Ejecutar por patrón de nombre
npx playwright test --grep "login"

Scripts recomendados
{
  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "test:ui": "playwright test --ui",
    "test:debug": "playwright test --debug",
    "test:smoke": "playwright test --grep '@smoke'",
    "test:regression": "playwright test --grep '@regression'",
    "report": "playwright show-report target/playwright-reports",
    "trace": "playwright show-trace",
    "install:browsers": "playwright install --with-deps",
    "test:ci": "playwright test --reporter=junit",
    "upload": "node scripts/cucumber-uploader.js"
  }
}
🐛 Debugging y Desarrollo
# Modo debug paso a paso
npx playwright test --debug

# Debug de test específico
npx playwright test tests/login.spec.ts --debug

# Generar código automáticamente (codegen)
npx playwright codegen https://ejemplo.com

# Inspector de Playwright
npx playwright inspector

# Debug con logs detallados
DEBUG=pw:api npx playwright test

Análisis de Resultados y Trazas
# Ver reporte HTML interactivo
npx playwright show-report target/playwright-reports/

# Ver trace específico
npx playwright show-trace path/to/trace.zip

# Limpiar resultados anteriores
rm -rf test-results target/playwright-reports target/generated-test-sources
