import * as React from 'react';

interface ITsComponentProps {
  name: string;
}

class TsComponent extends React.Component<ITsComponentProps, undefined> {
  render() {
    return (
      <div className="h2 text-danger text-center" title="https://lingojam.com/FancyTextGenerator">
        Ⓗⓔⓛⓛⓞ ⓕⓡⓞⓜ <b>{this.props.name}</b> ⓒⓞⓜⓟⓞⓝⓔⓝⓣ
      </div>
    );
  }
}

export default TsComponent;
