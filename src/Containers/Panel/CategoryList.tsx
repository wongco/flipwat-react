import React, { Component } from 'react';

class CategoryList extends Component<CategoryListProps> {
  public handleClick = (evt: CategoryClickEvent): void => {
    const { id } = evt.target;
    this.props.getCategory(id);
  };

  public render(): React.ReactNode {
    return (
      <div className="Panel-CategoryList" onClick={this.handleClick}>
        {this.props.categories.map(
          (category): React.ReactNode => {
            const { id } = category;
            return (
              <div className="Panel-CategoryList--Link" key={id} id={id}>
                {category.name}
              </div>
            );
          },
        )}
      </div>
    );
  }
}

interface CategoryClickEvent
  extends React.MouseEvent<HTMLDivElement, MouseEvent> {
  target: CategoryClickEventTarget;
}

interface CategoryClickEventTarget extends EventTarget {
  id: string;
}

interface CategoryListProps {
  categories: Category[];
  getCategory: (id: string) => void;
}

interface Category {
  name: string;
  id: string;
}

export default CategoryList;
