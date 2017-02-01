import * as React from 'react';
import Item from '../models/Item';

interface IEditItemProps {
  index: number;
  item: Item;
  isStorable: boolean;
  isOriginal: boolean;
  description: string;
  onDescriptionChange(description: string, isOriginal: boolean): void;
  onUpdateButtonClick(description: string): void;
  onCancelButtonClick(): void;
  onDeleteButtonClick(): void;
  onOriginButtonClick(): void;
}

class EditItem extends React.Component<IEditItemProps, undefined> {
  constructor(props: IEditItemProps) {
    super(props);

    this._onDescriptionChange = this._onDescriptionChange.bind(this);
  }

  _onUpdateButtonClick = () => this.props.onUpdateButtonClick(this.props.description);

  _onDescriptionChange(event: React.SyntheticEvent<HTMLInputElement>) {
    const newDescription = event.currentTarget.value as string;
    const isOriginal = this.props.isOriginal && this.props.description === newDescription;
    this.props.onDescriptionChange(newDescription, isOriginal);
  }

  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon">
          {this.props.index}.
        </span>
        <input
          className="form-control"
          type="text"
          placeholder={`Description of item #${this.props.index} in the list…`}
          value={this.props.description}
          onChange={this._onDescriptionChange}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-primary"
            type="button"
            title="Update"
            onClick={this._onUpdateButtonClick}
            disabled={!this.props.isStorable}
          >
            <span className="glyphicon glyphicon-pencil" />
          </button>
          <button
            className="btn btn-warning"
            type="button"
            title="Original"
            onClick={this.props.onOriginButtonClick}
            disabled={this.props.isOriginal}
          >
            <span className="glyphicon glyphicon-repeat" />
          </button>
          <button
            className="btn btn-default"
            type="button"
            title="Cancel"
            onClick={this.props.onCancelButtonClick}
          >
            <span className="glyphicon glyphicon-remove" />
          </button>
          <button
            className="btn btn-danger"
            type="button"
            title="Delete"
            onClick={this.props.onDeleteButtonClick}
          >
            <span className="glyphicon glyphicon-trash" />
          </button>
        </span>
      </div>
    );
  }
}

export default EditItem;
export { IEditItemProps };
