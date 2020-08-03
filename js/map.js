'use strict';

import Food from './food.js';

class Map{
    constructor (setup) {
        this.selector = setup.selector;
        this.DOM = null;
        this.time = 
        this.width = setup.width;
        this.height = setup.height;
        this.foodCount = 30;
        this.foodMinDistance = 50;
        this.food = [];

        this.init();
    }
    init() {
        const DOM = document.querySelector(this.selector);
        if (DOM) {
            throw 'Provide selector for map.'
        } else {
            this.DOM = DOM;
            this.DOM.style.width = this.width + 'px';
            this.DOM.style.height = this.height + 'px';
        }
        this.growFood();
        window.requestAnimationFrame(this.step);

    }

    step() {
        
    }

    growFood() {
        let params = {};
        for (let i = 0; i <this.foodCount; i++) {
            const position = getPosition();
            params = {
                DOM: this.DOM,
                x: position.x,
                y: position.y
            }
            this.food.push(new Food(params));
        }
    }

    getPosition() {
        let x = 0, y = 0, valid = false, distance = 0;
        const foodCount = this.food.length;
        
        while(!valid) {
            valid = true;

            let x = Math.trunc(Math.random() * this.width),
                y = Math.trunc(Math.random() * this.height);

            for (let i = 0; i < this.foodCount; i++) {
                const food = this.food[i];
                distance = Math.sqrt((food.x - x)* (food.x - x) + (food.y - y)*(food.y - y));
                if (distance <= this.foodMinDistance) {
                    valid = false;
                    break;
                }
            }
        }   
        // Math.trunc(Math.random() * this.width)
        // Math.trunc(Math.random() * this.height)
        return {x: x, y: y}
    }
}

export default Map;