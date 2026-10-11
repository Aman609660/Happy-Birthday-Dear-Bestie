# Birthday Escape Room — Project Specification

## 1. Project Overview

Build a mobile-first birthday website for the creator's girl best friend.

The website should feel like a personalized escape room / mystery game rather than a normal birthday webpage.

The recipient knows immediately that this is her birthday gift, but the gift is locked behind a sequence of personal puzzles, memories, jokes, mini-games, and reveals.

The experience should gradually move through:

1. Funny / playful
2. Mysterious / detective-like
3. Interactive / digital
4. Increasingly personal
5. Emotional
6. Funny again at the end

Target experience length: approximately 30–60 minutes.

IMPORTANT:
- The experience is intentionally evolving.
- Rooms, puzzles, stories, images, and text may be added or changed during development.
- Structure the application so content is easy to modify and new rooms are easy to add.
- Do not hard-code the entire experience into one giant component.

---

# 2. Current Friendship Context

The two people have been close online friends for approximately 8–9+ years.

Important unusual aspect of the friendship:

- They were in the same school.
- They never met at school.
- They never talked at school.
- They later connected through Facebook.
- Their first conversation was a simple message:
  "still awake?"
- They later switched platforms.
- They have never officially met in person.
- They have never talked on a phone call.
- Despite that, they have remained close friends for many years.
- They have no normal collection of shared travel photographs or in-person memories.
- They have always been there for each other on occasions despite never exchanging physical gifts.

This unusual "never actually met, but somehow extremely close" aspect should become an important theme.

---

# 3. Personality / Friendship Dynamic

A major running joke:

- Aman has a "goldfish memory."
- She has a crazy / extremely strong memory.

This should become a recurring mechanic and joke throughout the site.

Possible recurring heading:

## 🧠 Aman's Memory

At the bottom of the screen, maintain a small memory panel showing answers / discoveries from completed rooms.

Example:

ROOM 01 → still awake?
ROOM 02 → Bhootni
ROOM 03 → 2248
ROOM 04 → ...
ROOM 05 → ...

The panel should evolve as the recipient solves rooms.

Possible jokes:

- "Memory loading..."
- "Error: Memory not found."
- "Aman probably forgot this."
- "8+ years of friendship and this is what I get?"
- "Disappointing, Bhootni."

Do not make this panel too intrusive on mobile.

The exact final name may change if a better nickname is discovered later.

---

# 4. 🌸 Flower Mechanic

The 🌸 emoji is especially meaningful.

She frequently uses 🌸 and specifically told Aman that this emoji is "reserved for him."

Therefore, 🌸 should become a subtle recurring motif.

IMPORTANT:
Do not spam it everywhere.

Potential rule:

When something is genuinely personal / directly from Aman / an actual memory, use 🌸.

Examples:

- Personal memory reveal → 🌸
- Actual screenshot → 🌸
- Birthday message → 🌸
- Important emotional moments → 🌸

The recipient should gradually notice the recurring flower.

Potential late-game reveal:

"You once told me this was reserved for me. So obviously I stole it for the entire website. 🌸"

This is a concept, not finalized copy.

---

# 5. Nicknames

Her nicknames:

- Bhootni
- Keyboard Warrior
- Krishna Bdwa
- Noobdi
- Kachuwa
- Suar

Aman's nicknames:

- Chor
- Moon
- Aatankwadi

Nicknames can be used as:
- Puzzle answers
- Fake case files
- Passwords
- Wrong-answer jokes
- Room titles
- Hidden clues

Do not overuse any single nickname unless its origin becomes relevant.

---

# 6. Recurring Phrases / Inside Jokes

Her common phrases:

- "bd me btaungi"
- "acha"

Aman's recurring phrase:

- "Mausam kaisa hai" — used to change the topic or irritate her.

Another shared phrase:

- "Qayamat ke roz btaunga" — used for things that neither person wants to reveal.

These should become recurring jokes and potentially actual puzzle mechanics.

Examples:

## BD ME BTAUNGI

A locked file could say:

"Access denied.
Reason: bd me btaungi."

Potentially a fake "Ask Her" button that responds:

"bd me btaungi"

## QAYAMAT KE ROZ BATAUNGA

Can be used as a password / locked secret / recurring clue.

## MAUSAM KAISA HAI?

Could be a funny fake interaction where Aman avoids answering a difficult question by changing the subject.

---

# 7. Tone

Primary tone:

Aggressive-best-friend humor.

The website should be allowed to roast the recipient.

Examples:

"8+ years of friendship and this is what I get?

Disappointing, Bhootni."

"Wrong answer."

"Try again."

"Bhootni..."

"Are you even trying?"

The humor should feel like the two friends teasing each other, not like an impersonal game.

The tone should gradually become more sincere and emotional near the end.

Final emotional section should not be buried under jokes.

---

# 8. Opening Experience

The recipient should immediately know this is a birthday gift.

Possible opening direction:

"HAPPY BIRTHDAY, BHOOTNI. 🎂

You thought you were getting a normal birthday message?

Unfortunately, you know me.

I've decided that after 8+ years of friendship, you haven't suffered enough.

So I've locked your birthday present behind a series of puzzles.

Solve them.
Find the memories.
Escape the room.

And try not to disappoint me."

Then:

ENTER THE ROOM →

Exact wording can be refined later.

---

# 9. Game Difficulty

Target difficulty:

Easy to medium.

The game should not depend on obscure trivia or difficult mathematics.

Most puzzles should be personal.

The recipient should think:

"WAIT... I KNOW THIS."

rather than:

"What am I supposed to do?"

The challenge should come from:
- remembering shared experiences
- recognizing jokes
- noticing visual clues
- connecting clues
- playing small interactive games
- reconstructing stories

---

# 10. Hint System

Provide a Hint button.

Hints should themselves be humorous.

Potential progression:

Hint 1:
"Fine. I'll give you a small hint."

Hint 2:
"Seriously?"

Hint 3:
"Bhootni. Please."

Hint 4:
"You have known me for 8+ years. How are you struggling with this?"

Final hint:
"Ask Aman.
Actually, don't.
He probably forgot the answer too."

Exact wording can be changed.

Hints should not permanently punish the user.

---

# 11. Wrong Answer System

Unlimited attempts.

Do NOT use a strict lives system.

Wrong answers can trigger increasingly funny responses.

Example sequence:

1. "Nope."
2. "Try again."
3. "Are you sure?"
4. "Bhootni..."
5. "8+ years."
6. "8+ YEARS OF FRIENDSHIP AND THIS IS WHAT I GET?"
7. "Disappointing, Bhootni."
8. "I'm beginning to question everything."

The exact pool should be reusable and easy to configure.

---

# 12. Mobile-First Requirement

The recipient is expected to use the website primarily on a phone.

Design for portrait mobile first.

Requirements:
- Large touch targets
- Comfortable scrolling
- No tiny buttons
- No hover-only interactions
- Swipe/tap interactions where appropriate
- Responsive images
- Mobile-friendly fake terminal
- Mobile-friendly fake chat interface
- Touch-friendly 2248 game
- Persistent but compact Aman's Memory panel
- Lightweight animations
- Good performance on normal mobile connections

Desktop should still work, but mobile is the priority.

---

# 13. Hosting

The creator wants to avoid spending money on hosting.

Preferred hosting:
- GitHub Pages
- Static website
- No paid backend unless absolutely necessary

Avoid unnecessary server requirements.

Prefer client-side state / local state where possible.

If persistence is needed, consider localStorage before introducing a backend.

---

# 14. Asset Strategy

The creator will personally add the real photos/screenshots.

The code should have clearly organized asset directories and comments showing exactly where each asset belongs.

Suggested structure:

assets/
  diary/
    i-wont-bother-you.png
    matter-solved.png

  2248/
    caught-playing-2248.jpg

  meet-up/
    clue-01.jpg
    clue-02.jpg
    clue-03.jpg
    clue-04.jpg

  memories/
    ...

  final/
    ...

When an asset is expected, include a clear code comment such as:

// ============================================================
// ADD YOUR DIARY SCREENSHOT HERE
// Replace this placeholder with the actual image.
// ============================================================

Do not bury asset references in obscure code.

---

# 15. Real vs Fictional Content

Mix real artifacts with fictional escape-room UI.

Real:
- Diary screenshots
- 2248 photo
- Buxar / attempted-meeting photos
- Edited photo of both friends
- Potential future chat screenshots
- Other actual memories

Fictional:
- Detective case files
- Fake terminal
- Fake computer files
- Game prompts
- Locks
- Room transitions
- Clue systems

The recipient should sometimes wonder whether something is a game clue or a real memory.

---

# 16. Current Room / Story Plan

This is a working outline, NOT a final locked structure.

## Room 01 — Birthday Lock

Purpose:
- Establish birthday gift
- Explain escape-room premise
- Establish humor

Potential title:
"HAPPY BIRTHDAY, BHOOTNI"

---

## Room 02 — Still Awake?

Based on the first-ever Facebook conversation.

First conversation:
"still awake?"

Potential mechanic:
- Reconstruct / find the first message.
- Could use a fake social/chat interface.

Answer:
"still awake?"

Once solved, add to Aman's Memory.

---

## Room 03 — The Many Names of Bhootni

Use her many nicknames:
- Bhootni
- Keyboard Warrior
- Krishna Bdwa
- Noobdi
- Kachuwa
- Suar

Potential mechanic:
- Match clues to nicknames.
- Determine which nickname belongs to a particular clue.
- Could reveal one nickname as the answer.

---

## Room 04 — 2248

The recipient likes playing the 2248 game.

Important real story:
- She once recommended 2248 to Aman.
- Later, after many days, she sent a picture taken by a friend while she was using her phone.
- She was playing the same 2248 game.
- This photo can be revealed after completing the game.

Planned mechanic:
- Include an actual small 2248-style playable game.
- Ask her to reach a specific score.
- Score should be challenging enough to be satisfying but not frustrating.
- Exact target score to be decided during development/testing.
- Once target score is reached:
  reveal the photo of her playing 2248.

Potential detective-style framing:

CASE FILE: 2248

Subject: Bhootni
Activity: Playing 2248
Evidence source: A friend's photograph
STATUS: CAUGHT

This room should feel playful.

---

## Room 05 — BD Mein Bataungi

Use her recurring phrase:
"bd me btaungi"

Possible mechanic:
- Locked file
- Fake confidential information
- "Ask her" interaction
- Clue hidden behind the phrase

Potential joke:

Access denied.
Reason:
bd me btaungi

---

## Room 06 — Mausam Kaisa Hai?

Use Aman's habit of changing the topic by asking:
"Mausam kaisa hai?"

Potential mechanic:
- A fake difficult question is presented.
- Instead of answering, Aman changes the topic.
- The recipient has to figure out the actual clue.

This should be a relatively short comedic room.

---

## Room 07 — Operation: Meet / Buxar Mission

This is an important real story.

Story:
- Her brother was coming to Buxar for work.
- She insisted on tagging along.
- They had an internal joke that because they had never met or talked on a call, maybe they weren't "real."
- She sent 3–4 pictures from specific spots.
- Aman had to recognize where she was from the pictures.
- Aman rushed around on his scooty trying to find her vehicle and her.
- He raced the scooty too much.
- He still failed to actually see her.

Potential title:
"OPERATION: PROVE WE'RE REAL"

Potential mechanic:
- Show actual photos as location clues.
- Ask recipient to identify/reconstruct locations or sequence.
- Could recreate the route.
- Could have a countdown / mission structure if appropriate.
- Final result should NOT pretend the mission succeeded.

Potential ending:

MISSION RESULT
TARGET: NOT FOUND
VISUAL CONTACT: 0
SKOOTIE SPEED: QUESTIONABLE
MISSION: FAILED
MEMORY: PERMANENT

This should become one of the major recurring stories.

Creator will provide the actual photos and complete details later.

---

## Room 08 — The Only Fight / Diary

This should NOT be a date question.

There was one important fight:
- Aman was sad.
- She wanted to know why.
- Aman ignored her and was rude.
- She became upset.
- She wrote in her personal diary:
  "I won't bother u anymore"
- Later Aman realized his mistake and apologized/begged for forgiveness.
- She later wrote:
  "matter solved"

Planned puzzle:

Question:
"What did she write in her diary during the only real fight?"

Correct input:
"I won't bother u anymore"

After correct answer:
- Reveal actual screenshot of the diary entry.
- Then reveal the actual "matter solved" screenshot.

Potential flow:

THE ONLY FIGHT

What did she write?

[answer field]

Correct:
MEMORY VERIFIED.

Then show:
"I won't bother u anymore"

Then:
"matter solved"

Potential emotional transition after this room.

The creator will provide actual diary screenshots.

---

## Room 09 — The Places We've Never Been

Theme:
They have never physically met despite many years of friendship.

Known facts:
- Same school, never met there.
- Never talked at school.
- Connected later online.
- Never physically met.
- Never talked on a phone call.
- They have traveled together only in her dreams / jokingly described that way.

There is another real story about trying to meet which the creator will provide later.

The room should be improvised after receiving that complete story and pictures.

Potential concept:
"The places we've never been."

Could display:
- places they've never visited together
- their one almost-meeting
- imaginary/dream trips
- actual attempt to meet

Do not finalize this room until the creator provides the additional story.

---

## Room 10 — The Photograph

There is one edited image of both friends together in one frame.

There are no actual photos together because they have never met.

Potential framing:

"Two people.
One photograph.
Zero actual photographs together.
Somehow, still a memory."

This image should be saved for a later/emotional stage rather than shown early.

---

## Room 11 — Aman's Memory

Use all collected answers / memories.

The bottom Aman's Memory panel has been collecting discoveries throughout the game.

This room could make those accumulated answers meaningful.

Potential concept:
"You've been carrying the key with you the entire time."

The exact final puzzle is TBD.

---

## Room 12 — The Exit / Birthday Reveal

Final emotional page.

Tone:
Funny → emotional → one final joke.

The final message should acknowledge:
- 8+ years
- Same school but never met there
- Connected online
- Never talked on a call
- No normal collection of shared photos
- Failed Buxar meeting attempt
- Countless jokes
- Still being there for each other

Potential final callback:

MISSION STATUS

ESCAPE: COMPLETE
BIRTHDAY: SUCCESSFUL
ACTUAL MEETING: STILL PENDING

Or similar.

The final wording will be supplied/refined later by the creator.

---

# 17. Potential Recurring Statistics

Could be used near the final section.

Possible data:

Years of friendship: 8+
Calls: 0
Successful in-person meetings: 0
Failed Buxar missions: 1
Shared physical trips: 0
Shared memories: too many
"bd me btaungi": classified
"acha": too many
🌸: reserved

These are concepts; exact values/text should be confirmed before final implementation.

---

# 18. Potential Final Emotional Theme

The relationship is unusual:

- They were in the same school but never met.
- They met online instead.
- They have never had a phone call.
- They have never physically met.
- They have no normal shared travel history.
- They still remained close for 8–9+ years.

The final message can make this unusual friendship itself the emotional payoff.

Do NOT make the emotional section overly dramatic or romantic by default.

The relationship is explicitly understood by both as friendship.

Keep the final tone warm and genuine, while preserving the best-friend humor.

---

# 19. Future Material Still Needed

The creator may add these later:

1. Actual Buxar mission photos
2. Full Buxar story / exact sequence
3. Diary screenshot:
   "I won't bother u anymore"
4. Diary screenshot:
   "matter solved"
5. Complete story about another attempt to meet
6. Photos related to that meeting attempt
7. More inside jokes
8. More stories only the two friends know
9. Origins of nicknames if useful
10. Old conversation screenshots if desired
11. Final birthday message
12. Any other personal memories discovered during brainstorming

Do not invent these missing memories.

---

# 20. Design Philosophy

The site should NOT feel like:
- a generic birthday template
- a collection of unrelated riddles
- an exam
- a romantic confession site
- a technically complicated game for the sake of complexity

It SHOULD feel like:
- a personalized escape room
- a detective case
- a digital scrapbook
- a running inside joke
- a playable memory of the friendship

The recipient should progressively realize:

"I'm not just solving puzzles.
These puzzles are about us."

---

# 21. Technical Architecture Principles

When implementation begins:

- Use a clean component-based architecture.
- Keep room data separate from presentation where practical.
- Keep puzzle answers/configuration separate from UI.
- Make it easy to add/remove/reorder rooms.
- Make hint text configurable.
- Make wrong-answer response pools configurable.
- Make asset paths easy to find.
- Avoid putting all room logic into one huge file.
- Avoid unnecessary backend infrastructure.
- Prefer static hosting.
- Ensure GitHub Pages compatibility.
- Ensure mobile-first responsive behavior.
- Keep dependencies reasonable.
- Optimize images for web/mobile.
- Do not expose unnecessary secret keys because this is a static site.

---

# 22. Development Workflow

The creator may change the story while development is happening.

Therefore:

1. Implement a flexible base experience.
2. Build the room/navigation system.
3. Build reusable puzzle components.
4. Build Aman's Memory.
5. Build hints/wrong-answer system.
6. Build asset handling.
7. Build initial rooms.
8. Add personal content as it becomes available.
9. Test on phone.
10. Iterate.

Do not wait for every story to be finalized before building the framework.

---

# 23. Codex Instructions

When working on this repository:

- Read this file before making architectural decisions.
- Treat this specification as the current source of truth.
- The specification is intentionally evolving.
- Do not assume missing personal details.
- Use placeholders for missing assets/content.
- Make placeholders obvious.
- Keep content easy to update.
- Do not replace real personal content with invented content.
- Preserve the humorous best-friend tone.
- Keep the experience mobile-first.
- Do not introduce paid services unless explicitly requested.
- Prefer GitHub Pages-compatible implementation.
- Before making large architectural changes, explain the change and why it is useful.
- When a new story/puzzle is supplied, integrate it without unnecessarily breaking existing rooms.

---

# 24. Current Status

Creative planning: READY FOR INITIAL DEVELOPMENT

Known core systems:
- Birthday intro
- Room progression
- Personal puzzle framework
- Aman's Memory
- 🌸 motif
- Hints
- Unlimited attempts
- Increasingly funny wrong-answer responses
- Mobile-first layout
- Asset placeholders
- Static/GitHub Pages target

Known major content:
- First message: "still awake?"
- Nicknames
- 2248
- "bd me btaungi"
- "Qayamat ke roz btaunga"
- "Mausam kaisa hai"
- Buxar failed meeting mission
- Diary incident
- "I won't bother u anymore"
- "matter solved"
- Never-met theme
- Edited photo together
- Birthday ending

The project can now begin with the framework and initial rooms while additional memories and assets are added later.
