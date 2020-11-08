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
        {!meals && (
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
