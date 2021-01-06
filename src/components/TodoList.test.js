import React  from 'react';
import Enzyme, {shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';


describe ('TodoList Component', () => {



    Enzyme.configure ({
        adapter: new adapter()
    });

    it ('should render the right List and make editing on it  ', () => {

        <shallow/>

    })
})