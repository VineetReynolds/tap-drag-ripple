import React from 'react';
import {App} from '../App';
import { create } from "react-test-renderer";
import Ripple from '../Ripple';
import { render } from 'react-dom'
import { mount, shallow } from 'enzyme';

describe('App', () => {
    test('it matches snapshot', () => {
        const app = create(<Ripple></Ripple>);
        expect(app.toJSON()).toMatchSnapshot();
    })

    test('it handles click events', () => {
        const app = document.createElement('div');
        app.id = 'app';
        document.body.appendChild(app);
        const ripple = render(<Ripple></Ripple>, app);
        //console.log(ripple.find('.rippleContainer').get(0).style);
        //app.find('.rippleContainer').simulate('click');
        const root = app.firstElementChild;
        //expect(root.innerHTML).toBe('Click');
        app.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        expect(app.innerHTML).toBe('Click');
    })
})