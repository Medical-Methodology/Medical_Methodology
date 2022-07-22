const numberEnrolled = document.querySelector('#number-enrolled');

auth.onAuthStateChanged(user =>
{
    if (user)
    {
        db.collection('users').get().then(snapshot =>
        {
            var numberDocs = 0;

            snapshot.docs.forEach(doc =>
            {
                numberDocs++;
                let html = 
                    `
                        <h2>Number Enrolled: ${numberDocs}</h2>
                    `;

                numberEnrolled.innerHTML = html;
            })
        })
        
    }
})