auth.onAuthStateChanged(user =>
{
    if (user)
    {
        location.href = 'pages/user.html';
    }
})