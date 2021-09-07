/**Game controller */
import Snake from "./Snake";
import Food from "./Food";
import ScoreLevelPanel from "./scoreLevelPanel";

class GameControll {
    snake: Snake
    food: Food
    scoreLevelPanel: ScoreLevelPanel
    direction: string = ''
    timer: any
    isAlive: boolean = true
    lastDirection: string = ''
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scoreLevelPanel = new ScoreLevelPanel()
    }
    init() {
        document.addEventListener('keydown', this.keydownEvenetHandler.bind(this))
    }
    keydownEvenetHandler(e: KeyboardEvent) {
        if (!this.isAlive) { return }
        // console.log(e,this);
        this.direction = e.key
        
        clearTimeout(this.timer)
        this.run()
        

    }
    run() {
        let x = this.snake.X
        let y = this.snake.Y
        switch (this.direction) {
            case 'ArrowUp':
                y = y - 10
                break
            case 'ArrowDown':
                y = y + 10
                break
            case 'ArrowLeft':
                x = x - 10
                break
            case 'ArrowRight':
                x = x + 10
                break
        }
        // Determine if the game has stopped
        try {
            this.snake.X = x
            this.snake.Y = y
            this.statistic()
            this.snake.move()
            if (this.isAlive) {
                this.timer = setTimeout(() => {
                    this.run()
                }, 300 - (this.scoreLevelPanel.level - 1) * 30)
            }
        } catch (e: any) {
            alert(e.message)
            this.isAlive = false
        }

    }
    statistic() {
        if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
            this.food.change()
            this.snake.addBody()
            console.log(this.snake.body);

            this.scoreLevelPanel.addScore()
        }
    }
}

export default GameControll