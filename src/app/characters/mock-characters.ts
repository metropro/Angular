import { CharacterInterface } from '../interfaces/character-interface';

export const CHARACTERS: CharacterInterface[] = [
    {
        id: 1, 
        name: 'MJ', 
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Michael_Jordan_crying.jpg',
        type: 'Hero', 
        abilities: ['Dunking', '6-Rings'], 
        description: 'The GOAT'
    },
    {
        id: 2, 
        name: 'Lebron James', 
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/160620165255-lebron-james-nba-crying-game-2-exlarge-169.jpg',
        type: 'Villian', 
        abilities: ['MVP'], 
        description: 'Not Mj'
    },
    {
        id: 3, 
        name: 'Kawhi Leonard', 
        image: 'https://media.giphy.com/media/LpLzSOir4rnghN6PhI/giphy.gif',
        type: 'Villian', 
        abilities: ['Nice Guy' ], 
        description: 'Only hope for the Raptors'
    },
    {
        id: 4, 
        name: 'Batman', 
        image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?itok=_Or1JrO2',
        type: 'Hero', 
        abilities: ['Money', 'Gadgets', 'Martial Arts'], 
        description: 'He is Batman.'
    },
    {
        id: 5, 
        name: 'Joker', 
        image: 'https://fsmedia.imgix.net/74/08/a7/f1/defa/49d7/99c8/f4703ec169b1/gallerymovies1920x1080killingjoke5796a8191423c456279010jpg.jpeg?rect=478%2C0%2C1442%2C1080&auto=format%2Ccompress&dpr=2&w=1200',
        type: 'Villian', 
        abilities: ['Instanity', 'Figting'], 
        description: 'Heath Ledger.'
    },
    {
        id: 6, 
        name: 'Naruto', 
        image: 'https://i.kym-cdn.com/entries/icons/original/000/015/163/narutoooh.jpg',
        type: 'Hero', 
        abilities: ['9 tails', 'Jutsu'], 
        description: 'Hidden Leaf Ninja'
    },
    {
        id: 7, 
        name: 'Sasuke', 
        image: 'https://i.ytimg.com/vi/19s0vIeJthA/maxresdefault.jpg',
        type: 'Villian', 
        abilities: ['Byakugan', 'Rinnegan'], 
        description: 'Itachi\'s younger brother.'
    }
 
];