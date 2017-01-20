import * as React from 'react';

interface ITsComponentProps {
  name: string;
}

class TsComponent extends React.Component<ITsComponentProps, undefined> {
  render() {
    return (
      <h1 className="h1 text-danger text-center">
        Hello from <b>{this.props.name}</b> TypeScript component.
      </h1>
    );
  }
}

export default TsComponent;
