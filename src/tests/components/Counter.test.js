import React from 'react'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'
import Counter from '../../components/Counter'
import CounterContainer from '../../containers/Counter'
import state from '../fixtures/count'
import { Provider } from 'react-redux'
import store from '../../store/store'

test('should render the same initial ui', () => {
    const wrapper = shallow(<Counter {...state}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should give a count value equal to the input count', () => {
    const wrapper = shallow(<Counter {...state} count={1}/>)
    expect(wrapper.find('#count-value').text()).toBe('Count: 1')
})

test('should increment by 1 on click', () => {
    const wrapper = mount(<CounterContainer store={store} />)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('#count-value').text()).toBe('Count: 1')
})