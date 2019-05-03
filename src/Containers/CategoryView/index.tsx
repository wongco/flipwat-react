import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { loadCategoryDetails } from '../../Actions/actions';
import CategoryDetails from './CategoryDetails';

class CategoryView extends Component<CategoryViewProps> {
  public state = {
    showQuestion: false,
  };

  public playCategory = (): void => {
    // dispatch - play current card
    // push to questionView
    const { id } = this.props.match.params;
    const cardId = this.props.category.cards[0].id;
    console.log(id);
    console.log(cardId);
    console.log('play first card in category');
  };

  public playRandomCategory = (): void => {
    // dispatch - play random card
    // push to questionView
    console.log('play random card in category');
  };

  public componentDidMount(): void {
    // check if categoryDetails for id does not exist, obtain from API
    if (!this.props.category) {
      const { id } = this.props.match.params;
      this.props.loadCategoryDetails(id);
    }
  }

  public componentDidUpdate(prevProps: CategoryViewProps): void {
    const id = this.props.match.params.id;
    const prevId = prevProps.match.params.id;
    // check if categoryDetails for id does not exist, obtain from API
    // run only once per categoryId Change
    if (!this.props.category && id !== prevId) {
      this.props.loadCategoryDetails(id);
    }
  }

  public render(): React.ReactNode {
    const { id } = this.props.match.params;
    const { loading, error, category } = this.props;
    const { showQuestion } = this.state;
    return (
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error obtaining updated Category information!</div>}
        {showQuestion ? (
          <div>Show question</div>
        ) : (
          category && (
            <CategoryDetails
              category={{ ...category, id }}
              playCategory={this.playCategory}
              playRandomCategory={this.playRandomCategory}
            />
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any, props: any): any => {
  const { error, loading } = state;
  const { id } = props.match.params;
  return {
    loading,
    error,
    category: state.categoryDetails[id],
    currentQuestion: state.currentQuestions,
  };
};

const mapDispatchToProps = {
  loadCategoryDetails,
};

const connectedComponent = connect<CategoryViewProps>(
  mapStateToProps,
  mapDispatchToProps,
);

export default connectedComponent(CategoryView);

interface CategoryViewProps extends RouteComponentProps<PathParams> {
  loading: boolean;
  error: boolean | Error;
  category: CategoryDetailsProps;
  currentQuestion: CurrentQuestion;
  loadCategoryDetails: (id: string) => void;
}

interface CurrentQuestion {
  questionId: string | null;
  categoryId: string | null;
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
