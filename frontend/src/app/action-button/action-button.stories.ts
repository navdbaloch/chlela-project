// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ActionButtonComponent, ActionType, Icons } from './action-button.component';

export default {
  title: 'Example/ActionButton',
  component: ActionButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ActionButtonComponent> = (args: ActionButtonComponent) => ({
  component: ActionButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  options: {
    icon: Icons.UPLOAD,
    label: "button label",
    color: "primary",
    actionType: ActionType.UPLOAD
  }
};

export const Default = Template.bind({});
Default.args = {
  options: {
    icon: Icons.UPLOAD,
    label: "button label",
    color: "default",
    actionType: ActionType.UPLOAD
  }
};
