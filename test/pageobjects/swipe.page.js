const { $ } = require('@wdio/globals')
const Page = require('./page')

class SwipePage extends Page {
    get carousel() { return $('~Carousel') }
    get textCardJS() { return $('android=new UiSelector().text("JS.FOUNDATION")') }

    async swipeLeft() {
        const { width, height } = await driver.getWindowRect();
        const startX = width * 0.8;
        const endX = width * 0.2;
        const y = height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: y },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 500, x: endX, y: y },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        await driver.releaseActions();
    }

    async swipeRight() {
        const { width, height } = await driver.getWindowRect();
        const startX = width * 0.2;
        const endX = width * 0.8;
        const y = height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: y },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 500, x: endX, y: y },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        await driver.releaseActions();
    }

    open () {
        return super.open('swipe')
    }
}

module.exports = new SwipePage()
