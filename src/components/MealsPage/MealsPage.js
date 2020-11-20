import React from 'react';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../PageHeader/PageHeader';
import Days from './Days/Days';
import Placeholder from '../Placeholder/Placeholder';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import StashContext from '../../StashContext';

class MealsPage extends React.Component {
  static contextType = StashContext;

  render() {
    const { meals } = this.context;
    const daysOfWeek = Object.keys(meals);

    return (
      <div className="MealsPage">
        <PageHeader title="Meal Plan" />

        <ErrorBoundary>
          {meals.Monday.length === 0
            && meals.Tuesday.length === 0
            && meals.Wednesday.length === 0
            && meals.Thursday.length === 0
            && meals.Friday.length === 0
            && meals.Saturday.length === 0
            && meals.Sunday.length === 0 && (
            <Placeholder
              message="Set up a meal plan this week"
              verb="Add"
              item="meal from your recipes"
              icon={faUtensils}
            />
          )}

          {daysOfWeek.map((aDay, key) => (
            <Days key={key} day={aDay} meals={meals} />
          ))}
        </ErrorBoundary>
      </div>
    );
  }
}

export default MealsPage;
