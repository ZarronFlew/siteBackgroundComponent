"use strict";

window.onload = function () {
    // function parallax(event) {
    //     let ball = this.querySelectorAll(".svg");
    //     ball.forEach((item) => {
    //         item.style.transform = `translate(
    //             ${Math.floor(event.clientX / 30)}px, ${Math.floor(
    //             event.clientY / 30
    //         )}px
    //            )`;
    //     });
    // }
    // document.addEventListener("mousemove", parallax);

    // Функция для навешивания обработчиков событий на элементы SVG
    function attachEventListenersToSvgElements() {
        const svgElements = document.querySelectorAll('.svg');
        svgElements.forEach( svg => {
            let baseWidth = svg.clientWidth;
            let baseHeight = svg.clientHeight;
            svg.addEventListener('mouseenter', () => {
                svg.style.width = baseWidth * 0.9 + `px`;
                svg.style.height = baseHeight * 0.9 + `px`;
            });
            svg.addEventListener('mouseleave', () => {
                svg.style.width = baseWidth + `px`;
                svg.style.height = baseHeight + `px`;
            });
        });
    }

    // Вызываем функцию для навешивания обработчиков событий на элементы SVG
    attachEventListenersToSvgElements();

};

// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     World = Matter.World,
//     Bodies = Matter.Bodies;

// var engine = Engine.create();
// var render = Render.create({
//     element: document.body,
//     engine: engine,
//     options: {
//         width: 800,
//         height: 400,
//         wireframes: false,
//     },
// });

// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var ballA = Bodies.circle(380, 100, 40, 10);
// var ballB = Bodies.circle(460, 10, 40, 10);
// var ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });
// World.add(engine.world, [boxA, ballA, ballB, ground]);
// Engine.run(engine);
// Render.run(render);
  
