/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

// eslint-disable-next-line import/no-unresolved
import client from 'part:@sanity/base/client';
import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Picker',
  name: 'picker',
  type: 'document',
  liveEdit: true,
  validation: (Rule) =>
    Rule.custom((picker) => {
      const aspectIdents = [];
      let maxPermutations = 1;
      return client
        .fetch(`*[_id=='${picker._id}'].pickerAspects[]`)
        .then((rootValues) => {
          // Get all of the Aspect ids
          rootValues.forEach((value) => {
            value.forEach((pa) => {
              aspectIdents.push(pa._ref);
            });
          });
        })
        .then(() =>
          // Query all of the aspect options to calculate the max permutations
          client.fetch(
            `*[_id=='${picker._id}']{"aspects": pickerAspects[]->}{"options": aspects[].pickerAspectOptions[]}`,
          ),
        )
        .then((rootOptions) => {
          // Calculate the max permutations
          rootOptions.forEach((value) => {
            value.options.forEach((option) => {
              maxPermutations *= option.length;
            });
          });
        })
        .then((_) =>
          // Get all of the Picker options
          client.fetch(`*[_id=='${picker._id}'].{options[]}`),
        )
        .then((optRoot) => {
          try {
            // Create list of permutations provided to identify duplicates
            // and make sure all permutations have been used.
            const foundPermutations = [];
            optRoot.forEach((pickerOptions) => {
              pickerOptions.options.forEach((option, idx) => {
                // Find all permutations
                const optionPermutations = [];
                option.pickerItemMappings.forEach((mapping) => {
                  optionPermutations.push(
                    mapping.pickerAspect._ref + mapping.pickerAspectValueIdentifier,
                  );
                });
                optionPermutations.sort();
                const optionComposite = optionPermutations.join(',');
                // Verify the list of permutations for this option is not being used on another option.
                if (foundPermutations.includes(optionComposite)) {
                  throw new Error(`Option ${idx + 1} has a duplicate set of aspect identifiers.`);
                }
                foundPermutations.push(optionComposite);

                const optionIdents = option.pickerItemMappings.map((pim) => pim.pickerAspect._ref);
                // Verify every aspect is referenced at least once in the picker options.
                aspectIdents.forEach((aspectIdent) => {
                  if (!optionIdents.includes(aspectIdent)) {
                    throw new Error(`Option ${idx + 1} missing an aspect id.`);
                  }
                });
                // Verify each option points to an aspect configured on this picker.
                optionIdents.forEach((optionIdent) => {
                  if (!aspectIdents.includes(optionIdent)) {
                    throw new Error(`Option ${idx + 1} references an unset aspect.`);
                  }
                });
                // Verify that no two options reference the same aspect
                if (new Set(optionIdents).size !== optionIdents.length) {
                  throw new Error(`Option ${idx + 1} references the same aspect more than once.`);
                }
              });
              // Verify all permutations are provided.
              if (maxPermutations !== foundPermutations.length) {
                throw new Error(
                  `Missing ${maxPermutations - foundPermutations.length} Option permutations.`,
                );
              }
            });
          } catch (error) {
            return error;
          }
          return true;
        });
    }),
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'DMB Name',
      name: 'dmbName',
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
      title: 'Images',
      name: 'images',
      type: 'images',
    },
    {
      title: 'Image Description',
      name: 'imageDescription',
      type: 'localeString',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeBlockContent',
    },
    {
      title: 'Picker Aspects',
      name: 'pickerAspects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'pickerAspect',
            },
          ],
        },
      ],
    },
    {
      title: 'Picker Defaults',
      name: 'pickerDefaults',
      type: 'array',
      of: [
        {
          type: 'pickerItemMapping',
        },
      ],
    },
    {
      title: 'Picker Aspect Item Option Mappings',
      name: 'pickerAspectItemOptionMappings',
      type: 'array',
      of: [
        {
          title: 'Picker Aspect Item Options',
          name: 'pickerAspectItemOptions',
          type: 'pickerAspectItemOptions',
        },
      ],
    },
    {
      title: 'UI Pattern',
      name: 'uiPattern',
      type: 'string',
      options: {
        list: ['parallel', 'series', 'seriesWithLastAsModifier'],
      },
    },
    {
      title: 'Quick Configs',
      name: 'quickConfigs',
      type: 'array',
      description:
        'Quick configs represent presets users can choose to quickly select multiple modifiers (i.e., 2x cream, 2x sugar)',
      of: [{ type: 'quickConfig' }],
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [
        {
          type: 'pickerOption',
        },
      ],
    },
    {
      title: 'Channel Exclusions',
      name: 'channelExclusions',
      type: 'channelExclusions',
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
      media: 'image',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.title)} - ${selection.id}`,
        subtitle: 'Picker',
        media: selection.media,
      };
    },
  },
};
