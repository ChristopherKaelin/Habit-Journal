// ==========================================
// ID and DATE ERROR 
// ==========================================

// ID generator - specify prefix for different features
function generateId(prefix) {
    prefix = prefix || 'item';
    return prefix + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function getTodayDate() {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
}

function getCurrentMonthYear() {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1 // 1-12
    };
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function getCurrentTimestamp() {
    return new Date().toISOString();
}

// ==========================================
// STORAGE KEYS 
// ==========================================
const STORAGE_KEYS = {
    // HABIT FEATURES
    HABIT_DEFINITIONS: 'habitjournal_definitions',
    MONTHLY_PROGRESS: 'habitjournal_monthly_progress',
    HABIT_COMPLETIONS: 'habitjournal_completions',

};

// ==========================================
// ERROR 
// ==========================================
function logError(operation, error) {
    // Universal error handling for all app operations
    console.error('Error in ' + operation + ':', error);
}


// ==========================================
// HABIT VALIDATION
// ==========================================

const HABIT_VALID_GOAL_TYPES = ['daily', 'count', 'time', 'project'];

const HABIT_VALID_GOAL_UNITS = {
    daily: ['days'],
    count: ['miles', 'reps', 'pages', 'items', 'times'],
    time: ['minutes', 'hours'],
    project: ['percent', 'lessons', 'chapters', 'modules']
};

function isValidHabitGoalType(goalType) {
    return HABIT_VALID_GOAL_TYPES.includes(goalType);
}

function isValidHabitGoalUnit(goalType, goalUnit) {
    return HABIT_VALID_GOAL_UNITS[goalType] && HABIT_VALID_GOAL_UNITS[goalType].includes(goalUnit);
}

function isValidHabitMonthlyGoal(goal, goalType) {
    if (typeof goal !== 'number' || goal <= 0) return false;
    
    // Get current month's day count
    const current = getCurrentMonthYear();
    const daysThisMonth = getDaysInMonth(current.year, current.month);

    // Set reasonable limits based on goal type
    if (goalType === 'daily') return goal <= daysThisMonth; 
    if (goalType === 'count') return goal <= 500; 
    if (goalType === 'time') return goal <= 24 * daysThisMonth; 
    if (goalType === 'project') return goal <= 100;
    
    return true;
}

function isValidHabit(habit) {
    // Check required fields
    if (!habit.name || habit.name.trim().length === 0) {
        return false;
    }
    
    // Validate goal type
    if (!isValidHabitGoalType(habit.goalType)) {
        return false;
    }
    
    // Validate goal unit matches goal type
    if (!isValidHabitGoalUnit(habit.goalType, habit.goalUnit)) {
        return false;
    }
    
    // Validate monthly goal
    if (!isValidHabitMonthlyGoal(habit.monthlyGoal, habit.goalType)) {
        return false;
    }
    
    return true;
}
