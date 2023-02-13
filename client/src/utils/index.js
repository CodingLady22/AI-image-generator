// Utility files hold functions that can be reused across multiple files
import { surpriseMePrompts } from '../constants';

// gives us a different prompt on each prompt call.
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * 
    surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // if the new prompt is the same as the prev prompt, then recall the fxn again.
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt
}