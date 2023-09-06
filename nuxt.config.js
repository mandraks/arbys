export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",
  
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: "Arby's Puerto Rico",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Welcome to Arby's Puerto Rico! We Have the Meats!",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          hid: "order-delivery-button",
          innerHTML: `
                      (function(e, t, r, n) {
                      var o, c, s;
                      o = e.document, c = t.children[0], s = o.createElement("script"), e.StorefrontSDKObject = "StorefrontSDK", e[e.StorefrontSDKObject] = {
                          executeCommand: function(t, r) {
                              e[e.StorefrontSDKObject].buffer.push([t, r])
                          },
                          buffer: []
                      }, s.async = 1, s.src = 'https://web-apps.cdn4dd.com/webapps/sdk-storefront/latest/sdk.js', t.insertBefore(s, c)
                      })(window, document.head);
  
                      StorefrontSDK.executeCommand('renderFloatingButton', {
                          businessId: 11126991,
                          businessSlug: 'arbys',
                          floatingBar: true,
                          position: 'bottom',
                          buttonAlignment: 'center',
                          backgroundColor: 'transparent',
                          buttonBackgroundColor: '#D92128',
                          borderColor: 'transparent',
                          buttonText: 'Order Pickup & Delivery',
                      });
                  
                  `,
        },
        {
          hid: "gtag-manager",
          src: `https://www.googletagmanager.com/gtag/js?id=G-BW88H2GGSM`,
          // window.dataLayer = window.dataLayer || [];
          // function gtag(){dataLayer.push(arguments);}
          // gtag('js', new Date());
          // gtag('config', 'G-BW88H2GGSM');`
          defer: true,
        },
        {
          hid: "gtm-script2",
          innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
            
                    gtag('config', 'GTM-W9L6MGD');
                  `,
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/css/tailwind.css"],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/tailwindcss
      "@nuxtjs/tailwindcss",
      "@nuxtjs/google-analytics",
    ],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
  
    googleAnalytics: {
      id: "GTM-W9L6MGD",
    },
  };
  