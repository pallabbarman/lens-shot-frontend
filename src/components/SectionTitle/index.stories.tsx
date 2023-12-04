import type { Meta, StoryObj } from '@storybook/react';
import SectionTitle from '.';

const meta = {
    component: SectionTitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Label Text',
        children: 'This is component children!',
    },
};
