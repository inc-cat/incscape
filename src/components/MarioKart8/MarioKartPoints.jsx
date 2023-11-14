import { getScores } from '../../api';
import { useState, useEffect } from 'react';
import { parse } from 'csv-parse/browser/esm/sync';
import { Line } from 'react-chartjs-2';

function positionToScore(position) {
  const positions = {
    1: 15,
    2: 12,
    3: 10,
    4: 9,
    5: 8,
    6: 7,
    7: 6,
    8: 5,
    9: 4,
    10: 3,
    11: 2,
    12: 1,
  };

  return positions[position];
}

export default function MK8Points() {
  const [gameArray, setGameArray] = useState([]);
  const [csvContent, setCsvContent] = useState('');
  const [courseList, setCourseList] = useState([]);
  const [chosenCourse, setChosenCourse] = useState(null);
  const [chosenCC, setChosenCC] = useState(null);
  const [ccList, setCCList] = useState([]);
  const [chosenGP, setChosenGP] = useState(null);
  const [gpList, setGPList] = useState([]);

  // Search query trigger for Course
  const scores = gameArray
    .filter(function (row) {
      if (!chosenCourse || chosenCourse === '--All courses--') {
        return true;
      }
      return row.Course === chosenCourse;
    })
    .filter(function (row) {
      if (!chosenCC || chosenCC === '--All CC--') {
        return true;
      }
      return row.CC === chosenCC;
    })
    .filter(function (row) {
      if (!chosenGP || chosenGP === '--All GP--') {
        return true;
      }
      return row.GP === chosenGP;
    });

  let evieWin = 0;
  let incWin = 0;
  let eviePodium = 0;
  let incPodium = 0;
  let incPoints = 0;
  let eviePoints = 0;
  let evieData = [];
  let incData = [];

  scores.forEach(function (row, i, arr) {
    const previousRow = arr[i - 1];
    const positional = i + 1;

    incPoints += positionToScore(row.inc);
    row.incTotal = incPoints;
    incData.push(incPoints);
    eviePoints += positionToScore(row.Evie);
    row.evieTotal = eviePoints;
    evieData.push(eviePoints);

    if (row.inc == 1) {
      incWin++;
    }

    if (row.Evie == 1) {
      evieWin++;
    }

    if (row.Evie < 4) {
      eviePodium++;
    }

    if (row.inc < 4) {
      incPodium++;
    }

    row.incCumScore =
      (previousRow?.incCumScore || 0) + positionToScore(row.inc);

    row.EvieCumScore =
      (previousRow?.EvieCumScore || 0) + positionToScore(row.Evie);

    row.incAveragePlace = (
      ((previousRow?.incAveragePlace || 0) * i + +row.inc) /
      positional
    ).toFixed(2);

    row.EvieAveragePlace = (
      ((previousRow?.EvieAveragePlace || 0) * i + +row.Evie) /
      positional
    ).toFixed(2);
  });

  useEffect(function () {});

  // Getting all queries from the csv course column
  useEffect(
    function () {
      const getCourses = new Set(
        gameArray
          .map(function (row) {
            return row.Course;
          })
          .sort()
      );

      const getCC = new Set(
        gameArray
          .map(function (roww) {
            return roww.CC;
          })
          .sort()
      );

      const getGP = new Set(
        gameArray
          .map(function (row) {
            return row.GP;
          })
          .sort()
      );

      // console.log(getCourses);
      setCourseList(['--All courses--'].concat([...getCourses]));
      setCCList(['--All CC--'].concat([...getCC]));
      setGPList(['--All GP--'].concat([...getGP]));
    },
    [gameArray]
  );

  // Getting data from the api
  useEffect(() => {
    async function fetchData() {
      const tmpScores = await getScores();
      setCsvContent(tmpScores);
    }
    fetchData();
  }, []);

  // Parses data to JSON to be iterated
  useEffect(() => {
    const parsedScores = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
    });
    setGameArray(parsedScores);
  }, [csvContent]);

  // console.log(gameArray);
  // console.log(chosenCourse);

  const old_data = [
    {
      label: 'React Charts',
      data: [
        {
          date: new Date(),
          stars: 202123,
        },
        // ...
      ],
    },
  ];

  const options = {
    type: 'invertedLine',
    scales: {
      y: { reverse: true },
    },
  };

  const data = {
    labels: scores.map((_, i) => i),
    datasets: [
      {
        label: 'inc',
        data: scores.map((entry) => evieData),
        borderColor: 'grey',
        backgroundColor: 'grey',
        showLine: false,
      },
      {
        label: 'Evie',
        data: scores.map((entry) => incData),
        borderColor: 'purple',
        backgroundColor: 'purple',
        showLine: false,
      },
    ],
  };

  return 'a';
}
