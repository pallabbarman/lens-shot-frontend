import { RenderOptions, render } from '@testing-library/react';
import { ReactElement } from 'react';
import AppTest from './AppTest';

export const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => {
    const result = render(ui, { wrapper: AppTest, ...options });

    expect(result.baseElement).toMatchSnapshot();

    return result;
};

export * from '@testing-library/react';

export { customRender as render };
