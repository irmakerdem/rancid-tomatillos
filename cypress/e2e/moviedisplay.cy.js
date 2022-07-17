describe('Movie display page', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919')
      .visit('http://localhost:3000/694919')
      .contains('header','Rancid Tomatillos')
  });

  it('Should be able to display a loading message if download speed is slow', () => {
    cy.contains('Loading...')
  });

  it('Should be able to display a movie\'s details', () => {
    cy.contains('Title: Money Plane')
    cy.contains('Average Rating: 6.9')
    cy.contains('Overview: A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
    cy.contains('Release Date: 2020-09-29')
    cy.contains('Runtime: 82 minutes')
    cy.contains('Tagline:')
    cy.contains('Genres: Action')
  });

  it('Should be able to display a movie\'s backdrop image', () => {
    cy.get('.app').should('have.css', 'background-image')
  });

  it('Should be able to display a movie\'s poster image', () => {
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
    
  it('Should display an arrow ', () => {
    cy.get('.arrow').should('be.visible')
    .should('have.attr', 'alt', 'arrow icon')
  });

  it('Should be able to click the arrow and go back to home page', () => {
    cy.get('.arrow').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('form').contains('Choose A Movie:')
    cy.get('form').contains('GO!')
  });

  it('Should be able to show a message when a 500 error occurs', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/694919')
    cy.contains("Oopsies! Something went wrong 🤡")
  });

  it('Should be able to show a message when a 404 error occurs', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/694919')
    cy.contains("Oopsies! Something went wrong 🤡")
  });

});