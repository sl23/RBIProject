import S from "@sanity/desk-tool/structure-builder";
import { BRAND } from "./schemas/menu/util/environment";
// import client from 'part:@sanity/base/client';
// import { flatten, compact, uniq } from 'lodash';

// This is just an example of how to build a filter-based
// category. This actually just matches words in the title.
// In the future, should be replaced by something that uses
// a proper category system from the op data.

// function searchTermItemCategory(title, terms) {
//   return S.listItem()
//     .title(title)
//     .child(
//       S.documentList()
//         .title(title)
//         .filter('_type == "item" && name.en match $terms')
//         .params({ terms }),
//     );
// }

const brandId = BRAND || "bk";

function missingPluQueryByBrand() {
  let query = "";
  // Each brand has it's own different set of required PLUs.
  if (brandId === "bk") {
    query += " && !defined(vendorPlus.sicom)";
  } else if (brandId === "th") {
    query = " && !defined(coalesce(vendorPlus.sicom, vendorPlus.qst))";
  } else if (brandId === "plk") {
    query = " && !defined(coalesce(vendorPlus.sicom, vendorPlus.ncr))";
  }
  return query;
}

function missingModifierPluQueryByBrand() {
  let query = "";
  // Each brand has it's own different set of required PLUs.
  if (brandId === "bk") {
    query += " && !defined(modifier->vendorPlus.sicom)";
  } else if (brandId === "th") {
    query = " && !defined(coalesce(modifier->vendorPlus.sicom, modifier->vendorPlus.qst))";
  } else if (brandId === "plk") {
    query = " && !defined(coalesce(modifier->vendorPlus.sicom, modifier->vendorPlus.ncr))";
  }
  return query;
}

function getTodoCategories() {
  const items = [
    S.listItem()
      .title("Unreferenced Items")
      .child(
        S.documentList()
          .title("Unreferenced Items")
          .filter(`_type=='item' && count(*[references(^._id)])==0`)
      ),
    S.listItem()
      .title("Unreferenced Combos")
      .child(
        S.documentList()
          .title("Unreferenced Combos")
          .filter(`_type=='combo' && count(*[references(^._id)])==0`)
      ),
    S.listItem()
      .title("Unreferenced Combo Slots")
      .child(
        S.documentList()
          .title("Unreferenced Combo Slots")
          .filter(`_type=='comboSlot' && count(*[references(^._id)])==0`)
      ),
    S.listItem()
      .title("Unreferenced Pickers")
      .child(
        S.documentList()
          .title("Unreferenced Pickers")
          .filter(`_type=='picker' && count(*[references(^._id)])==0`)
      ),
    S.listItem()
      .title("Referenced Items Missing an Image")
      .child(
        S.documentList()
          .title("Items missing an Image")
          .filter("_type=='item' && count(*[references(^._id)])>0 && !defined(image.asset->)")
      ),
    S.listItem()
      .title("Items Missing PLUs")
      .child(
        S.documentList()
          .title("Items missing PLUs")
          .filter(`_type=='item' ${missingPluQueryByBrand()}`)
      ),
    S.listItem()
      .title("Combos Missing PLUs")
      .child(
        S.documentList()
          .title("Combos missing PLUs")
          .filter(`_type=='combo' ${missingPluQueryByBrand()}`)
      ),
    S.listItem()
      .title("Modifier Multipliers Missing PLUs")
      .child(
        S.documentList()
          .title("Combos missing PLUs")
          .filter(
            `_type=='modifierMultiplier' ${missingPluQueryByBrand()}${missingModifierPluQueryByBrand()}`
          )
      ),
    S.listItem()
      .title("Referenced Items missing Description")
      .child(
        S.documentList()
          .title("Items missing Description")
          .filter("_type=='item' && !defined(description) && count(*[references(^._id)])==0")
      ),
    S.listItem()
      .title("Referenced Combos missing Description")
      .child(
        S.documentList()
          .title("Combos missing Description")
          .filter("_type=='combo' && !defined(description) && count(*[references(^._id)])>0")
      )
  ];

  // Add Brand specific category views
  if (brandId === "th") {
    items.push(
      S.listItem()
        .title("Items with Options missing a Display Group")
        .child(
          S.documentList()
            .title("Items with Options missing a Display Group")
            .filter("_type == 'item' && count(options[!defined(displayGroup)])>0")
        )
    );
  }

  return items;
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Loyalty")
        .child(
          S.list()
            .title("Loyalty")
            .items([
              S.listItem()
                .title("Tier")
                .child(S.documentTypeList("tier")),
              S.listItem()
                .title("Category")
                .child(S.documentTypeList("category")),
              S.listItem()
                .title("Loyalty Configuration")
                .child(S.documentTypeList("loyaltyConfiguration")),
              S.listItem()
                .title("Loyalty Content")
                .child(S.documentTypeList("loyaltyContent"))
            ])
        ),
      S.listItem()
        .title("Menu")
        .child(
          S.list()
            .title("Menu")
            .items([
              S.listItem()
                .title("Menu")
                .child(S.documentTypeList("menu")),
              S.listItem()
                .title("Section")
                .child(S.documentTypeList("section")),
              S.listItem()
                .title("Picker")
                .child(S.documentTypeList("picker")),
              S.listItem()
                .title("Picker Aspect")
                .child(S.documentTypeList("pickerAspect")),
              S.listItem()
                .title("Combo")
                .child(S.documentTypeList("combo")),
              S.listItem()
                .title("Combo Slot")
                .child(S.documentTypeList("comboSlot")),
              S.listItem()
                .title("Item")
                .child(S.documentTypeList("item")),
              S.listItem()
                .title("Modifier")
                .child(S.documentTypeList("modifier")),
              S.listItem()
                .title("Modifier Multiplier")
                .child(S.documentTypeList("modifierMultiplier")),
              S.listItem()
                .title("Display Group")
                .child(S.documentTypeList("displayGroup")),
              S.listItem()
                .title("Offer")
                .child(S.documentTypeList("offer")),
              S.listItem()
                .title("Offer Activation")
                .child(S.documentTypeList("offerActivation"))
            ])
        ),
      S.listItem()
        .title("Restaurant")
        .child(
          S.list()
            .title("Restaurant")
            .items([
              S.listItem()
                .title("Restaurant")
                .child(S.documentTypeList("restaurant")),
              S.listItem()
                .title("Restaurant POS Data")
                .child(S.documentTypeList("restaurantPosData")),
              S.listItem()
                .title("Restaurant Kiosk Data")
                .child(S.documentTypeList("restaurantKioskData")),
              S.listItem()
                .title("Kiosk App Data")
                .child(S.documentTypeList("kioskAppData")),
              S.listItem()
                .title("Operational Pricing Region")
                .child(S.documentTypeList("opPricingRegion"))
            ])
        ),
      // S.listItem()
      //   .title("App Data")
      //   .child(S.documentTypeList("appData")),
      // S.listItem()
      //   .title("Static Page")
      //   .child(S.documentTypeList("staticPage")),
      S.listItem()
        .title("Static Strings Dictionary")
        .child(S.documentTypeList("staticStringsDictionary")),
      S.listItem()
        .title("Footer")
        .child(S.documentTypeList("footer")),
      S.listItem()
        .title("To Do")
        .child(
          S.list()
            .title("Categories")
            .items(getTodoCategories())
        ),
      S.listItem()
        .title("Support Data")
        .child(S.documentTypeList("supportData")),
      S.listItem()
        .title("Promotions")
        .child(S.documentTypeList("rollUpTheRim"))
    ]);
