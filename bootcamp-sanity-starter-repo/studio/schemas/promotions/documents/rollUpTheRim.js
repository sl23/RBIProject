export default {
  title: 'Roll Up The Rim',
  name: 'rollUpTheRim',
  type: 'document',
  liveEdit: true,
  fieldsets: [
    {
      title: 'Landing Page Game Play',
      name: 'landingPageGamePlay',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Landing Page Timeline',
      name: 'landingPageTimeline',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Landing Page Share',
      name: 'landingPageShare',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Landing Page Prizes',
      name: 'landingPagePrizes',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Landing Page Winners',
      name: 'landingPageWinners',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Landing Page Reusable',
      name: 'landingPageReusable',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Tabbed Modal Timeline',
      name: 'tabbedModalTimeline',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Tabbed Modal Prizes',
      name: 'tabbedModalPrizes',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Tabbed Modal Winners',
      name: 'tabbedModalWinners',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Game Play',
      name: 'gamePlay',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Rewards',
      name: 'rewards',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Homepage Card',
      name: 'homepageCard',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Share Rolls',
      name: 'shareRolls',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    /* Landing Page Game Play */
    {
      title: 'Game Play Header',
      name: 'gamePlayHeader',
      fieldset: 'landingPageGamePlay',
      type: 'localeBlockContent',
    },
    {
      title: 'Game Play Text Block',
      name: 'gamePlayTextBlock',
      fieldset: 'landingPageGamePlay',
      type: 'localeBlockContent',
    },
    {
      title: 'Game Play Image',
      name: 'gamePlayImage',
      fieldset: 'landingPageGamePlay',
      type: 'localeImages',
    },
    {
      title: 'Desktop Game Play Image',
      name: 'desktopGamePlayImage',
      fieldset: 'landingPageGamePlay',
      type: 'localeImages',
    },
    {
      title: 'Game Play Button Text',
      name: 'gamePlayButtonText',
      fieldset: 'landingPageGamePlay',
      type: 'localeBlockContent',
    },
    {
      title: 'Rolls Remaining Text',
      name: 'rollsRemainingText',
      fieldset: 'landingPageGamePlay',
      type: 'localeBlockContent',
    },
    /* Landing Page Timeline */
    {
      title: 'Timeline Header',
      name: 'timelineHeader',
      fieldset: 'landingPageTimeline',
      type: 'localeBlockContent',
    },
    {
      title: 'Timeline Text Block',
      name: 'timelineTextBlock',
      fieldset: 'landingPageTimeline',
      type: 'localeBlockContent',
    },
    {
      title: 'Timeline Components',
      name: 'timelineComponents',
      fieldset: 'landingPageTimeline',
      type: 'array',
      of: [{ type: 'timelineComponents' }],
    },
    {
      title: 'Timeline Button Text',
      name: 'timelineButtonText',
      fieldset: 'landingPageTimeline',
      type: 'localeBlockContent',
    },
    /* Landing Page Share */
    {
      title: 'Share Header',
      name: 'shareHeader',
      fieldset: 'landingPageShare',
      type: 'localeBlockContent',
    },
    {
      title: 'Share Text Block',
      name: 'shareTextBlock',
      fieldset: 'landingPageShare',
      type: 'localeBlockContent',
    },
    {
      title: 'Share Button Text',
      name: 'shareButtonText',
      fieldset: 'landingPageShare',
      type: 'localeBlockContent',
    },
    {
      title: 'Share Image',
      name: 'shareImage',
      fieldset: 'landingPageShare',
      type: 'localeImages',
    },
    {
      title: 'Desktop Share Image',
      name: 'desktopShareImage',
      fieldset: 'landingPageShare',
      type: 'localeImages',
    },
    /* Landing Page Prizes */
    {
      title: 'Prizes Header',
      name: 'prizesHeader',
      fieldset: 'landingPagePrizes',
      type: 'localeBlockContent',
    },
    {
      title: 'Prizes Text Block',
      name: 'prizesTextBlock',
      fieldset: 'landingPagePrizes',
      type: 'localeBlockContent',
    },
    {
      title: 'Prizes Button Text',
      name: 'prizesButtonText',
      fieldset: 'landingPagePrizes',
      type: 'localeBlockContent',
    },
    {
      title: 'Prizes Image',
      name: 'prizesImage',
      fieldset: 'landingPagePrizes',
      type: 'localeImages',
    },
    {
      title: 'Plane Image',
      name: 'planeImage',
      description:
        'image includes a transparent background above the plane, and white background below the plane',
      fieldset: 'landingPagePrizes',
      type: 'localeImages',
    },
    {
      title: 'Sponsors Title',
      name: 'sponsorTitle',
      fieldset: 'landingPagePrizes',
      type: 'localeString',
    },
    {
      title: 'Sponsors Image',
      name: 'sponsorsImage',
      fieldset: 'landingPagePrizes',
      type: 'localeImages',
    },
    {
      title: 'Desktop Prizes Image',
      name: 'desktopPrizesImage',
      fieldset: 'landingPagePrizes',
      type: 'localeImages',
    },
    /* Landing Page Winners */
    {
      title: 'Winners Header',
      name: 'winnersHeader',
      fieldset: 'landingPageWinners',
      type: 'localeBlockContent',
    },
    {
      title: 'Winners Text Block',
      name: 'winnersTextBlock',
      fieldset: 'landingPageWinners',
      type: 'localeBlockContent',
    },
    {
      title: 'Winners Button Text',
      name: 'winnersButtonText',
      fieldset: 'landingPageWinners',
      type: 'localeBlockContent',
    },
    /* Landing Page Reusable */
    {
      title: 'Reusables Header',
      name: 'reusablesHeader',
      fieldset: 'landingPageReusable',
      type: 'localeBlockContent',
    },
    {
      title: 'Reusables Text Block',
      name: 'reusablesTextBlock',
      fieldset: 'landingPageReusable',
      type: 'localeBlockContent',
    },
    {
      title: 'Reusables Button Text',
      name: 'reusablesButtonText',
      fieldset: 'landingPageReusable',
      type: 'localeBlockContent',
    },
    {
      title: 'Reusables Image',
      name: 'reusablesImage',
      fieldset: 'landingPageReusable',
      type: 'localeImages',
    },
    {
      title: 'Desktop Reusables Image',
      name: 'desktopReusablesImage',
      fieldset: 'landingPageReusable',
      type: 'localeImages',
    },
    /* Tabbed Modal Timeline */
    {
      title: 'Modal Timeline Header',
      name: 'modalTimelineHeader',
      fieldset: 'tabbedModalTimeline',
      type: 'localeBlockContent',
    },
    {
      title: 'End Text',
      name: 'endText',
      fieldset: 'tabbedModalTimeline',
      type: 'localeBlockContent',
    },
    /* Tabbed Modal Prizes */
    {
      title: 'Countdown Text',
      name: 'countdownText',
      fieldset: 'tabbedModalPrizes',
      type: 'localeBlockContent',
    },
    {
      title: 'Entries Text',
      name: 'entriesText',
      fieldset: 'tabbedModalPrizes',
      type: 'localeBlockContent',
    },
    {
      title: 'Next Draw Text',
      name: 'nextDrawText',
      fieldset: 'tabbedModalPrizes',
      type: 'localeBlockContent',
    },
    {
      title: 'First Drawing',
      name: 'firstDrawing',
      fieldset: 'tabbedModalPrizes',
      type: 'datetime',
    },
    {
      title: 'Second Drawing',
      name: 'secondDrawing',
      fieldset: 'tabbedModalPrizes',
      type: 'datetime',
    },
    {
      title: 'Third Drawing',
      name: 'thirdDrawing',
      fieldset: 'tabbedModalPrizes',
      type: 'datetime',
    },
    {
      title: 'Fourth Drawing',
      name: 'fourthDrawing',
      fieldset: 'tabbedModalPrizes',
      type: 'datetime',
    },
    {
      title: 'Money Stack Image',
      name: 'moneyStackImage',
      fieldset: 'tabbedModalPrizes',
      type: 'localeImages',
    },
    {
      title: 'Prizes',
      name: 'prizes',
      fieldset: 'tabbedModalPrizes',
      type: 'array',
      of: [{ type: 'prizes' }],
    },
    /* Tabbed Modal Winners */
    {
      title: 'Modal Winners Header',
      name: 'modalWinnersHeader',
      fieldset: 'tabbedModalWinners',
      type: 'localeBlockContent',
    },
    {
      title: 'Modal Winners Text Block',
      name: 'modalWinnersTextBlock',
      fieldset: 'tabbedModalWinners',
      type: 'localeBlockContent',
    },
    /* Gameplay */
    {
      title: 'Game Header',
      name: 'gameHeader',
      fieldset: 'gamePlay',
      type: 'localeBlockContent',
    },
    {
      title: 'Game Text Block',
      name: 'gameTextBlock',
      fieldset: 'gamePlay',
      type: 'localeBlockContent',
    },
    {
      title: 'Cup Image',
      name: 'cupImage',
      fieldset: 'gamePlay',
      type: 'localeImages',
    },
    {
      title: 'Game Background Image',
      name: 'gameBackgroundImage',
      fieldset: 'gamePlay',
      type: 'localeImages',
    },
    {
      title: 'Game Button Text',
      name: 'gameButtonText',
      fieldset: 'gamePlay',
      type: 'localeBlockContent',
    },
    /* Rewards */
    {
      title: 'Rewards Header',
      name: 'rewardsHeader',
      fieldset: 'rewards',
      type: 'localeBlockContent',
    },
    {
      title: 'Rewards Text Block',
      name: 'rewardsTextBlock',
      fieldset: 'rewards',
      type: 'localeBlockContent',
    },
    {
      title: 'Rewards Cup Image',
      name: 'rewardsCupImage',
      fieldset: 'rewards',
      type: 'localeImages',
    },
    {
      title: 'Rewards Background Image',
      name: 'rewardsBackgroundImage',
      fieldset: 'rewards',
      type: 'localeImages',
    },
    {
      title: 'Rewards Button Text',
      name: 'rewardsButtonText',
      fieldset: 'rewards',
      type: 'localeBlockContent',
    },
    {
      title: 'Rewards',
      name: 'rewards',
      fieldset: 'rewards',
      type: 'array',
      of: [{ type: 'rewards' }],
    },
    /* Homepage Card */
    {
      title: 'Homepage Header',
      name: 'homepageHeader',
      fieldset: 'homepageCard',
      type: 'localeBlockContent',
    },
    {
      title: 'Homepage Cup Image',
      name: 'homepageCupImage',
      fieldset: 'homepageCard',
      type: 'localeImages',
    },
    {
      title: 'Homepage Background Image',
      name: 'homepageBackgroundImage',
      fieldset: 'homepageCard',
      type: 'localeImages',
    },
    {
      title: 'Enter Button Text',
      name: 'enterButtonText',
      fieldset: 'homepageCard',
      type: 'localeBlockContent',
    },
    {
      title: 'RRROLL Button Text',
      name: 'rrrollButtonText',
      fieldset: 'homepageCard',
      type: 'localeBlockContent',
    },
    /* Share Rolls */
    {
      title: 'Share Roll Header',
      name: 'shareRollHeader',
      fieldset: 'shareRolls',
      type: 'localeBlockContent',
    },
    {
      title: 'Share Roll Text Block',
      name: 'shareRollTextBlock',
      fieldset: 'shareRolls',
      type: 'localeBlockContent',
    },
    {
      title: 'Share Rolls Image',
      name: 'shareRollsImage',
      fieldset: 'shareRolls',
      type: 'localeImages',
    },
    {
      title: 'Share Rolls Background Image',
      name: 'shareRollsBackgroundImage',
      fieldset: 'shareRolls',
      type: 'localeImages',
    },
    {
      title: 'How Many Text Block',
      name: 'howManyTextBlock',
      fieldset: 'shareRolls',
      type: 'localeBlockContent',
    },
    {
      title: 'Share Roll Button Text',
      name: 'shareRolluttonText',
      fieldset: 'shareRolls',
      type: 'localeBlockContent',
    },
    {
      title: 'Rollup Animation Frames',
      fieldset: 'gamePlay',
      name: 'rollupAnimationFrames',
      type: 'array',
      of: [{ type: 'localeImages' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Roll Up The Rim',
        subtitle: 'RUTR Assets 2020',
      };
    },
  },
};
