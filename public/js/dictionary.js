// Links constants to HTML elements
const terms = document.querySelector('#terms');
const createTerm = document.querySelector('#create');
const listTerms = document.querySelector('#list');
const loginButton = document.querySelector('#loginButton');
const signupButton = document.querySelector('#signupButton');

// Commonly used injected HTML
var searchTools =
`
    <div style = 'display: flex; justify-content: center;'>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("A")>A</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("B")>B</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("C")>C</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("D")>D</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("E")>E</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("F")>F</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("G")>G</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("H")>H</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("I")>I</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("J")>J</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("K")>K</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("L")>L</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("M")>M</button>
    </div>

    <div style = 'padding: 5px;'></div>

    <div style = 'display: flex; justify-content: center;'>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("N")>N</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("O")>O</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("P")>P</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("Q")>Q</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("R")>R</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("S")>S</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("T")>T</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("U")>U</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("V")>V</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("W")>W</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("X")>X</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("Y")>Y</button>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("Z")>Z</button>
    </div>

    <div style = 'padding: 5px;'></div>

    <div>
        <button style = 'font-size: 15px; border: black solid; border-width: 1px; background-color: yellow; padding: 3px; margin-right: 3px;' onclick = sort("reset")>Reset</button>
    </div>

    <h1 style = 'font-size: 25px; padding-top: 10px; padding-bottom: 5px;'>Search</h1>
    <form action = 'dictionary.html' method = 'POST' id = 'search-bar' style = 'padding-bottom: 15px;'>
        <input type = 'text' name = 'search' id = 'search' style = 
        '
            font-size: 18px;
            border: black solid;
            border-width: 3px;
            border-radius: 5px;
            padding: 5px;
            width: 100%;
        '>
        </input>
    </form>

    <div id = 'listOfTerms'>
`;

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
            <p id = ${counter} style = 'font-size: 19px; font-weight: 400; text-align: left; line-height: 40px;'><b><u>${term.term}</u></b> - ${term.definition}</p>
            <div style = 'padding: 10px;'></div>
        `;

        // Aggregates terms into single reference
        html += td;
        counter += 1;
    })

    // Injects HTML
    html += `<div style = 'padding-bottom: 10%;'></div>`;
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

// Determines whether or not to display add term feature
auth.onAuthStateChanged(user =>
{
    if (user)
    {
        let html = '';
        loginButton.innerHTML = html;
        loginButton.style.margin = '-50px';
        html =
        `
            <button style = 
            '
            margin-right: 4vw;
            background: transparent;
            border: transparent;
            font-size: 22px;
            font-weight: 500;
            ' id = 'logout-button'>Logout</button>
        `;
        signupButton.innerHTML = html;

        const logout = document.querySelector('#logout-button');

        var admin = false;

        // Checks if user is Admin
        db.collection('admin').get().then(snapshot =>
        {
            // Iterates through Admin collection
            snapshot.docs.forEach(doc =>
            {
                // Stores Admin user data in constant
                const information = doc.data();

                // Compares logged in user ID with document ID
                if (user.uid == information.uid)
                {
                    admin = true;
                }
            })

            if (admin)
            {
                let html = 
                `
                    <form action = 'dictionary.html' method = 'POST' id = 'new-term'>
                        <div id = 'term-def'>
                            <input type = 'text' placeholder = 'Term...' name = 'term' id = 'term' style = 'background: transparent;'></input>
                            <input type = 'text' placeholder = 'Definition...' name = 'definition' id = 'definition' style = 'background: transparent;'></input>
                        </div>
    
                        <div id = 'small-gap'></div>
    
                        <button id = 'create-term'>Submit</button>
                    </form>

                    <br></br>
                `;
    
                createTerm.innerHTML = html;
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
    let html = searchTools;

    snapshot.docs.forEach(doc =>
    {
        const information = doc.data();

        const td = 
        `
            <a 
            style = 'color: black; font-size: 18px; font-weight: 500;' href = '#${counter}'>${information.term}</a>
            <div style = 'padding: 10px;'></div>
        `;

        html += td;
        counter += 1;
    })

    html += `</div>`;
    listTerms.innerHTML = html;

    const replaceTerms = document.querySelector('#listOfTerms');
    const searchTerm = document.querySelector('#search-bar');

    searchTerm.addEventListener('submit', (e) =>
    {
        e.preventDefault();
            
            const search = searchTerm['search'].value;

            let test = 'abdominoplasty';
            console.log(test.includes(search.toString().toLowerCase()));

            db.collection('terms').get().then(snapshot =>
            {
                let counter = 1;
                let html = '';
                snapshot.docs.forEach(doc =>
                {
                    const information = doc.data();

                    if (information.term.toString().toLowerCase().includes(search.toString().toLowerCase()))
                    {
                        const td =
                        `
                            <a 
                            style = 'color: black; font-size: 18px; font-weight: 500;' href = '#${counter}'>${information.term}</a>
                            <div style = 'padding: 10px;'></div>
                        `;
                
                        console.log('test: ' + counter);
                        console.log(information.term.toString().toLowerCase());
                        console.log(search.toString().toLowerCase());
                        html += td;
                    }
                    counter += 1;
                })
                replaceTerms.innerHTML = html;
            })
    })
})

function sort(letter)
{
    if (letter === 'reset')
    {

    }

    db.collection('terms').onSnapshot(snapshot =>
    {
        // Runs data through previously created function
        let counter = 1;
        let termsHtml = '';
        let listHtml = searchTools;
        
        snapshot.docs.forEach(doc =>
        {
            if (doc.id.toString().substring(0, 1) === letter)
            {    
                const term = 
                `
                    <p id = ${counter} style = 'font-size: 19px; font-weight: 400; text-align: left; line-height: 40px;'><b><u>${doc.data().term}</u></b> - ${doc.data().definition}</p>
                    <div style = 'padding: 10px;'></div>
                `;
                termsHtml += term;

                const link =
                `
                
                    <a 
                    style = 'color: black; font-size: 18px; font-weight: 500;' href = '#${counter}'>${doc.data().term}</a>
                    <div style = 'padding: 10px;'></div>
                `;
                listHtml += link;
            }

            counter += 1;
        })
        listHtml += `</div>`;

        terms.innerHTML = termsHtml;
        listTerms.innerHTML = listHtml;

        const replaceTerms = document.querySelector('#listOfTerms');
        const searchTerm = document.querySelector('#search-bar');

        searchTerm.addEventListener('submit', (e) =>
        {
            e.preventDefault();
            
            const search = searchTerm['search'].value;

            let test = 'abdominoplasty';
            console.log(test.includes(search.toString().toLowerCase()));

            db.collection('terms').get().then(snapshot =>
            {
                let counter = 1;
                let html = '';
                snapshot.docs.forEach(doc =>
                {
                    const information = doc.data();

                    if (information.term.toString().toLowerCase().includes(search.toString().toLowerCase()))
                    {
                        const td =
                        `
                            <a 
                            style = 'color: black; font-size: 18px; font-weight: 500;' href = '#${counter}'>${information.term}</a>
                            <div style = 'padding: 10px;'></div>
                        `;
                
                        console.log('test: ' + counter);
                        console.log(information.term.toString().toLowerCase());
                        console.log(search.toString().toLowerCase());
                        html += td;
                    }
                    counter += 1;
                })
                replaceTerms.innerHTML = html;
            })
        })
    })
}