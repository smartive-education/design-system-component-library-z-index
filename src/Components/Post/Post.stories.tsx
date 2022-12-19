import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Post } from "./Post";

export default {
    title: 'Post',
    component: Post,
  } as ComponentMeta<typeof Post>;
  
  const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;
  
  export const DefaultPost = Template.bind({});
  DefaultPost.args = {
    name: 'Robert Vogt',
    userName: 'robertvogt',
    postCreationTime: 'vor 11 Minuten'
  }