# Instructivo para Ejecutar una Aplicación Next.js

## Requisitos

- Node.js (v18 o superior)
- npm o yarn

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/hacm1997/fintech-pro.git
```

2. Ingresa al directorio del proyecto:

```bash
cd tu-repo
```

3. Instala las dependencias:

```bash
npm install
```

_o si prefieres:_

```bash
yarn install
```

## Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

_o:_

```bash
yarn dev
```

Abre tu navegador en:

```
http://localhost:3000
```

## Producción

Compila la aplicación:

```bash
npm run build
```

Luego inicia el servidor en modo producción:

```bash
npm start
```

## Variables de Entorno

Crea un archivo `.env` en la raiz del proyecto y agrega las variables necesarias:

```env
NEXT_PUBLIC_URL=http://localhost:3000
```

## Scripts Disponibles

- `npm run dev` &rarr; Desarrollo
- `npm run build` &rarr; Compilar para producción
- `npm run start` &rarr; Ejecutar en producción

## Notas

- Si hay errores, elimina `node_modules` y `package-lock.json` o `yarn.lock` y reinstala.
- Para actualizar paquetes:

```bash
npm update
```

## Listo

¡La aplicación está lista para usarse! 🎉

# Criterios de uso: TailwindCSS vs Styled Components en ProductDetails

## ᵀᴾ Criterios seguidos para diseñar la UI de productos financieros

En el diseño de la UI para productos financieros, el enfoque principal fue **equilibrar rapidez de desarrollo, consistencia visual y escalabilidad**. La estructura buscó ser clara, reutilizable y pensada para crecer a medida que el proyecto escale.

- Se priorizó una **navegación fácil** (Breadcrumbs) para que el usuario siempre pudiera volver rápidamente al catálogo.
- El diseño transmitió **seriedad y confianza** usando paletas de colores sobrios (tonos grises, azul corporativo).
- Se presentó la información **de manera jerárquica**, destacando lo más relevante (nombre, categoría, tipo, nivel de riesgo, tasa de interés).
- El contenido fue diseñado para ser **responsivo** y legible en cualquier dispositivo.

## 2. ᵀᴿ ¿Cómo se decidió cuándo usar Tailwind y cuándo Styled Components?

Se aplicó el siguiente criterio:

| Situación                                                       | ¿TailwindCSS? | ¿Styled Components? |
| :-------------------------------------------------------------- | :------------ | :------------------ |
| Estilos estáticos, fáciles de definir en clase                  | ✔️            |                     |
| Encapsular un bloque de UI que pueda escalar o cambiar a futuro |               | ✔️                  |
| Necesidad de pasar props dinámicos para cambiar estilos         |               | ✔️                  |
| Lógica simple de condicionar clases (ej. color según riesgo)    | ✔️            |                     |

En el código:

- **Layout general** (`Section`, `Container`, `Card`, `Grid`) se encapsuló con **styled-components** para poder extenderlos o tematizarlos fácilmente.
- **Títulos y párrafos** también se encapsularon como componentes para asegurar **consistencia visual**.
- **Colores dinámicos** (como el `riskLevel`) se resolvieron directamente con clases de Tailwind, porque el cambio era sencillo y no justificaba sobrecomplicar.

> **Resumen**: Se usó `styled-components` para bloques estructurales y reutilizables, y Tailwind para estilos rápidos, simples o con lógica condicional ligera.

## 3. ᵀᴽ ¿Qué se haría para escalar este proyecto a una app real de banca digital?

- **Theming dinámico**: Usar un proveedor de temas en styled-components para cambiar colores, tamaños y tipografías según el "brand" del banco.
- **Design System**: Formalizar los componentes (inputs, botones, cards, grids) en una librería interna.
- **Internacionalización (i18n)**: Preparar el proyecto para soportar múltiples idiomas.
- **Optimizar el performance**: Cargar data perezosamente (lazy loading) en componentes pesados como charts.
- **Integración de accesibilidad (a11y)**: Asegurar contraste de colores, navegación por teclado, descripciones ARIA.

## 4. ᵀᴼ ¿Qué herramientas se usarían para mejorar el rendimiento y monitoreo en producción?

- **Sentry**: Para captura de errores en tiempo real.
- **Datadog / New Relic**: Para monitorear el rendimiento del frontend (métricas de carga, errores de red).
- **Vercel Analytics / Next.js Metrics**: Si el despliegue es en Vercel, aprovechar su monitoreo nativo.
- **Lighthouse CI**: Para pruebas automáticas de performance y accesibilidad en cada despliegue.
- **Bundle Analyzer**: Para identificar dependencias grandes y optimizar el peso de los bundles.

---

✨ **En resumen**, la estrategia de usar tanto `styled-components` como `TailwindCSS` permitió mantener el proyecto ágil para la fase actual, pero preparado para una escalabilidad de nivel enterprise.
