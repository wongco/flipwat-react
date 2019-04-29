import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { loadCategoryDetails } from '../../Actions/actions';

class CategoryView extends Component<CategoryViewProps> {
  public componentDidMount(): void {
    if (!this.props.category) {
      // check if categoryDetails for id does not exist,
      //    hit API and request CategoryInfo
      //    run redux action creator to get latest categoryDetails
      const { id } = this.props.match.params;
      this.props.loadCategoryDetails(id);
    }
  }

  public componentDidUpdate(prevProps: CategoryViewProps): void {
    // check if categoryDetails for id does not exist,
    //    hit API and request CategoryInfo
    //    run redux action creator to get latest categoryDetails
    const id = this.props.match.params.id;
    const prevId = prevProps.match.params.id;
    if (!this.props.category && id !== prevId) {
      this.props.loadCategoryDetails(id);
    }
  }

  public componentWillUnmount(): void {
    console.log('unmounted!');
  }

  public render(): React.ReactNode {
    const { id } = this.props.match.params;
    const { loading, error, category } = this.props;
    return (
      <div>
        <div>Category ID {id} Info</div>
        {loading && <div>Loading...</div>}
        {error && <div>Error obtaining Category information!</div>}
        {category && <div>Category Name: {category.name} </div>}
      </div>
    );
  }
}

function mapStateToProps(state: any, props: any): any {
  const { error, loading } = state;
  const { id } = props.match.params;
  return {
    loading,
    error,
    category: state.categoryDetails[id],
  };
}

const connectedComponent = connect<CategoryViewProps>(
  mapStateToProps,
  { loadCategoryDetails },
);

export default connectedComponent(CategoryView);

// id, name, cards, createdAt, updatedAt
interface CategoryViewProps extends RouteComponentProps<PathParams> {
  loading: boolean;
  error: boolean | Error;
  category: CategoryDetailsProps;
  loadCategoryDetails: (id: string) => void;
}

interface PathParams {
  id: string;
}

interface CategoryDetailsProps {
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
