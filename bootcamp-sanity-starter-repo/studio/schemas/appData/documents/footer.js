export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  fields: [
    {
      title: 'Company',
      name: 'company',
      type: 'link',
    },
    {
      title: 'Our Story',
      name: 'ourstory',
      type: 'link',
    },
    {
      title: 'Franchise Opportunities',
      name: 'franchiseopportunities',
      type: 'link',
    },
    {
      title: 'Careers',
      name: 'careers',
      type: 'link',
    },
    {
      title: 'Legal',
      name: 'legal',
      type: 'link',
    },
    {
      title: 'Contact Us',
      name: 'contactus',
      type: 'link',
    },
    {
      title: 'Support',
      name: 'support',
      type: 'link',
    },
    {
      title: 'Terms of Use',
      name: 'termsofuse',
      type: 'link',
    },

    {
      title: 'Privacy Policy',
      name: 'privacypolicy',
      type: 'link',
    },
    {
      title: 'Accessibility Statement',
      name: 'accessibilitystatement',
      type: 'link',
    },
    {
      title: 'Sitemap',
      name: 'sitemap',
      type: 'link',
    },
    {
      title: 'Foundation',
      name: 'foundation',
      type: 'link',
    },
    {
      title: 'Investor Relations',
      name: 'investorrelations',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      id: '_id',
    },
    prepare(selection) {
      const { id } = selection;
      return {
        title: `Footer-${id.slice(-6)}`,
        subtitle: 'Footer Item',
      };
    },
  },
};
