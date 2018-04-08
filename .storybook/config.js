import { configure } from '@storybook/react';
import { configure as viewFunction } from '@storybook/addon-viewport'
import { setOptions } from '@storybook/addon-options'

function loadStories() {
  require('../src/stories');
}

setOptions({
  name: 'Storybook',
  addonPanelInRight: true,
  sidebarAnimations: false,
})

configure(loadStories, module);

viewFunction({
  defaultViewport: 'iphone6'
})
