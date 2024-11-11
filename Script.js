const showSignUpButton = document.getElementById('showSignUp');
const showLoginButton = document.getElementById('showLogin');
if (showSignUpButton) {
    showSignUpButton.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.login-card').classList.add('flipped');
    });
}

if (showLoginButton) {
    showLoginButton.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.login-card').classList.remove('flipped');
    });
}

function signup(event) {
    event.preventDefault();
    const fname = document.getElementById('firstName').value;
    const lname = document.getElementById('lastName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
        alert('User Already Exists. Please use a different email.');
        return;
    }

    users.push({ fname, lname, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('signUpForm').reset();
    alert('Account Created Successfully');
    document.querySelector('.login-card').classList.remove('flipped');
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    console.log("Attempting to login with email:", email);
    console.log("Current stored users:", users);

    const userFound = users.some(user => user.email === email && user.password === password);
    if (userFound) {
        alert("Login Successfully! Redirecting...");
        window.location.href = "Home.html";
    } else {
        alert("Invalid User Email or Password, Try Again!");
    }
}

const hamburger = document.getElementById('hamburger');
const homeContainer = document.querySelector('.home-container');

if (homeContainer && hamburger) {
    homeContainer.classList.add('sidebar-open');
    hamburger.addEventListener('click', () => {
        homeContainer.classList.toggle('sidebar-open');
        homeContainer.classList.toggle('sidebar-closed');
    });
}

const logoutBtn = document.querySelector('.logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        window.location.href = "Index.html";
        console.log(`LogoutBtn is clicked`)
    });
}

const profileBtn = document.getElementById('profileBtn');
if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        window.location.href = "Profile.html";
    });
}
