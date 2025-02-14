import schedule from 'node-schedule';

// Store scheduled jobs
const jobs = {};

// Schedule reminders for a note
export const scheduleReminders = (noteId, plan) => {
  // Cancel existing reminders for this note (if any)
  if (jobs[noteId]) {
    jobs[noteId].cancel();
  }

  // Schedule new reminders
  plan.forEach((task) => {
    const job = schedule.scheduleJob(task.schedule, () => {
      console.log(`Reminder: ${task.task} for note ${noteId}`);
      // Here you can send a notification (e.g., email, SMS, or push notification)
    });

    // Store the job for future cancellation
    jobs[noteId] = job;
  });
};

// Cancel reminders for a note
export const cancelReminders = (noteId) => {
  if (jobs[noteId]) {
    jobs[noteId].cancel();
    delete jobs[noteId];
  }
};