/// <reference types="cypress" />

describe('Rancid Tomatillos', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:3000');
  // .contains('header','Rancid Tomatillos')
  // });

  it('Should be go to home page and display the header', () => {
    cy.visit('http://localhost:3000')
      .contains('header','Rancid Tomatillos')
  });

  it('Should be able to display all movie cards on home page', () => {
    cy.visit('http://localhost:3000').contains('header','Rancid Tomatillos')
    cy.get('.moviesContainer').find('.card').should('have.length', '40')
  });

  it('Should be able to display a loading message if home page download speed is slow', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Loading...')
  });

  it('Should be able to display any movie\'s title and rating on the home page', () => {
    cy.visit('http://localhost:3000')
    cy.get('.moviesContainer > :nth-child(1)')
    cy.contains('Money Plane').should('be.visible')
    cy.contains('Average Rating: 6.9').should('be.visible')

    cy.visit('http://localhost:3000')
    cy.get('.moviesContainer > :nth-child(9)')
    cy.contains('The Owners').should('be.visible')
    cy.contains('Average Rating: 4.9').should('be.visible')
  });

  it('Should be able to display a movie\'s image on the home page', () => {
    // cy.get(':nth-child(1) > img')
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > .moviePicture')
      .should('be.visible')
      .should(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
      .should(($img) => {
        expect($img[0].naturalHeight).to.be.greaterThan(0)
      })
      // https://stackoverflow.com/questions/51246606/test-loading-of-image-in-cypress
  });


  //NEEDS TO BE UPDATED!!!!!
  it('Should be able to select a movie by title on the home page\'s dropdown', () => {
    cy.get('form').contains('Choose A Movie:')
    cy.get('form').contains('GO!')
    // cy.get('select').contains('Peninsula')
    // .click()
    // cy.get('form').should('have.value', 'Peninsula')
    // cy.get('[data-layer="Content"]').trigger('mousemove').click()
    // cy.get('select').trigger('mousemove').click()

    // https://stackoverflow.com/questions/48362422/select-dropdownlist-item-using-cypress
  });





  // Movie Display
  it('Should be able to show a loading message if second page download speed is slow', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Loading...')
  });

  it('Should be able to click a movie\'s image and see its details on the second page', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > a > .moviePicture').click()
    // cy.visit('http://localhost:3000/694919')
    cy.url().should('include', '/694919')
    cy.contains('Title: Money Plane')
    cy.contains('Average Rating: 6.875')
    cy.contains('Overview: A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
    cy.contains('Release Date: 2020-09-29')
    cy.contains('Runtime: 82 minutes')
    cy.contains('Tagline:')
    cy.contains('Genres: Action')
  });

  it('Should be able to view a movie\'s backdrop image', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > a > .moviePicture').click()
    cy.url().should('include', '/694919')
    cy.get('.app').should('have.css', 'background-image')
    // .should('include', '.jpg')
    cy.get('.app').find('img').should('be.visible')
  });
  https://stackoverflow.com/questions/64023960/cypress-how-can-i-check-if-the-background-changes-in-a-div

  it('Should be able to view a movie\'s small image on the second page', () => {
    cy.get('.moviePoster')
      .should('be.visible')
      .should(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
      .should(($img) => {
        expect($img[0].naturalHeight).to.be.greaterThan(0)
      })
  });
    
  it('Should show an arrow on the second page', () => {
    cy.get('input[type="image"]').should('be.visible')
  });

  it('Should be able to click the arrow on the second page and go to home page', () => {
    cy.get('input[type="image"]').click()
    // cy.url().should('include', '/')
    cy.contains('Rancid Tomatillos')
    cy.contains('Money Plane')
    cy.get('form').contains('Choose A Movie:')
    cy.get('form').contains('GO!')
  });

   it('Should be able to show a message when a 500 error occurs on the second page', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000')
    cy.contains("Oopsies! Something went wrong 🤡")
  });

  //test for a 404 error???




 


  // it('should be able to select the email and password inputs and fill them with the corresponding values', () => {
  //   cy.get('input[type="email"]')
  //     .type('leta@turing.io')
  //     .should('have.value', 'leta@turing.io')
  //     .get('input[type="password"]')
  //     .type('keane20')
  //     .should('have.value', 'keane20')

  //     // cy.get('input[type="email"]')
  //     // .type('travis@turing.io')
  //     // .should('have.value', 'travis@turing.io')
  //     // .get('input[type="password"]')
  //     // .type('keane20')
  //     // .should('have.value', 'keane20')
  // });

  // it('should display an error message when a user clicks the Submit button without filling both inputs', () => {
  //   cy.get('button').click()
  //   cy.get('p').contains('Please fill out both inputs')
  // });

  // it('should be able to fill out the email and password and click Submit, directing the user to a different page', () => {
  //   cy.intercept('POST', 'http://localhost:3001/api/v1/login', {
  //       statusCode: 201,
  //       body: {
  //         id: 2,
  //         image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
  //         name: "Leta Keane"
  //       }
  //     })
  //     .get('input[type="email"]').type('leta@turing.io')
  //     .get('input[type="password"]').type('keane20')
  //     .get('button').click()
  //     .url().should('include', '/dashboard')
  // });

  // it('should display an error message if I submit an incorrect email and password', () => {
  //   cy.intercept({
  //     method: 'POST',
  //     url: 'http://localhost:3001/api/v1/login'
  //   },
  //   {
  //     statusCode: 401,
  //     body: { 
  //       message: `Email and password do not match.  Please try again.` 
  //     }
  //   })
  //   .get('input[type="email"]')
  //   .type('leta@turing.io')
  //   .get('input[type="password"]')
  //   .type('YOLO')
  //   .get('button').click()
  //   .get('p').should('contain', 'Email and password do not match.  Please try again.')
  // });
});