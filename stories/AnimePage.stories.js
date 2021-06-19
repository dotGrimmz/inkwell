import React from 'react';
import AnimePage from '../pages/index';


export default {
    title: 'Anime Page Story',
    component: AnimePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const AnimePageWrapper = data => (
    < AnimePage {...data} />
)

export const AnimePageTemplate = AnimePageWrapper.bind({})
AnimePageTemplate.args = {
    data: {
        "Page": {
            "media": [
                {
                    "id": 16498,
                    "description": "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n(Source: MangaHelpers) ",
                    "title": {
                        "english": "Attack on Titan"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-m5ZMNtFioc7j.png"
                    }
                },
                {
                    "id": 21459,
                    "description": "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?<br><br>\n\nMiddle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…<br><br>\n\n(Source: Viz Media)",
                    "title": {
                        "english": "My Hero Academia"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21459-oZMZ7JwS5Sxq.jpg"
                    }
                },
                {
                    "id": 1535,
                    "description": "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a <i>Death Note</i>, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?<br>\n<br>\nThe consequences of Light’s actions will set the world ablaze.<br>\n<br>\n(Source: Viz Media)",
                    "title": {
                        "english": "Death Note"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg"
                    }
                },
                {
                    "id": 101922,
                    "description": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n<br>\n(Source: Crunchyroll)",
                    "title": {
                        "english": "Demon Slayer: Kimetsu no Yaiba"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg"
                    }
                },
                {
                    "id": 11061,
                    "description": "A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\nA Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\nAfter becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
                    "title": {
                        "english": "Hunter x Hunter (2011)"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png"
                    }
                },
                {
                    "id": 11757,
                    "description": "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game's tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...<br><br>\n(Source: Crunchyroll)",
                    "title": {
                        "english": "Sword Art Online"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11757-Q9P2zjCPICq5.jpg"
                    }
                },
                {
                    "id": 21087,
                    "description": "Saitama has a rather peculiar hobby, being a superhero, but despite his heroic deeds and superhuman abilities, a shadow looms over his life. He's become much too powerful, to the point that every opponent ends up defeated with a single punch.\n<br><br>\nThe lack of challenge has driven him into a state of apathy, as he watches his life pass by having lost all enthusiasm, at least until he's unwillingly thrust in the role of being a mentor to the young and revenge-driven Genos.   \n\n",
                    "title": {
                        "english": "One-Punch Man"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21087-8WpMBeqsSVx8.png"
                    }
                },
                {
                    "id": 20605,
                    "description": "The suspense horror/dark fantasy story is set in Tokyo, which is haunted by mysterious \"ghouls\" who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like him, at the café he frequents. Little does he realize that his fate will change overnight.\n<br><br>\n(Source: Anime News Network)",
                    "title": {
                        "english": "Tokyo Ghoul"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20605-fmnHdfurM7m6.jpg"
                    }
                },
                {
                    "id": 5114,
                    "description": "\"In order for something to be obtained, something of equal value must be lost.\"\n<br><br>\nAlchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist.\n<br><br>\nThree years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.\n<br><br>\n(Source: MAL Rewrite)",
                    "title": {
                        "english": "Fullmetal Alchemist: Brotherhood"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-4CpuT7iWcZ37.png"
                    }
                },
                {
                    "id": 21856,
                    "description": "Taking off right after the last episode of the first season. The school is temporarily closed due to security. When U.A. restarts, it is announced that the highly anticipated School Sports Festival will soon be taking place. All classes: Hero, Support, General and Business will be participating. Tournaments all round will decide who is the top Hero in training.<br><br>(Source: Anime News Network)",
                    "title": {
                        "english": "My Hero Academia Season 2"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21856-vX1n54domqjJ.png"
                    }
                },
                {
                    "id": 20958,
                    "description": "The second season of <i>Shingeki no Kyojin</i>.<br><br>\n\nEren Jaeger swore to wipe out every last Titan, but in a battle for his life he wound up becoming the thing he hates most. With his new powers, he fights for humanity's freedom facing the monsters that threaten his home. After a bittersweet victory against the Female Titan, Eren finds no time to rest—a horde of Titans is approaching Wall Rose and the battle for humanity continues!<br><br>\n\n(Source: Funimation)",
                    "title": {
                        "english": "Attack on Titan Season 2"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20958-HuFJyr54Mmir.jpg"
                    }
                },
                {
                    "id": 20,
                    "description": "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n[Written by MAL Rewrite]",
                    "title": {
                        "english": "Naruto"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20-E3YH5W6sz6H7.jpg"
                    }
                },
                {
                    "id": 113415,
                    "description": "A boy fights... for \"the right death.\"<br>\n<br>\nHardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.<br>\n<br>\nItadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.\n<br><br>\n(Source: Crunchyroll)<br>\n<br>\n<i>Note: The first episode received an early web premiere on September 19th, 2020. The regular TV broadcast started on October 3rd, 2020.</i>",
                    "title": {
                        "english": "JUJUTSU KAISEN"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-979nF8TZP2xC.jpg"
                    }
                },
                {
                    "id": 101759,
                    "description": "Emma, Norman and Ray are the brightest kids at the Grace Field House orphanage. And under the care of the woman they refer to as “Mom,” all the kids have enjoyed a comfortable life. Good food, clean clothes and the perfect environment to learn—what more could an orphan ask for? One day, though, Emma and Norman uncover the dark truth of the outside world they are forbidden from seeing.\n<br><br>\n(Source: Viz Media)",
                    "title": {
                        "english": "The Promised Neverland"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101759-NhSwxv7HY9y9.jpg"
                    }
                },
                {
                    "id": 21519,
                    "description": "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.<br>\n<br>\nOne day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.<br>\n<br>\nKimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.<br>\n<br>\n[Written by MAL Rewrite]",
                    "title": {
                        "english": "Your Name."
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21519-XIr3PeczUjjF.png"
                    }
                },
                {
                    "id": 20954,
                    "description": "After transferring into a new school, a deaf girl, Shouko Nishimiya, is bullied by the popular Shouya Ishida. As Shouya continues to bully Shouko, the class turns its back on him. Shouko transfers and Shouya grows up as an outcast. Alone and depressed, the regretful Shouya finds Shouko to make amends.\n<br><br>\n(Source: Eleven Arts)",
                    "title": {
                        "english": "A Silent Voice"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20954-RYEF5mWglzV8.png"
                    }
                },
                {
                    "id": 100166,
                    "description": "Summer is here, and the heroes of Class 1-A and 1-B are in for the toughest training camp of their lives! A group of seasoned pros pushes everyone's Quirks to new heights as the students face one overwhelming challenge after another. Braving the elements in this secret location becomes the least of their worries when routine training turns into a critical struggle for survival.<br><br>(Source: Crunchyroll)",
                    "title": {
                        "english": "My Hero Academia Season 3"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100166-pypBDoozr2u0.png"
                    }
                },
                {
                    "id": 20755,
                    "description": "The students of class 3-E have a mission: kill their teacher before graduation. He has already destroyed the moon, and has promised to destroy the Earth if he can not be killed within a year. But how can this class of misfits kill a tentacled monster, capable of reaching Mach 20 speed, who may be the best teacher any of them have ever had?",
                    "title": {
                        "english": "Assassination Classroom"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20755-q0b3Ok1cAbPd.jpg"
                    }
                },
                {
                    "id": 99147,
                    "description": "The third season of <i>Shingeki no Kyojin</i>.<br>\n<br>\nEren and his companions in the 104th are assigned to the newly-formed Levi Squad, whose assignment is to keep Eren and Historia safe given Eren's newly-discovered power and Historia's knowledge and pedigree. Levi and Erwin have good reason to be concerned, because the priest of the Church that Hanji had hidden away was found tortured to death, making it clear that the Military Police are involved with the cover-up. Things get more harrowing when the MPs make a move on Erwin and the Levi Squad narrowly avoids capture. Eren is also having problems with his Titan transformation, and a deadly killer has been hired to secure Eren and Historia, one Levi knows all too well from his youth.<br>\n<br>\n(Source: Anime News Network)",
                    "title": {
                        "english": "Attack on Titan Season 3"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99147-RH36MfPC4B0n.jpg"
                    }
                },
                {
                    "id": 20665,
                    "description": "Piano prodigy Arima Kousei dominated the competition and all child musicians knew his name. But after his mother, who was also his instructor, passed away, he had a mental breakdown while performing at a recital. This resulted in him no longer being able to hear the sound of his piano playing. Two years later, Kousei hasn’t touched the piano and views the world without any flair or color. He was content at living out his life with his good friends Tsubaki and Watari until, one day, a girl changed everything. Miyazono Kaori is a pretty, free spirited violinist whose playing style reflects her personality. Kaori helps Kousei return to the music world and show that it should be free and mold breaking unlike the structured and rigid style Kousei was used to.",
                    "title": {
                        "english": "Your Lie in April"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20665-CnzR2zVpdxtR.png"
                    }
                },
                {
                    "id": 9253,
                    "description": "Self-proclaimed mad scientist Okabe Rintarou lives in a small room in Akihabara, where he invents \"future gadgets\" with fellow lab members Shiina Mayuri, his air-headed childhood friend, and Hashida Itaru, an otaku hacker. The three pass the time by tinkering with their latest creation, a \"Phone Microwave\" that can be controlled through text messages. \n<br><br>\nThe lab members soon face a string of mysterious incidents that lead to a game-changing discovery: the Phone Microwave can send emails to the past and thus alter history. Adapted from the critically acclaimed visual novel by 5pb. and Nitroplus, Steins;Gate takes Okabe to the depths of scientific theory and human despair as he faces the dire consequences of changing the past.\n<br><br>\n(Summary by Edo)",
                    "title": {
                        "english": "Steins;Gate"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9253-7pdcVzQSkKxT.jpg"
                    }
                },
                {
                    "id": 21234,
                    "description": "Satoru Fujinuma is a 29 year old manga artist struggling to make a name for himself following his debut. But, that was not the only thing in his life that Satoru was feeling frustrated about… He has a unique supernatural ability of being forced to prevent deaths and catastrophes by being sent back in time before the incident occurred, repeating time until the accident is prevented. One day, he gets involved in an accident that has him framed as a murderer. Desperate to save the victim, he sends himself back in time only to find himself as a grade-schooler one month before fellow classmate Kayo Hinazuki went missing. Satoru now embarks on a new quest: to save Kayo and solve the mystery behind her disappearance.\n",
                    "title": {
                        "english": "ERASED"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21234-v2NMgPyoVRoM.jpg"
                    }
                },
                {
                    "id": 19815,
                    "description": "The story of No Game, No Life centers around Sora and Shiro, a brother and sister whose reputations as brilliant NEET (Not in Education, Employment, or Training) hikikomori (shut-in) gamers have spawned urban legends all over the Internet. These two gamers even consider the real world as just another \"crappy game.\"<br><br>\nOne day, they are summoned to another world where a young boy named Tet appears before them, claiming to be the “God” of this world. In this world populated by magical creatures, violence is forbidden, humanity is on the brink of extinction and all matters are settled through games. Using their combined intellect, questionable morals and considerable guile, it is up to these siblings to swindle their way to the top in a series of increasingly intriguing and deceptively deadly games.<br><br>\n(Source: Anime News Network)",
                    "title": {
                        "english": "No Game, No Life"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx19815-bIo51RMWWhLv.jpg"
                    }
                },
                {
                    "id": 20447,
                    "description": "Minor god Yato is down on his luck. Fed up with his slacker lifestyle, his partner abruptly quits. He has no money, no worshippers, and no shrine to call home. But just when things are starting to seem hopeless, a bus accident forces him to cross paths with Hiyori Iki, a sweet and perky high school girl. After the accident, Hiyori's soul has a bad habit of slipping out of her body, and after enlisting Yato's help to get her back to normal, she begins to fall into the world of spirits and gods.<br>\n<br>\nBut Hiyori's not the only one who's keeping tabs on Yato. A god from Yato's past is back, and he's not interested in a friendly reunion.<br>\n<br>\n(Source: Funimation)",
                    "title": {
                        "english": "Noragami"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20447-EoQXeygHaVCK.jpg"
                    }
                },
                {
                    "id": 21355,
                    "description": "In the story, Subaru Natsuki is an ordinary high school student who is lost in an alternate world, where he is rescued by a beautiful, silver-haired girl. He stays near her to return the favor, but the destiny she is burdened with is more than Subaru can imagine. Enemies attack one by one, and both of them are killed. He then finds out he has the power to rewind death, back to the time he first came to this world. But only he remembers what has happened since.<br>\n<br>\n(Source: Anime News Network)\n<br><br>\n<i>Notes:<br>\n- The first episode aired with a runtime of ~50 minutes as opposed to the standard 25 minute long episode.<br>\n- In the Winter 2020 season, Re:ZERO was rebroadcast and re-edited to fit into an hour time-slot. This edit included the first OVA and added slight modifications to certain scenes throughout. It also added an additional scene at the end of the final episode.</i>",
                    "title": {
                        "english": "Re:ZERO -Starting Life in Another World-"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21355-xsLpqMFkMQQk.png"
                    }
                },
                {
                    "id": 20464,
                    "description": "Inspired after watching a volleyball ace nicknamed \"Little Giant\" in action, small-statured Shouyou Hinata revives the volleyball club at his middle school. The newly-formed team even makes it to a tournament; however, their first match turns out to be their last when they are brutally squashed by the \"King of the Court,\" Tobio Kageyama. Hinata vows to surpass Kageyama, and so after graduating from middle school, he joins Karasuno High School's volleyball team—only to find that his sworn rival, Kageyama, is now his teammate.\n<br><br>\nThanks to his short height, Hinata struggles to find his role on the team, even with his superior jumping power. Surprisingly, Kageyama has his own problems that only Hinata can help with, and learning to work together appears to be the only way for the team to be successful. Based on Haruichi Furudate's popular shounen manga of the same name, Haikyuu!! is an exhilarating and emotional sports comedy following two determined athletes as they attempt to patch a heated rivalry in order to make their high school volleyball team the best in Japan.\n<br><br>\n[Written by MAL Rewrite]",
                    "title": {
                        "english": "HAIKYU!!"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20464-eW7ZDBOcn74a.png"
                    }
                },
                {
                    "id": 4224,
                    "description": "Ryuuji Takasu is a gentle high school student with a love for housework; but in contrast to his kind nature, he has an intimidating face that often gets him labeled as a delinquent. On the other hand is Taiga Aisaka, a small, doll-like student, who is anything but a cute and fragile girl. Equipped with a wooden katana and feisty personality, Taiga is known throughout the school as the \"Palmtop Tiger.\"\n<br><br>\nOne day, an embarrassing mistake causes the two students to cross paths. Ryuuji discovers that Taiga actually has a sweet side: she has a crush on the popular vice president, Yuusaku Kitamura, who happens to be his best friend. But things only get crazier when Ryuuji reveals that he has a crush on Minori Kushieda—Taiga's best friend!\n<br><br>\n<i>Toradora!</i> is a romantic comedy that follows this odd duo as they embark on a quest to help each other with their respective crushes, forming an unlikely alliance in the process.\n",
                    "title": {
                        "english": "Toradora!"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4224-3Bh0rm99N6Vl.jpg"
                    }
                },
                {
                    "id": 1735,
                    "description": "Naruto: Shippuuden is the continuation of the original animated TV series Naruto. The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as he has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki. <br><br>\n(Source: Anime News Network)",
                    "title": {
                        "english": "Naruto: Shippuden"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1735-80JNLAlnxrKj.png"
                    }
                },
                {
                    "id": 21507,
                    "description": "The story revolves around \"Mob,\" a boy who will explode if his emotional capacity reaches 100%. This boy with psychic powers earned his nickname \"Mob\" because he does not stand out among other people. He keeps his psychic powers bottled up so he can live normally, but if his emotional level reaches 100, something will overwhelm his entire body.<br>\n<br>\n(Source: Anime News Network)",
                    "title": {
                        "english": "Mob Psycho 100"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21507-UaVmcRIUjhUa.jpg"
                    }
                },
                {
                    "id": 20789,
                    "description": "When they were accused of trying to overthrow the monarchy, the feared warriors the Seven Deadly Sins were sent into exile. Princess Elizabeth discovers the truth - the Sins were framed by the king's guard, the Holy Knights - too late to prevent them from assassinating her father and seizing the throne!<br>\nNow the princess is on the run, seeking the Sins to help her reclaim the kingdom. But the first Sin she meets, Meliodas, is a little innkeeper with a talking pig. He doesn't even have a real sword! Have the legends of the Sins' strength been exaggerated?<br>\n<br>\n(Source: Anime News Network)",
                    "title": {
                        "english": "The Seven Deadly Sins"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20789-SsAI4pvvI9EU.jpg"
                    }
                },
                {
                    "id": 110277,
                    "description": "The final season of <i>Shingeki no Kyojin</i>.<br>\n<br>\nIt’s been four years since the Scout Regiment reached the shoreline, and the world looks different now. Things are heating up as the fate of the Scout Regiment—and the people of Paradis—are determined at last. However, Eren is missing. Will he reappear before age-old tensions between Marleyans and Eldians result in the war of all wars?<br>\n<br>\n(Source: Crunchyroll)",
                    "title": {
                        "english": "Attack on Titan Final Season"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx110277-qDRIhu50PXzz.jpg"
                    }
                },
                {
                    "id": 20613,
                    "description": "In a land where corruption rules and a ruthless Prime Minister has turned the puppet Emperor's armies of soldiers, assassins and secret police against the people, only one force dares to stand against them: Night Raid, an elite team of relentless killers, each equipped with an Imperial Arm - legendary weapons with unique and incredible powers created in the distant past.<br>\n<br>\nRescued from a fate worse than death by Night Raid, young Tatsumi is offered the chance to join their lethal ranks… but it's a deadly choice, as few can master an Imperial Arm and even fewer survive when two Arms go against each other in combat. The battle is on, and only the strongest will make it out alive.\n<br><br>\n(Source: Sentai Filmworks)",
                    "title": {
                        "english": "Akame ga Kill!"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20613-JpRbnstIj6PO.png"
                    }
                },
                {
                    "id": 21,
                    "description": "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n<b>*This includes following special episodes:</b><br>\n- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n- Team Formation! Save Chopper (Episode 542)<br>\n- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n- 20th Anniversary! Special Romance Dawn (Episode 907)",
                    "title": {
                        "english": "One Piece"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg"
                    }
                },
                {
                    "id": 104578,
                    "description": "The second cour of <i>Shingeki no Kyojin 3</i>.<br>\n<br>\nThe battle to retake Wall Maria begins now! With Eren’s new hardening ability, the Scouts are confident they can seal the wall and take back Shiganshina District. If they succeed, Eren can finally unlock the secrets of the basement—and the world. But danger lies in wait as Reiner, Bertholdt, and the Beast Titan have plans of their own. Could this be humanity’s final battle for survival?<br>\n<br>\n(Source: Funimation)",
                    "title": {
                        "english": "Attack on Titan Season 3 Part 2"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104578-LaZYFkmhinfB.jpg"
                    }
                },
                {
                    "id": 104276,
                    "description": "The villain world teeters on the brink of war now that All For One is out of the picture. Shigaraki of the League of Villains squares off with Overhaul of the yakuza, vying for total control of the shadows. Meanwhile, Deku gets tangled in another dangerous internship as he struggles to keep pace with his upperclassman—Mirio.<br><br>(Source: Crunchyroll)",
                    "title": {
                        "english": "My Hero Academia Season 4"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104276-DplpGzgCoRZX.jpg"
                    }
                },
                {
                    "id": 101291,
                    "description": "There's a rumor about a mysterious phenomenon called \"puberty syndrome.\" For example, Sakuta Azusagawa is a high school student who suddenly sees a bunny girl appear in front of him. The girl is actually a girl named Mai Sakurajima, who is Sakuta's upperclassman who is also a famous actress who has gone on hiatus from the entertainment industry. For some reason, the people around Mai cannot see her bunny-girl figure. Sakuta sets out to solve this mystery, and as he spends time with Mai, he learns her secret feelings. Other heroines who have \"puberty syndrome\" start to appear in front of Sakuta.<br><br>\n(Source: Anime News Network)",
                    "title": {
                        "english": "Rascal Does Not Dream of Bunny Girl Senpai"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101291-Hjz1ToFL5sCG.png"
                    }
                },
                {
                    "id": 21827,
                    "description": "A certain point in time, in the continent of Telesis. The great war which divided the continent into North and South has ended after four years, and the people are welcoming a new generation. Violet Evergarden, a young girl formerly known as “the weapon”, has left the battlefield to start a new life at CH Postal Service. There, she is deeply moved by the work of “Auto Memories Dolls”, who carry people's thoughts and convert them into words. Violet begins her journey as an Auto Memories Doll, and comes face to face with various people's emotions and differing shapes of love. There are words Violet heard on the battlefield, which she cannot forget. These words were given to her by someone she holds dear, more than anyone else. She does not yet know their meaning but she searches to find it.<br>\n<br>\n(Source: Anime News Network)",
                    "title": {
                        "english": "Violet Evergarden"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21827-10F6m50H4GJK.png"
                    }
                },
                {
                    "id": 21202,
                    "description": "Kazuma Satou decides that today is the day to get out of the house for a bit. Since he dies, pointlessly, it's clearly a bad choice. The goddess who greets him in the afterlife, however, offers him a chance to be reborn in a world not unlike that of a video game, and as a bonus she'll even throw in a cool item or power! Can't possibly be a bad choice, right? Except he arrives with no money at all, dead average skills, and his \"bonus\" isn't useful at all--since he picked the goddess, Aqua, herself. How are the two of them supposed to defeat the evil Devil King and live happily ever after? Well, for them, it probably starts with day laboring rather than adventuring. And it's only going to get more disappointing from there!<br>\n<br>\n(Source: Crunchyroll)",
                    "title": {
                        "english": "KONOSUBA -God's blessing on this wonderful world!"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21202-TfzXuWQf2oLQ.png"
                    }
                },
                {
                    "id": 6547,
                    "description": "Otonashi wakes up in the afterlife to find out he has no memories of his life before death. Desperate to survive in a war that could yield another unfortunate fate, he joins the SSS in the battle against Angel, whose very mission is to destroy all inhabitants of this afterlife. As Otonashi struggles to recover his memory and learn more about this world, he finds that not all is as it had seemed.<br><br>\n(Source: Funimation)",
                    "title": {
                        "english": "Angel Beats!"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6547-3jWzWyXg34Et.png"
                    }
                },
                {
                    "id": 9919,
                    "description": "This world consists of two dimensions joined as one, like a mirror. The first is the world in which the humans live, Assiah. The other is the world of demons, Gehenna. Ordinarily, travel between the two, and indeed any kind of contact between the two, is impossible. However the demons can pass over into this world by possessing anything that exist within it. Satan the god of demons, but there's one thing that he doesn't have, and that's a substance in the human world that is powerful enough to contain him!! For that purpose he created Rin, his son from a human woman, but will his son agree to his plans? Or will he become something else...? An exorcist?\n",
                    "title": {
                        "english": "Blue Exorcist"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9919-Svl7SURz7UtD.jpg"
                    }
                },
                {
                    "id": 99423,
                    "description": "The distant future: Humanity established the mobile fort city, Plantation, upon the ruined wasteland. Within the city were pilot quarters, Mistilteinn, otherwise known as the “Birdcage.” That is where the children live... Their only mission in life was the fight. Their enemies are the mysterious giant organisms known as Kyoryu. The children operate robots known as FRANXX in order to face these still unseen enemies. Among them was a boy who was once called a child prodigy: Code number 016, Hiro. One day, a mysterious girl called Zero Two appears in front of Hiro. “I’ve found you, my Darling.”\n<br><br>\n(Source: Crunchyroll)",
                    "title": {
                        "english": "DARLING in the FRANXX"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx99423-8MBxtwCeHf8B.png"
                    }
                },
                {
                    "id": 101921,
                    "description": "Known for being both brilliant and powerful, Miyuki Shirogane and Kaguya Shinomiya lead the illustrious Shuchiin Academy as near equals. And everyone thinks they’d make a great couple. Pride and arrogance are in ample supply, so the only logical move is to trick the other into instigating a date! Who will come out on top in this psychological war where the first move is the only one that matters?\n<br><br>\n(Source: Aniplex)",
                    "title": {
                        "english": "Kaguya-sama: Love is War"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101921-qSV6zMacSDm4.png"
                    }
                },
                {
                    "id": 105333,
                    "description": "After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world— turning every single human into stone.\n<br><br>\nSeveral millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuu's brains combine to forge a formidable partnership, and they soon uncover a method to revive those petrified.\n<br><br>\nHowever, Senkuu's master plan is threatened when his ideologies are challenged by those who awaken. All the while, the reason for mankind's petrification remains unknown.\n<br><br>\n(Source: MAL Rewrite)",
                    "title": {
                        "english": "Dr. STONE"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-BBxkPhen07Zj.jpg"
                    }
                },
                {
                    "id": 20623,
                    "description": "They arrive in silence and darkness. They descend from the skies. They have a hunger for human flesh. They are everywhere. They are parasites, alien creatures who must invade–and take control of–a human host to survive. And once they have infected their victims, they can assume any deadly form they choose: monsters with giant teeth, winged demons, creatures with blades for hands. But most have chosen to conceal their lethal purpose behind ordinary human faces. So no one knows their secret–except an ordinary high school student. Shin is battling for control of his own body against an alien parasite, but can he find a way to warn humanity of the horrors to come?<br>\n<br>\n(Source: Del Rey)",
                    "title": {
                        "english": "Parasyte -the maxim-"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20623-rVoHgF3Apo7P.jpg"
                    }
                },
                {
                    "id": 97940,
                    "description": "In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s magic. Asta’s is a rare Grimoire of Anti-Magic that negates and repels his opponent’s spells. Being opposite but good rivals, Yuno and Asta are ready for the hardest of challenges to achieve their common dream: to be the Wizard King. Giving up is never an option!<br>\n<br>\n(Source: Crunchyroll)",
                    "title": {
                        "english": "Black Clover"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97940-bPydLjny8PUw.png"
                    }
                },
                {
                    "id": 20931,
                    "description": "\"Welcome to Quindecim\" What greets two unsuspecting guests is a strange bar, Quindecim, and the white-haired bartender, Decim. \"From here you two shall begin a battle where your lives hang in the balance,\" he says to introduce the Death Game. Before long the guests' true natures become apparent. As a matter of course, at the game's end Decim is revealed to be the \"arbiter.\" Decim's judgement on the two guests is...<br>\n<br>\n(Source: Anime News Network)",
                    "title": {
                        "english": "Death Parade"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20931-bktYqOcxPERi.jpg"
                    }
                },
                {
                    "id": 10620,
                    "description": "This psychological thriller, based on the manga written and illustrated by Sakae Esuno, is about Yuki, a loner who's not very good with people. He prefers to write a diary on his cell phone and talk to his imaginary friend, Deus Ex Machina &ndash; The God of Time and Space. However, Yuki soon learns that Deus is more than a figment of his imagination when he makes Yuki participate in a battle royale with eleven others. The contestants are given special diaries that can predict the future, each diary possessing unique features that give it both advantages and disadvantages. Within the next 90 days, the contestants must try to survive until there is only one left standing. The winner will become the new God of Time and Space.<br><br>\n(Source: FUNimation)",
                    "title": {
                        "english": "The Future Diary"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx10620-OMnOMuZBgEKy.png"
                    }
                },
                {
                    "id": 20594,
                    "description": "One year after the SAO incident, Kirito is approached by Seijiro Kikuoka from Japan's Ministry of Internal Affairs and Communications Department \"VR Division\" with a rather peculiar request.\r\n\r\nThat was an investigation on the \"Death Gun\" incident that occurred in the gun and steel filled VRMMO called Gun Gale Online (GGO). \"Players who are shot by a mysterious avatar with a jet black gun lose their lives even in the real world...\" Failing to turn down Kikuoka's bizarre request, Kirito logs in to GGO even though he is not completely convinced that the virtual world could physically affect the real world.<br>\r\n<br>\r\nKirito wanders in an unfamiliar world in order to gain any clues about the \"Death Gun.\" Then, a female sniper named Sinon who owns a gigantic \"Hecate II\" rifle extends Kirito a helping hand. With Sinon's help, Kirito decides to enter the \"Bullet of Bullets,\" a large tournament to choose the most powerful gunner within the realm of GGO, in hopes to become the target of the \"Death Gun\" and make direct contact with the mysterious avatar.<br>\r\n<br>\r\n(Source: Crunchyroll)",
                    "title": {
                        "english": "Sword Art Online II"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20594-FhRgZ1H9Istt.jpg"
                    }
                },
                {
                    "id": 9989,
                    "description": "Jinta Yadomi and his group of childhood friends have become estranged after a tragic accident split them apart. Now in their high school years, a sudden surprise forces each of them to confront their guilt over what happened that day and come to terms with the ghosts of their past. <br><br>\n(Source: NIS America)",
                    "title": {
                        "english": "Anohana: The Flower We Saw That Day"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9989-qCd2RgAL0P8I.png"
                    }
                },
                {
                    "id": 1575,
                    "description": "On August 10th of the year 2010 the Holy Empire of Britannia began a campaign of conquest, its sights set on Japan. Operations were completed in one month thanks to Britannia's deployment of new mobile humanoid armor vehicles dubbed Knightmare Frames. Japan's rights and identity were stripped away, the once proud nation now referred to as Area 11. Its citizens, Elevens, are forced to scratch out a living while the Britannian aristocracy lives comfortably within their settlements. Pockets of resistance appear throughout Area 11, working towards independence for Japan.<br><br>\n Lelouch, an exiled Imperial Prince of Britannia posing as a student, finds himself in the heart of the ongoing conflict for the island nation. Through a chance meeting with a mysterious girl named C.C., Lelouch gains his Geass, the power of the king. Now endowed with absolute dominance over any person, Lelouch may finally realize his goal of bringing down Britannia from within!<br><br>\n(Source: Bandai Entertainment)",
                    "title": {
                        "english": "Code Geass: Lelouch of the Rebellion"
                    },
                    "coverImage": {
                        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1575-ZJYlg8yjvMKI.jpg"
                    }
                }
            ]
        }
    }
}

