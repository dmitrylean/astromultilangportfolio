---
title: "NoCopy"
date: 2022-08-20
description: "Защита от копирования"
image: "/assets/img/socialbar.jpg"
categories: ["Заметки"]
---

## CSS

 ```
/* Запрет выделения текста */
body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Запрет перетаскивания изображений */
img {
    pointer-events: none;
}
 ```

 ## JS

 ```
// Блокировка контекстного меню
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Запрет Ctrl+C, Ctrl+S, Ctrl+U, F12
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "c" || e.key === "s" || e.key === "u")) {
        e.preventDefault();
    }
    if (e.key === "F12") {
        e.preventDefault();
    }
});

// (Опционально) Запрет выделения мышкой
document.addEventListener("mousedown", function (e) {
    e.preventDefault();
});
 ```