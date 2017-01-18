import React, { Component, PropTypes } from 'react';
import DisplayItem from './DisplayItem';
import EditItem from './EditItem';

class ExistingItem extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      isEdited: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
      set: PropTypes.func.isRequired
    }),
    onItemDeleted: PropTypes.func.isRequired,
    onItemUpdated: PropTypes.func.isRequired
  };

  static toggleEdition(item) {
    return item.set('isEdited', !item.isEdited);
  }

  constructor(props) {
    super(props);

    this.itemChanged = this.itemChanged.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
  }

  updateDescription(description) {
    let changedItem = this.props.item.set('description', description);
    changedItem = ExistingItem.toggleEdition(changedItem);

    this.props.onItemUpdated(changedItem);
  }

  itemChanged(byButton, newDescription) {
    switch(byButton){
      case 'update':
        this.updateDescription(newDescription);
        break;
      case 'cancel':
        this.itemClicked();
        break;
      case 'delete':
          this.props.onItemDeleted(this.props.item.id);
        break;
      default:
        throw new Error('Operation "' + byButton + '" performed at item ' + this.props.index + ' is not known');
    }
  }

  itemClicked() {
    const changedItem = ExistingItem.toggleEdition(this.props.item);
    this.props.onItemUpdated(changedItem);
  }

  render() {
    if(this.props.item.isEdited)
      return (
        <EditItem
          index={this.props.index}
          onButtonClick={this.itemChanged}
          item={this.props.item}
        />
      );

    return (
      <DisplayItem
        index={this.props.index}
        onItemClick={this.itemClicked}
        item={this.props.item}
      />
    );
  }
}

export default ExistingItem;
