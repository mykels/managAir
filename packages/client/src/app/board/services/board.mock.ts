import { User } from "../../user/types/user";

export const micha: User = {id: '666', name: 'Micha Sherman', nick: 'mykels'};

const users = [
    micha,
];

const comments = [
    {id: '397', text: 'This is a comment'},
    {id: '598', text: 'This is another comment'},
];

const cards = [
    {id: '444', title: 'Add ng@rx', comments: comments},
    {id: '555', title: 'Add GraphQL', comments: []},
];

const decks = [
    {id: '456', name: 'TODO', cards: cards},
    {id: '786', name: 'DOING', cards: cards},
    {id: '786', name: 'DONE', cards: cards},
];

export const boards = [
    {id: '123', name: 'MyBoard', decks: decks, users: users},
    {id: '234', name: 'Schnider', decks: decks, users: users},
];
