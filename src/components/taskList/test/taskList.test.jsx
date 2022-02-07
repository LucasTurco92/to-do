import { render } from '@testing-library/react';
import TaskList from '../taskList';

it('When it invokes the TaskLists component, should render it properly', ()=>{

    const { container } = render(<TaskList />);
    
    expect(container).toMatchSnapshot();
});
