//@see: https://developers.google.com/gtagjs/reference/parameter#control_parameters
export interface GtagConfigInterface {
  groups?: string | string[];
  send_to?: string | string[];
  event_callback?: () => void;
  event_timeout?: number;
  //@see: https://developers.google.com/analytics/devguides/collection/gtagjs#disable_pageview_measurement
  send_page_view?: boolean;
  //@see: https://developers.google.com/analytics/devguides/collection/gtagjs/enhanced-link-attribution
  link_attribution?: boolean;
  //@see: https://developers.google.com/analytics/devguides/collection/gtagjs/ip-anonymization
  anonymize_ip?: boolean;
  //@see: https://developers.google.com/analytics/devguides/collection/gtagjs/display-features
  allow_ad_personalization_signals?: boolean;
  [key: string]: any;
}
