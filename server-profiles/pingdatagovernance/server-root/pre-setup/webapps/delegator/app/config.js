/*
 * Fill in the values for the variables below in order for this app to know
 * more about your local configuration. If a value has a DEFAULT, you only
 * need to uncomment it if you wish to customize it.
 */

/*
 * The hostname for the public Ping Federate instance used with this app.
 * DEFAULT: window.PF_HOST = 'localhost';
 */
window.PF_HOST = 'babb-pf.ping-eng.com';

/*
 * The port for the public Ping Federate instance used with this app.
 * NOTE: If using port 443 along with a base URL with no specified port, comment this out or set to
 * an empty string.
 * DEFAULT: window.PF_PORT = '9031';
 */
window.PF_PORT = '443';

/*
 * The client id that was set up with Ping Federate and intended to be used by this app.
 * DEFAULT: window.DADMIN_CLIENT_ID = 'dadmin';
 */
window.DADMIN_CLIENT_ID = 'dadmin';

/*
 * The hostname for the DS instance the app will be interfacing with. By default, the app assumes it
 * is hosted alongside your DS instance, in which case it does not need to be specified. Only change
 * this variable if you are hosting this application elsewhere.
 * DEFAULT: window.DS_HOST = undefined;
 * window.DS_HOST = undefined;
 */

/*
 * The HTTPS port for the DS instance the app will be interfacing with. By default, the app assumes
 * it is hosted alongside your DS instance, in which case it does not need to be specified. Only
 * change this variable if you are hosting this application elsewhere.
 * DEFAULT: window.DS_PORT = undefined;
 * window.DS_PORT = undefined;
 */

/*
 * The length of time (in minutes) until the session will require a new login attempt
 * DEFAULT: window.TIMEOUT_LENGTH_MINS = 30;
 * window.TIMEOUT_LENGTH_MINS = 30;
 */

/*
 * The filename used as the logo in the header bar, relative to this application's build directory.
 * Note about logos: The size of the image will be scaled down to fit 22px of height and a max-width
 * of 150px. For best results, it is advised to make the image close to this height and width ratio
 * as well as to crop out any blank spacing around the logo to maximize its presentation.
 * e.g. 'my_company_logo.png'
 * DEFAULT: window.HEADER_BAR_LOGO = undefined;
 * window.HEADER_BAR_LOGO = undefined;
 */

/*
 * The namespace for the Delegated Admin API on the DS instance. In most cases, this does not need
 * to be set here.
 * e.g. 'dadmin/v2'
 * DEFAULT: window.DADMIN_API_NAMESPACE = undefined;
 * window.DADMIN_API_NAMESPACE = undefined;
 */

/**
 * Configuration wrapper object for Delegated Admin
 */
window.PD_DADMIN_CONFIG = {
  /**
   * Set to true if the "profile" scope is supported for the Delegated Admin OIDC client on
   * PingFederate and you wish to use it to show the current user's name in the navigation.
   * DEFAULT: false
   */
  PROFILE_SCOPE_ENABLED: true,
};
