/**
 * Mischief
 * @module MischiefOptions
 * @author The Harvard Library Innovation Lab
 * @license MIT
 */

/**
 * Available options and defaults for Mischief.
 * Unless specified otherwise at constructor level, Mischief will run with these settings.
 * 
 * @property {boolean} verbose - Should log entries be printed as they are created? Defaults to `true`.
 * @property {boolean} headless - Should Playwright run in headless mode? Defaults to `false`.
 * @property {string} proxyHost - What host should Playwright proxy through for capture? Defaults to `localhost`.
 * @property {number} proxyPort - What port should Playwright proxy through for capture? Defaults to 9000.
 * @property {boolean} proxyVerbose - Should log entries from the proxy be printed? Defaults to `false`.
 * @property {number} totalTimeout - How long should Mischief wait for all steps in the capture to complete, in ms? Defaults to 5min.
 * @property {number} loadTimeout - How long should Mischief wait for the page to load, in ms? Defaults to 30s.
 * @property {number} networkIdleTimeout - How long should Mischief wait for network events to complete, in ms. Defaults to 30s.
 * @property {number} behaviorsTimeout - How long should Mischief wait for media to play, secondary resources, and site specific behaviors (in total)? Defaults to 60s.
 * @property {boolean} keepPartialResponses - Should Mischief keep partially downloaded resources? Defaults to `true`.
 * @property {number} maxSize - Maximum size, in bytes, for the exchanges list. Defaults to 200Mb.
 * @property {boolean} screenshot - Should Mischief try to make a screenshot? Defaults to `true`. Screenshot will be added as `file:///screenshot.png` in the exchanges list.
 * @property {boolean} domSnapshot - Should Mischief save a snapshot of the rendered DOM? Defaults to `true`. Added as `file:///dom-snapshot.html` in the exchanges list.
 * @property {boolean} captureVideoAsAttachment - If `true`, will try to capture the main video that may be present in this page as `file:///video-extracted.mp4`. Will also save associated meta data as `file:///video-extracted-metadata.json`. This capture happens out of the browser. Defaults to `true`.
 * @property {number} captureVideoAsAttachmentTimeout - How long should Mischief wait for `captureVideoAsAttachment` to finish. Defaults to 30s.
 * @property {number} captureWindowX - Browser window resolution in pixels: X axis. Defaults to 1600.
 * @property {number} captureWindowY - Browser window resolution in pixels: Y axis. Defaults to 900.
 * @property {boolean} autoScroll - Should Mischief try to scroll through the page? Defaults to `true`.
 * @property {boolean} autoPlayMedia - Should Mischief try to autoplay `<audio>` and `<video>` tags? Defaults to `true`.
 * @property {boolean} grabSecondaryResources - Should Mischief try to download img srcsets and secondary stylesheets? Defaults to `true`.
 * @property {boolean} runSiteSpecificBehaviors - Should Mischief run behaviors tailored to specific sites (ex: Twitter) in an attempt to better grab the page? Defaults to `true`.
 * @property {string} intercepter - Network interception method to be used. Available at the moment: "Proxy".
 */
export const MischiefOptions = {
  verbose: true,
  headless: false,
  proxyHost: "localhost",
  proxyPort: 9000,
  proxyVerbose: false,
  totalTimeout: 2 * 60 * 1000,
  loadTimeout: 30 * 1000,
  networkIdleTimeout: 30 * 1000, 
  behaviorsTimeout: 60 * 1000,
  keepPartialResponses: true,
  maxSize: 200 * 1024 * 1024,
  screenshot: true,
  domSnapshot: true,
  captureVideoAsAttachment: true,
  captureVideoAsAttachmentTimeout: 30 * 1000,
  captureWindowX: 1600,
  captureWindowY: 900,
  autoScroll: true,
  autoPlayMedia: true,
  grabSecondaryResources: true,
  runSiteSpecificBehaviors: true,
  intercepter: 'MischiefProxy'
};
