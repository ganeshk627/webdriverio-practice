describe('Locator Strategies', () => {

    it('Find Element by Accessibility ID', async () => {
        // Locating element using Accessibility ID
        const cartIcon = await $('~cart badge');
        // Clicking the Element
        await cartIcon.click();
        // Asserting change
        const gotShoppingButton = await $('~Go Shopping button');
        await expect(gotShoppingButton).toBeExisting();
    });
    
})