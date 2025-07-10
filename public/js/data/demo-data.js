function seedDemoData() {
  const definitions = [
    {
      id: "habit-001",
      name: "Walk 30 Miles",
      description: "Walk 30 miles this month, ½ mile per check-in",
      type: "quantitative",
      unit: "mile",
      increment: 0.5,
      target: 30,
      period: "monthly",
      startDate: "2025-07-01",
      endDate: "2025-07-31",
      archived: false
    },
    {
      id: "habit-002",
      name: "Drink 64 oz Water",
      description: "Drink 64 ounces of water daily in 8 oz increments",
      type: "quantitative",
      unit: "oz",
      increment: 8,
      target: 64,
      period: "daily",
      startDate: "2025-07-01",
      endDate: "2025-07-31",
      archived: false
    },
    {
      id: "habit-003",
      name: "Complete Wordle",
      description: "Play and complete Wordle daily",
      type: "binary",
      period: "daily",
      startDate: "2025-07-01",
      endDate: "2025-07-31",
      archived: false
    },
    {
      id: "habit-004",
      name: "Complete Sudoku",
      description: "Solve a Sudoku puzzle daily",
      type: "binary",
      period: "daily",
      startDate: "2025-07-01",
      endDate: "2025-07-31",
      archived: false
    }
  ];

  localStorage.setItem("habitDefinitions", JSON.stringify(definitions));

  const logs = {
    "habit-001-logs": [
      { date: "2025-06-29", amount: 1.0 },
      { date: "2025-06-30", amount: 1.0 },
      { date: "2025-07-01", amount: 1.0 },
      { date: "2025-07-02", amount: 0.5 }
    ],
    "habit-002-logs": [
      { date: "2025-07-01", amount: 64 },
      { date: "2025-07-02", amount: 48 }
    ],
    "habit-003-logs": [
      { date: "2025-07-01", completed: true },
      { date: "2025-07-02", completed: true }
    ],
    "habit-004-logs": [
      { date: "2025-07-01", completed: true },
      { date: "2025-07-03", completed: true }
    ]
  };

  for (const [key, value] of Object.entries(logs)) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  console.log("Demo data seeded with per-habit logs.");
}
