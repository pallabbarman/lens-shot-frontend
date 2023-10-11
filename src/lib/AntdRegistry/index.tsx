'use client';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';
import { PropsWithChildren, useMemo } from 'react';

const AntdRegistry = ({ children }: PropsWithChildren) => {
    const cache = useMemo<Entity>(() => createCache(), []);

    useServerInsertedHTML(() => (
        <style
            id="antd"
            dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
        />
    ));

    return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdRegistry;
