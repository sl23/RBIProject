import slugify from '../utils/slugify';

export default {
  title: 'Static Page',
  name: 'staticPage',
  type: 'document',
  /**
   * This causes some latency errors with slug generation button.
   * Maybe move to do an async slugify in the utils, but for now leave it off?
   *
   * Also know compatibility is not great with content blocks, so not sure how
   * smooth this works with the code fields
   */
  // liveEdit: true,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Localized Title',
      name: 'localeTitle',
      type: 'localeString',
    },
    {
      title: 'Path (assumed to be English path unless localized one present)',
      name: 'path',
      type: 'slug',
      options: {
        source: 'title',
        slugify,
      },
    },
    {
      title: 'Localized Path',
      name: 'localePath',
      type: 'localeSlug',
    },
    {
      title: 'Parent',
      name: 'parent',
      type: 'reference',
      to: [{ type: 'staticPage' }],
    },
    {
      title: 'Display Index',
      name: 'displayIndex',
      type: 'number',
    },
    {
      title: 'Redirect URL',
      name: 'redirectUrl',
      type: 'localeString',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Widgets',
      name: 'widgets',
      type: 'array',
      of: [
        {
          title: 'Accordion Widget',
          name: 'accordionWidget',
          type: 'accordionWidget',
        },
        {
          title: 'Locale Block Text Widget',
          name: 'localeBlockTextWidget',
          type: 'localeBlockTextWidget',
        },
        {
          title: 'Header Widget',
          name: 'headerWidget',
          type: 'headerWidget',
        },
        {
          title: 'Image Widget',
          name: 'imageWidget',
          type: 'imageWidget',
        },
        {
          title: 'Call To Action Widget',
          name: 'callToActionWidget',
          type: 'callToActionWidget',
        },
        {
          title: 'Double Image Widget',
          name: 'doubleImageWidget',
          type: 'doubleImageWidget',
        },
        {
          title: 'Preview Widget',
          name: 'previewWidget',
          type: 'previewWidget',
        },
        {
          title: 'Nutrition Explorer Widget',
          name: 'nutritionExplorerWidget',
          type: 'nutritionExplorerWidget',
        },
        {
          title: 'Video Widget',
          name: 'videoWidget',
          type: 'videoWidget',
        },
        {
          title: 'Quote Widget',
          name: 'quoteWidget',
          type: 'quoteWidget',
        },
        {
          title: 'Multi Widget',
          name: 'multiWidget',
          type: 'multiWidget',
        },
        {
          title: 'Nutrition Info Widget',
          name: 'nutritionInfoWidget',
          type: 'nutritionInfoWidget',
        },
        {
          title: 'Anchor Widget',
          name: 'anchorWidget',
          type: 'anchorWidget',
        },
        {
          title: 'Anchor Links Widget',
          name: 'anchorLinksWidget',
          type: 'anchorLinksWidget',
        },
      ],
    },
    {
      title: 'Variables',
      type: 'sanityDynamicContent',
      name: 'pageVariables',
    },
    {
      title: 'Custom CSS',
      type: 'css',
      name: 'pageCSS',
    },
    {
      title: 'Body HTML',
      type: 'html',
      name: 'pageHtml',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'path',
    },
    prepare(selection) {
      const { title, slug } = selection;
      return {
        title,
        subtitle: `/${slug ? slug.current : ''}`,
      };
    },
  },
};
