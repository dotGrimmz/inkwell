import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


const url = 'http://localhost:6006/iframe.html?id=anime-page-story--anime-page-template&args=backgroundColor:&viewMode=story';
const animeTitle = '[data-cy=animeTitle]';
const animeDescription = '[data-cy=animeDescription]';
const firstPageBtn = '.MuiPagination-ul > :nth-child(1)';
const nextBtn = '.MuiPagination-ul > :nth-child(7)';
const pageTitle = '[data-cy=page-title]';


Given('User navigates to anime page url', () => {
    cy.visit(url);
    cy.get(pageTitle).should('have.text', 'Welcome to the Anime Page').and('be.visible')
});

When('User scrolls though the anime list', () => {
    cy.get(animeTitle).should('have.length', 9);
    cy.get(animeDescription).should('have.length', 9);
    cy.get(firstPageBtn).find('button').should('be.disabled');
    cy.get(nextBtn).find('button').should('not.be.disabled');
    cy.get(nextBtn).click()
});


Then('User sees new list of anime displayed on the screen', () => {
    cy.get(animeTitle).should('have.length', 9);
    cy.get(animeDescription).should('have.length', 9);
    cy.get(firstPageBtn).find('button').should('not.be.disabled');
    cy.get(nextBtn).find('button').should('not.be.disabled');
});