// storage.js

export const storage = {
  // --- General Utilities ---
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || null;
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  // --- Habits ---
  getHabits() {
    return storage.get("habits") || [];
  },

  saveHabits(habits) {
    storage.set("habits", habits);
  },

  // --- Habit Tracking ---
  getHabitTracking() {
    return storage.get("habitTracking") || [];
  },

  saveHabitTracking(trackingData) {
    storage.set("habitTracking", trackingData);
  },

  // --- Journal Entries ---
  getJournalEntries() {
    return storage.get("journalEntries") || [];
  },

  saveJournalEntries(entries) {
    storage.set("journalEntries", entries);
  },

  // --- Tasks ---
  getTasks() {
    return storage.get("tasks") || [];
  },

  saveTasks(tasks) {
    storage.set("tasks", tasks);
  },

  // --- User Settings ---
  getSettings() {
    return storage.get("settings") || {
      name: "",
      quotePreference: "",
      weatherLocation: ""
    };
  },

  saveSettings(settings) {
    storage.set("settings", settings);
  }
};
