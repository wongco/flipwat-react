import React, { Component } from 'react';

class CategoryView extends Component<CategoryViewProps> {
  public componentDidMount(): void {
    // check if categoryDetails for id does not exist,
    //    hit API and request CategoryInfo
  }

  public render(): React.ReactNode {
    return <div>Category {this.props.id} Info</div>;
  }
}

// id, name, cards, createdAt, updatedAt
interface CategoryViewProps {
  id: string;
}

export default CategoryView;
