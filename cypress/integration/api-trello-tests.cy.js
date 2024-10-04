import '@shelex/cypress-allure-plugin';

let boardId;
let cardId;
let listId;

const listName = Cypress.env('listName');
const boardName = Cypress.env('boardName');
const cardName = Cypress.env('cardName');
const apiKey = Cypress.env('apiKey');
const token = Cypress.env('token');

describe('Trello API Tests', () => {

    it('Cadastrar um board', () => {
        cy.request({
            method: 'POST',
            url: `/boards/?name=${boardName}&key=${apiKey}&token=${token}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(boardName);
            boardId = response.body.id;
        });
    });

    it('Deve criar uma lista no board', () => {
        cy.request({
            method: 'POST',
            url: `lists?name=${listName}&idBoard=${boardId}&key=${apiKey}&token=${token}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(listName);
            listId = response.body.id;
        });
    });


    it('Deve criar um card na lista', () => {
        cy.request({
            method: 'POST',
            url: `cards?key=${apiKey}&token=${token}`,
            body: {
                name: cardName,
                idList: listId,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            cardId = response.body.id;
        });
    });

    it('Excluir um card', () => {
        cy.request({
            method: 'DELETE',
            url: `cards/${cardId}?key=${apiKey}&token=${token}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Excluir um board', () => {
        cy.request({
            method: 'DELETE',
            url: `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${token}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
