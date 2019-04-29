import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Title from './Title';
import Wrapper from './Wrapper';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCategoryNames } from '../../Actions/actions';

class Panel extends Component<PanelProps> {
  public async componentDidMount(): Promise<void> {
    if (this.props.categoryTitles.length === 0) {
      this.props.loadCategoryNames();
    }
  }

  public navigateToCategory = (id: string): void => {
    this.props.history.push(`/category/${id}`);
  };

  public render(): React.ReactNode {
    const { loading, error, categoryTitles } = this.props;
    return (
      <Wrapper>
        <Title name="Flipwat" />
        {loading && <div>Updating...</div>}
        {error && <div>Error getting updated categories!</div>}
        <CategoryList
          categoryTitles={categoryTitles}
          navigateToCategory={this.navigateToCategory}
        />
      </Wrapper>
    );
  }
}

function mapStateToProps(state: any): any {
  const { categoryTitles, error, loading } = state;
  return {
    loading,
    error,
    categoryTitles,
  };
}

const connectedComponent = connect<PanelProps>(
  mapStateToProps,
  { loadCategoryNames },
);

export default connectedComponent(withRouter(Panel));

interface PanelProps extends RouteComponentProps {
  loading: boolean;
  error: boolean | Error;
  categoryTitles: Category[];
  loadCategoryNames: () => void;
}

interface Category {
  name: string;
  id: string;
}
