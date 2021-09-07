class Snake {
    head: HTMLElement
    body: HTMLCollection
    snakeBox: HTMLElement
    constructor() {
        this.head = document.getElementById('head')!
        this.snakeBox = document.getElementById('snake')!
        this.body = this.snakeBox.getElementsByTagName('div')
    }
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    set X(value) {
        if (this.X === value) { return }
        if (value >= 0 && value <= 290) {
            this.head.style.left = value + 'px'

        } else {
            throw new Error('your snake is run into the wall, GAME OVER! ')
        }

    }
    set Y(value) {
        if (this.Y === value) { return }
        if (value >= 0 && value <= 290) {
            this.head.style.top = value + 'px'

        } else {
            throw new Error('your snake is run into the wall, GAME OVER! ')
        }
    }
    addBody() {
        let newBody = document.createElement('div')
        this.snakeBox.appendChild(newBody)
    }
    //  start form head, make next div(body) move to the lcation where last div was.
    move() {
        let lastX = this.X
        let lastY = this.Y
        for (let i = 1; i < this.body.length; i++) {
            let curX = (this.body[i] as HTMLElement).offsetLeft;
            let curY = (this.body[i] as HTMLElement).offsetTop;
            (this.body[i] as HTMLElement).style.left = lastX + 'px';
            (this.body[i] as HTMLElement).style.top = lastY + 'px';
            lastX = curX
            lastY = curY
        }
    }

}

export default Snake