window.addEventListener("load", function () {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const W = canvas.width;
    const H = canvas.height;

    let mouseX = 0;
    let mouseY = 0;

    let nivel = 1;
    let eliminados = 0;
    let objetivo = 10;
    let velocidad = 0.6;

    const btnNivel = document.getElementById("btnNivel");
    const txtNivel = document.getElementById("nivel");
    const contador = document.getElementById("contador");

    canvas.addEventListener("mousemove", function (e) {

        const rect = canvas.getBoundingClientRect();

        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    canvas.addEventListener("click", function () {

        circulos.forEach(c => {

            if (!c.eliminado) {

                let dx = mouseX - c.x;
                let dy = mouseY - c.y;

                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < c.r) {

                    c.desaparecer = true;
                }
            }

        });

    });

    class Circle {

        constructor() {

            this.r = 15;

            this.reset();

            this.alpha = 1;
            this.desaparecer = false;
            this.eliminado = false;
        }

        reset() {

            this.x = Math.random() * W;
            this.y = H + Math.random() * 200;

            this.dx = (Math.random() - 0.5) * 1;
            this.dy = -velocidad;
        }

        draw() {

            ctx.save();

            ctx.globalAlpha = this.alpha;

            ctx.beginPath();
            ctx.fillStyle = "blue";
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        update() {

            if (this.eliminado) return;

            this.x += this.dx;
            this.y += this.dy;

            this.dx += (Math.random() - 0.5) * 0.05;

            let dx = mouseX - this.x;
            let dy = mouseY - this.y;

            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.r) {

                ctx.fillStyle = "red";
            }

            if (this.desaparecer) {

                this.alpha -= 0.03;

                if (this.alpha <= 0) {

                    this.eliminado = true;
                    eliminados++;

                    this.desaparecer = false;
                }
            }

            if (this.y < -50 && !this.eliminado) {

                this.reset();
            }

            this.draw();
        }
    }

    let circulos = [];

    function crearNivel() {

        circulos = [];

        for (let i = 0; i < objetivo; i++) {

            circulos.push(new Circle());
        }
    }

    crearNivel();

    function actualizarHUD() {

        txtNivel.textContent = nivel;

        contador.textContent =
            "Eliminados: " + eliminados + " / " + objetivo;

        if (eliminados >= objetivo) {

            btnNivel.classList.remove("disabled");
            btnNivel.classList.add("active");

            btnNivel.textContent = "🚀 Siguiente Nivel";
        }
    }

    function animar() {

        requestAnimationFrame(animar);

        ctx.clearRect(0, 0, W, H);

        circulos.forEach(c => c.update());

        actualizarHUD();
    }

    animar();

    // ---------------- NIVEL ----------------

    window.siguienteNivel = function () {

        if (eliminados < objetivo) return;

        nivel++;

        velocidad += 0.4;

        eliminados = 0;

        btnNivel.classList.remove("active");
        btnNivel.classList.add("disabled");

        btnNivel.textContent = "🔒 Siguiente Nivel";

        crearNivel();
    };

});