import React, { Component } from 'react';

class CategoryList extends Component<CategoryListProps> {
  public render(): React.ReactNode {
    return (
      <div>
        <div>Categories go here!</div>
        <div>
          {this.props.categories.map(
            (category, idx): React.ReactNode => (
              <div key={idx}>{category.name}</div>
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
}

export default CategoryList;
