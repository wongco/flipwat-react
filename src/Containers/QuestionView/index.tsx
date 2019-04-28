import React, { Component } from 'react';

class QuestionView extends Component<QuestionViewProps> {
  public render(): React.ReactNode {
    const { id, cardId } = this.props.match.params;
    return (
      <div>
        <div>Category Number ID: {id}</div>
        <div>CardID: {cardId}</div>
      </div>
    );
  }
}

interface QuestionViewProps {
  match: {
    params: {
      id: string;
      cardId: string;
    };
  };
}

export default QuestionView;
