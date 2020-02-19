export default {
  name: 'sanityDynamicContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      marks: {
        decorators: [],
        annotations: [
          {
            title: 'Image',
            name: 'imageVariable',
            type: 'object',
            blockEditor: {
              icon: () => 'src',
            },
            fields: [
              {
                name: 'imageSrc',
                type: 'image',
              },
            ],
          },
          {
            title: 'Link',
            name: 'internalLinkVariable',
            type: 'object',
            blockEditor: {
              icon: () => 'href',
            },
            fields: [
              {
                name: 'linkHref',
                type: 'reference',
                to: [{ type: 'staticPage' }],
              },
            ],
          },
        ],
      },
    },
  ],
};
