import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import {
  loadCategoryDetails,
  loadQuestion,
  clearQuestion,
} from '../../Actions/actions';
import CategoryDetails from './CategoryDetails';
import QuestionView from '../QuestionView';

class CategoryView extends Component<CategoryViewProps> {
  public playCategory = (): void => {
    const { cards } = this.props.category;
    if (cards.length > 0) {
      const { categoryId } = this.props.match.params;
      const cardIdx = 0; // starter card
      this.props.loadQuestion(categoryId, cardIdx);
    }
  };

  public playRandomCategory = (): void => {
    const { cards } = this.props.category;
    if (cards.length > 0) {
      const { categoryId } = this.props.match.params;
      const randomCardIdx = Math.floor(Math.random() * cards.length);
      this.props.loadQuestion(categoryId, randomCardIdx);
    }
  };

  public changeCard = (goUp: boolean): void => {
    const { cardIdx } = this.props.currentQuestion;
    const { cards } = this.props.category;
    const { categoryId } = this.props.match.params;
    let newCardIdx;
    if (goUp) {
      newCardIdx = cardIdx === cards.length - 1 ? 0 : cardIdx + 1;
    } else {
      newCardIdx = cardIdx === 0 ? cards.length - 1 : cardIdx - 1;
    }
    this.props.loadQuestion(categoryId, newCardIdx);
  };

  public componentDidMount(): void {
    // clear any old questions
    this.props.clearQuestion();

    // check if categoryDetails for id does not exist, obtain from API
    if (!this.props.category) {
      const { categoryId } = this.props.match.params;
      this.props.loadCategoryDetails(categoryId);
    }
  }

  public componentDidUpdate(prevProps: CategoryViewProps): void {
    const { categoryId } = this.props.match.params;
    const prevId = prevProps.match.params.categoryId;
    // check if categoryDetails for id does not exist, obtain from API
    // run only once per categoryId Change
    if (!this.props.category && categoryId !== prevId) {
      this.props.loadCategoryDetails(categoryId);
    }

    // clear current question in redux when changing categories
    if (categoryId !== prevId) {
      this.props.clearQuestion();
    }
  }

  public render(): React.ReactNode {
    const { categoryId } = this.props.match.params;
    const { loading, error, category, currentQuestion } = this.props;
    return (
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error obtaining updated information!</div>}
        {category &&
        currentQuestion.cardIdx >= 0 &&
        currentQuestion.categoryId === categoryId ? (
          <QuestionView
            categoryName={category.name}
            card={category.cards[currentQuestion.cardIdx]}
            changeCard={this.changeCard}
          />
        ) : (
          category && (
            <CategoryDetails
              category={{ ...category, categoryId }}
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
  const { categoryId } = props.match.params;
  return {
    loading,
    error,
    category: state.categoryDetails[categoryId],
    currentQuestion: state.currentQuestion,
  };
};

const mapDispatchToProps = {
  loadCategoryDetails,
  loadQuestion,
  clearQuestion,
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
  loadQuestion: (categoryId: string, cardIdx: number) => object;
  clearQuestion: () => object;
}

interface CurrentQuestion {
  cardIdx: number;
  categoryId: string;
}

interface PathParams {
  categoryId: string;
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
