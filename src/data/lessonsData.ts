import { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  // ==========================================
  // UNIT 1: RANK STRUCTURE
  // ==========================================
  {
    id: 'rank_1',
    unitId: 'rank_structure',
    number: 1,
    title: 'Overview',
    content: [
      'Every member of the United States Navy and Marine Corps holds a rank that reflects their level of responsibility, authority, and experience. Ranks establish a clear chain of command, allowing units to function efficiently in training, daily operations, and combat. Knowing rank structure is a fundamental military skill because it tells you who is responsible for making decisions, who you report to, and how to address fellow service members with the proper customs and courtesies.',
      'The Navy and Marine Corps use two broad categories of personnel: enlisted and officers. Enlisted personnel (pay grades E-1 through E-9) carry out the majority of the force\'s technical, operational, and leadership responsibilities, while officers (pay grades O-1 through O-10) are commissioned leaders responsible for planning, commanding, and managing units. Each pay grade has a corresponding rank title and a unique insignia worn on the uniform.',
      'By mastering rank names, pay grades, and insignia, you will communicate more professionally, recognize the chain of command quickly, and build a foundation for understanding military organization and leadership.',
    ],
    questionPoolIds: ['rs_ov_1', 'rs_ov_2', 'rs_ov_3'],
  },
  {
    id: 'rank_2',
    unitId: 'rank_structure',
    number: 2,
    title: 'Navy Enlisted Ranks and Insignia',
    content: [
      'The Navy\'s enlisted force consists of nine pay grades, from E-1 through E-9. As sailors gain experience and leadership responsibilities, they advance through these ranks. The first three pay grades are Seaman Recruit (E-1), Seaman Apprentice (E-2), and Seaman (E-3). Beginning at E-4, sailors become Petty Officers, serving as noncommissioned officers who supervise junior personnel. The highest enlisted leaders are the Chief Petty Officers (E-7 through E-9), who provide technical expertise, mentorship, and leadership throughout the fleet.',
      'Each enlisted rank has a unique insignia that allows sailors to identify rank at a glance. Junior enlisted sailors wear simple stripes, while Petty Officers wear a perched eagle above chevrons. Chief Petty Officers wear a distinctive fouled anchor, with additional stars identifying Senior and Master Chiefs.',
      '[IMAGE PLACEHOLDER: Chart of all Navy enlisted ranks, pay grades, and titles]',
      '[IMAGE PLACEHOLDER: Navy enlisted collar insignia from E-1 through E-9]',
    ],
    questionPoolIds: [
      'ne_1', 'ne_2', 'ne_3', 'ne_4', 'ne_5', 'ne_6', 'ne_7', 'ne_8', 'ne_9',
      'ne_10', 'ne_11', 'ne_12', 'ne_13', 'ne_14', 'ne_15', 'ne_16', 'ne_17', 'ne_18', 'ne_19'
    ],
  },
  {
    id: 'rank_3',
    unitId: 'rank_structure',
    number: 3,
    title: 'Navy Officer Ranks and Insignia',
    content: [
      'Navy officers are commissioned leaders who plan missions, lead sailors, and oversee the operation of ships, aircraft, submarines, and shore commands. Officer pay grades range from O-1 through O-10, beginning with Ensign and progressing through Lieutenant Junior Grade, Lieutenant, Lieutenant Commander, Commander, Captain, and the four admiral ranks. As officers advance, they assume greater leadership responsibilities, from leading small divisions to commanding fleets.',
      'Officer collar insignia are designed for quick recognition. Junior officers wear gold or silver bars, field grade officers wear oak leaves, captains wear a silver spread eagle, and admirals wear one to four silver stars based on rank.',
      '[IMAGE PLACEHOLDER: Chart of all Navy officer ranks, pay grades, and titles]',
      '[IMAGE PLACEHOLDER: Navy officer collar insignia from O-1 through O-10]',
    ],
    questionPoolIds: [
      'no_1', 'no_2', 'no_3', 'no_4', 'no_5', 'no_6', 'no_7', 'no_8', 'no_9', 'no_10',
      'no_11', 'no_12', 'no_13', 'no_14', 'no_15', 'no_16', 'no_17', 'no_18', 'no_19', 'no_20', 'no_21'
    ],
  },
  {
    id: 'rank_4',
    unitId: 'rank_structure',
    number: 4,
    title: 'Marine Corps Enlisted Ranks and Insignia',
    content: [
      'The Marine Corps enlisted force consists of E-1 through E-9 and follows a rank structure very similar to the Army and Air Force, making many rank titles familiar across those branches. Marines begin as Private (E-1) and progress through Private First Class, Lance Corporal, Corporal, Sergeant, Staff Sergeant, Gunnery Sergeant, and the senior enlisted ranks. At E-8 and E-9, Marines split into separate leadership and technical career paths, with First Sergeant and Master Sergeant sharing the E-8 pay grade, and Sergeant Major and Master Gunnery Sergeant sharing E-9.',
      'Marine enlisted insignia use chevrons and rockers to show rank, with crossed rifles appearing on NCO insignia and unique symbols such as a star or exploding bomb shell identifying the senior enlisted ranks.',
      '[IMAGE PLACEHOLDER: Chart of all Marine Corps enlisted ranks, pay grades, and titles]',
      '[IMAGE PLACEHOLDER: Marine Corps enlisted rank insignia from E-1 through E-9]',
    ],
    questionPoolIds: [
      'mce_1', 'mce_2', 'mce_3', 'mce_4', 'mce_5', 'mce_6', 'mce_7', 'mce_8', 'mce_9',
      'mce_10', 'mce_11', 'mce_12', 'mce_13', 'mce_14', 'mce_15', 'mce_16', 'mce_17', 'mce_18', 'mce_19', 'mce_20'
    ],
  },
  {
    id: 'rank_5',
    unitId: 'rank_structure',
    number: 5,
    title: 'Marine Corps Officer Ranks and Insignia',
    content: [
      'Marine Corps officers are commissioned leaders responsible for commanding Marines, planning operations, and making decisions at every level of the organization. Their rank structure follows the same O-1 through O-10 system used by the Army and Air Force. Officers begin as Second Lieutenants and progress through First Lieutenant, Captain, Major, Lieutenant Colonel, Colonel, and the general officer ranks.',
      'Marine officer insignia closely match other U.S. military branches. Junior officers wear gold and silver bars, field grade officers wear oak leaves, colonels wear a silver eagle, and generals wear one to four silver stars based on rank.',
      '[IMAGE PLACEHOLDER: Chart of all Marine Corps officer ranks, pay grades, and titles]',
      '[IMAGE PLACEHOLDER: Marine Corps officer collar insignia from O-1 through O-10]',
    ],
    questionPoolIds: [
      'mco_1', 'mco_2', 'mco_3', 'mco_4', 'mco_5', 'mco_6', 'mco_7', 'mco_8', 'mco_9', 'mco_10',
      'mco_11', 'mco_12', 'mco_13', 'mco_14', 'mco_15', 'mco_16', 'mco_17', 'mco_18', 'mco_19', 'mco_20'
    ],
  },
  {
    id: 'rank_6',
    unitId: 'rank_structure',
    number: 6,
    title: 'Midshipman Chain of Command',
    content: [
      'The chain of command is the official system of authority used by the military to organize leadership, communication, and responsibility. It ensures that orders flow properly from senior leaders to junior personnel and that problems are addressed through the correct channels. Knowing your personal chain of command is essential because it helps you understand who you report to, who is responsible for decisions, and how to communicate professionally within the organization.',
      'For Navy and Marine Corps midshipmen, the chain of command connects the highest levels of national leadership to the NROTC program. You must know who currently holds each position, but these names constantly change as leaders rotate. This lesson focuses on learning the structure.',
      'The Midshipman Chain of Command: President of the United States → Vice President → Secretary of Defense → Secretary of the Navy → Chief of Naval Operations → Commandant of the Marine Corps → Commander, Naval Education and Training Command (NETC) → Commander, Naval Service Training Command (NSTC) → Deputy Commander, NROTC Operations → Commanding Officer, NROTC New Student Indoctrination (NSI) → Executive Officer, NROTC NSI',
    ],
    questionPoolIds: ['coc_1', 'coc_2', 'coc_3', 'coc_4', 'coc_5'],
  },

  // ==========================================
  // UNIT 2: PASSAGE MEMORIZATION
  // ==========================================
  {
    id: 'pass_1',
    unitId: 'passage_memorization',
    number: 1,
    title: 'Overview',
    content: [
      'Throughout your Navy ROTC experience, you will be expected to memorize and recite important military passages that represent the values, traditions, and responsibilities of naval service. These passages include the General Orders of a Sentry, Armed Forces Code of Conduct, Leadership Traits, Constitutional Principles, Sailor\'s Creed, Marine Corps Hymn, and Anchors Aweigh. Each passage serves a different purpose, from teaching discipline and ethical decision-making to reinforcing the history and identity of the Navy and Marine Corps.',
      'Memorization is an important skill at NROTC New Student Indoctrination (NSI) because it demonstrates attention to detail, commitment, and the ability to perform under pressure. These passages are not simply words to memorize — they represent the standards and beliefs expected of future officers. Knowing them will help you succeed during NSI, build confidence within your NROTC unit, and develop the habits of preparation and professionalism required of military leaders.',
    ],
    questionPoolIds: ['pm_ov_1', 'pm_ov_2', 'pm_ov_3'],
  },
  {
    id: 'pass_2',
    unitId: 'passage_memorization',
    number: 2,
    title: 'General Orders of a Sentry',
    content: [
      'This is arguably the most important passage to memorize for NSI. It is drilled and tested far more than any other passage and every candidate is expected to know it thoroughly by the end of NSI. The General Orders of a Sentry are the 11 fundamental responsibilities every sentry must know and follow while standing watch. These orders teach discipline, alertness, responsibility, and the proper actions required to protect people, equipment, and assigned areas.',
      'The 11 General Orders of a Sentry are:\n\n1. To take charge of this post and all government property in view.\n2. To walk my post in a military manner, keeping always on the alert and observing everything that takes place within sight or hearing.\n3. To report all violations of orders I am instructed to enforce.\n4. To repeat all calls from posts more distant from the guardhouse than my own.\n5. To quit my post only when properly relieved.\n6. To receive, obey, and pass on to the sentry who relieves me all orders from the Commanding Officer, Command Duty Officer, Officer of the Deck, and officers and petty officers of the watch only.\n7. To talk to no one except in the line of duty.\n8. To give the alarm in case of fire or disorder.\n9. To call the officer of the deck in any case not covered by instructions.\n10. To salute all officers and all colors and standards not cased.\n11. To be especially watchful at night and during the time for challenging, to challenge all persons on or near my post, and to allow no one to pass without proper authority.',
    ],
    questionPoolIds: [
      'go_1', 'go_2', 'go_3', 'go_4', 'go_5', 'go_6', 'go_7', 'go_8', 'go_9', 'go_10', 'go_11'
    ],
  },
  {
    id: 'pass_3',
    unitId: 'passage_memorization',
    number: 3,
    title: 'Armed Forces Code of Conduct',
    content: [
      'The Code of Conduct for Members of the Armed Forces of the United States establishes the ethical responsibilities and expected behavior of service members, especially when captured or separated from their unit. It is an important passage all future officers are expected to memorize.',
      'The six articles are:\n\nArticle I. I am an American, fighting in the forces which guard my country and our way of life. I am prepared to give my life in their defense.\n\nArticle II. I will never surrender of my own free will. If in command, I will never surrender the members of my command while they still have the means to resist.\n\nArticle III. If I am captured I will continue to resist by all means available. I will make every effort to escape and aid others to escape. I will accept neither parole nor special favors from the enemy.\n\nArticle IV. If I become a prisoner of war, I will keep faith with my fellow prisoners. I will give no information or take part in any action which might be harmful to my comrades.\n\nArticle V. When questioned, should I become a prisoner of war, I am required to give name, rank, service number, and date of birth. I will evade answering further questions to the utmost of my ability.\n\nArticle VI. I will never forget that I am an American, fighting for freedom, responsible for my actions, and dedicated to the principles which made my country free. I will trust in my God and in the United States of America.',
    ],
    questionPoolIds: ['cocd_1', 'cocd_2', 'cocd_3', 'cocd_4'],
  },
  {
    id: 'pass_4',
    unitId: 'passage_memorization',
    number: 4,
    title: 'The 15 Leadership Traits',
    content: [
      'The 15 Leadership Traits are qualities that define effective leaders in the Navy and Marine Corps. They are memorized using the acronym JJ-DID-TIE-BUCKLEE.',
      'The traits in order: Justice, Judgment, Dependability, Initiative, Decisiveness, Tact, Integrity, Enthusiasm, Bearing, Unselfishness, Courage, Knowledge, Loyalty, Endurance, Empathy.',
      'Focus first on memorizing the traits in the correct order. Understanding their general meaning matters more than memorizing exact definitions word-for-word.\n\n• Justice — Being fair and consistent, giving rewards and punishments based on merit rather than personal preference.\n• Judgment — Evaluating facts and possible courses of action to make sound decisions.\n• Dependability — Being trusted to perform assigned duties and complete tasks with minimal supervision.\n• Initiative — Taking action without waiting for orders when action is needed.\n• Decisiveness — Making timely decisions and communicating them clearly.\n• Tact — Dealing with others in a way that maintains good relationships and avoids unnecessary offense.\n• Integrity — Maintaining honesty, strong moral principles, and doing what is right even when no one is watching.\n• Enthusiasm — Showing genuine interest, energy, and commitment toward assigned responsibilities.\n• Bearing — Maintaining a professional appearance, confidence, and self-control.\n• Unselfishness — Putting the needs of others and the mission before personal interests.\n• Courage — Overcoming fear and doing what is right despite difficulty or danger.\n• Knowledge — Having the information, skills, and understanding required to perform duties effectively.\n• Loyalty — Remaining faithful to the nation, service, unit, leaders, and fellow service members.\n• Endurance — Maintaining physical and mental strength through hardship, stress, and challenges.\n• Empathy — Understanding and considering the feelings, perspectives, and experiences of others.',
    ],
    questionPoolIds: ['lt_1', 'lt_2', 'lt_3', 'lt_4', 'lt_5'],
  },
  {
    id: 'pass_5',
    unitId: 'passage_memorization',
    number: 5,
    title: 'The Constitutional Paradigm',
    content: [
      'The Constitutional Paradigm is an ethical decision-making framework designed to help military leaders resolve conflicts between competing responsibilities and loyalties. It teaches that officers must make decisions based on their oath to the Constitution, rather than personal interests or outside pressure.',
      'Principle I: Resolve ethical conflicts through the Hierarchy of Loyalties. The proper order of loyalty is:\nConstitution → Mission → Service → Ship or Command → Shipmate → Self\n(Memorize this hierarchy — it will be tested.)',
      'Principle II: Resolve conflicting loyalties before acting upon differences in priorities.',
      'Principle III: Resolve yourself to Principles I or II, or consider removing yourself from the situation or resigning.',
      'Principle IV: If the ethical issue is too important and immediate to resolve through the first three principles, you may choose to disobey. But before doing so, four requirements must all be met: the issue is a fundamental violation of justice that is not trivial; you first attempt to change the order or law through normal procedures; the disobedience is done publicly and with full awareness; and you are willing to accept the consequences.',
    ],
    questionPoolIds: ['cp_1', 'cp_2', 'cp_3', 'cp_4', 'cp_5'],
  },
  {
    id: 'pass_6',
    unitId: 'passage_memorization',
    number: 6,
    title: "The Sailor's Creed",
    content: [
      'The Sailor\'s Creed expresses the identity, values, and responsibilities of every sailor in the United States Navy. It is often tested by removing portions and requiring candidates to fill in the missing words, so it must be memorized exactly. Even Marine Option Midshipmen are required to memorize it.',
      'The Sailor\'s Creed:\n\n"I am a United States Sailor. I will support and defend the Constitution of the United States of America and I will obey the orders of those appointed over me. I represent the fighting spirit of the Navy and those who have gone before me to defend freedom and democracy around the world. I proudly serve my country\'s Navy combat team with honor, courage and commitment. I am committed to excellence and the fair treatment of all."',
    ],
    questionPoolIds: ['sc_1', 'sc_2', 'sc_3', 'sc_4', 'sc_5'],
  },
  {
    id: 'pass_7',
    unitId: 'passage_memorization',
    number: 7,
    title: 'The Marine Corps Hymn',
    content: [
      'The Marine Corps Hymn is one of the most recognizable traditions of the United States Marine Corps. All Navy and Marine Option Midshipmen are expected to know it. At NSI it is commonly sung before taps. Midshipmen are especially expected to know the first verse, but all three verses should be memorized.',
      'Marines\' Hymn:\n\nVerse 1:\nFrom the Halls of Montezuma To the shores of Tripoli;\nWe fight our country\'s battles On the land as on the sea;\nFirst to fight for right and freedom And to keep our honor clean;\nWe are proud to claim the title Of United States Marine.\n\nVerse 2:\nOur flag\'s unfurled to every breeze From dawn to setting sun;\nWe have fought in ev\'ry clime and place Where we could take a gun;\nIn the snow of far-off Northern lands And in sunny tropic scenes;\nYou will find us always on the job The United States Marines.\n\nVerse 3:\nHere\'s health to you and to our Corps Which we are proud to serve;\nIn many a strife we\'ve fought for life And never lost our nerve;\nIf the Army and the Navy Ever look on Heaven\'s scenes;\nThey will find the streets are guarded By United States Marines.',
    ],
    questionPoolIds: ['mch_1', 'mch_2', 'mch_3', 'mch_4', 'mch_5'],
  },
  {
    id: 'pass_8',
    unitId: 'passage_memorization',
    number: 8,
    title: 'Anchors Aweigh',
    content: [
      'Anchors Aweigh is the official fight song of the United States Navy. All midshipmen are expected to know it. At NSI it is sung as a cadence while marching, traditionally sung while marching through tunnels, and may also be sung before taps. All three verses should be memorized.',
      'Anchors Aweigh:\n\nVerse 1:\nStand Navy out to sea, Fight our battle cry;\nWe\'ll never change our course, So vicious foes steer shy-y-y-y.\nRoll out the TNT, (BOOM) Anchors Aweigh.\nSail on to victory, And sink their bones to Davy Jones, hooray!\n\nVerse 2:\nAnchors Aweigh, my boys, Anchors Aweigh.\nFarewell to foreign shores, we sail at break of day-ay-ay-ay.\nThrough our last night ashore, drink to the foam, Until we meet once more.\nHere\'s wishing you a happy voyage home.\n\nVerse 3:\nBlue of the mighty deep, Gold of God\'s great sun,\nLet these our colors be Till all of time be done, done, done.\nOn seven seas we learn Navy\'s stern call:\nFaith, courage, service true, With honor, over honor, over all.',
      'Note: Traditionally everyone sounds off a loud "BOOM" after the line "Roll out the TNT."',
    ],
    questionPoolIds: ['aa_1', 'aa_2', 'aa_3', 'aa_4', 'aa_5'],
  },

  // ==========================================
  // UNIT 3: NAUTICAL TERMS
  // ==========================================
  {
    id: 'naut_1',
    unitId: 'nautical_terms',
    number: 1,
    title: 'Overview',
    content: [
      'The Navy has its own language, developed over centuries of life at sea. Many everyday words used by civilians have different names in the Navy. As a midshipman, you are expected to become familiar with nautical terms before arriving at NSI or your unit, and continue using them throughout your time in NROTC.',
      'You will need to know four major areas of naval terminology: ship hull classification codes, the NATO phonetic alphabet, line handling commands, and miscellaneous service terms commonly used in the Navy and Marine Corps. Learning them early will make it easier to understand instructions and communicate effectively.',
    ],
    questionPoolIds: ['nt_ov_1', 'nt_ov_2'],
  },
  {
    id: 'naut_2',
    unitId: 'nautical_terms',
    number: 2,
    title: 'Hull Classification Codes',
    content: [
      'Every U.S. Navy ship is assigned a hull classification symbol that identifies its primary mission and in some cases how it is powered. The "N" in a designation means nuclear powered. The "G" means guided missile.',
      '• SSBN — Ballistic Missile Submarine (Nuclear Powered)\n• SSGN — Guided Missile Submarine (Nuclear Powered)\n• SSN — Attack Submarine (Nuclear Powered)\n• CVN — Aircraft Carrier (Nuclear Powered)\n• DDG — Guided Missile Destroyer\n• CG — Guided Missile Cruiser\n• LHD — Amphibious Assault Ship (multi-purpose, helicopters and STOVL aircraft)\n• LHA — Amphibious Assault Ship (optimized for aviation)\n• LCS — Littoral Combat Ship\n• LPD — Amphibious Transport Dock\n• LSD — Dock Landing Ship\n• EPF — Expeditionary Fast Transport\n• T-AO — Fleet Replenishment Oiler\n• T-AKE — Dry Cargo and Ammunition Ship\n• T-ATS — Towing, Salvage, and Rescue Ship',
      'All active U.S. submarines are nuclear powered. All aircraft carriers are nuclear powered.',
    ],
    questionPoolIds: ['hc_1', 'hc_2', 'hc_3', 'hc_4', 'hc_5', 'hc_6', 'hc_7', 'hc_8'],
  },
  {
    id: 'naut_3',
    unitId: 'nautical_terms',
    number: 3,
    title: 'The Phonetic Alphabet',
    content: [
      'The NATO Phonetic Alphabet is a standardized system used to clearly communicate letters over radio, phone, or in noisy environments. Since many letters sound similar when spoken, the phonetic alphabet prevents confusion and ensures accurate communication.',
      'A — Alpha\nB — Bravo\nC — Charlie\nD — Delta\nE — Echo\nF — Foxtrot\nG — Golf\nH — Hotel\nI — India\nJ — Juliett\nK — Kilo\nL — Lima\nM — Mike\nN — November\nO — Oscar\nP — Papa\nQ — Quebec\nR — Romeo\nS — Sierra\nT — Tango\nU — Uniform\nV — Victor\nW — Whiskey\nX — X-ray\nY — Yankee\nZ — Zulu',
      'Practice saying the entire alphabet quickly and without hesitation. The goal is to immediately translate letters to phonetic words and back without pausing.',
    ],
    questionPoolIds: ['pa_1', 'pa_2', 'pa_3', 'pa_4', 'pa_5', 'pa_6', 'pa_7', 'pa_8', 'pa_9', 'pa_10'],
  },
  {
    id: 'naut_4',
    unitId: 'nautical_terms',
    number: 4,
    title: 'Line Handling Commands',
    content: [
      'When a ship moors alongside a pier, precise verbal commands control every line to keep the process safe and orderly.',
      'Commands:\n• Put Over Line — Pass the line to the pier with enough slack for handlers to drop it over a mooring fitting.\n• Take the Slack Out of Line — Remove slack without applying strain.\n• Hold Line — Take turns around the cleat so the line cannot slip; brace for heavy strain, even to the point of the line breaking.\n• Check Line — Hold under heavy strain but let the line pay out gradually to prevent it from breaking.\n• Ease Line — Pay out line that is under tension but not heavy strain.\n• Slack Line — Remove all tension, allowing a slight natural curve (catenary).\n• Avast — Stop all action immediately.\n• Take In Line — Slack the line, remove it from the pier, bring it aboard, and report once secured.\n• Make Up Line — Secure the line in its final stowed position.',
      'Mooring Fittings:\n• Bollard — A single, heavy metal post fixed to a pier to secure mooring lines. [IMAGE PLACEHOLDER: Bollard]\n• Cleat — A T-shaped fitting with two horns used to secure a line in a figure-eight pattern. [IMAGE PLACEHOLDER: Cleat]\n• Bitts — A pair of sturdy vertical posts on a shared base, used to secure heavy mooring lines. [IMAGE PLACEHOLDER: Bitts]\n• Closed Chock — An oval fitting fully enclosed, guiding a line through while protecting it from chafing. [IMAGE PLACEHOLDER: Closed Chock]\n• Open Chock — Like a closed chock but open on one side, allowing a line to be inserted without threading. [IMAGE PLACEHOLDER: Open Chock]\n• Roller Chock — A chock with a rolling surface to reduce friction on the line. [IMAGE PLACEHOLDER: Roller Chock]\n• Pad Eyes — Flat metal fittings with a fixed ring, used as attachment points. [IMAGE PLACEHOLDER: Pad Eyes]',
    ],
    questionPoolIds: ['lh_1', 'lh_2', 'lh_3', 'lh_4', 'lh_5', 'lh_6', 'lh_7', 'lh_8'],
  },
  {
    id: 'naut_5',
    unitId: 'nautical_terms',
    number: 5,
    title: 'Miscellaneous Service Terms',
    content: [
      'Shipboard Spaces and Directions:\nDeck (floor), Overhead (ceiling), Bulkhead (wall), Hatch (door), Porthole (window), Passageway (hallway), Ladderwell (stairs), Head (restroom), Galley (kitchen), Topside (upstairs), Below (downstairs), Port (left), Starboard (right), Bow (front), Aft or Stern (rear).',
      'Customs and Courtesies:\nColors (raising or lowering the ensign), Gangway (access ramp; also means "clear a path"), Aye Aye (acknowledging an order), As You Were (canceling a prior order), Square Away (correct or adjust appearance).',
      'People and Jobs:\nRate (Navy job), MOS (Marine Corps job), Rank (pay grade), Brass (officers), Grunt (Marine infantryman), Pouge (headquarters personnel), Lifer (career service member), Nonhacker (someone who can\'t perform under pressure).',
      'Gear and Slang:\nCover (hat), Go-Fasters (running shoes), Ink Stick (pen), Moonbeam (flashlight), Blouse (uniform top), Boonie (soft brimmed cover), Fruit Salad (ribbons and badges), Gig Line (alignment of shirt seam, belt buckle, and fly).',
      'Food and Downtime:\nGeedunk or Pogey Bait (snacks or candy), Mess Hall or Chow Hall (cafeteria), BX or NEX (exchange store), Leave (vacation), Liberty (off-duty time), Civvies (civilian clothes).',
      'Training and Status:\nKlick (1 kilometer), PT (physical training), PRT (Navy fitness test), PFT (Marine fitness test), CFT (Marine combat fitness test), Force March (long ruck march), Field Day (cleaning day), Secure (done for the day), UA (unauthorized absence), Bumscoop (bad or unreliable information), Scuttlebutt (gossip or rumor), Most Ricky Tick (hurry with purpose), Gung Ho (enthusiastic), Good to Go (ready or OK).',
    ],
    questionPoolIds: ['mst_1', 'mst_2', 'mst_3', 'mst_4', 'mst_5', 'mst_6', 'mst_7', 'mst_8', 'mst_9', 'mst_10'],
  },

  // ==========================================
  // UNIT 4: PROCEDURES
  // ==========================================
  {
    id: 'proc_1',
    unitId: 'procedures',
    number: 1,
    title: 'Overview',
    content: [
      'Every branch of service relies on standardized procedures to ensure safety, discipline, and consistency across every task. Procedures exist because in high-stakes environments there is no room for guesswork — a memorized, repeatable process protects both the individual and the team.',
      'This unit covers six essential procedures every service member should know: the four weapon safety rules, the correct process for boarding a ship, properly folding the national flag, basic knot tying, sound signals used at sea, and the classifications of fire.',
      'Mastering these procedures builds the muscle memory and discipline that keeps you and those around you safe in real-world situations.',
    ],
    questionPoolIds: ['pr_ov_1'],
  },
  {
    id: 'proc_2',
    unitId: 'procedures',
    number: 2,
    title: 'The Four Weapon Safety Rules',
    content: [
      'These four rules apply anytime you handle a weapon. They work as layers of protection — even if one is broken, the others should prevent a tragedy.',
      'Rule 1 — Treat every weapon as if it were loaded. Never assume a weapon is unloaded, even if you were told it is or saw it cleared yourself.',
      'Rule 2 — Never point a weapon at anything you do not intend to shoot. Muzzle awareness must be constant at all times.',
      'Rule 3 — Keep your finger straight and off the trigger until you are ready to fire. Your finger stays along the frame until your sights are on target and you have made the decision to fire.',
      'Rule 4 — Keep the weapon on SAFE until you intend to fire. The safety comes off only in the instant before firing.',
    ],
    questionPoolIds: ['ws_1', 'ws_2', 'ws_3', 'ws_4'],
  },
  {
    id: 'proc_3',
    unitId: 'procedures',
    number: 3,
    title: 'Procedure for Boarding a Ship',
    content: [
      'When boarding a ship flying the national ensign, follow this precise sequence:\n\nStep 1: Upon reaching the upper platform of the accommodation ladder or the shipboard end of the brow, stop walking.\nStep 2: Face the ensign.\nStep 3: Render a salute to the national ensign. If in civilian clothes, come to the position of attention instead of saluting.\nStep 4: Approach the Officer of the Deck (OOD), render a salute, provide identification, and request permission to come aboard.\nStep 5: When leaving the ship, reverse the order — salute the OOD first, then face and render honors to the national ensign.',
    ],
    questionPoolIds: ['bs_1', 'bs_2'],
  },
  {
    id: 'proc_4',
    unitId: 'procedures',
    number: 4,
    title: 'Folding the National Ensign',
    content: [
      'Step A: Bring the striped half of the flag up and over the blue field, then fold again lengthwise. The result is a long narrow strip with the blue field on top. [IMAGE PLACEHOLDER: Flag folding Step A]',
      'Step B: Bring the lower striped corner up to the upper edge forming a triangle, then turn the outer point inward along the upper edge creating a second triangle. [IMAGE PLACEHOLDER: Flag folding Step B]',
      'Step C: Continue folding in triangles following the same pattern until the entire length is folded. [IMAGE PLACEHOLDER: Flag folding Step C]',
      'Step D: When complete, only the blue field with stars should be visible. The shape should resemble a cocked tricorn hat. [IMAGE PLACEHOLDER: Flag folding Step D]',
      'The triangular fold symbolizes the tricorn hats worn by soldiers during the American Revolution.',
    ],
    questionPoolIds: ['ff_1', 'ff_2'],
  },
  {
    id: 'proc_5',
    unitId: 'procedures',
    number: 5,
    title: 'Basic Knot Tying',
    content: [
      'Midshipmen are primarily expected to know two knots:\n\n• Bowline — Known as the "king of knots." Creates a fixed loop at the end of a line that will not slip or bind under load, yet is easy to untie afterward. Used for securing a line around an object or forming a loop that holds its shape under strain. [IMAGE PLACEHOLDER: 4-step bowline tying progression]\n\n• Square Knot — A simple binding knot used to join two lines of similar diameter together. Should never be used for life-safety applications since it can slip under uneven strain. [IMAGE PLACEHOLDER: Square knot]',
      'Other knots worth recognizing:\n• Clove Hitch — Quickly secures a line to a post or rail; adjustable but not fully load-secure. [IMAGE PLACEHOLDER: Clove Hitch]\n• Round Turn and Two Half Hitches — Secures a line under load to a post or ring. [IMAGE PLACEHOLDER: Round Turn and Two Half Hitches]\n• Cleat Hitch — The standard method for securing a line to a cleat. [IMAGE PLACEHOLDER: Cleat Hitch]\n• Figure 8 — A stopper knot tied at the end of a line to prevent it running through a fitting. [IMAGE PLACEHOLDER: Figure 8]',
    ],
    questionPoolIds: ['kt_1', 'kt_2'],
  },
  {
    id: 'proc_6',
    unitId: 'procedures',
    number: 6,
    title: 'Sound Signals',
    content: [
      'Sound signals allow vessels to communicate intentions and signal presence in restricted visibility.',
      'Signals when meeting or crossing within half a mile:\n• One short blast — "I intend to leave you on my port side."\n• Two short blasts — "I intend to leave you on my starboard side."\n• Three short blasts — "I am operating astern propulsion."',
      'Signals during restricted visibility:\n• One prolonged blast at intervals of no more than 2 minutes — A power-driven vessel making way through the water.\n• One prolonged blast followed by two short blasts, at intervals of no more than 2 minutes — A vessel not under command, restricted in ability to maneuver, sailing, fishing, or towing.',
      'Danger signal:\n• Five or more short blasts in quick succession — Warns of danger or signals that the intentions of another vessel are not understood.',
    ],
    questionPoolIds: ['ss_1', 'ss_2'],
  },
  {
    id: 'proc_7',
    unitId: 'procedures',
    number: 7,
    title: 'Fire Classifications',
    content: [
      'Fires are categorized into four classes based on materials involved. Using the wrong extinguishing method can make a fire worse.',
      '• Class A — Ordinary Combustibles: Wood, cloth, textiles, paper. Extinguish with water in straight stream or fog pattern. For deep-seated fires, Aqueous Film Forming Foam (AFFF) is more effective.',
      '• Class B — Flammable Liquids and Gases: Gasoline, diesel, jet fuel, hydraulic fluid, lube oil, flammable gases. Extinguish with AFFF, Halon 1211, Halon 1301, or Potassium Bicarbonate (PKP). For flammable gas fires, securing the flow of gas is the single most important step — never extinguish the flame without stopping the gas first.',
      '• Class C — Energized Electrical Fires: Fires involving live electrical equipment. Use nonconductive agents — CO2, Halon 1211, or water spray. The most effective first step is to de-energize the equipment.',
      '• Class D — Combustible Metals: Magnesium, titanium, and similar metals. Extinguish using large quantities of water in fog patterns from a safe distance or behind shelter. Direct water contact with burning metal can cause explosions.',
    ],
    questionPoolIds: ['fc_1', 'fc_2', 'fc_3'],
  },

  // ==========================================
  // UNIT 5: HISTORY
  // ==========================================
  {
    id: 'hist_1',
    unitId: 'history',
    number: 1,
    title: 'History of the U.S. Navy',
    content: [
      'October 13, 1775 is the official birthday of the U.S. Navy. Memorize this date cold — it is a guaranteed exam question.',
      'Mission of the Navy: The mission of the Navy is to maintain, train, and equip combat-ready naval forces capable of winning wars, deterring aggression, and maintaining freedom of the seas.',
      'The U.S. Navy traces its origins to the Continental Navy, established on October 13, 1775, during the American Revolutionary War. The Navy played a major role in the Civil War by blockading the Confederacy and seizing control of its rivers, and it played the central role in the World War II defeat of Imperial Japan.',
      'Emerging from World War II as the most powerful navy in the world — a title it still holds today — the 21st century U.S. Navy maintains a global presence in the Western Pacific, the Mediterranean, and the Indian Ocean. As a blue-water navy, it projects force onto littoral regions, maintains forward deployments during peacetime, and rapidly responds to regional crises.',
    ],
    questionPoolIds: ['nh_1', 'nh_2', 'nh_3'],
  },
  {
    id: 'hist_2',
    unitId: 'history',
    number: 2,
    title: 'History of the USMC',
    content: [
      'November 10, 1775 is the official birthday of the Marine Corps. Memorize this date cold — it will be tested.',
      'Mission of the USMC: As America\'s expeditionary force in readiness since 1775, the Marines are forward deployed to swiftly and aggressively win the nation\'s battles in times of crisis. Marines fight on land, sea, and air, and provide forces and detachments to naval ships and ground operations. The National Security Act of 1947 directed the Marine Corps to: (1) seize or defend advanced naval bases and support naval campaigns; (2) develop tactics, techniques, and equipment for amphibious landing forces; and (3) perform other duties as directed by the President.',
      'The Marine Corps was born on November 10, 1775, during the Revolutionary War, when two battalions of Marines were commissioned to serve as landing forces for the Continental Navy. Their first successful amphibious landing occurred in 1776, when Marine forces led by Captain Samuel Nicholas defeated the British at Fort Nassau in the Bahamas.',
      'In 1798 the Marine Corps was made a permanent military force by President John Adams. The Corps built its reputation in battles including the Battle of Derna (1805), the Battle of Chapultepec (1847), and the Battle of Belleau Wood (1918), where German soldiers gave them the nickname Teufelhunden, meaning "Devil Dogs."',
    ],
    questionPoolIds: ['mh_1', 'mh_2', 'mh_3'],
  },
  {
    id: 'hist_3',
    unitId: 'history',
    number: 3,
    title: 'History of Ranks',
    content: [
      'History of the Rank of Midshipman: The rank originated in the 16th century, referring to a seaman who resided "amidships" and possessed greater knowledge than his counterparts. By the 17th century the Royal Navy\'s Midshipman came to mean an officer in training with the social status of an officer but not the authority. In the U.S., Midshipman was historically a warrant officer rank until the founding of the Naval Academy established the modern four-year training system. A Midshipman today legally ranks above an E-9 and below a W-2, though little actual authority is delegated to them since their primary objective is working toward a commission.',
      'History of the Chief Petty Officer: The title "Chief" traces to Jacob Wasbie, a Cook\'s Mate aboard the Continental Navy warship Alfred, who was promoted to "Chief Cook" on June 1, 1776. Over time the title grew to command deep respect and was made an official grade in 1893 with the creation of the Chief Petty Officer rank. Today the CPO is often called "the glue" that holds the Navy together.',
      'History of the Gunnery Sergeant: The rank originated at sea. Marines aboard naval vessels worked the ship\'s guns in teams of four to five men. The leader of each team was specially trained in ammunition handling and firing procedures and responsible for teaching that knowledge to the team. This role led to the rank of Gunnery Sergeant being introduced in 1899.',
    ],
    questionPoolIds: ['hr_1', 'hr_2', 'hr_3'],
  },

  // ==========================================
  // UNIT 6: PHYSICAL FITNESS
  // ==========================================
  {
    id: 'fit_1',
    unitId: 'physical_fitness',
    number: 1,
    title: 'Navy PRT Standards',
    content: [
      'The Physical Readiness Test (PRT) is the Navy\'s standardized fitness assessment, administered twice a year as part of the Physical Fitness Assessment (PFA) cycle.',
      'The three events are: Push-Ups (maximum reps in 2 minutes), Forearm Plank (maximum time held in proper form), and the 1.5-Mile Run.',
      'Each event is scored individually based on age group and gender, then averaged into an overall score placing the sailor in one of six levels: Probationary, Satisfactory, Good, Excellent, Outstanding, or Maximum. A sailor must score at least Probationary on every individual event — scoring below that on even one event results in an overall failure regardless of the other two scores.',
      'Maximum Scores for Age 17-19: Push-Ups: Male 92 reps, Female 51 reps Forearm Plank: Male 3:24, Female 3:40 1.5-Mile Run: Male 8:15, Female 9:29',
      'The forearm plank is widely considered the most achievable event to max. It is largely a matter of core endurance and mental toughness rather than extensive conditioning.',
      '[IMAGE PLACEHOLDER: Navy PRT Standards Chart — Push-Ups]',
      '[IMAGE PLACEHOLDER: Navy PRT Standards Chart — Forearm Plank]',
      '[IMAGE PLACEHOLDER: Navy PRT Standards Chart — 1.5-Mile Run]',
    ],
    questionPoolIds: ['nprt_1', 'nprt_2', 'nprt_3', 'nprt_4', 'nprt_5'],
  },
  {
    id: 'fit_2',
    unitId: 'physical_fitness',
    number: 2,
    title: 'USMC PFT Standards',
    content: [
      'The Physical Fitness Test (PFT) is the Marine Corps\' semi-annual fitness assessment, administered January through June (the Combat Fitness Test covers July through December). PFT scores feed into a Marine\'s composite score affecting promotion eligibility.',
      'The three events are: Pull-Ups or Push-Ups (Marine\'s choice), Plank (maximum time), and the 3-Mile Run.',
      'Each event is worth up to 100 points for a total possible score of 300. Every event has a minimum passing threshold of 40 points — scoring below 40 on any single event fails the entire PFT regardless of total score.',
      'Pull-ups can earn up to 100 points. Push-ups are capped at 70 points regardless of reps performed, meaning a Marine choosing push-ups can never achieve a perfect 300 score.',
      'The plank is scored identically across all genders and age groups, with a minimum of 1:10 and a maximum of 3:45. It is one of the few truly equal events across the test.',
      'Maximum Scores for Age 17-20: Pull-Ups: Male 23 reps (100 pts), Female 7 reps (100 pts) Push-Ups (alternative): Male approximately 79 reps (capped at 70 pts), Female approximately 39 reps (capped at 70 pts) Plank: 3:45 for all 3-Mile Run: Male 18:00, Female 21:00',
      '[IMAGE PLACEHOLDER: USMC PFT Standards Chart — Pull-Ups and Push-Ups]',
      '[IMAGE PLACEHOLDER: USMC PFT Standards Chart — Plank]',
      '[IMAGE PLACEHOLDER: USMC PFT Standards Chart — 3-Mile Run]',
    ],
    questionPoolIds: ['mpft_1', 'mpft_2', 'mpft_3', 'mpft_4', 'mpft_5'],
  },
  {
    id: 'fit_3',
    unitId: 'physical_fitness',
    number: 3,
    title: 'Swim Qualification',
    content: [
      'The Third-Class Swim Test is a foundational water survival qualification with two modules that must be completed in order.',
      'Module One includes three events that can be done separately and in any order: a deep-water jump, a 50-yard swim, and a 5-minute prone float. Once a swimmer passes an individual event, they do not need to repeat it.',
      'Module Two is shirt and trouser (or coverall) inflation, teaching sailors and Marines to use their uniform as an improvised flotation device in an emergency.',
      'Module One must be completed before Module Two, though the modules do not need to happen on the same day.',
      'The prone float from Module One and the shirt and trouser inflation from Module Two must both take place in deep water, defined as water too deep to stand in with the mouth and nose above the surface.',
    ],
    questionPoolIds: ['swim_1', 'swim_2'],
  },
  {
    id: 'fit_4',
    unitId: 'physical_fitness',
    number: 4,
    title: 'Tips and Preparation',
    content: [
      'Pull-Ups and Push-Ups — The Armstrong Pull-Up Program: A structured daily program built around sets performed at various points throughout the day rather than one max-effort session. Because it includes significant push-up volume it also serves as excellent push-up training, making it valuable for both Marine and Navy Option midshipmen. Consistency over weeks produces far better results than sporadic max-effort attempts.',
      'Building a Faster Run Time: Two key principles. First, weekly mileage — aim for 30 or more miles per week as the aerobic base. Second, quality track workouts one to two times per week — a proven option is 6 to 8 repeats of 400 meters or 800 meters with a 200-meter jog or one-minute rest between reps.',
      'The Plank is a Mental Game: The plank is almost entirely mental. The limiting factor is not core strength but the mental discipline to push through discomfort past the point of wanting to quit. If you are not maxing the plank, the issue is very likely mental toughness, not physical conditioning.',
      'Additional Advice: Prioritize consistent quality sleep for recovery. Fuel training with adequate protein and carbohydrates. Do not increase mileage or training volume too quickly — most overuse injuries come from doing too much too soon. Taper training volume in the final week before a PRT or PFT so you arrive fresh. Take at least one full practice test with all three events back-to-back and timed before the real assessment.',
    ],
    questionPoolIds: ['prep_1', 'prep_2', 'prep_3'],
  },
];
