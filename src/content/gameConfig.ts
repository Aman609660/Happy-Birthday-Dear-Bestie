export type Room = {
  id: string
  number: string
  title: string
  eyebrow: string
  intro: string
  prompt?: string
  answer?: string
  answerDisplay?: string
  success: string
  memory?: string
  hints?: string[]
  personal?: boolean
  kind: 'intro' | 'answer' | 'number-merge' | 'mission' | 'diary' | 'never-met' | 'photo' | 'memory-recall' | 'finale'
  image?: string
  gallery?: { image: string; caption: string }[]
  closingImage?: string
  closingImageCaption?: string
  closingImageBefore?: string
  closingImageAfter?: string
  video?: string
  finalMessage?: string
}

// The target is intentionally low for the first pass; adjust after trying the game on a phone.
export const mergeTarget = 64

// Room content lives here so story edits and new rooms do not require changes to the game shell.
export const rooms: Room[] = [
  {
    id: 'birthday-lock', number: '01', title: 'HAPPY BIRTHDAY, BHOOTNI', eyebrow: 'CASE FILE 001 · THE BIRTHDAY LOCK',
    intro: 'You thought you were getting a normal birthday message? Unfortunately, you know me. After 9+ years of friendship, you have not suffered enough(ahem, IKR). Solve the rooms. Find the memories. Try not to disappoint me. This cannot be under the umbrella of your- bd me....',
    success: 'Right. The birthday gift is officially under investigation.', kind: 'intro',
  },
  {
    id: 'still-awake', number: '02', title: 'How did our CONVERSATION start?', eyebrow: 'ORIGIN STORY · FACEBOOK -> Instagram -> twitter-> beReal -> Telegram->non-existanat(lol)',
    intro: 'I sent the least dramatic opening message in history, that started our friendship. what was it? ',
    prompt: 'What was that first message?', answer: 'still awake?', answerDisplay: 'still awake?',
    success: 'Oh so you do remember stuff(unlike me) huh.. A very happy birhtday to one of my oldest(based on age, music taste, maturity, experience of life.. etc) 🌸', memory: 'still awake?',
    hints: ['seriously? ', 'how dare you not rembember this... aaghh', 'ab agar yd nai hai to mai kuch nai keh skta.. siwae iske ki saram kar lo.. huh answer: "still awake?"'], personal: true, kind: 'answer',
  },
  {
    id: 'many-names', number: '03', title: 'The Many Names of my dear friend', eyebrow: 'IDENTITY CHECK · SUBJECT HAS MANY ALIASES',
    intro: 'The suspect has accumulated several aliases over the years. This file asks for the one that became your primary designation in this case, which still stands true due to behviour of the suspect.',
    prompt: 'Enter the nickname that i call you the most:', answer: 'bhootni', answerDisplay: 'Bhootni',
    success: 'Identity confirmed. The suspect remains difficult to manage(as she never replies). Happy Birthday Bhootni dost, thoda sa sudhar jao.. or khud ko rest dedo.. nai to real bhootni ban jaogi😭. fir meri fategi ki... ye mreko nai chorne wali hai ', memory: 'Bhootni',
    hints: ['Mai nai bata rha. ', 'are suar ho kya ekdm.. bola na nai bata rha ', 'Chal be... Bhootni h answer.. naadaan ban ne ki kosis ki jaa rhi hai my lord'], kind: 'answer',
  },
  {
    id: '2248', number: '04', title: 'Case File: 2248', eyebrow: 'EVIDENCE ROOM · SUBJECT CAUGHT',
    intro: 'You recommended 2248 to Me. It seemed that it is one of your favriote game. So you should play this game on your speical day. And it seems that you still remember how to play this game. but you dont remember your friend enough.. huh Happy birhtday mrs good memory. 🌸', success: 'Target reached. You still remember how to play this game. Happy Birhtday Mrs big forehead 🌸', memory: 'Caught playing 2248', hints: ['Link adjacent tiles with the same number.', 'Merging doubles the value. The selected path must match.', 'The target is only 64 for this first run.'], kind: 'number-merge', image: 'assets/2248/caught-playing-2248.jpg',
  },
  {
    id: 'bd-mein-bataungi', number: '05', title: 'Quyamat ke roz', eyebrow: 'RESTRICTED FILE · ACCESS DENIED',
    intro: 'A file has been locked. The reason for denial has been recorded by the subject herself. No, there is no appeal process.',
    prompt: 'What is it you say, when you dont want to tell things(used infinity times)?', answer: 'bd me btaungi', answerDisplay: 'bd me btaungi',
    success: 'Access granted. Quammat ke roz bhi happy birthday bolne aaunga', memory: 'bd me btaungi',
    hints: ['nai btaunga.. dhurrr', 'It begins with bd me...', 'bd me btaungi'], kind: 'answer',
  },
  {
    id: 'mausam', number: '06', title: 'Weather Department', eyebrow: 'CONVERSATION REDIRECT DETECTED',
    intro: 'The investigator has encountered a difficult question. Aman has chosen his traditional strategy: change the subject immediately.',
    prompt: 'What does Aman ask to derail the conversation?', answer: 'mausam kaisa hai', answerDisplay: 'Mausam kaisa hai',
    success: 'Excellent. The original question remains unanswered. Weather is now under discussion. Happy birthday ka koi pyara response aa gya to topic change krne ke lie bhi happy birhtday hi bolunga. ', memory: 'Mausam kaisa hai',
    hints: ['It is about the weather.', 'Aman uses it to change the topic.', 'Mausam kaisa hai?'], kind: 'answer',
  },
  { id: 'buxar-mission', number: '07', title: 'Operation: Are we even Real?', eyebrow: 'FIELD OPERATION · FAILED', intro: 'Your came to Buxar, to check if we are even real. You sent Aman a few photos from nearby spots. He took off on his skootie to find your vehicle—and failed to get visual contact, and even damaged the skootie.', prompt: 'What was the mission result?', answer: 'we are not real', answerDisplay: 'we are not real', success: 'MISSION FAILED · VISUAL CONTACT: 0 · SKOOTIE SPEED: QUESTIONABLE · MEMORY: PERMANENT · Happy Birthday dear unreal person, who changed my life tremendously. ', memory: 'Target not found · Buxar', hints: ['Aman searched. He did not find you.', 'Visual contact stayed at zero.', 'answer: we are not real'], kind: 'mission', image: 'assets/meet-up/buxar-clue-01.jpg' },
  { id: 'only-fight', number: '08', title: 'The Only Fight', eyebrow: 'PERSONAL FILE · DIARY ENTRY', intro: 'I were sad, i wanted to talk to you about it, so i texted and then i shooed you away, lol, and i realized the moment i said shooed you away... we both cried.. lol.. i wrote things in chat and deleted. you wrote something in diary. 🌸', success: 'Matter solved. Some memories deserve more care than a punchline.', memory: 'I won’t bother u anymore → matter solved', hints: ['First words: I won’t…', 'She wrote that she would not bother you anymore.', 'I won’t bother u anymore'], kind: 'diary', personal: true, image: 'assets/diary/i-wont-bother-you.jpg' },
  { id: 'places-never-been', number: '09', title: 'The Places We’ve Never Been', eyebrow: 'A VERY STRANGE ORIGIN STORY', intro: 'Same school, but you never met or spoke there. Facebook connected us later. Reconstruct the beginning in the right order.', success: 'A school hallway you never crossed together, but some suar laughed at a innocent human being falling(in group).  A Facebook message that somehow changed that. Happy Birthday to most unrealistic friend, who is almost fiction in herself. 🌸', memory: 'Same school �?still awake? �?Facebook �?Instagram �?BeReal �?Telegram', hints: ['Start with the same school, even though you never met there.', 'After school came the first message, “still awake?�? then the Facebook conversation.', 'Full order: Same school, but they never met there �?First message: “still awake?�?�?Had Conversation on Facebook �?switched to instagram with too many reels, but no guts to talk �?unreal people went to a app called beReal �?switched to telegram🌸'], kind: 'never-met', personal: true },
  { id: 'photograph', number: '10', title: 'The Photograph', eyebrow: 'ONE FRAME · TWO FRIENDS', intro: 'Two people. One edited photo. Zero actual photos together. Somehow, still a memory. Open the frame when you’re ready. 🌸', success: 'Not a photograph of a day we spent together. Still a picture that belongs to our friendship. Happy Birthday Suar.', memory: 'One edited photo · no in-person photo', kind: 'photo', personal: true, image: 'assets/final/together-edited.jpg' },
  { id: 'amans-memory', number: '11', title: 'Aman’s Memory', eyebrow: 'FINAL RECALL · THE KEY WAS WITH YOU', intro: 'Aman’s memory is famously unreliable. Yours is apparently alarming. Select the four real discoveries from this investigation.', success: 'Correct. You have been carrying the key this whole time. Aman would like you to inform, this year too, he searched whether your birthday is on 12th or 13th... it was 12th yet again. Happy happy bday to you dost.', memory: 'You remembered all four. Aman is impressed.', hints: ['Two are things you said; one is her nickname; one is Aman changing the subject.', 'Check the Memory panel at the bottom.', 'Pick the first message, Bhootni, bd me btaungi, and Mausam kaisa hai.'], kind: 'memory-recall' },
  { id: 'exit', number: '12', title: 'The Exit', eyebrow: 'BIRTHDAY REVEAL · CASE CLOSED', intro: 'Nine-plus years this friendship has been. I know i could not do much to help you this year, but you know that i will be there, whatever be the senario. You know that i will keep showing up right ? you cant get away from me, not in this life 🌸', success: 'ESCAPE: COMPLETE · BIRTHDAY: SUCCESSFUL · ACTUAL MEETING: STILL PENDING (maybe quayamt ke roz milenge lol). Happy birthday, Bhootni. I’m lucky and greatfull that you’re my friend. Now don’t let this make you emotional. or like last time or before that you have to cry in front of i dont know how many people.. lol', memory: 'Birthday escape complete', kind: 'finale', personal: true, gallery: [
    { image: 'assets/final/exit-01.jpg', caption: '01 · Iss garib ke taraf se janam din ki dher saari subhkamnayee. ' },
    { image: 'assets/final/exit-02.jpg', caption: '02 · Happy Birthday to the one who motivated me without knowing. ' },
    { image: 'assets/final/exit-03.png', caption: '03 · Meri taraf se bhi Happy Birthday🤗' },
    { image: 'assets/final/exit-04.jpg', caption: '04 · Kuch nai bas tmko bday ke din ozmalwa seeds ke alawa kuch or khate hue pkd lia gya hai.' },
    { image: 'assets/final/exit-05.jpg', caption: '05 · Teen tango wala Uneri bhi Happy Birthday bol rha tha waise.' },
    { image: 'assets/final/exit-06.jpg', caption: '06 · Mere ghr par ye delivary dene aaya tha, wo bhi Happy Birthday bol rha tha. ' },
    { image: 'assets/final/exit-07.jpg', caption: '07 · Chennai me ek baar baraf padd rha tha.. to ye ghr aake tmko happy bday bol rha tha. ' },
    { image: 'assets/final/exit-08.jpg', caption: '08 · Zyada bolunga to maar padd jaega... par ye langdi bhi happy birthday bol rhi thi. ' },
    { image: 'assets/final/exit-09.jpg', caption: '09 · Ye nashedi ke taraf se bhi happy birhtday mitarrr. ' },
    { image: 'assets/final/exit-10.jpg', caption: '10 · Ye tmra body double mila tha.. isko hum happy birhtday bole to smile kar dia.' },
  ], closingImage: 'assets/final/exit-closing.jpg', closingImageCaption: 'One last memory before the birthday message.', closingImageBefore: 'Happy Birthday Krishna Draupati Balram Tripathi, may you get everything you want, may you get every happiness you deserve. may you celebrate a little for every little/big happiness/goodness that you get. I know we have not been in touch lately, no one is blameable. It is just life happening. It is us maturing, taking reponsibility. hope whatever is happening in life is not that hard. i mean life was never easy on you. But i know whenever it will be people around would not believe. God will compusate for jo bhi hua past me. Bas you make sure to be Gods strongest soilder as you are. abhi to life aur zyada crazy chal rhi hogi... i sometime imagine ki kya chal rha hoga... normal chal rha hoga ki band baja hua hoga ... aur fir ye bhi sochta hu .. ki agar khrb chal rha ho...to koi share krne k lie ho tmre sath... waise to tm akle face kar leti ho sabkuch.. par thoda halka bhi lgna chiaye na tmko lol... mere sath kuch crazy hota hai ... to ek thought aata hai ... active aaogi to yd kar ke btaunga .. par fir meri memory bhi to crazy hai ... lkn anyways... i keep you in my prayers .... i really pray ki.. jo bhi chal rh ho tmre life me wo tm ekdm strongly handle kar lo.. sab kuch or jo bhi tm chaahti ho achive karna wo tm achieve kar pao. Ek din yr.. mreko wo screenshot mila... jisme tmri kisi frnd ne tmra hath padha tha... tmne bola tha that was scary ... mtlb purani baate was precise... and let me tell you nayi baate bhi ekdm sahi jaa rhi hai(i think so)... tm shyd boli thi.. mangungi tb bhi nai bhjna.. to nai bhjunga .. muh pitwao.. mai paddh ke khus ho jaunga ki meri dost taraki kar kr rahi hai ... life me sach me crazy krna tm... ekdm deserve karti tm.. sab kuch... kabhi bhi low lage.. khrb lage.. .. bas pak pak sun ne ka mann kare ... ya pak pak karne ka mann kare(rare of you) to you know you can reach me out... agar mai ek text par reply nai karu... to dusra kar dena.. neend khul jaega lol... bas take care of yourself. apne baare me bhi sochte rhna... apne health ka bhi dhyn rkhna... or abhi images ke lie chat khole hue the... to mreko dikha... ki baapre.. hum kitta tmko pani pine ke lie bolte the... mtlb har dusra paragraph me tmko bolte the ki pani pi lo...lol.. to abhi agar galti se emotional ho jaana to pani pi lena... hydrated rhna jaroori hai .. lol... aur ek baat... mtlb aaj kal thoda ghum zyada rhe hai ... to mtlb kahi jaate hai na naye jagah par... to mreko lagta hai ki tm mreko kahi dikh jaogi.. kyuki tmra jagah fix to nai hai... par agar galti se dikh gai na kisi seher me.. to phle to tmko kidnap karenge... r baitha ke puchenge kya chal rha hai life me... ek ek baat batao.. ek detail chuta to pani pilaenge... or sab sunenge...huh. lkn koi baat nai. or jaha tk mreko lagta tm to sochti hogi .. ki aman ye sb deserve nai krta(mtlb ghosting..lol) to khud ko blame nai krna sch me.. life me kabhi hoga jab hum bhi badla lenge(kidding ykr?). i know kuch situations hai .. nai to tm or mreko nai btao.. huh.. ho hi nai skta.. lol. just kidding.... lkn sch me take care of yourself .. may you have a great day, year, century... and maybe afterlife ya agle janam ka bhi... ekdm sab chak ke fatte napp di kalli rhe.. lol... tmko yd hai .. byee wla ek conversation, hum dono me se koi bol rha tha byee bolne me darr lgta... i guess tm hi... ab mreko lagta hai byee bolne me.. jab bhi baat hoti hai .. lagta hai . pata nai kaba next baat hogi.. lol.. par jab bhi baat hoti..wo gap feel nai hota.. ki tabse kabse baat nai hui hai.. lol.. i like that... haa or ek chiz.. lol .. phle kitta bhi dikkat hota tha.. tm bolti thi.. ki sab theek hai .. mast hai .. lol.. or ab.. tm bol deti ho.. ganda chal rha... to hum bas imagine kar rhe.. ki pata nai kitta crazy chal rha hoga.. lol .. ya ab sch bolne lag gai ho .. kuch bhi ho skta .. lkn ho bhi ho,,,mreko meri dost ka pata hai ... wo handle kar legi.. or kisi ko pata bhi nai chalne degi.. to mere side se hardm har situation me tmre lie all the best or prayers rhta hai.. to bas you goo gurlllll... HAPPIEST BIRTHDAY MY REAL BESTIE... cringeiyat se marr matt jaana .. lol have a great one dost... dher sari blessings.. dher sara prayers.. ek chiz or .. agar tmko lagta hoga koi nai sochta mere baare me(less likely ki aisa sochti hogi) but still... agar sochti hogi..to just keep in mind .. ki ek kaala suar yd krte rhta hai.. to bas apna dhyn rkhna.. or mreko apne dimag me yd krte rhna... lol.. ab to mreko yad bhi nai hai .. ki tmra kitta sara "bd me btaungi" sab pending hai .. par sab sunna hai mreko ... to kabhi bd me bta dena.. koi aas laga ke baitha hai .. lol... or tm ek din boli thi mreko bhut kuch krna tha life me.. i see bhut kuch pura bhi ho rha ... so cheers to that dost... HAPPY HAPPY HAPPY BIRTHDAY TO YOU   ', closingImageAfter: 'Here is to promise that i made(everytime i read this, i get emotional..lol), cheers to the life that we are living🥂 may you keep smiling.. coz das best . Happy birthday, Bhootni. Thoda so bhi lia kro .. time nikal ke.. lol .. happy birhtday dost. 🌸', video: 'assets/final/birthday-message.mp4', finalMessage: 'I made you spend time on this because i am vengfull, you know that right? but since you have been here long enough, cheers to all the memories all the things we planned and all the things that we are trying to achive and definetly to all the talks. HAPPY BIRTHDAY DOST, MAY GOD BLESS YOU. may you achive everythings you want in life, may you have a great life ahead.🌸' },
]

export const wrongAnswers = [
  'Nope.', 'Try again.', 'Are you sure?', 'Bhootni...', '9+ years.',
  '9+ YEARS OF FRIENDSHIP AND THIS IS WHAT I GET?', 'Disappointing, Bhootni.',
  "I'm beginning to question everything.",
]

export const finaleNote = 'Never ever think that you have hurt me in anyways, i know life happens. and we do our best to survive. I will alwez be there for you.'
