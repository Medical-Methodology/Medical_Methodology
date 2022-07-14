// Links constants to HTML elements
const terms = document.querySelector('#terms');
const logout = document.querySelector('#logout-button');
const createTerm = document.querySelector('#create');

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
            <p style = 'font-size: 19px; font-weight: 400; text-align: left;'><b><u>${term.term}</u></b> - ${term.definition}</p>
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
        db.collection('terms').orderBy('term', 'asc').onSnapshot(snapshot =>
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


auth.onAuthStateChanged(user =>
{
    if (user)
    {
        var admin = false;

        // Checks if user is Admin
        db.collection('admin').get().then(snapshot =>
        {
            // Iterates through Admin collection
            snapshot.docs.forEach(doc =>
            {
                // Stores Admin user data in constant
                const information = doc.data();

                console.log(information.uid);
                // Compares logged in user ID with document ID
                if (user.uid == information.uid)
                {
                    admin = true;
                    console.log('true');
                }
            })

            if (admin)
            {
                let html = 
                `
                    <form action = 'dictionary.html' method = 'POST' id = 'new-term'>
                        <div id = 'term-def'>
                            <input type = 'text' placeholder = 'Term...' name = 'term' id = 'term'></input>
                            <input type = 'text' placeholder = 'Definition...' name = 'definition' id = 'definition'></input>
                        </div>
    
                        <div id = 'small-gap'></div>
    
                        <button id = 'create-term'>Submit</button>
                    </form>

                    <br></br>
                `;
    
                createTerm.innerHTML = html;
            }
        })   
        
        console.log(admin);
        
    }
})

createTerm.addEventListener('submit', (e) =>
{
    // Prevents default action
    e.preventDefault();

    // Stores term and definition
    const term = document.querySelector('#term').value;
    const definition = document.querySelector('#definition').value;

    // Stores data in terms Collection
    db.collection('terms').doc(term).set(
    {
            term : term,
            definition : definition
    })
})