/// <reference types="cypress" />


describe('Find London current weather', () => {
    describe('Step 1', () => {
        it('Visit weather app and checks that user has to sign in', () => {
            cy.visit('http://localhost:3000');
            cy.get('.userNameInput').should('exist');
            cy.get('.passwordInput').should('exist');
        })
    })
    describe('Step 2', () => {
        it('Login to app', () => {
            cy.get('.userNameInput').should('be.empty');
            cy.get('.userNameInput').type('user');
            cy.get('.passwordInput').should('be.empty');
            cy.get('.passwordInput').type('password');
            cy.get('.signInBtn').click();
            cy.get('.searchPlace').should('exist');
            cy.get('.searchPlace').should('be.visible');
        })
    })
    describe('Step 3', () => {
        it('User type in search input `Lon`.', () => {
            cy.get('.searchPlace').should('have.value', 'Prague');
            cy.get('.searchPlace').clear();
            cy.get('.searchPlace').type('Lon');
            cy.get('.placePredictions').should('exist');
            cy.get('.place').should('exist');

        })
    })
    describe('Step 4', () => {
        it('User choose to autocomplete search input with search for London in United Kingdom and confirm choice by clicking on button `Find location`.', () => {
            cy.get('.placePredictions').should('exist');
            cy.get('.place').contains('London, UK').should('exist');
            cy.get('.place').contains('London, UK').click();
            cy.get('.searchPlace').should('have.value', 'London, UK');
            cy.get('.searchBtn').should('exist');
            cy.get('.searchBtn').click();
            cy.get('.LocationBtn').should('exist').contains('My Location');
            cy.get('.weather').should('not.be.empty');
            cy.get('.city-name').contains('London').should('exist');
            cy.get('sup').contains('GB').should('exist');
        })
    })
    describe('Step 5', () => {
        it('User sign out from app.', () => {
            cy.contains('Sign Out').should('exist');
            cy.contains('Sign Out').click();
            cy.get('.userNameInput').should('exist');
            cy.get('.passwordInput').should('exist');
        })
    })
})
