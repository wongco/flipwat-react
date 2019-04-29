import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

class CategoryView extends Component<CategoryViewProps> {
  public componentDidMount(): void {
    // check if categoryDetails for id does not exist,
    //    hit API and request CategoryInfo
  }

  public render(): React.ReactNode {
    // const { loading, error } = this.props;
    const { id } = this.props.match.params;
    return <div>Category ID {id} Info</div>;
  }
}

function mapStateToProps(state: any): any {
  const { error, loading } = state;
  return {
    loading,
    error,
  };
}

const connectedComponent = connect<CategoryViewProps>(
  mapStateToProps,
  {},
);

export default connectedComponent(CategoryView);

// id, name, cards, createdAt, updatedAt
interface CategoryViewProps extends RouteComponentProps<PathParams> {
  loading: boolean;
  error: boolean | Error;
}

interface PathParams {
  id: string;
}
