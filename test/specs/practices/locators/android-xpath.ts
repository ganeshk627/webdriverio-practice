describe('Locator Strategies', () => {
    it('Find elements by Xpath', async () => {
        // find by xpath - "//classname[@attribute=value]"
        await $('//android.view.ViewGroup[@content-desc="open menu"]').click();
        // find by text
        await $('//android.widget.TextView[@text="Log In"]').click();
        // find by xpath-class
        const userNameInput = await $('//android.widget.EditText');
        await userNameInput.click();
        await hideKeyboard();
        await userNameInput.setValue('harry_potter');
        // find by xpath index
        const passwordInput = await $('//android.widget.EditText[2]');
        await passwordInput.click();
        await hideKeyboard();
        await passwordInput.setValue('ExpectoPatronum!');
        // find by contains
        await $('//android.view.ViewGroup[contains(@content-desc, "Login")]').click();
        // wait for error message
        await expect($("~generic-error-message")).toBeDisplayed();
        await expect($("~generic-error-message"))
            .toHaveText("Provided credentials do not match any user in this service.",
                {
                    trim: true,
                    containing: true,
                    ignoreCase: true
                }
            );
        // find by last
        await $('//android.view.ViewGroup[contains(@content-desc, "autofill")][last()]').click();



    });

    const hideKeyboard = async () => {
        // wait for 3 seconds
        await driver.pause(3000);
        // hide keyboard if it is shown
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    /*  // find by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]')
        // find by text
        await $('//android.widget.TextView[@text="Log In"]').click();
        // find by partial text
        await $('//android.widget.TextView[contains(@text, "Forgot")]');
        // find by multiple attributes
        await $('//android.widget.Button[@content-desc="login button"]');
        // find by contains
        await $('//android.widget.TextView[contains(@text, "Log")]');
        // find by starts-with
        await $('//android.widget.TextView[starts-with(@text, "Log")]');
        // find by ends-with
        await $('//android.widget.TextView[ends-with(@text, "In")]');
        // find by following sibling
        await $('//android.widget.TextView[@text="Log In"]/following-sibling::android.widget.TextView');
        // find by preceding sibling
        await $('//android.widget.TextView[@text="Log In"]/preceding-sibling::android.widget.TextView');
        // find by parent
        await $('//android.widget.TextView[@text="Log In"]/parent::android.view.ViewGroup');
        // find by child
        await $('//android.view.ViewGroup[@content-desc="open menu"]/child::android.widget.TextView');
        // find by ancestor
        await $('//android.widget.TextView[@text="Log In"]/ancestor::android.view.ViewGroup');
        // find by descendant
        await $('//android.view.ViewGroup[@content-desc="open menu"]/descendant::android.widget.TextView');
        // find by logical operator AND
        await $('//android.widget.TextView[@text="Log In" and @content-desc="login button"]');
        // find by logical operator OR
        await $('//android.widget.TextView[@text="Log In" or @content-desc="login button"]');
        // find by index
        await $('//android.widget.TextView[1]');
        // find by last
        await $('//android.widget.TextView[last()]');
        // find by position
        await $('//android.widget.TextView[position()=1]'); */
})