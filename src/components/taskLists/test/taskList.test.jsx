import { render } from '@testing-library/react';
import TaskLists from '../taskLists';

it('When it invokes the TaskLists component, should render it properly', ()=>{

    const { container } = render(<TaskLists />);
    
    expect(container).toMatchSnapshot();
});
