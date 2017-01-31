import * as Immutable from 'immutable';
import Item from '../models/Item.ts';

const getStaticItems = () => [
  Item.newItem('Make a coffee'),
  Item.newItem('Make a coffee great again'),
  Item.newItem('We want you, coffee!'),
  Item.newItem('Coffee can do it \uD83D\uDCAA'),
];

const getStaticItemsDictionary = () => getStaticItems()
  .map(item => [item.id, item]);

const seedStore = () => {
  return {
    items: new Immutable.OrderedMap(getStaticItemsDictionary()),
    editedItems: undefined,
  };
};

export { seedStore };
