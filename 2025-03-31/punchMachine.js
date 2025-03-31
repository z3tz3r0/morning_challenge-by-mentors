"use strict";

class ScoreServer {
    static allScore = [];

    static get topThreeScore() {
        // const sortedScores = [...ScoreServer.allScore].sort((a, b) => b - a);
        let sortedScores = ScoreServer.allScore;
        let n = sortedScores.length;

        for (let i = 0; i < n-1; i++) {
            for (let j = 0; j < n-i-1 ; j++) {
                if (sortedScores[j] < sortedScores[j + 1]) {
                    [sortedScores[j], sortedScores[j + 1]] = [sortedScores[j + 1], sortedScores[j]];
                }
            }
        }
        // return sortedScores.slice(0,3);
        return [sortedScores[0],(sortedScores[1]||""),(sortedScores[2]||"")];
    }

    static get averageScores() {
        const scores = ScoreServer.allScore;
        if (scores.length === 0) return 0;
        let sum = 0
        for (const score of scores) {
            sum += score;
        }
        return (sum / scores.length).toFixed(0);
        // return (scores.reduce((acc,curr) => acc + curr, 0)/scores.length).toFixed(0);
    }
}

class PunchMachine {
    addScore() {
        let num = Math.floor(Math.random() * 999);
        ScoreServer.allScore.push(num);
        let currentAllScore = ScoreServer.allScore;
        let currentTopScore = ScoreServer.topThreeScore[0]
        let currentTop3Score = ScoreServer.topThreeScore;
        let averageScores = ScoreServer.averageScores;
        let feedback;
        if (num < 350) {
            feedback = "Bro, you better try exercise."
        } else if (num > 350 && num < 600) {
            feedback = "Ok, you can punch harder."
        } else if (num > 600 && num < 800) {
            feedback = "Good job."
        } else if (num > 800 && num === currentTopScore) {
            feedback = "Hi, Champ."
        }

        return `Your Score: ${num}\n` +
        `${feedback}\n` +
        `-----\n` +
        `Top 3 scores are:\n` +
        `${currentTop3Score.map((score,index) => `Rank ${index+1}: ${score}\n`).join("")}` +
        `-----\n` +
        `${currentAllScore.length > 1 ? "Average Scores are: " + averageScores +"\n" : ""}`;
    }
}

const punch1 = new PunchMachine;
const punch2 = new PunchMachine;

console.log(punch1.addScore());
console.log(punch2.addScore());
console.log(punch1.addScore());
console.log(punch2.addScore());