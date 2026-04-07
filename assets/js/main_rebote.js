window.addEventListener("load", function () {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const window_width = canvas.width;
    const window_height = canvas.height;

    let mouseX = 0;
    let mouseY = 0;

    let totalCirculos = 20;
    let eliminados = 0;
    let nivel = 1;
    let velocidadBase = 0.5;

    // ---------------- MOUSE ----------------

    canvas.addEventListener("mousemove", function (e) {

        const rect = canvas.getBoundingClientRect();

        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

    });

    canvas.addEventListener("click", function () {

        circulos.forEach(c => {

            let dx = mouseX - c.posX;
            let dy = mouseY - c.posY;

            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < c.radius) {
                c.desaparecer = true;
            }

        });

    });

    // ---------------- CLASE ----------------

    class Circle {

        constructor(x, y, radius, text, speed) {

            this.posX = x;
            this.posY = y;
            this.radius = radius;
            this.text = text;

            this.speed = speed;
            this.color = "blue";

            this.dx = (Math.random() - 0.5) * 1.5;
            this.dy = -speed;

            this.alpha = 1;
            this.desaparecer = false;
        }

        draw(context) {

            context.save();

            context.globalAlpha = this.alpha;

            context.beginPath();
            context.fillStyle = this.color;
            context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
            context.fill();

            context.fillStyle = "white";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(this.text, this.posX, this.posY);

            context.closePath();

            context.restore();
        }

        update(context) {

            // movimiento hacia arriba
            this.posY += this.dy;
            this.posX += this.dx;

            // movimiento aleatorio
            this.dx += (Math.random() - 0.5) * 0.1;

            // detectar mouse
            let dx = mouseX - this.posX;
            let dy = mouseY - this.posY;

            let distancia = Math.sqrt(dx * dx + dy * dy);

            if (distancia < this.radius) {
                this.color = "red";
            } else {
                this.color = "blue";
            }

            // desaparecer lentamente
            if (this.desaparecer) {

                this.alpha -= 0.02;

                if (this.alpha <= 0) {

                    this.alpha = 0;

                    this.posY = -100;

                    eliminados++;

                    this.desaparecer = false;
                }
            }

            this.draw(context);
        }
    }

    // ---------------- CREAR ----------------

    let circulos = [];

    function crearCirculos(cantidad) {

        circulos = [];

        for (let i = 0; i < cantidad; i++) {

            let radius = 15;

            let x = Math.random() * window_width;

            let y = window_height + Math.random() * 300;

            let speed = velocidadBase + (nivel * 0.3);

            circulos.push(
                new Circle(x, y, radius, i + 1, speed)
            );
        }
    }

    crearCirculos(totalCirculos);

    // ---------------- HUD ----------------

    function dibujarInfo() {

        ctx.fillStyle = "white";
        ctx.font = "14px Arial";

        let porcentaje = ((eliminados / totalCirculos) * 100).toFixed(1);

        ctx.fillText("Eliminados: " + eliminados, 10, 20);
        ctx.fillText("Porcentaje: " + porcentaje + "%", 10, 40);
        ctx.fillText("Nivel: " + nivel, 10, 60);

    }

    // ---------------- ANIMACION ----------------

    function update() {

        requestAnimationFrame(update);

        ctx.clearRect(0, 0, window_width, window_height);

        circulos.forEach(c => {
            c.update(ctx);
        });

        dibujarInfo();

        // subir nivel cada 10 eliminados
        if (eliminados >= nivel * 10) {

            nivel++;

            velocidadBase += 0.3;

            crearCirculos(totalCirculos);

        }
    }

    update();

});