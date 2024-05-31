const parentBlocks = document.querySelectorAll(".services__item");
const childBlocks = document.querySelectorAll(".services__subpic");

parentBlocks.forEach((parent, index) => {
    parent.addEventListener("mouseenter", () => {
        childBlocks[index].style.backgroundColor = "rgba(22, 22, 25, 0.75)";
    });

    parent.addEventListener("mouseleave", () => {
        childBlocks[index].style.backgroundColor = "rgb(114, 88, 220)";
    });
});
