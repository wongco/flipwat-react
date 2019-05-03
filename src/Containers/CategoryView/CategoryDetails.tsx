import React, { Component } from 'react';

class CategoryDetails extends Component<CategoryDetailsProps> {
  public render(): React.ReactNode {
    const { name, cards, updatedAt } = this.props.category;
    return (
      <div>
        <button onClick={this.props.playCategory}>Play Category</button>
        <button onClick={this.props.playRandomCategory}>Random Question</button>
        <div>Cateogry: {name}</div>
        <div>Total Cards: {cards.length}</div>
        <div>Last updated: {updatedAt}</div>
      </div>
    );
  }
}

interface CategoryDetailsProps {
  category: {
    id: string;
    name: string;
    cards: Card[];
    createdAt: Date;
    updatedAt: Date;
  };
  playCategory: () => void;
  playRandomCategory: () => void;
}

interface Card {
  id: string;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

export default CategoryDetails;
