import React from "react";
import "../css/Leaderboard.css";

const Leaderboard = () => {
  return (
    <main>
      <div id="header">
        <h1>Ranking</h1>
      </div>
      <div id="leaderboard">
        <div class="ribbon"></div>
        <table>
          <tr>
            <td class="number">1</td>
            <td class="name">Lee Taeyong</td>
            <td class="points">
              258.244{" "}
              <img
                class="gold-medal"
                src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                alt="gold medal"
              />
            </td>
          </tr>
          <tr>
            <td class="number">2</td>
            <td class="name">Mark Lee</td>
            <td class="points">258.242</td>
          </tr>
          <tr>
            <td class="number">3</td>
            <td class="name">Xiao Dejun</td>
            <td class="points">258.223</td>
          </tr>
          <tr>
            <td class="number">4</td>
            <td class="name">Qian Kun</td>
            <td class="points">258.212</td>
          </tr>
          <tr>
            <td class="number">5</td>
            <td class="name">Johnny Suh</td>
            <td class="points">258.208</td>
          </tr>
        </table>
      </div>
    </main>
  );
};

export default Leaderboard;
