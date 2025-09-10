const { $ } = require('@wdio/globals')
const Page = require('./page')

class DragPage extends Page {
    get target() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(10)') }
    get piece() { return $('android=new UiSelector().className("android.widget.ImageView").instance(4)') }

    async dragPiece() {
        await this.piece.dragAndDrop(this.target)
    }

    open () {
        return super.open('drag')
    }
}

module.exports = new DragPage()
