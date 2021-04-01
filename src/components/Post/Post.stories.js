import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = () => (
  <Post 
    content="I’m working in Figma to design a new website that show all my tweets !" 
    date='21/03/2021'
  />  
) ;

export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

