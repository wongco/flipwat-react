import React, { Component } from 'react';

class CategoryDetails extends Component<CategoryDetailsProps> {
  public render(): React.ReactNode {
    return <div>Category {this.props.id} Info</div>;
  }
}

interface CategoryDetailsProps {
  id: string;
  name: string;
  cards: Card[];
  createdAt: Date;
  updatedAt: Date;
}

interface Card {
  id: string;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

export default CategoryDetails;
