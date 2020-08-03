class Food {
    constructor (setup) {
        this.parentDOM = setup.DOM;

        this.x = setup.x;
        this.y = setup.y;
        this.stateTime = {
            offspring: 2000,
            young: 2000,
            edible: 5000,
            poison: 5000,
            empty: 4000
        }
        this.state = 'offspring';
        this.time = 0;

        this.init();
    }

    init()  {
        if(!this.parentDOM) {
            return;
        }
        this.render();
    }
    render() {
        const HTML = `<div class="food" style="top: ${this.y}px; left: ${this.x}px;"
        data-state="${this.state}"></div>`;
        this.parentDOM.insertAdjacentHTML('beforeend'. HTML);
    }
}

export default Food;