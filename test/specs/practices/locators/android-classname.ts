describe('Locator Strategies', () => {

    it('Find Element by Class Name', async () => {
        // Locating element using Class Name
        const productHeader = await $('android.widget.TextView'); // returns the first element if multiple elements are found with same class name
        console.log('PRODUCT HEADER TEXT: ', await productHeader.getText())
        await expect(productHeader).toHaveText('Products');
    });

})  