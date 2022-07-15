// Links constants to HTML elements
const terms = document.querySelector('#terms');
const logout = document.querySelector('#logout-button');
const createTerm = document.querySelector('#create');
const listTerms = document.querySelector('#list');

// Checks if user is authenticated
auth.onAuthStateChanged((user) =>
{ 
    if (user)
    {
        fetchData('term', 'asc');
    }
    else
    {
        // Redirects user if not logged in
        location.href = 'login.html';
    }
})

// Defines function for going through collection
const createList = (data) =>
{
    let counter = 1;
    let html = '';

    // For each loop to cycle through the documents in the Collection
    data.forEach(doc =>
    {
        // Accesses data from the document
        const term = doc.data();

        // Temporary storage for the document's term
        const td = 
        `
            <p id = ${counter} style = 'font-size: 19px; font-weight: 400; text-align: left;'><b><u>${term.term}</u></b> - ${term.definition}</p>
            <div style = 'padding: 10px;'></div>
        `;

        // Aggregates terms into single reference
        html += td;
        counter += 1;
    })

    // Injects HTML
    terms.innerHTML = html;
}

// Refeshes data every time collection changes
function fetchData(term, sort)
{
    db.collection('terms').orderBy(term, sort).onSnapshot(snapshot =>
    {
        // Runs data through previously created function
        createList(snapshot.docs);
    })
}

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

// Determines whether or not to display add term feature
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
    }
})

// Submits term and definition to database
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

// Creates list of terms
db.collection('terms').orderBy('term', 'asc').onSnapshot(snapshot =>
{
    let counter = 1;
    let html = 
    `
        <h1 style = 'font-size: 30px; text-decoration: underline; padding: 5px;''>Terms</h1>
        <div style = 'display: flex;'>
            <button onclick = sort("A")>A</button>
        </div>
    `;
    // Iterates through terms collection
    snapshot.docs.forEach(doc =>
    {
        // Stores Admin user data in constant
        const information = doc.data();

        const td = 
        `
            <a 
            style = 'color: black; font-size: 18px;' href = '#${counter}'>${information.term}</a>
            <div style = 'padding: 5px;'></div>
        `;

        html += td;
        counter += 1;
    })

    listTerms.innerHTML = html;
})

function sort(letter)
{
    db.collection('terms').onSnapshot(snapshot =>
        {
            // Runs data through previously created function
            
            var documents = '';
            snapshot.docs.forEach(doc =>
            {
                const termD = doc.id;
                let termE = termD.toString();
                if (termE.substring(0, 1) === letter)
                    documents += doc;
            })

            console.log(documents.get(1));
        })
}