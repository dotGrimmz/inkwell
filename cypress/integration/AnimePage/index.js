import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import data from '../../fixtures/data.json'


const url = 'http://localhost:6006/iframe.html?id=anime-page-story--anime-page-template&args=backgroundColor:&viewMode=story';
const animeTitle = '[data-cy=animeTitle]';
const animeDescription = '[data-cy=animeDescription]';
const firstPageBtn = '.MuiPagination-ul > :nth-child(1)';
const lastBtn = '.MuiPagination-ul > :nth-child(7)';

console.log(data, 'data in cypress')

Given('User navigates to anime page url', () => {
    cy.visit(url);
    cy.get(animeTitle).should('have.length', 9);
    cy.get(animeDescription).should('have.length', 9);
    cy.get(firstPageBtn).find('button').should('be.disabled');
    cy.get(lastBtn).find('button').should('not.be.disabled');
})

When('User scrolls though the anime list', () => {
    data.Page.media.slice(0, 9).forEach((x, i) => {
        cy.get(animeTitle).eq(i).should('have.text', x.title.english)
    })

})


Then('User sees new list of anime displayed on the screen', () => {

})