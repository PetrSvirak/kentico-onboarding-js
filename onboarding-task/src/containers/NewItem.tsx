import * as ReactRedux from 'react-redux';
import NewItemComponent, { INewItemProps } from '../components/NewItem';
import addItemAction from '../actions/addItem';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSubmit: (description: string) => dispatch(addItemAction(description)),
  } as INewItemProps;
};

const NewItem = ReactRedux.connect<any, INewItemProps, undefined>(
  undefined as ReactRedux.FuncOrSelf<any>,
  mapDispatchToProps,
)(NewItemComponent);

export default NewItem;
