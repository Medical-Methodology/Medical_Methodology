// Links constants to HTML elements
const logout = document.querySelector('#logout-button');
const welcomeTag = document.querySelector('#welcome-tag');
const standUserContent = document.querySelector('#standard-user');

// Adds listener for when button is clicked
logout.addEventListener('click', (e) =>
{
    // Prevents default action
    e.preventDefault();

    // Logs user out
    auth.signOut().then(() =>
    {
        // Redirects user to main page
        location.href = '../index.html';
    })
});

auth.onAuthStateChanged(user =>
{
    if (user)
    {
        var admin = true;

        db.collection('users').get().then(snapshot =>
        {
            snapshot.docs.forEach(doc =>
            {
                if (doc.id === user.uid)
                {
                    let html =
                    `
                        <h1 style =
                        '
                            font-size: 60px;
                            padding-top: 40px;
                            padding-bottom: 50px;
                        ;'
                        >Welcome Back ${doc.data().name}!</h1>
                    `;

                    let content = 
                    `
                        <div id = 'main-content'>
                            <div id = 'enrolled'>
                                <h1>Enrolled Courses:</h1>
                            </div>
                            <div id = 'progress'>
                                <h1>Last Leftoff:</h1>
                            </div>
                            <div id = 'next'>
                                <h1>What's Next?</h1>
                            </div>
                        </div>
                    `;

                     welcomeTag.innerHTML = html;
                     standUserContent.innerHTML = content;
                     admin = false;
                }
            })
        })

        if (admin)
        {
            location.href = 'admin.html';
        }
    }
    else
    {
        location.href = '../index.html';
    }
})