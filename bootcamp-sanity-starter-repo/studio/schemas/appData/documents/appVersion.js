const SEMVER_REGEX = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export default {
  title: 'App Version',
  name: 'appVersion',
  type: 'document',
  fields: [
    {
      title: 'Native Version Name',
      name: 'nativeVersionName',
      type: 'string',
      description:
        'The native app version to be deployed to the App store. This should use semantic versioning and have 2 decimal points, for example 1.0.0. The numbers signify <Major Release>.<Minor Release>.<Patch Number>',
      validation: (Rule) =>
        Rule.custom(
          (version = '') =>
            (version.split('.').length === 3 && SEMVER_REGEX.test(version)) ||
            'The version name must be 3 digits in the format <Major Release>.<Minor Release>.<Patch Number>, i.e. 1.0.0',
        ),
    },
    {
      title: 'Native Version Number',
      name: 'nativeVersionNumber',
      type: 'number',
      description:
        'This is the build number currently released for the Version Name. When version name changes, this should be re-set to 1.',
      validation: (Rule) =>
        Rule.custom((build) => {
          const int = parseInt(build, 10);
          return (
            (!Number.isNaN(int) && Number.isInteger(int) && int > 0) ||
            'The version number must be a positive integer.'
          );
        }),
    },
    {
      title: 'Version Name',
      name: 'kioskVersionName',
      type: 'string',
      description:
        'The kiosk app version to be deployed to the App store. This should use semantic versioning and have 2 decimal points, for example 1.0.0. The numbers signify <Major Release>.<Minor Release>.<Patch Number>',
      validation: (Rule) =>
        Rule.custom(
          (version = '') =>
            (version.split('.').length === 3 && SEMVER_REGEX.test(version)) ||
            'The version name must be 3 digits in the format <Major Release>.<Minor Release>.<Patch Number>, i.e. 1.0.0',
        ),
    },
  ],
};
