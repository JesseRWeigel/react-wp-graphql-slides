// Import React
import React from "react";
// Import Spectacle Core tags
import { Deck, Heading, List, ListItem, Slide, Text } from "spectacle";
// Import theme
import { theme } from "spectacle-theme-solarized-dark";

// Require CSS
require("normalize.css");

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]}>
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Easy React Content Management with GraphQL and WordPress
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Twitter: @JesseRWeigel
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Prerequisites
          </Heading>
          <List>
            <ListItem>Node and NPM</ListItem>
            <ListItem>React with NextJS</ListItem>
            <ListItem>WordPress</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} textColor="secondary">
            Install WPGraphQL
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} textColor="secondary">
            Setup Apollo
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} textColor="secondary">
            GraphQL Queries
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} textColor="secondary">
            Query Component
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} textColor="secondary">
            Deployment
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Take it Further
          </Heading>
          <List>
            <ListItem>Custom Post Types</ListItem>
            <ListItem>Cloud Database and Storage</ListItem>
            <ListItem>Custom Routing</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
