describe('Locator Strategies', () => {

    it('Find Element by Class Name', async () => {
        // Locating element using Class Name
        const optionApp = await $('android.widget.TextView'); // returns the first element if multiple elements are found with same class name
        console.log('OPTION TEXT: ', await optionApp.getText())
        await expect(optionApp).toHaveText('API Demos');
    });

})