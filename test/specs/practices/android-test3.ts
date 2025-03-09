describe('Locator Strategies', () => {

    it('Find elements by Xpath', async () => {
        await $('~App').click();
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        // find by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
        // find by text
        await $('//android.widget.TextView[@text="Command two"]').click();
        // find by class
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });
})