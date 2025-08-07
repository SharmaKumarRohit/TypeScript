const message = [
  "✅ You're one step closer to your goal!",
  "🚀 Keep going — your tasks won't complete themselves!",
  "📝 Add a task, conquer the day!",
  "🎯 Every big goal starts with a small task.",
  "💪 Stay focused, stay productive.",
  "✍️ Write it down — make it happen!",
  "🤔 What’s your next move today?",
  "🧠 Great ideas start with great planning.",
  "🔥 Crush your to-dos, one by one!",
  "⚡ Your productivity boost is just one task away!",
  "📈 Small steps every day lead to big results.",
  "⏰ The best time to start is now!",
  "🙌 You got this — just write it down!",
  "🧹 Clear mind, clear list.",
  "📅 Organize today for a better tomorrow.",
];

export function randomMessageGenerator() {
  const idx = Math.floor(Math.random() * message.length);
  const randomMessage = message[idx];
  return randomMessage;
}

randomMessageGenerator();
