
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userIdInput = document.getElementById("userId");
const status = document.getElementById("status");


function updateStatus() {
    const storedUser = localStorage.getItem("userId");
    if (storedUser) {
        status.textContent = `Logged in as: ${storedUser}`;
    } else {
        status.textContent = "Not logged in";
    }
}


loginBtn.addEventListener("click", () => {
    const userId = userIdInput.value.trim();
    const password = document.getElementById("password").value.trim();

    if (userId === "" || password === "") {
        alert("Please enter both User ID and Password!");
        return;
    }

    
    localStorage.setItem("userId", userId);
    updateStatus();
    alert("Login successful!");
});

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userId");
    updateStatus();
    alert("Logged out successfully!");
});
updateStatus();
