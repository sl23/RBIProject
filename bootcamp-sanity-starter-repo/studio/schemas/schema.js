// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import appData from "./menu/documents/appData";
import appDownloadSection from "./menu/objects/appDownloadSection";
import blockContent from "./menu/util/blockContent";
import homeGraphic from "./menu/objects/homeGraphic";
import loadingGraphics from "./menu/objects/loadingGraphics";
import favoriteSection from "./menu/objects/favoriteSection";
import loader from "./menu/objects/loader";
import item from "./menu/documents/item";
import menu from "./menu/documents/menu";
import section from "./menu/documents/section";
import nutrition from "./menu/objects/nutrition";
import offer from "./menu/documents/offer";
import offerActivation from "./menu/documents/offerActivation";
import ruleAnd from "./rules/objects/ruleAnd";
import ruleCartTotal from "./rules/objects/ruleCartTotal";
import ruleCoolDown from "./rules/objects/ruleCoolDown";
import ruleDayOfTheWeek from "./rules/objects/ruleDayOfTheWeek";
import ruleItemRequirement from "./rules/objects/ruleItemRequirement";
import ruleOr from "./rules/objects/ruleOr";
import ruleFirstPurchase from "./rules/objects/ruleFirstPurchase";
import ruleRedemptionLimit from "./rules/objects/ruleRedemptionLimit";
import ruleRequiresLogin from "./rules/objects/ruleRequiresLogin";
import ruleRequiresAssignment from "./rules/objects/ruleRequiresAssignment";
import ruleTimeBand from "./rules/objects/ruleTimeBand";
import ruleDateBand from "./rules/objects/ruleDateBand";
import opAllergen from "./menu/objects/opAllergen";
import opItem from "./menu/objects/opItem";
import optionVisibilitySettings from "./menu/objects/optionVisibilitySettings";
import displayGroup from "./menu/documents/displayGroup";
import modifier from "./menu/documents/modifier";
import modifierMultiplier from "./menu/documents/modifierMultiplier";
import pickerAspect from "./menu/documents/pickerAspect";
import pickerAspectValue from "./menu/objects/pickerAspectValue";
import pickerAspectItemOptions from "./menu/objects/pickerAspectItemOptions";
import combo from "./menu/documents/combo";
import comboSlot from "./menu/documents/comboSlot";
import comboSlotOption from "./menu/objects/comboSlotOption";
import dayPart from "./menu/objects/dayPart";
import itemOption from "./menu/objects/itemOption";
import itemOptionModifier from "./menu/objects/itemOptionModifier";
import localeFile from "./menu/util/localeFile";
import localeImage from "./menu/util/localeImage";
import localeImages from "./menu/util/localeImages";
import localeString from "./menu/util/localeString";
import localeSlug from "./appData/utils/localeSlug";
import localeBlockContent from "./menu/util/localeBlockContent";
import appVersion from "./appData/documents/appVersion";
import optInSettingBoolean from "./appData/objects/optInSettingBoolean";
import optInSettingEnum from "./appData/objects/optInSettingEnum";
import optInSettingEmailAndPush from "./appData/objects/optInSettingEmailAndPush";
import parentChildPlu from "./menu/objects/parentChildPlu";
import plu from "./menu/objects/plu";
import sizeBasedPlu from "./menu/objects/sizeBasedPlu";
import vendorConfig from "./menu/objects/vendorConfig";
import vendorConfigs from "./menu/objects/vendorConfigs";
import vendorPlus from "./menu/objects/vendorPlus";
import picker from "./menu/documents/picker";
import pickerOption from "./menu/objects/pickerOption";
import pricingRegionPrice from "./menu/objects/pricingRegionPrice";
import opPricingRegion from "./menu/documents/opPricingRegion";
import offerRequirementCode from "./menu/objects/offerRequirementCode";
import offerRequirementPlatform from "./menu/objects/offerRequirementPlatform";
import offerRequirementPurchase from "./menu/objects/offerRequirementPurchase";
import offerRequirementUser from "./menu/objects/offerRequirementUser";
import quickConfig from "./menu/objects/quickConfig";
import quickConfigRule from "./menu/objects/quickConfigRule";
import address from "./location/objects/address";
import hoursOfOperation from "./location/objects/hoursOfOperation";
import kiosk from "./location/objects/kiosk";
import pluData from "./location/objects/pluData";
import pos from "./menu/util/pos";
import listItem from "./menu/objects/listItem";
import images from "./menu/util/images";
import requirements from "./menu/objects/requirements";
import restaurant from "./location/documents/restaurant";
import restaurantKioskData from "./location/documents/restaurantKioskData";
import restaurantPosData from "./location/documents/restaurantPosData";
import channelExclusions from "./menu/util/channelExclusions";
import staticStringsDictionary from "./languageStrings/documents/staticStringsDictionary";
import storeLocatorContent from "./appData/objects/storeLocatorContent";
import staticPage from "./appData/documents/staticPage";
import textCard from "./appData/objects/textCard";
import footer from "./appData/documents/footer";
// import css from './appData/objects/css';
// import html from './appData/objects/html';
import linkAction from "./appData/objects/linkAction";
import simpleCard from "./appData/objects/simpleCard";
import previewEntry from "./appData/objects/previewEntry";
import previewWidget from "./appData/objects/previewWidget";
import nutritionExplorerWidget from "./appData/objects/nutrition-explorer-widget";
import accordionEntry from "./appData/objects/accordionEntry";
import accordionWidget from "./appData/objects/accordionWidget";
import headerWidget from "./appData/objects/headerWidget";
import localeBlockTextWidget from "./appData/objects/localeBlockTextWidget";
import imageWidget from "./appData/objects/imageWidget";
import callToAction from "./appData/objects/callToAction";
import anchorWidget from "./appData/objects/anchorWidget";
import anchorLinksWidget from "./appData/objects/anchorLinksWidget";
import callToActionWidget from "./appData/objects/callToActionWidget";
import doubleImageWidget from "./appData/objects/doubleImageWidget";
import videoWidget from "./appData/objects/videoWidget";
import quoteWidget from "./appData/objects/quoteWidget";
import nutritionInfoWidget from "./appData/objects/nutritionInfoWidget";
import multiWidget from "./appData/objects/multiWidget";
import navigationSection from "./appData/documents/navigationSection";
import nutritionalSection from "./appData/documents/nutritionalSection";
import cardInformationTranslations from "./languageStrings/objects/cardInformationTranslations";
import loyaltyTranslations from "./languageStrings/objects/loyaltyTranslations";
import userAccountTranslations from "./languageStrings/objects/userAccountTranslations";
import errorsTranslations from "./languageStrings/objects/errorsTranslations";
import homeScreenTranslations from "./languageStrings/objects/homeScreenTranslations";
import multipleScreensTranslations from "./languageStrings/objects/multipleScreensTranslations";
import paymentScreenTranslations from "./languageStrings/objects/paymentScreenTranslations";
import orderPreparationTranslations from "./languageStrings/objects/orderPreparationTranslations";
import linksTranslations from "./languageStrings/objects/linksTranslations";
import externalLink from "./appData/objects/externalLink";
import supportCategory from "./menu/objects/supportCategory";
import supportData from "./menu/documents/support";
import titleAndBody from "./appData/objects/titleAndBody";
import tabsContent from "./appData/objects/tabsContent";
import category from "./loyalty/documents/category";
import loyaltyConfiguration from "./loyalty/documents/loyaltyConfiguration";
import loyaltyContent from "./loyalty/documents/loyaltyContent";
import tier from "./loyalty/documents/tier";
import rollUpTheRim from "./promotions/documents/rollUpTheRim";
import prizes from "./promotions/objects/prizes";
import rewards from "./promotions/objects/rewards";
import timelineComponents from "./promotions/objects/timelineComponents";
import tastySwap from "./appData/objects/tasty-swap";
import tastySwaps from "./appData/objects/tasty-swaps";

import link from "./appData/objects/link";
import sanityDynamicContent from "./appData/objects/sanityDynamicContent";

// Then import schema types from any plugins that might expose them
import pickerItemMapping from "./menu/objects/pickerItemMapping";
import blockContentImage from "./menu/objects/blockContentImage";
import blacklistCharacterReplaceRule from "./appData/objects/blacklistCharacterReplaceRule";
import kioskAppData from "./appData/documents/kioskAppData";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Documents
    menu,
    section,
    picker,
    pickerAspect,
    combo,
    comboSlot,
    item,
    modifier,
    modifierMultiplier,
    offer,
    offerActivation,
    // appData,
    appVersion,
    footer,
    opPricingRegion,
    restaurant,
    restaurantKioskData,
    restaurantPosData,
    // staticPage,
    staticStringsDictionary,
    // navigationSection,
    nutritionalSection,
    displayGroup,
    kioskAppData,
    supportData,
    // Loyalty
    category,
    loyaltyConfiguration,
    tier,
    loyaltyContent,
    // Promotions
    rollUpTheRim,
    prizes,
    rewards,
    timelineComponents,
    // Widgets for Static Pages
    previewEntry,
    previewWidget,
    nutritionExplorerWidget,
    accordionEntry,
    accordionWidget,
    localeBlockTextWidget,
    headerWidget,
    imageWidget,
    anchorWidget,
    anchorLinksWidget,
    callToAction,
    callToActionWidget,
    doubleImageWidget,
    videoWidget,
    quoteWidget,
    nutritionInfoWidget,
    multiWidget,
    // Objects
    address,
    appDownloadSection,
    blacklistCharacterReplaceRule,
    blockContent,
    blockContentImage,
    cardInformationTranslations,
    channelExclusions,
    comboSlotOption,
    dayPart,
    // css,
    optInSettingEnum,
    optInSettingBoolean,
    optInSettingEmailAndPush,
    errorsTranslations,
    externalLink,
    supportCategory,
    favoriteSection,
    homeGraphic,
    homeScreenTranslations,
    hoursOfOperation,
    // html,
    kiosk,
    link,
    listItem,
    images,
    itemOption,
    itemOptionModifier,
    linkAction,
    linksTranslations,
    loader,
    loadingGraphics,
    localeBlockContent,
    localeFile,
    localeImage,
    localeImages,
    localeSlug,
    localeString,
    loyaltyTranslations,
    multipleScreensTranslations,
    nutrition,
    offerRequirementCode,
    offerRequirementPlatform,
    offerRequirementPurchase,
    offerRequirementUser,
    opAllergen,
    opItem,
    orderPreparationTranslations,
    paymentScreenTranslations,
    optionVisibilitySettings,
    pickerAspectValue,
    pickerAspectItemOptions,
    pickerItemMapping,
    pickerOption,
    pluData,
    pos,
    pricingRegionPrice,
    plu,
    quickConfig,
    quickConfigRule,
    requirements,
    ruleAnd,
    ruleCartTotal,
    ruleCoolDown,
    ruleDayOfTheWeek,
    ruleItemRequirement,
    ruleRequiresLogin,
    ruleRequiresAssignment,
    ruleOr,
    ruleFirstPurchase,
    ruleRedemptionLimit,
    ruleTimeBand,
    ruleDateBand,
    sanityDynamicContent,
    simpleCard,
    storeLocatorContent,
    tabsContent,
    tastySwap,
    tastySwaps,
    textCard,
    titleAndBody,
    userAccountTranslations,
    parentChildPlu,
    sizeBasedPlu,
    vendorConfig,
    vendorConfigs,
    vendorPlus
  ])
});
