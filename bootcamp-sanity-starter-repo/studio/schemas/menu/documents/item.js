import { getDefaultLocalizedValue } from "../util/languages";

export default {
  title: "Item",
  name: "item",
  type: "document",
  liveEdit: true,
  __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  fieldsets: [
    {
      title: "Deprecated",
      name: "deprecated",
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "localeString"
    },
    {
      title: "DMB Name",
      name: "dmbName",
      type: "localeString"
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Images",
      name: "images",
      type: "images"
    },
    {
      title: "Image Description",
      name: "imageDescription",
      type: "localeString"
    },
    {
      title: "Description",
      name: "description",
      type: "localeBlockContent"
    },
    {
      title: "Tier",
      name: "tier",
      type: "reference",
      to: [{ type: "tier" }]
    },
    {
      title: "Reward Eligible",
      name: "rewardEligible",
      type: "boolean",
      fieldset: "deprecated"
    },
    {
      title: "Label As Per Person",
      description: "Show the the amount being ordered as per person.",
      name: "labelAsPerPerson",
      type: "boolean"
    },
    {
      title: "Activation Date",
      name: "activationDate",
      type: "date"
    },
    {
      title: "Deactivation Date",
      name: "deactivationDate",
      type: "date"
    },
    {
      title: "Options",
      name: "options",
      type: "array",
      of: [
        {
          type: "itemOption"
        }
      ]
    },
    {
      title: "Vendor PLUs",
      name: "vendorPlus",
      type: "vendorPlus",
      fieldset: "deprecated"
    },
    {
      title: "Vendor Configs",
      name: "vendorConfigs",
      type: "vendorConfigs"
    },
    {
      title: "Prices",
      name: "prices",
      type: "array",
      of: [
        {
          type: "pricingRegionPrice"
        }
      ]
    },
    {
      title: "Channel Exclusions",
      name: "channelExclusions",
      type: "channelExclusions"
    },
    {
      title: "Operational Item",
      name: "operationalItem",
      type: "opItem",
      readOnly: true,
      options: {
        collapsible: true
      }
    },
    {
      title: "Nutrition",
      name: "nutrition",
      type: "nutrition",
      readOnly: false,
      options: {
        collapsible: true
      }
    },
    {
      title: "Nutrition With Modifiers",
      name: "nutritionWithModifiers",
      type: "nutrition",
      readOnly: false,
      options: {
        collapsible: true
      }
    },
    {
      title: "Allergens",
      name: "allergens",
      type: "opAllergen",
      readOnly: true,
      options: {
        collapsible: true
      }
    }
  ],
  preview: {
    select: {
      title: "name",
      id: "_id",
      media: "image"
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.title)} - ${selection.id}`,
        subtitle: "Item",
        media: selection.media
      };
    }
  }
};
