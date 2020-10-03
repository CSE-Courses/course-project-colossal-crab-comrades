﻿import * as React from 'react';
import * as Phaser from 'phaser';
import "./GameStartRenderer.css";





export default class GameMainMenuToggler extends React.Component {

    componentDidMount () {

        var game = new Phaser.Game({
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: "gameCanvas",
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update,
            },
        });
        var controls = null;
    }

    preload(this: Phaser.Scene) {

        //Test Image
        this.load.image('Human', './gameComponents/testBuilder.png');
        
    }
    create(this: Phaser.Scene) {
        this.add.image(200, 200, "Human");

        const logo = this.add.image(400, 150, "Human");


        this.add.text(
            100,
            500,
            "Well text certainly works...", {
            font: "40px Arial",
            fill: "#ffffff"
        }
        );

        this.add.text(
            500,
            520,
            "YEAHHHHH", {
            font: "40px Arial",
            fill: "#ffffff"
        }
        );
      


    }
    update() {

    }

    public render() {
        return (<div id="gameCanvas" />);
    }  
};