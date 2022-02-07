import { render } from '@testing-library/react';
import AddButton from '../addButton';

it('When it invokes the AddButton component, should render it properly', ()=>{

    const { container } = render(<AddButton />);
    
    expect(container).toMatchSnapshot();
});
