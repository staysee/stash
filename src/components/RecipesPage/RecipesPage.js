import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import RecipesList from './RecipesList/RecipesList';
import Search from './Search/Search';
import Placeholder from '../Placeholder/Placeholder';
import StashContext from '../../StashContext';

class RecipesPage extends React.Component {
  static contextType = StashContext;

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterType: 'All',
    };
  }

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term,
    });
  };

  updateFilterType = (type) => {
    this.setState({
      filterType: type,
    });
  };

  render() {
    const { recipes = [] } = this.context;
    const { searchTerm, filterType } = this.state;
    return (
      <div className="RecipesPage">
        <PageHeader title="Stashed Recipes" />
        <Search
          searchTerm={searchTerm}
          filterType={filterType}
          updateSearchTerm={this.updateSearchTerm}
          updateFilterType={this.updateFilterType}
        />

        {recipes ? (
          <RecipesList recipes={recipes} searchTerm={searchTerm} filterType={filterType} />
        ) : (
          <Placeholder message={'No recipes yet'} verb={'Stash'} item={'recipe'} />
        )}
      </div>
    );
  }
}

export default RecipesPage;
