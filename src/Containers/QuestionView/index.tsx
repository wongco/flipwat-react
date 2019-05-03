import React, { Component } from 'react';

class QuestionView extends Component<QuestionViewProps> {
  public handleNextCard = (): void => {
    this.props.changeCard(true);
  };

  public handlePrevCard = (): void => {
    this.props.changeCard(false);
  };

  public render(): React.ReactNode {
    const { categoryName, card } = this.props;
    return (
      <div>
        <button onClick={this.handlePrevCard}>Prev Card</button>
        <button onClick={this.handleNextCard}>Next Card</button>
        <h1>Category: {categoryName}</h1>
        <p>Question: {card.question}</p>
        <p>Answer: {card.answer}</p>
      </div>
    );
  }
}

interface QuestionViewProps {
  categoryName: string;
  card: {
    id: string;
    question: string;
    answer: string;
    createdAt: Date;
    updatedAt: Date;
  };
  changeCard: (goUp: boolean) => void;
}

export default QuestionView;
