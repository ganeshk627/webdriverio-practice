describe('Locator Strategies', () => {

    it('Find Element by Accessibility ID', async () => {
        // Locating element using Accessibility ID
        const optionApp = await $('~App');
        // Clicking the Element
        await optionApp.click();
        // Asserting change
        const optionActionBar = await $('~Action Bar');
        await expect(optionActionBar).toBeExisting();
    });
    
})