describe('Rancid Tomatillos home page', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .visit('http://localhost:3000')
      .contains('header','Rancid Tomatillos')
  });

  it('Should be able to display all movie cards', () => {
    cy.get('.moviesContainer').find('.card').should('have.length', '40')
  });

  it('Should be able to display a loading message if download speed is slow', () => {
    cy.contains('Loading...')
  });

  it('Should be able to display any movie\'s title and rating', () => {
    cy.get('.moviesContainer > :nth-child(1)')
    cy.contains('Money Plane').should('be.visible')
    cy.contains('Average Rating: 6.9').should('be.visible')

    cy.get('.moviesContainer > :nth-child(9)')
    cy.contains('The Owners').should('be.visible')
    cy.contains('Average Rating: 4.9').should('be.visible')
  });

  it('Should be able to display a movie\'s image', () => {
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
  });

  it('Should be able to select a movie by title in the dropdown and be directed to that movie\'s details page', () => {
    cy.get('form').find('select').select('Money Plane').should('have.value', '694919')
    cy.get('button').click()
    cy.url().should('include', '/694919')
  });

  it('Should be able to display a message when a 500 error occurs', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000')
    cy.contains("Oopsies! Something went wrong 🤡")
  });

  it('Should be able to display a message when a 404 error occurs', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000')
    cy.contains("Oopsies! Something went wrong 🤡")
  });

  it('Should be able to click an image and update the url', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > a > .moviePicture').click()
    cy.url().should('include', '/694919')
  });

});