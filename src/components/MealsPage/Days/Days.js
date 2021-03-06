import React from 'react';
import PropTypes from 'prop-types';
import Meals from './Meals/Meals';

import './Days.css';

class Days extends React.Component {
  static defaultProps = {
    meals: {},
    day: '',
  };

  render() {
    const { day, meals } = this.props;
    let mealsList;

    if (meals[day]) {
      mealsList = meals[day].map((meal, key) => <Meals key={key} day={day} meal={meal} />);
    }

    return (
      <div className="Days">
        <h3>{day}</h3>
        {meals && meals[day] && mealsList}
      </div>
    );
  }
}

export default Days;

Days.propTypes = {
  meals: PropTypes.object,
  day: PropTypes.string,
};
