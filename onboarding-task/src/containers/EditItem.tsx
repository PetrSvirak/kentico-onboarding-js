import * as ReactRedux from 'react-redux';
import EditItemComponent, { IEditItemProps } from '../components/EditItem';
import * as EditItemMap from './maps/EditItem';

const EditItem = ReactRedux.connect<EditItemMap.IStateProps, EditItemMap.IDispatchProps, IEditItemProps>(
  EditItemMap.mapStateToProps,
  EditItemMap.mapDispatchToProps,
)(EditItemComponent);

export default EditItem;
