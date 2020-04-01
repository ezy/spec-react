import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Blog } from '../../components/Blog/Blog';

describe('Article component', () => {
  let wrap;
  const title = 'Testing';
  it('renders correctly', async () => {
    wrap = mount(
      <BrowserRouter>
        <Blog title={title} />
      </BrowserRouter>
    );
    expect(wrap).toMatchSnapshot();
  });
});
