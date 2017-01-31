import * as React from 'react';
import { isNotEmpty } from '../utils/text';

interface INewItemProps {
  onSubmit(description: string): void;
}

interface NewItemState {
  description: string;
}

class NewItem extends React.Component<INewItemProps, NewItemState> {
  constructor(props: INewItemProps) {
    super(props);

    this.state = { description: '' };

    this._onDescriptionChanged = this._onDescriptionChanged.bind(this);
    this._onAddClicked = this._onAddClicked.bind(this);
  }

  _onDescriptionChanged(event: React.SyntheticEvent<HTMLInputElement>) {
    const newDescription = event.currentTarget.value as string;
    this.setState({ description: newDescription });
  }

  _onAddClicked() {
    this.props.onSubmit(this.state.description);
    this.setState({ description: '' });
  }

  render() {
    return (
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="New item…"
          value={this.state.description}
          onChange={this._onDescriptionChanged}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-success"
            type="button"
            title="Add"
            onClick={this._onAddClicked}
            disabled={!isNotEmpty(this.state.description)}
          >
            <span className="glyphicon glyphicon-plus" />
          </button>
        </span>
      </div>
    );
  }
}

export default NewItem;
export { INewItemProps };
