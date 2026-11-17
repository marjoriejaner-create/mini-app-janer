export type item = {
id: string;
name: string;
tag: string; // a short label: a price, a date, or a category
emoji: string;
description: string;
};
export const ITEMS: Item[] = [
{ id: '1', name: 'milktea', tag: '$75', emoji: '
🧋
', description: 'Cold 
brew with milk and brown sugar.' },
{ id: '2', name: 'Matcha latte', tag: '$85', emoji: '☕', description: 
'Thick matcha latte, served cold.' }
{ id: '3', name: 'Ube Cheese Pandesal', tag: '₱25', emoji: '
🍞
', 
description: 'Soft bread with ube and cheese filling.' },
{ id: '4', name: 'Ham and Egg Sandwich', tag: '₱75', emoji: '
🥪
', 
description: 'Toasted bread, ham, egg and lettuce.' },
{ id: '5', name: 'Banana Cake', tag: '₱60', emoji: '
🍰
', description: 
'Moist banana cake, one slice.' },
'Fresh calamansi with honey, served cold.' },
];