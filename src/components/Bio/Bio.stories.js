import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = () => (
  <Bio
    headshot="https://media-exp1.licdn.com/dms/image/C4D03AQGrTSPVEe32WQ/profile-displayphoto-shrink_200_200/0/1516958246668?e=1622678400&v=beta&t=larGvSA7oCXX8DqJfmjr45pS5oSaULKgM6vhXxuc0cE"
    name="Adil Bouaddi"
    tagline="Helping others learn by doing"
    role="Devolope Account Management"
  />  
) ;

export const Default = Template.bind({});
