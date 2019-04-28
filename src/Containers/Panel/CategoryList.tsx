import React, { Component } from 'react';

class CategoryList extends Component<CategoryListProps> {
  public render(): React.ReactNode {
    return (
      <div>
        <div>Categories go here!</div>
        <div>
          {this.props.categories.map(
            (category): React.ReactNode => (
              <div key={category.id}>{category.name}</div>
            ),
          )}
        </div>
      </div>
    );
  }
}

interface CategoryListProps {
  categories: Category[];
}

interface Category {
  name: string;
  id: string;
}

export default CategoryList;
