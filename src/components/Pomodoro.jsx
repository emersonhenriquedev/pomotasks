import React, { useState, useEffect } from "react";

import Display from "./Display";
import ActionButton from "./ActionButton";

import "./Pomodoro.css";

const WORK = 25 * 60;
const SHORT_BREAK = 5 * 60;
const LONG_BREAK = 15 * 60;

const Pomodoro = (props) => {
  const STAGES = [
    WORK,
    SHORT_BREAK,
    WORK,
    SHORT_BREAK,
    WORK,
    SHORT_BREAK,
    WORK,
    LONG_BREAK,
  ];

  const [playing, setPlaying] = useState(false);
  const [currentPomodoroStage, setCurrentPomodoroStage] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(
    STAGES[currentPomodoroStage]
  );
  const [totalPomodori, setTotalPomodori] = useState(0);
  const [totalPomodoriFinished, setTotalPomodoriFinished] = useState(0);
  const [formatedTime, setFormatedTime] = useState("00:00");

  useEffect(() => {
    if (playing && remainingMinutes > 0) {
      setTimeout(() => setRemainingMinutes(remainingMinutes - 1), 1000);
    }
    if (playing && remainingMinutes == 0) {
      setPlaying(false);
      setCurrentPomodoroStage((index) => index + 1);
      new Audio('Phone_01.mp3').play()
    }
    if (!playing) {
      setRemainingMinutes(STAGES[currentPomodoroStage]);
    }
  }, [playing, remainingMinutes]);

  useEffect(() => {
    if (currentPomodoroStage < STAGES.length) {
      if (STAGES[currentPomodoroStage] == WORK) {
        setTotalPomodoriFinished((total) => total + 1);
        console.log(totalPomodoriFinished);
      }
      setRemainingMinutes(STAGES[currentPomodoroStage]);
    } else {
      setCurrentPomodoroStage(0);
      setTotalPomodoriFinished(0);
    }
  }, [currentPomodoroStage]);

  useEffect(() => {
    let total = STAGES.reduce(
      (total, pomodori) => (pomodori == WORK ? total + 1 : total + 0),
      0
    );

    setTotalPomodori(total);
  }, []);

  useEffect(() => {
    const minutes = Math.floor(remainingMinutes / 60);
    const seconds = Math.floor(remainingMinutes % 60);

    const formatDisplay =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    setFormatedTime(formatDisplay);
    document.title = `(${formatedTime}) Pomotasks an simple pomodoro app`;
  }, [remainingMinutes]);

  const getPercentCompleted = () =>
    (remainingMinutes / STAGES[currentPomodoroStage]) * 100;

  const handleStartStopClick = (e) => {
    setPlaying(!playing);
    new Audio('mouse-doubleclick-02.wav').play()
  };

  return (
    <div className="pomodoro">
      <h1>Pomotasks</h1>
      <Display
        time={formatedTime}
        completed={getPercentCompleted()}
      />
      <ActionButton handleClick={handleStartStopClick} state={playing} />
      <div className="stats">
        <h4>
          {STAGES[currentPomodoroStage] == WORK
            ? "Focus on task"
            : "Take a rest"}
        </h4>
        <span>Round {`${totalPomodoriFinished}/${totalPomodori}`}</span>
      </div>
    </div>
  );
};

export default Pomodoro;
