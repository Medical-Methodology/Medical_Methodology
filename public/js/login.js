// Links constants to HTML elements
const loginForm = document.querySelector('#login-form');
const errorInsert = document.querySelector('#error');

loginForm.addEventListener('submit', (e) =>
{
    // Prevents default action
    e.preventDefault();

    // Assigns user input to constants
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    // Signs user in
    auth.signInWithEmailAndPassword(email, password).then(cred =>
    {
        // Redirects user
        location.href = 'user.html';

    }).catch(function(error)
    {
        // Creates error message
        let html = 
        `
            <p>Error: email or password is incorrect.</p>
        `;

        //Injects HTML for error message
        errorInsert.innerHTML = html;
    })
})