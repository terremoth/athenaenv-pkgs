export class NineSlice {

    constructor(source) {

        if (!source) {
            console.log("NineSlice error in constructor: the source is null or undefined")
            return
        }

        this.nineSliceImages = source
        this.lastX = null
        this.lastY = null
        this.lastWidth = null
        this.lastHeight = null
    }

    draw(x, y, width, height) {

        if (this.lastX === x && this.lastY === y && this.lastWidth === width && this.lastHeight === height) {

            this.nineSliceImages.forEach(slicedImage => slicedImage.draw(slicedImage.x, slicedImage.y))
            return
        }

        this.lastX = x
        this.lastY = y
        this.lastWidth = width
        this.lastHeight = height

        let topLeft = this.nineSliceImages[0]
        let topMid = this.nineSliceImages[1];
        let topRight = this.nineSliceImages[2]
        let midLeft = this.nineSliceImages[3]
        let center = this.nineSliceImages[4]
        let midRight = this.nineSliceImages[5]
        let bottomLeft = this.nineSliceImages[6]
        let bottomMid = this.nineSliceImages[7]
        let bottomRight = this.nineSliceImages[8]

        let midWidth = Math.max(1, width - topLeft.width - topRight.width)
        let midHeight = Math.max(1, height - topLeft.height - bottomLeft.height)

        topLeft.x = x
        topLeft.y = y

        topMid.x = x + topLeft.width
        topMid.y = y
        topMid.width = midWidth

        topRight.x = x + width - topRight.width
        topRight.y = y

        midLeft.x = x
        midLeft.y = y + topLeft.height
        midLeft.height = midHeight

        center.x = x + topLeft.width
        center.y = y + topLeft.height
        center.width = midWidth
        center.height = midHeight

        midRight.x = x + width - midRight.width
        midRight.y = y + topRight.height
        midRight.height = midHeight

        bottomLeft.x = x
        bottomLeft.y = y + height - bottomLeft.height

        bottomMid.x = x + bottomLeft.width
        bottomMid.y = y + height - bottomMid.height
        bottomMid.width = midWidth

        bottomRight.x = x + width - bottomRight.width
        bottomRight.y = y + height - bottomRight.height

        this.nineSliceImages.forEach(slicedImage => slicedImage.draw(slicedImage.x, slicedImage.y))
    }

    free() {
        
        this.nineSliceImages = null
        std.gc()
    }
}