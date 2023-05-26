function generateHeart() {
    // 创建爱心元素
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // 设置爱心的初始位置和样式
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    const size = Math.random() * 80 + 20;
    const animationDuration = Math.random() * 2 + 1;

    heart.style.left = `${xPos}px`;
    heart.style.top = `${yPos}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.animationDuration = `${animationDuration}s`;

    // 将爱心添加到页面中
    document.body.appendChild(heart);
}

// 调用生成爱心函数
function generateHearts() {
    // 创建背景色为黑色的样式
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background-color: black;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);

    // 每隔一段时间生成一个爱心
    setInterval(generateHeart, 500);
}

// 执行生成爱心函数
generateHearts();