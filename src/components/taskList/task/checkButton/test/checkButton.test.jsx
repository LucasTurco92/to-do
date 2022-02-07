import { render } from '@testing-library/react';
import CheckButton from '../checkButton';

it('When it invokes the CheckButton component, should render it properly', ()=>{

    const { container } = render(<CheckButton />);
    
    expect(container).toMatchSnapshot();
});
