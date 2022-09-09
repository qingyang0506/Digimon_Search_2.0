import HelpModel from "../HelpModel";
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { useState } from "react";

// const [open, setOpen] = useState(true);
export default {
    title: 'HelpModel/helpModel',
    component: HelpModel,
} as ComponentMeta<typeof HelpModel>;

const Template: ComponentStory<typeof HelpModel> = (args) => <HelpModel {...args} />;

export const helpModel = Template.bind({});

helpModel.args = {
    open: true,
    handleClose: () => { }
}

