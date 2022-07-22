const numberEnrolled = document.querySelector('#number-enrolled');
const teamSize = document.querySelector('#team-size');
const numberSupport = document.querySelector('#number-support');
const numberQuestions = document.querySelector('#number-questions');
const numberInquiries = document.querySelector('#number-inquiries');
const logout = document.querySelector('#logout-button');

auth.onAuthStateChanged(user =>
{
    if (user)
    {
        db.collection('statistics').doc('enrolled').get().then(snapshot =>
        {
            let html = 
            `
                <h2>Number Enrolled: ${snapshot.data().number}</h2>
            `;

            numberEnrolled.innerHTML = html;
        })

        db.collection('statistics').doc('team').get().then(snapshot =>
        {
            let html =
            `
                <h2>Team Size: ${snapshot.data().number}</h2>
            `;

            teamSize.innerHTML = html;
        })

        db.collection('statistics').doc('support').get().then(snapshot =>
        {
            let html =
            `
                <h2>Number: ${snapshot.data().number}</h2>
            `;

            numberSupport.innerHTML = html;
        })
        
        db.collection('statistics').doc('questions').get().then(snapshot =>
        {
            let html =
            `
                <h2>Number: ${snapshot.data().number}</h2>
            `;

            numberQuestions.innerHTML = html;
        })

        db.collection('statistics').doc('team-inquiries').get().then(snapshot =>
        {
            let html =
            `
                <h2>Number: ${snapshot.data().number}</h2>
            `;

            numberInquiries.innerHTML = html;
        })
    }
    else
    {
        location.href = 'login.html';
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