import React from 'react';
import { mount } from 'enzyme';
import { Article } from '../../components/Article/Article';

describe('Article component', () => {
  let wrap;
  it('renders corectly', async () => {
    wrap = mount(
      <Article
        match={{ params: { id: 1 }, isExact: true, path: '', url: '' }}
      />
    );
    expect(wrap).toMatchSnapshot();
  });
});
