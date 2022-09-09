import DigimonCard from "../DigimonCard";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'CardList/DigimonCard',
    component: DigimonCard,
} as ComponentMeta<typeof DigimonCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof DigimonCard> = (args) => <DigimonCard {...args} />;

export const Yokomon = Template.bind({});

Yokomon.args = {
    img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
    name: "Yokomon",
    level: "In Training"
};

export const Birdramon = Template.bind({});

Birdramon.args = {
    img: "https://digimon.shadowsmith.com/img/birdramon.jpg",
    name: "Birdramon",
    level: "Champion"
}