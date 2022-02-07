import { render } from '@testing-library/react';
import Task from '../task';

it('When it invokes the Task component, should render it properly when isNew', ()=>{

    const data = {
        description: 'description',
        id:'123 342 543 465',
        isNew: 'true'
    }

    const { container } = render(<Task data={data} />);
    
    expect(container).toMatchSnapshot();
});


it('When it invokes the Task component, should render it properly when isNew is false', ()=>{

    const data = {
        description: 'description',
        id:'123 342 543 465',
        isNew: 'false'
    }

    const { container } = render(<Task data={data} />);
    
    expect(container).toMatchSnapshot();
});