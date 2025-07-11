// ==========================================
// HABIT DATA MODEL
// ==========================================

// Habit Definition
function createHabitDefinition(data) {
    return {
        id: data.id || generateHabitId(),
        name: data.name || '',
        description: data.description || '',
        
        // Goal System (matches your paper tracker)
        goalType: data.goalType || 'daily', 
        monthlyGoal: data.monthlyGoal || 31,
        goalUnit: data.goalUnit || 'days', 
        
        // Visual representation (matches your icons/shapes)
        icon: data.icon || '📝',
        
        // Dates
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString(),
        isActive: data.isActive !== undefined ? data.isActive : true
    };
}

function isValidHabit(habit) {
    return habit.name.trim().length > 0 && 
           habit.monthlyGoal > 0 &&
           ['daily', 'count', 'time', 'project'].includes(habit.goalType);
}

// Daily Completion Tracking
function createCompletion(data) {
    return {
        id: data.id || generateHabitId(),
        habitId: data.habitId,
        date: data.date || getTodayDate(),
        timestamp: data.timestamp || new Date().toISOString(),
        
        // Flexible value tracking (matches your system)
        value: data.value || 1, // 1 for daily habits, 0.5 for half-mile, hours for time-based
        unit: data.unit || 'completion', // 'completion', 'miles', 'hours', 'percent'
        
        notes: data.notes || ''
    };
}

// Monthly Progress Tracking
function createMonthlyProgress(habitId, year, month) {
    return {
        habitId: habitId,
        year: year,
        month: month,
        currentProgress: 0,
        goal: 0, 
        completions: [],
        updatedAt: new Date().toISOString()
    };
}

