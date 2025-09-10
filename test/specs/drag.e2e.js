const DragPage = require('../pageobjects/drag.page')
const NavigationPage = require('../pageobjects/navigation.page')

describe('Drag and Drop quebra-cabeça', () => {
    it('Arrastar peça para o alvo', async () => {
        await NavigationPage.goTo('Drag')
        await DragPage.dragPiece()
    })
})
