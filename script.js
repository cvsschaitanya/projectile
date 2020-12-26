ball = document.querySelector("#ball");
launch = document.querySelector("#launch");
hline = document.querySelector(".H");
ydim = hline.querySelector(".dp");
vline = document.querySelector(".V");
xdim = vline.querySelector(".dp");

var t, increment, u, theta, sinTheta, cosTheta, scale, id;

launch.addEventListener("click", function() {
    t = 0;
    increment = 0.01;
    u = document.querySelector("#u").value;
    theta = document.querySelector("#theta").value;
    sinTheta = Math.sin(Math.PI * theta / 180);
    cosTheta = Math.cos(Math.PI * theta / 180);
    scale = 500;
    g = 10;
    id = setInterval(transition, 40);
});

function transition() {
    console.log("Hello")
    t += increment;
    Y = y(t);
    X = x(t);
    ball.style.bottom = scale * Y + 'px';
    ydim.innerText = Y + 'm';
    vline.style.height = scale * Y + 'px'
    hline.style.bottom = scale * Y + 'px'

    ball.style.left = scale * X + 'px';
    xdim.innerText = X + 'm';
    hline.style.width = scale * X + 'px'
    vline.style.left = scale * X + 'px'

    if (y(t) <= 0)
        clearInterval(id);
}

function x(t) {
    X = u * cosTheta * t;
    X *= 100;
    X = Math.round(X);
    X /= 100;
    return X;
}

function y(t) {
    Y = u * sinTheta * t - 0.5 * g * t * t;
    if (Y < 0)
        Y = 0;
    Y *= 100;
    Y = Math.round(Y);
    Y /= 100;
    return Y;
}