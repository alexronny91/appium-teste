const SwipePage = require('../pageobjects/swipe.page')
const NavigationPage = require('../pageobjects/navigation.page')

describe('Swipe no carrossel', () => {
    it('Deslizar para esquerda e direita', async () => {
        await NavigationPage.goTo('Swipe')
        await SwipePage.swipeLeft()
        await SwipePage.swipeLeft()
        await SwipePage.textCardJS.waitForDisplayed()
        expect(await SwipePage.textCardJS.isDisplayed()).toBe(true)
        await SwipePage.swipeRight()
    })
})
