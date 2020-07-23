import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import RecipesList from './RecipesList/RecipesList'
import Search from './Search/Search'
import StashContext from '../StashContext'


class StashedRecipesPage extends React.Component {
    static contextType = StashContext;

    render() {
        const { recipes=[] } = this.context 
        return (
            <div className="StashedRecipesPage">
                <PageHeader title="Stashed Recipes" />
                <Search />
                <RecipesList recipes={recipes}/>
            </div>
        )
    }

}


export default StashedRecipesPage