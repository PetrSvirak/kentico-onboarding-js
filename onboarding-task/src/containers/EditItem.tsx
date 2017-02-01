import * as ReactRedux from 'react-redux';
import EditItemComponent, { IEditItemProps } from '../components/EditItem';
import storeEditedItemDescriptionAction from '../actions/storeEditedItemDescription';
import deleteItemAction from '../actions/deleteItem';
import updateItemDescriptionAction from '../actions/updateItemDescription';
import cancelItemEditionAction from '../actions/cancelItemEdition';
import { isNotEmpty } from '../utils/text';


const mapStateToProps = (state: any, { item: { id } }: IEditItemProps) => {
  const editedItem = state.editedItems.get(id);

  return {
    description: editedItem.description,
    isStorable: isNotEmpty(editedItem.description) && !editedItem.isOriginal,
    isOriginal: editedItem.isOriginal,
  };
};

const mapDispatchToProps = (dispatch: Function, { item: { id, description: originalDescription } }: IEditItemProps) => ({
  onDescriptionChange: (newDescription: string, isOriginal: boolean) => dispatch(storeEditedItemDescriptionAction(id, newDescription, isOriginal)),
  onUpdateButtonClick: (newDescription: string) => dispatch(updateItemDescriptionAction(id, newDescription)),
  onCancelButtonClick: () => dispatch(cancelItemEditionAction(id)),
  onDeleteButtonClick: () => dispatch(deleteItemAction(id)),
  onOriginButtonClick: () => dispatch(storeEditedItemDescriptionAction(id, originalDescription, true)),
});

const EditItem = ReactRedux.connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(EditItemComponent);

export default EditItem;
