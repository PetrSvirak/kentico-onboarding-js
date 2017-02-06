import { v4 as guid } from 'uuid';
import Item from '../../src/models/Item.ts';
import immutableTests from '../immutableTests';

describe('items', immutableTests(() => {
  it('newItem always provides different ID', () => {
    const description = 'same description for both';
    const item1 = Item.newItem(description);
    const item2 = Item.newItem(description);

    expect(item1.id).not.toEqual('00000000-0000-0000-0000-000000000000');
    expect(item1.id).not.toEqual(item2.id);
    expect(item1).not.toEqualImmutable(item2);
  });

  it('setDescription does not change reference for same value', () => {
    const description = 'same description';
    const anItem = Item.newItem(description);
    const derivedItem = anItem.setDescription(description);

    expect(derivedItem).toBe(anItem);
    expect(derivedItem).toEqualImmutable(anItem);
  });

  it('setDescription only changes description', () => {
    const newDescription = 'new description';

    const originalItem = Item.newItem('old description');
    const derivedItem = originalItem.setId(newDescription);
    const anotherDerivedItem = originalItem.setId(newDescription);

    expect(derivedItem).not.toBe(originalItem);
    expect(anotherDerivedItem).not.toBe(derivedItem);
    expect(derivedItem).toEqualImmutable(anotherDerivedItem);
  });

  it('setId only changes ID', () => {
    const anItem = Item.newItem('some description');
    const derivedItem = anItem.setId(anItem.id);

    expect(derivedItem).toBe(anItem);
    expect(derivedItem).toEqualImmutable(anItem);
  });

  it('setId only changes ID', () => {
    const otherId = guid();

    const anItem = Item.newItem('some description');
    const derivedItem = anItem.setId(otherId);
    const anotherDerivedItem = anItem.setId(otherId);

    expect(derivedItem).not.toBe(anItem);
    expect(anotherDerivedItem).not.toBe(derivedItem);
    expect(derivedItem).toEqualImmutable(anotherDerivedItem);
  });
}));
