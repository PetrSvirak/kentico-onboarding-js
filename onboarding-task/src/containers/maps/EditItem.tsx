import { IEditItemProps } from '../../components/EditItem';
import storeEditedItemDescriptionAction from '../../actions/storeEditedItemDescription';
import deleteItemAction from '../../actions/deleteItem';
import updateItemDescriptionAction from '../../actions/updateItemDescription';
import cancelItemEditionAction from '../../actions/cancelItemEdition';
import { isNotEmpty } from '../../utils/text';

interface IStateProps {
  isStorable: boolean;
  isOriginal: boolean;
  description: string;
}

interface IDispatchProps {
  onDescriptionChange(description: string, isOriginal: boolean): void;
  onUpdateButtonClick(description: string): void;
  onCancelButtonClick(): void;
  onDeleteButtonClick(): void;
  onOriginButtonClick(): void;
}


const mapStateToProps = (state: any, { item: { id } }: IEditItemProps) : IStateProps => {
  const editedItem = state.editedItems.get(id);

  return {
    description: editedItem.description as string,
    isStorable: isNotEmpty(editedItem.description) && !editedItem.isOriginal as boolean,
    isOriginal: editedItem.isOriginal as boolean,
  };
};

const mapDispatchToProps = (dispatch: Function, { item: { id, description: originalDescription } }: IEditItemProps): IDispatchProps => ({
  onDescriptionChange: (newDescription: string, isOriginal: boolean) => dispatch(storeEditedItemDescriptionAction(id, newDescription, isOriginal)),
  onUpdateButtonClick: (newDescription: string) => dispatch(updateItemDescriptionAction(id, newDescription)),
  onCancelButtonClick: () => dispatch(cancelItemEditionAction(id)),
  onDeleteButtonClick: () => dispatch(deleteItemAction(id)),
  onOriginButtonClick: () => dispatch(storeEditedItemDescriptionAction(id, originalDescription, true)),
});

export { IStateProps, IDispatchProps, mapStateToProps, mapDispatchToProps };
