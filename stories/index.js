import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tabs from '../client/site/tabs';

storiesOf('Elements', module).add('Tabs', () => {
    const items = [{ name: '123', title: 'Tab1' }, { name: '124', title: 'Tab2' }, { name: '125', title: 'Tab3' }];

    return <Tabs items={items} onClick={action('Click tab')} />;
});
