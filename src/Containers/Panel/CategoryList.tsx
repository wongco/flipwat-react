import React, { Component } from 'react';

class CategoryList extends Component<CategoryListProps> {
  public handleClick = (evt: CategoryClickEvent): void => {
    const { id } = evt.target;
    this.props.navigateToCategory(id);
  };

  public render(): React.ReactNode {
    return (
      <div className="Panel-CategoryList" onClick={this.handleClick}>
        {this.props.categoryTitles.map(
          (category): React.ReactNode => {
            const { id, name } = category;
            return (
              <div className="Panel-CategoryList--Link" key={id} id={id}>
                {name}
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
  categoryTitles: Category[];
  navigateToCategory: (id: string) => void;
}

interface Category {
  name: string;
  id: string;
}

export default CategoryList;
