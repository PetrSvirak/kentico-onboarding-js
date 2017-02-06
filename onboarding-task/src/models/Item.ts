import { v4 as guid } from 'uuid';
import { Record } from 'immutable';

interface IItem {
  readonly id: string;
  readonly description: string;
  setId(id: string): IItem;
  setDescription(description: string): IItem;
}

const defaultItem: IItem = {
  id: '00000000-0000-0000-0000-000000000000',
  description: '',
  setId: () => this,
  setDescription: () => this,
};

class Item extends Record(defaultItem) implements IItem {
  readonly id: string;
  readonly description: string;

  static newItem(description: string): IItem {
    return new Item({ id: guid(), description });
  }

  setId(id: string): IItem {
    return new Item(this.set('id', id));
  }

  setDescription(description: string): IItem {
    return new Item(this.set('description', description));
  }

  private constructor(values: Object) {
    super(values);
  }
}

export default Item;
export { IItem };
