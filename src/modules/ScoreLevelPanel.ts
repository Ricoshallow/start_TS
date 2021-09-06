class ScoreLevelPanel {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxLevel: number
    upScore: number
    constructor(maxLevel: number =10, upScore: number = 10){
        this.scoreEle = document.getElementById('scorenum')!
        this.levelEle = document.getElementById('levelnum')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ''
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
    }
    levelUp(){
        if (this.level<this.maxLevel){
            this.levelEle.innerHTML = ++this.level + ''
        }
        
    }
}

export default ScoreLevelPanel

// const panel = new ScoreLevelPanel()
// console.log(panel);
// panel.levelUp()
// panel.addScore()