import React from 'react'
import { shallow } from 'enzyme'
import PersonList from './PersonList'

describe('PersonList', () => {

    it('should display 3 items when passed 3 people', () => {
        //setup
        const personListWrapper = shallow(<PersonList people={["a","b","c"]} />)
        //exercise
        const numberOfLis = personListWrapper.find("li");

        //assert
        expect(numberOfLis).toHaveLength(3);
    })

    it('Should have name from peoplelist', () => {
        //setup
        const personListWrapper = shallow(<PersonList people={["a","b","c"]} />)

        //exercise
        const listItems = personListWrapper.find("li");
        const listItemsText = listItems.map( item => item.text())

        //assert
        expect(listItemsText).toEqual(["a","b","c"])
    })

    it('when passed no people, say that', () => {
        //setup
        const personListWrapper = shallow( <PersonList people={[]} />);

        //exercise
        const displayedText = personListWrapper.text();

        //assert
        expect(displayedText).toEqual("There are no people to list");
    })

})

// It should render
// it should render n lis for the number of people
// if there are not people it should say There are no people to list