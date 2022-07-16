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
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
      .should('have.attr', 'alt', 'Money Plane poster')
      // https://stackoverflow.com/questions/51246606/test-loading-of-image-in-cypress
  });

// Drop Down

  it('Should be able to select a movie by title on the home page\'s dropdown and be directed to the movie details page', () => {
    cy.visit('http://localhost:3000')
    cy.get('form').find('select').select('Money Plane').should('have.value', '694919')
    cy.get('button').click()
    cy.url().should('include', '/694919')
  });

  // Movie Display
  it('Should be able to display a loading message if second page download speed is slow', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Loading...')
  });

  it('Should be able to click an image on home page and update the url', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > a > .moviePicture').click()
    cy.url().should('include', '/694919')
  });

  it('Should be able to display movie details when movie image is clicked on the second page', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > a > .moviePicture').click()
    cy.url().should('include', '/694919')
    cy.contains('Title: Money Plane')
    cy.contains('Average Rating: 6.875')
    cy.contains('Overview: A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
    cy.contains('Release Date: 2020-09-29')
    cy.contains('Runtime: 82 minutes')
    cy.contains('Tagline:')
    cy.contains('Genres: Action')
  });

  it('Should be able to display a movie\'s backdrop image', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > a > .moviePicture').click()
    cy.url().should('include', '/694919')
    cy.get('.app').should('have.css', 'background-image')
  });
  https://stackoverflow.com/questions/64023960/cypress-how-can-i-check-if-the-background-changes-in-a-div

  it('Should be able to display a movie\'s poster image on the second page', () => {
    cy.get('.moviePoster')
      .should('be.visible')
      .should(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
      .should(($img) => {
        expect($img[0].naturalHeight).to.be.greaterThan(0)
      })
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
      .should('have.attr', 'alt', 'Money Plane poster')
  });
    
  it('Should display an arrow on the second page', () => {
    cy.get('.arrow').should('be.visible')
    .should('have.attr', 'alt', 'arrow icon')
  });

  it('Should be able to click the arrow on the second page and go to home page', () => {
    cy.get('.arrow').click()
    cy.url().should('eq', 'http://localhost:3000/')
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

  it('Should be able to show a message when a 404 error occurs on the second page', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000')
    cy.contains("Oopsies! Something went wrong 🤡")
  });
});