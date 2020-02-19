import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/jsx-filename-extension
const Small = ({ children }) => <small>{children}</small>;
Small.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto'] }),
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
        ],
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Small',
            value: 'small',
            blockEditor: {
              icon: () => 'Sm',
              render: Small,
            },
          },
        ],
      },
    },
    {
      title: 'Image',
      type: 'blockContentImage',
    },
  ],
};
