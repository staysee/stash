import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import Days from './Days/Days';
import Placeholder from '../Placeholder/Placeholder';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import StashContext from '../../StashContext';

class MealsPage extends React.Component {
  static contextType = StashContext;

  render() {
    const { meals } = this.context;
    const daysOfWeek = Object.keys(meals);

    return (
      <div className="MealsPage">
        <PageHeader title="Meal Plan" />

        {meals.Monday.length === 0 &&
          meals.Tuesday.length === 0 &&
          meals.Wednesday.length === 0 &&
          meals.Thursday.length === 0 &&
          meals.Friday.length === 0 &&
          meals.Saturday.length === 0 &&
          meals.Sunday.length === 0 && (
            <Placeholder
              message={'Set up a meal plan this week'}
              verb={'Add'}
              item={'meal from your recipes'}
              icon={faUtensils}
            />
          )}

        {daysOfWeek.map((aDay, key) => (
          <Days key={key} day={aDay} meals={meals} />
        ))}
      </div>
    );
  }
}

export default MealsPage;
