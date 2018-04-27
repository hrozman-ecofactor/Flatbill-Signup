/*
This will enter data into the form and submit the enrollment.
*/
const puppeteer = require('puppeteer');

(async () => {
    //const S_compatibleIsVerified = '#signUp_compatible_isVerified';
    //const S_hasWifi = '#signUp_has_wifi_100_pct';
    //const S_hasCentralAc = '#signUp_has_central_ac';
    const S_totalThermostatsNeeded = '#signUp_total_thermostats_needed';
    //const S_totalCwiresNeeded = '#signUp_total_cwires_needed';
    const S_thermostatColor = '#signUp_thermostat_color';
    const S_btnNextPage = '#btnNextPage';
    const S_utilityFirstName = '#signUp_utility_firstName';
    const S_utilityLastName = '#signUp_utility_lastName';
    const S_utilityLocationAddress1 = '#signUp_utility_location_address1';
    const S_utilityLocationAddress2 = '#signUp_utility_location_address2';
    const S_utilityLocationCity = '#signUp_utility_location_city';
    const S_utilityLocationState = '#signUp_utility_location_state';
    const S_utilityLocationZipcode = '#signUp_utility_location_zipcode';
    const S_utilityPhone = '#signUp_utility_phone';
    const S_utilityEmail = '#signUp_utility_email';
    const S_mostExcited = '#signUp_mostExcited';
    const S_btnLinkUtilityAccount = '#btnLinkUtilityAccount';
    const S_utilityProvider = '#signUp_utility_provider';
    const S_utilityOther = '#utility_other';
    const S_utilityLoginUserId = '#signUp_utility_login_userId';
    const S_utilityPassword = '#signUp_utility_password';
    const S_utilityPasswordRepeat = '#signUp_utility_password_repeat';
    const S_btnUtilityDone = '#btn_utility_done';
    const S_legalAccepted = '#signUp_legal_accepted';
    const S_btnEnroll = '#btn_signup_enroll';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //await page.goto('https://flatbill.thesimple.com/pilot/signup');  // See OPS-15262
    await page.goto('https://flatbill.thesimple.com/site/signup');

    // Page #1
    /* This was removed 4/26/2018
    //await page.click(S_compatibleIsVerified);
    //await page.keyboard.type('No');
    //await page.click(S_totalCwiresNeeded);
    //await page.keyboard.type('2');
    */
    /* This was removed 4/27/2018
    // await page.click(S_hasWifi);
    // await page.keyboard.type('Yes'); // If not yes, the button won't enable
    // await page.click(S_hasCentralAc);
    // await page.keyboard.type('Yes'); // If not yes, the button won't enable
    */
    await page.click(S_totalThermostatsNeeded);
    await page.keyboard.type('2');
    await page.click(S_thermostatColor);
    await page.keyboard.type('Black');
    await page.screenshot({ path: './test_flat_rate_signup_pilot_prod_ss01.png' });
    await page.click(S_btnNextPage);

    // Page #2
    await page.click(S_utilityFirstName);
    await page.keyboard.type('Ops');
    await page.click(S_utilityLastName);
    await page.keyboard.type('Test');
    await page.click(S_utilityLocationAddress1);
    await page.keyboard.type('1450 Veterans Blvd.');
    await page.click(S_utilityLocationAddress2);
    await page.keyboard.type('STE 100');
    await page.click(S_utilityLocationCity);
    await page.keyboard.type('Redwood City');
    await page.click(S_utilityLocationState);
    await page.keyboard.type('California');
    await page.click(S_utilityLocationZipcode);
    await page.keyboard.type('94063');
    await page.click(S_utilityPhone);
    //await page.keyboard.type('+1.650.716.4760'); // They changed format on me
    await page.keyboard.type('650-716-4760');
    await page.click(S_utilityEmail);
    await page.keyboard.type('ops-test@thesimple.com');
    await page.click(S_mostExcited);
    await page.keyboard.type('save money');
    await page.screenshot({ path: './test_flat_rate_signup_pilot_prod_ss02.png' });

    // Page #2 - Bring up pop-up for utility
    await page.click(S_btnLinkUtilityAccount);
    await page.click(S_utilityProvider);
    await page.keyboard.type('Other');
    await page.click(S_utilityOther);
    await page.keyboard.type('Ecofactor');
    await page.click(S_utilityLoginUserId);
    await page.keyboard.type('ops-test');
    await page.click(S_utilityPassword)
    await page.keyboard.type('pw123');
    await page.click(S_utilityPasswordRepeat);
    await page.keyboard.type('pw123');
    await page.screenshot({ path: './test_flat_rate_signup_pilot_prod_ss03.png' });
    await page.click(S_btnUtilityDone);

    // Page #2 - Accept legal terms and then submit
    await page.click(S_legalAccepted);
    await page.screenshot({ path: './test_flat_rate_signup_pilot_prod_ss04.png' });

    // Click the submit button
    await page.click(S_btnEnroll);

    //await page.waitForNavigation();

    // Terminate session
    await browser.close();
}
)();