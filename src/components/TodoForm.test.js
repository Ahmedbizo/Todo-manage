import React from 'react';
import TodoForm from './TodoForm';
import Enzyme, {shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';



describe ('TodoForm Component', () => {

    let component;
  

    Enzyme.configure ({
        adapter: new adapter()
    });

    it ('should render the right form  ', () => {

        

        component= shallow(
            <TodoForm />
        );
       
        

    })
})