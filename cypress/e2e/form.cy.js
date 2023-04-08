//Get the Name input and type a name in it.
describe('Get Name', function() {
    it('Get the Name input and type a name in it', function() {
        //Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
        cy.get('input[name=Name]').should('contain', 'Levi')
    })
})

//Get the Email input and type an email address in it
describe('Get Email', function() {
    it('Get the Email input and type an email address in it', function() {
        cy.get('input[email=email]').should('contain', 'Levi@email.com')
    })
})

//Get the password input and type a password in it
describe('Get Password', function() {
    it('Get the password input and type a password in it', function() {
        
    })
})

//Set up a test that will check to see if a user can check the terms of service box
describe('Terms can be Checked', function() {
    it('check to see if a user can check the terms of service box', function() {
        
    })
})

//Check to see if a user can submit the form data
describe('Submit Data', function() {
    it('Check to see if a user can submit the form data', function() {
        
    })
})

//Check for form validation if an input is left empty
describe('Left Empty', function() {
    it('Check for form validation if an input is left empty', function() {
        
    })
})