const login = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        console.log(username, password);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        
        window.location.href = "home.html"; // Redirect to home.html
    } else {
        alert("Enter valid details");
    }
}




const spanContainer = document.createElement("div");
spanContainer.classList.add("snow-container");
document.body.appendChild(spanContainer);

const width = window.innerWidth;

for (let i = 0; i < 100; i++) {
    const span = document.createElement("span");
    spanContainer.appendChild(span);

    let number = Math.random() * width;
    const dimension = Math.random() * (15 - 10 + 1) + 10;
    let alpha = Math.random() * (0.4 - 0.2 + 0.1) + 0.3;
    
    span.style.height = dimension + 'px';
    span.style.width = dimension + 'px';
    span.style.background = `rgba(255,255,255,${alpha})`;
    span.style.borderRadius = '50%';
    span.style.position = 'absolute';
    span.style.top = '-10px';
    span.style.left = number + 'px';
    span.style.zIndex = '998';
    span.style.animation = 'snowfall 16s linear infinite';
    span.style.animationDelay = `${Math.random() * (9 - 4 + 1)}s`;
}

