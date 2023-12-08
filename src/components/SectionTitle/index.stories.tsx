import type { Meta, StoryObj } from '@storybook/react';
import SectionTitle from '.';

const meta = {
    component: SectionTitle,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A component for displaying section label and title.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            type: 'string',
            description: 'Write label on control.',
        },
        children: {
            type: 'string',
            description: 'Write title on control',
        },
    },
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Label Text',
        children: 'Section Title Text',
    },
};
