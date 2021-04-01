import React from 'react';

import PostForm from './PostForm';

export default {
  title: 'Components/PostForm',
  component: PostForm,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = () => (
  <PostForm 
  />  
) ;

export const Default = Template.bind({});