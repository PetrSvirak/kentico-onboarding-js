import * as immutable from 'immutable';
import reducersTests from './reducersTests';
import itemsReducer from '../../src/reducers/items';
import addItem from '../../src/actions/addItem';
import deleteItem from '../../src/actions/deleteItem';
import updateItemDescription from '../../src/actions/updateItemDescription';
import updateAllItemsDescription from '../../src/actions/updateAllItemsDescription';
import Item, { IItem } from '../../src/models/Item';
import EditedItem from '../../src/models/EditedItem';

describe('items', reducersTests(itemsReducer, () => {
  it('add action adds new item to state', () => {
    const expectedDescription = 'test description';
    const expectedItem = Item.newItem('test description');

    const action = addItem(expectedDescription);
    const actualState = itemsReducer(undefined, action);

    expect(actualState).toBeImmutableOrderedMap();
    expect(actualState.count()).toBe(1);

    // this hack is not nice, however, it tests both that item is immutable and all its properties (other than random id)
    const actualItem = actualState.first() as IItem;
    const exptedItemWithActualId = expectedItem.setId(actualItem.id);
    expect(actualItem).toEqualImmutable(exptedItemWithActualId);
    expect(actualItem.id).not.toBeFalsy();
  });

  it('delete action removes item from state', () => {
    const item = Item.newItem('test description');
    const currentState = immutable
      .OrderedMap<string, IItem>()
      .set(item.id, item);

    const action = deleteItem(item.id);
    const actualState = itemsReducer(currentState, action);

    expect(actualState).toEqualImmutable(immutable.OrderedMap<string, Item>());
  });

  it('update description action updates existing item in state', () => {
    const item = Item.newItem('test description');
    const expectedDescription = 'new description';
    const expectedItem = item.setDescription(expectedDescription) as IItem;
    const expectedState = immutable
      .OrderedMap<string, IItem>()
      .set(expectedItem.id, expectedItem);
    const currentState = immutable
      .OrderedMap<string, IItem>()
      .set(item.id, item);

    const action = updateItemDescription(item.id, expectedDescription);
    const actualState = itemsReducer(currentState, action) as immutable.Map<string, Item>;

    expect(actualState).toEqualImmutable(expectedState);

    expect(actualState.get(item.id).description).toBe(expectedDescription);
  });

  it('update description action does not modify state for non-existing item', () => {
    const item = Item.newItem('test description');
    const expectedDescription = 'new description';
    const currentState = immutable.OrderedMap<string, Item>();

    const action = updateItemDescription(item.id, expectedDescription);
    const actualState = itemsReducer(currentState, action);

    expect(actualState).toEqualImmutable(immutable.OrderedMap<string, Item>());
  });

  it('update all description action does modify all edited items', () => {
    const item1 = Item.newItem('test description 1');
    const item2 = Item.newItem('test description 2');
    const item3 = Item.newItem('test description 3');
    const updatedItem1 = item1.setDescription('new') as IItem;
    const updatedItem2 = item2.setDescription('newer') as IItem;
    const editedItems = immutable.Map<string, Item>({
      [item2.id]: new EditedItem({ description: updatedItem2.description, isOriginal: false }),
      [item1.id]: new EditedItem({ description: updatedItem1.description, isOriginal: false }),
    });
    const action = updateAllItemsDescription(editedItems);
    const currentState = immutable.OrderedMap<string, IItem>({
      [item1.id]: item1,
      [item2.id]: item2,
      [item3.id]: item3,
    });
    const expectedState = immutable.OrderedMap<string, IItem>({
      [item1.id]: updatedItem1,
      [item2.id]: updatedItem2,
      [item3.id]: item3,
    });

    const actualState = itemsReducer(currentState, action);

    expect(actualState).toEqualImmutable(expectedState);
  });
}));
