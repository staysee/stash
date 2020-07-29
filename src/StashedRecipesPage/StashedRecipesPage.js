import React from 'react'
// import Modal from 'react-modal'
import PageHeader from '../PageHeader/PageHeader'
import RecipesList from './RecipesList/RecipesList'
import Search from './Search/Search'
import StashContext from '../StashContext'

console.log(StashContext);

class StashedRecipesPage extends React.Component {
    static contextType = StashContext;

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
        console.log('open modal')
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
        console.log('close modal')
    }

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