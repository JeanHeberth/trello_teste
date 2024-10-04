import '@shelex/cypress-allure-plugin';

let boardId;
let cardId;
let listId;

const listName = 'Lista Serasa';
const boardName = 'Quadro Serasa';
const cardName = 'Card Serasa';
const apiKey = "c3f6e8563d3950aa5adef74b3828ebfa";
const token = "ATTAa1bcd847e7b62f64695857e7e4d8d005ac3c0086cd56219a14d56d3973f9f83f0A2C5CD1";

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
            listId = response.body.id; // Armazenar ID da lista
        });
    });


    it('Deve criar um card na lista', () => {
        cy.request({
            method: 'POST',
            url: `cards?key=${apiKey}&token=${token}`,
            body: {
                name: cardName,
                idList: listId, // Usar idList, não idBoard
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
