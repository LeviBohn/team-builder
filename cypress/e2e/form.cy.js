//Get the Name input and type a name in it.
//Get the Email input and type an email address in it
//Get the password input and type a password in it
describe('Get Inputs and type something in each', function() {
    beforeEach(() => {
        // Each test needs fresh state
        // Tests shouldn't rely on other tests
        // Every test should work in isolation!

        cy.visit("http://localhost:3000/");
    })

// Helpers (id GETTERS)
const nameInput = () => cy.get("input[name=name]");
const emailInput = () => cy.get("input[name=email]");
const roleInput = () => cy.get("input[name=role]");

    it('can type in the inputs', function() {
        nameInput()
            .should('have.value', '')
            .type("Levi Bohn")
            .should("have.value", "Levi Bohn");

        emailInput()
            .should('have.value', '')
            .type("Levi@email.com")
            .should("have.value", "Levi@email.com");

        roleInput()
            .should('have.value', '')
            .type("student")
            .should("have.value", "student");
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