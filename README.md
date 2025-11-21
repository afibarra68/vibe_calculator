# 🧮 Calculadora Verde

Una calculadora moderna y funcional desarrollada con HTML, CSS y JavaScript, con un diseño elegante en tonos verdes.

## 📋 Características

- **Interfaz moderna**: Diseño atractivo con tema verde y gradientes
- **Layout personalizado**: 
  - Pantalla de visualización en la izquierda
  - Botones numéricos y operadores en la derecha
  - Toolbar superior con funciones adicionales
- **Funcionalidades completas**:
  - Operaciones básicas (suma, resta, multiplicación, división)
  - Porcentajes
  - Paréntesis para operaciones complejas
  - Números decimales
  - Historial de cálculos
- **Soporte de teclado**: Puedes usar el teclado para realizar operaciones
- **Diseño responsive**: Se adapta a diferentes tamaños de pantalla

## 🚀 Cómo usar

### Localmente
1. Abre el archivo `index.html` en tu navegador web
2. Usa los botones o el teclado para realizar cálculos
3. Presiona `=` o `Enter` para obtener el resultado

### Desplegar en GitHub Pages

1. **Configurar GitHub Pages en el repositorio**:
   - Ve a `Settings` > `Pages` en tu repositorio de GitHub
   - En `Source`, selecciona `GitHub Actions`

2. **Hacer push del código**:
   ```bash
   git add .
   git commit -m "Initial commit: Calculadora Verde"
   git push origin main
   ```

3. **El workflow se ejecutará automáticamente**:
   - El pipeline de GitHub Actions se activará en cada push a `main` o `master`
   - La aplicación se desplegará automáticamente en GitHub Pages
   - La URL será: `https://[tu-usuario].github.io/[nombre-repositorio]/`

4. **Verificar el despliegue**:
   - Ve a la pestaña `Actions` en GitHub para ver el estado del workflow
   - Una vez completado, tu calculadora estará disponible en línea

## ⌨️ Atajos de teclado

- **Números (0-9)**: Ingresar números
- **Operadores**: `+`, `-`, `*`, `/`
- **Paréntesis**: `(`, `)`
- **Porcentaje**: `%`
- **Punto decimal**: `.`
- **Igual**: `Enter` o `=`
- **Borrar último**: `Backspace`
- **Limpiar todo**: `Escape` o `C`

## 🎨 Estructura del proyecto

```
ia_course/
│
├── .github/
│   └── workflows/
│       └── deploy.yml    # Pipeline de GitHub Actions para despliegue
├── index.html            # Estructura HTML de la calculadora
├── styles.css            # Estilos y diseño visual
├── script.js             # Lógica y funcionalidad
├── .nojekyll            # Configuración para GitHub Pages
└── README.md            # Este archivo
```

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript (Vanilla)**: Lógica de cálculo sin dependencias

## 📱 Funciones del Toolbar

- **C (Clear)**: Limpia toda la pantalla y reinicia a 0
- **⌫ (Backspace)**: Elimina el último carácter ingresado
- **Historial**: Muestra/oculta el historial de los últimos 10 cálculos realizados

## 🎯 Características técnicas

- Validación de expresiones matemáticas
- Manejo de errores
- Prevención de operaciones inválidas
- Historial limitado a 10 entradas para optimizar rendimiento
- Código limpio y comentado

## 🌟 Próximas mejoras posibles

- [ ] Soporte para más operaciones matemáticas (raíz cuadrada, potencias, etc.)
- [ ] Modo científico
- [ ] Temas personalizables
- [ ] Exportar historial
- [ ] Memoria (M+, M-, MR, MC)

## 📝 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y personal.

---

**Desarrollado con ❤️ usando HTML, CSS y JavaScript puro**

