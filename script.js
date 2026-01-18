let imagemAtualId = "default";

function trocarImagem(proximaId) {
    if (imagemAtualId === proximaId) return;

    const saindo = document.getElementById(imagemAtualId);
    const entrando = document.getElementById(proximaId);

    const tl = gsap.timeline();

    tl.to(saindo, {
        x: -100,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
    });

    tl.fromTo(entrando,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    imagemAtualId = proximaId;
}


document.getElementById("Laranja-cósmico").addEventListener("click", () => trocarImagem("laranja"));
document.getElementById("Azul-intenso").addEventListener("click", () => trocarImagem("azul"));
document.getElementById("Prateado").addEventListener("click", () => trocarImagem("prateado"));