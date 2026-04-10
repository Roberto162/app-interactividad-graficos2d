# 🎮 Canvas Animation Game

Simulación interactiva de objetos 2D desarrollada con **HTML5 Canvas, JavaScript y CSS**, donde el usuario debe eliminar bolitas para avanzar de nivel en una interfaz tipo videojuego.

---

# 🧠 Descripción

La aplicación consiste en un videojuego interactivo en el que el jugador debe eliminar objetos 2D (bolitas) que se mueven de forma aleatoria dentro de un canvas.

Cada nivel contiene un grupo de **10 bolitas**, y el jugador debe eliminarlas para poder avanzar al siguiente nivel.

Conforme el jugador avanza:

* aumenta la velocidad de las bolitas
* cambia el color por nivel
* se registra el tiempo
* se muestra el progreso
* se desbloquea el botón de siguiente nivel

Al completar todos los niveles, se muestra una pantalla final con el tiempo total del juego.

---

# 🎯 Reglas de negocio implementadas

✔ Detectar coordenadas mouseX y mouseY
✔ Cambiar color del objeto al pasar el mouse
✔ Desaparecer lentamente al hacer clic
✔ Movimiento de abajo hacia arriba
✔ Movimiento aleatorio
✔ Reaparición de bolitas no eliminadas
✔ Contador numérico de bolitas eliminadas
✔ Contador porcentual de progreso
✔ Grupos de 10 bolitas por nivel
✔ Incremento de velocidad por nivel
✔ Botón de siguiente nivel
✔ Barra de progreso
✔ Contador de tiempo por nivel
✔ Tiempo total del juego
✔ Pantalla final de felicitaciones

---

# 🕹️ Funcionamiento

## Nivel

Cada nivel contiene:

* 10 bolitas
* movimiento aleatorio
* color diferente
* velocidad mayor

## Interacción

Mouse sobre bolita:

cambia a rojo

Click sobre bolita:

desaparece lentamente

Bolita no eliminada:

vuelve a aparecer

---

# 📊 Panel de control

Muestra:

* Nivel actual
* Bolitas eliminadas
* Barra de progreso
* Porcentaje
* Tiempo
* Botón siguiente nivel

---

# 🏁 Pantalla final

Al completar todos los niveles:

FELICIDADES
Has completado el juego

Se muestra:

Tiempo total del jugador

Botón reiniciar juego

---

# 🧱 Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Bootstrap
* Canvas API

---

# 📁 Estructura del proyecto

```
CanvasGame/
│
├── index.html
│
├── assets/
│   ├── css/
│   │     styles.css
│   │
│   ├── js/
│   │     main_rebote.js
│   │
│   └── img/
│         fondooscuro.jpg
│         imag.jpg
│         pelotas.png
│
└── README.md
```

---

# 🚀 Cómo ejecutar

1. Descargar el proyecto
2. Abrir la carpeta
3. Abrir **index.html**
4. Ejecutar en navegador

o usar VS Code:

Live Server

---

# 👨‍💻 Autor

**Jesus Roberto Hernandez Benitez**

Ingeniería en Sistemas Computacionales
2026

---

# 🎮 Estado del proyecto

Proyecto funcional y completo.

Simulación de videojuego interactivo con Canvas.
