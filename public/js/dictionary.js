// Links constants to HTML elements
const terms = document.querySelector('#terms');
const logout = document.querySelector('#logout-button');

// Defines function for going through collection
const createList = (data) =>
{
    let html = '';

    // For each loop to cycle through the documents in the Collection
    data.forEach(doc =>
    {
        // Accesses data from the document
        const term = doc.data();

        // Temporary storage for the document's term
        const td = 
        `
            <p style = 'font-size: 19px;'>${term.definition}</p>
            <div style = 'padding: 10px;'></div>
        `;

        // Aggregates terms into single reference
        html += td;
    })

    // Injects HTML
    terms.innerHTML = html;
}

// Refeshes data every time collection changes
auth.onAuthStateChanged(user =>
{
    if (user)
    {
        db.collection('terms').onSnapshot(snapshot =>
        {
            // Runs data through previously created function
            createList(snapshot.docs);
        })
    }
    else
    {
        // Redirects user if not logged in
        location.href = '../index.html';
    }
})

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