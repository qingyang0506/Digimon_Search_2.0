import SortButton from "../SortButton";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'CardList/SortButton',
    component: SortButton,
    argTypes: {
        onClick: { action: 'clicked' }
    }
} as ComponentMeta<typeof SortButton>;

const Template: ComponentStory<typeof SortButton> = (args) => <SortButton {...args} />;

export const sortButtonByName = Template.bind({});

sortButtonByName.args = {
    name: "name",
    sortAscend: () => { },
    sortDescend: () => { }
}

export const sortButtonByLevel = Template.bind({});

sortButtonByLevel.args = {
    name: "level",
    sortAscend: () => { },
    sortDescend: () => { }
}