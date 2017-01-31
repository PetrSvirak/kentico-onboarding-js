import { ITEM_ADD } from './actionTypes';
import action from './action';
import Item from '../models/Item.ts';

const addItem = description => action(
  ITEM_ADD,
  {
    item: Item.newItem(description),
  });

export default addItem;
