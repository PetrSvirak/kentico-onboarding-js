import * as React from 'react';
import Item from '../models/Item';

interface IDisplayItemProps extends JSX.IntrinsicAttributes {
  item: Item;
  index: number;
  onItemClick: Function;
}

const DisplayItem = ({
  item: { description },
  index,
  onItemClick,
}: IDisplayItemProps) => (
  <div onClick={() => onItemClick()}>
    {index}. {description}
  </div>
);

export default DisplayItem;
