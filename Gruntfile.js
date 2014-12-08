var generate_bake_content = function(locale, paypal_locale, show_email_signup, currency, currency_display, return_url) {
  var bake_content = require("./0-donation-forms/locales/" + locale + "/bsd-form-donation.json");

  bake_content["currency"] = currency;
  bake_content["currency_display"] = currency_display;
  bake_content["locale"] = paypal_locale;
  bake_content["return_url"] = return_url;
  bake_content["show_email_signup"] = show_email_signup;

  return bake_content;
};

var generatePayPalPage = function(currency_code, min_amount, currency_symbol, paypal_locale, locale, currency_dup) {
  var path_code = currency_dup ? currency_dup : currency_code;
  var locale_content;
  if(locale) {
    locale_content = require("./0-content-page/EOYFR2014-PayPal-Donate/locales/" + currency_code + "/locale-" + locale + ".json");
  } else {
    locale_content = require("./0-content-page/EOYFR2014-PayPal-Donate/locales/USD/locale.json");
  }
  locale_content["currency_code"] = currency_code;
  locale_content["min_amount"] = min_amount;
  locale_content["currency_symbol"] = currency_symbol;
  locale_content["locale"] = paypal_locale;

  locale_content = JSON.parse(JSON.stringify(locale_content).replace(/{{ min_amount }}/, function(m, k) {
    return min_amount
  }));
  locale_content = JSON.parse(JSON.stringify(locale_content).replace(/{{ currency_symbol }}/, function(m, k) {
    return currency_symbol
  }));

  var bake_content = {
    options: {
      content: locale_content
    },
    files: {}
  };
  bake_content.files["compiled/paypal/" + path_code + "/EOYFR2014-PayPal-Donate.html"] = "0-content-page/EOYFR2014-PayPal-Donate/template.html";
  bake_content.files["compiled/paypal/" + path_code + "/EOYFR2014-PayPal-Donate-content.html"] = "0-content-page/EOYFR2014-PayPal-Donate/page-content.html";
  return bake_content;
};

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {});

  grunt.initConfig({
    bake: {
      'en_US': {
        options: {
          content: generate_bake_content(
            "en_US",
            "US",
            true,
            "USD",
            "",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor"
          )
        },
        files: {
          // add whichever files you're working on here
          'compiled/en_US/EOY-content-page-bitcoin-donate.html': '0-content-page/EOYFR2014-Bitcoin-Donate/template.html',
          'compiled/en_US/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/en_US/EOY-donation-form-single-above.html': '0-donation-forms/EOY-donation-form-single/above-form-content.html',
          'compiled/en_US/EOY-donation-form-single-below.html': '0-donation-forms/EOY-donation-form-single/below-form-content.html',
          // sequential
          'compiled/en_US/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/en_US/EOY-donation-form-sequential-above.html': '0-donation-forms/EOY-donation-form-sequential/above-form-content.html',
          'compiled/en_US/EOY-donation-form-sequential-below.html': '0-donation-forms/EOY-donation-form-sequential/below-form-content.html',
          // post donation
          'compiled/en_US/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html',
          'compiled/en_US/EOY-signup-form-post-donation-above.html': '0-email-signup-form/EOYFR2014-Donor/above-form-content.html',
          'compiled/en_US/EOY-signup-form-post-donation-below.html': '0-email-signup-form/EOYFR2014-Donor/below-form-content.html'
        }
      },
      'de': {
        options: {
          content: generate_bake_content(
            "de",
            "DE",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-de"
          )
        },
        files: {
          // add whichever files you're working on here
          'compiled/de/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/de/EOY-donation-form-single-above.html': '0-donation-forms/EOY-donation-form-single/above-form-content.html',
          'compiled/de/EOY-donation-form-single-below.html': '0-donation-forms/EOY-donation-form-single/below-form-content.html',
          // sequential
          'compiled/de/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/de/EOY-donation-form-sequential-above.html': '0-donation-forms/EOY-donation-form-sequential/above-form-content.html',
          'compiled/de/EOY-donation-form-sequential-below.html': '0-donation-forms/EOY-donation-form-sequential/below-form-content.html',
          // post donation
          'compiled/de/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html',
          'compiled/de/EOY-signup-form-post-donation-above.html': '0-email-signup-form/EOYFR2014-Donor/above-form-content.html',
          'compiled/de/EOY-signup-form-post-donation-below.html': '0-email-signup-form/EOYFR2014-Donor/below-form-content.html'
        }
      },
      'fr': {
        options: {
          content: generate_bake_content(
            "fr",
            "FR",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-fr"
          )
        },
        files: {
          // add whichever files you're working on here
          'compiled/fr/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/fr/EOY-donation-form-single-above.html': '0-donation-forms/EOY-donation-form-single/above-form-content.html',
          'compiled/fr/EOY-donation-form-single-below.html': '0-donation-forms/EOY-donation-form-single/below-form-content.html',
          // sequential
          'compiled/fr/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/fr/EOY-donation-form-sequential-above.html': '0-donation-forms/EOY-donation-form-sequential/above-form-content.html',
          'compiled/fr/EOY-donation-form-sequential-below.html': '0-donation-forms/EOY-donation-form-sequential/below-form-content.html',
          // post donation
          'compiled/fr/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html',
          'compiled/fr/EOY-signup-form-post-donation-above.html': '0-email-signup-form/EOYFR2014-Donor/above-form-content.html',
          'compiled/fr/EOY-signup-form-post-donation-below.html': '0-email-signup-form/EOYFR2014-Donor/below-form-content.html'
        }
      },
      'pt_BR': {
        options: {
          content: generate_bake_content(
            "pt_BR",
            "pt_BR",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-pt-BR"
          )
        },
        files: {
          // add whichever files you're working on here
          'compiled/pt_BR/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/pt_BR/EOY-donation-form-single-above.html': '0-donation-forms/EOY-donation-form-single/above-form-content.html',
          'compiled/pt_BR/EOY-donation-form-single-below.html': '0-donation-forms/EOY-donation-form-single/below-form-content.html',
          // sequential
          'compiled/pt_BR/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/pt_BR/EOY-donation-form-sequential-above.html': '0-donation-forms/EOY-donation-form-sequential/above-form-content.html',
          'compiled/pt_BR/EOY-donation-form-sequential-below.html': '0-donation-forms/EOY-donation-form-sequential/below-form-content.html',
          // post donation
          'compiled/pt_BR/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html',
          'compiled/pt_BR/EOY-signup-form-post-donation-above.html': '0-email-signup-form/EOYFR2014-Donor/above-form-content.html',
          'compiled/pt_BR/EOY-signup-form-post-donation-below.html': '0-email-signup-form/EOYFR2014-Donor/below-form-content.html'
        }
      },
      'id': {
        options: {
          content: generate_bake_content(
            "id",
            "id_ID",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-id"
          )
        },
        files: {
          // add whichever files you're working on here
          'compiled/id/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/id/EOY-donation-form-single-above.html': '0-donation-forms/EOY-donation-form-single/above-form-content.html',
          'compiled/id/EOY-donation-form-single-below.html': '0-donation-forms/EOY-donation-form-single/below-form-content.html',
          // sequential
          'compiled/id/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/id/EOY-donation-form-sequential-above.html': '0-donation-forms/EOY-donation-form-sequential/above-form-content.html',
          'compiled/id/EOY-donation-form-sequential-below.html': '0-donation-forms/EOY-donation-form-sequential/below-form-content.html',
          // post donation
          'compiled/id/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html',
          'compiled/id/EOY-signup-form-post-donation-above.html': '0-email-signup-form/EOYFR2014-Donor/above-form-content.html',
          'compiled/id/EOY-signup-form-post-donation-below.html': '0-email-signup-form/EOYFR2014-Donor/below-form-content.html'
        }
      },
      'es': {
        options: {
          content: generate_bake_content(
            "es",
            "ES",
            false,
            "USD",
            "USD",
            "https://sendto.mozilla.org/page/s/EOYFR2014-donor-es"
          )
        },
        files: {
          // single
          'compiled/es/EOY-donation-form-single.html': '0-donation-forms/EOY-donation-form-single/template.html',
          'compiled/es/EOY-donation-form-single-above.html': '0-donation-forms/EOY-donation-form-single/above-form-content.html',
          'compiled/es/EOY-donation-form-single-below.html': '0-donation-forms/EOY-donation-form-single/below-form-content.html',
          // sequential
          'compiled/es/EOY-donation-form-sequential.html': '0-donation-forms/EOY-donation-form-sequential/template.html',
          'compiled/es/EOY-donation-form-sequential-above.html': '0-donation-forms/EOY-donation-form-sequential/above-form-content.html',
          'compiled/es/EOY-donation-form-sequential-below.html': '0-donation-forms/EOY-donation-form-sequential/below-form-content.html',
          // post donation
          'compiled/es/EOY-signup-form-post-donation.html': '0-email-signup-form/EOYFR2014-Donor/template.html',
          'compiled/es/EOY-signup-form-post-donation-above.html': '0-email-signup-form/EOYFR2014-Donor/above-form-content.html',
          'compiled/es/EOY-signup-form-post-donation-below.html': '0-email-signup-form/EOYFR2014-Donor/below-form-content.html'
        }
      },
      // PayPal currencies
      'AUD': generatePayPalPage('AUD', 2, '$', 'AU'),
      'BRL': generatePayPalPage('BRL', 5, 'R$', 'BR', 'pt_BR'),
      'CAD': generatePayPalPage('CAD', 2, '$', 'CA'),
      'CHF': generatePayPalPage('CHF', 2, 'CHF', 'CH', 'de'),
      'CZK': generatePayPalPage('CZK', 45, 'Kč', 'CZ', 'cs'),
      'DKK': generatePayPalPage('DKK', 12, 'kr', 'DK', 'da'),
      'EUR-DE': generatePayPalPage('EUR', 2, '€', 'DE', 'de', 'EUR-DE'),
      'EUR-FR': generatePayPalPage('EUR', 2, '€', 'FR', 'fr', 'EUR-FR'),
      'GBP': generatePayPalPage('GBP', 1, '£', 'GB'),
      'HKD': generatePayPalPage('HKD', 15, '$', 'HK'),
      'HUF': generatePayPalPage('HUF', 490, 'Ft', 'HU', 'hu'),
      'ILS': generatePayPalPage('ILS', 8, '₪', 'IL', 'he'),
      'JPY': generatePayPalPage('JPY', 240, '¥', 'JP', 'ja'),
      'MXN': generatePayPalPage('MXN', 30, '$', 'MX', 'es'),
      'NOK': generatePayPalPage('NOK', 15, 'kr', 'NO', 'no'),
      'NZD': generatePayPalPage('NZD', 3, '$', 'NZ'),
      'PHP': generatePayPalPage('PHP', 90, 'P', 'PHP', 'tl'),
      'PLN': generatePayPalPage('PLN', 7, 'zł', 'PL', 'pl'),
      'RUB': generatePayPalPage('RUB', 100, 'руб', 'RU', 'ru'),
      'SEK': generatePayPalPage('SEK', 15, 'kr', 'SE', 'sv'),
      'THB': generatePayPalPage('THB', 70, '฿', 'TH', 'th'),
      'TWD': generatePayPalPage('TWD', 62, 'NT$', 'TW', 'zh_TW'),
      'USD': generatePayPalPage('USD', 2, '$', 'US')
    },
    watch: {
      server: {
        files: [
          '**/*.{html,json}',
          'Gruntfile.js'
        ],
        tasks: ['bake']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'compiled/*.html'
        ]
      }
    },
    connect: {
      options: {
        port: 9007,
        livereload: 35728,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: 'http://localhost:9007/compiled/'
        }
      }
    }
  });

  grunt.registerTask('dev', [
    'bake',
    'connect:livereload',
    'watch'
  ]);
};
