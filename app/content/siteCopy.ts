export type Language = "en" | "ar";

export const profileImageUrl = "https://i.ibb.co/CpXDwYyW/2.webp";

export const auditAreas = [
  {
    id: "profile",
    en: "Profile & positioning",
    ar: "الملف التعريفي وتحديد المكانة",
  },
  {
    id: "strategy",
    en: "Content strategy",
    ar: "استراتيجية المحتوى",
  },
  {
    id: "visual",
    en: "Visual consistency",
    ar: "الهوية البصرية وتناسق الشكل",
  },
  {
    id: "copy",
    en: "Copy & calls to action",
    ar: "الكتابة التسويقية ونداءات الإجراء",
  },
  {
    id: "reach",
    en: "Reach & engagement",
    ar: "الوصول والتفاعل",
  },
  {
    id: "growth",
    en: "Audience growth & quality",
    ar: "نمو الجمهور وجودته",
  },
  {
    id: "content-performance",
    en: "Top and low-performing content",
    ar: "أفضل وأسوأ المحتويات أداءً",
  },
  {
    id: "competitors",
    en: "Competitor comparison",
    ar: "مقارنة المنافسين",
  },
  {
    id: "community",
    en: "Community management",
    ar: "إدارة المجتمع والمتابعين",
  },
  {
    id: "plan",
    en: "30-day action plan",
    ar: "خطة عمل لمدة 30 يومًا",
  },
] as const;

export const siteCopy = {
  en: {
    languageLabel: "العربية",
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      audit: "Social Media Audit",
      book: "Book a consultation",
      menu: "Menu",
    },
    footer: {
      heading: "Let's make your next move clearer.",
      contact: "Get in touch",
      location: "Marsa Matrouh, Egypt · Available worldwide",
    },
    home: {
      eyebrow: "Social media account manager",
      titleTop: "Making social",
      titleBottom: "make sense.",
      intro:
        "I'm Habiba Dapour, an Egyptian Account Manager with 5+ years of experience turning social media activity into focused, measurable growth.",
      primaryCta: "Book a consultation",
      secondaryCta: "Explore my work",
      metrics: [
        ["5+", "years in social"],
        ["250+", "orders in 6 months"],
        ["6.5K", "followers in < 1 month"],
      ],
      marquee: ["CONTENT", "PERFORMANCE", "COMMUNITY", "STRATEGY"],
      aboutEyebrow: "A little context",
      aboutTitleTop: "A numbers person",
      aboutTitleBottom: "with a people instinct.",
      aboutLead:
        "My career started in accounting, but curiosity, responsibility and a natural instinct for persuasion kept pulling me closer to marketing.",
      aboutBody: [
        "I graduated from the Faculty of Commerce, English Section at Alexandria University. After working across accounting, operations and sales, I discovered the space where all my strengths meet: understanding people, reading numbers and making things move.",
        "A small personal project became my first real marketing lab. It generated more than 250 orders in six months and collaborations that reached millions of views. That was the moment social media stopped being an interest and became my work.",
      ],
      servicesEyebrow: "What I do",
      servicesTitleTop: "Support built around",
      servicesTitleBottom: "your real bottleneck.",
      servicesIntro:
        "From the first audit to ongoing management, every recommendation has a reason behind it.",
      services: [
        {
          number: "01",
          title: "Account Management",
          copy:
            "Day-to-day ownership, community care and thoughtful decisions that keep every channel aligned with the business.",
        },
        {
          number: "02",
          title: "Content Strategy",
          copy:
            "Clear content pillars, monthly calendars, copywriting and scripts built around what your audience actually needs.",
        },
        {
          number: "03",
          title: "Performance Audits",
          copy:
            "A practical review of your content, profile, audience and analytics translated into priorities you can act on.",
        },
        {
          number: "04",
          title: "Media Buying",
          copy:
            "Campaign planning and optimization focused on efficient reach, qualified responses and business outcomes.",
        },
      ],
      proofEyebrow: "Selected result",
      proofTitleTop: "6,500 followers.",
      proofTitleBottom: "Less than one month.",
      proofCopy:
        "For a Syrian restaurant, I used Egyptian Arabic, Ramadan trends and interactive competitions to make the brand feel familiar while keeping advertising costs efficient.",
      proofLink: "Read the case studies",
      proofCards: [
        "250+ orders from a personal product experiment in six months.",
        "Clear analysis without hiding behind marketing jargon.",
      ],
      processEyebrow: "The process",
      processTitle: "Clarity in three steps.",
      steps: [
        [
          "01",
          "We talk",
          "A focused consultation to understand your brand, goals and current roadblocks.",
        ],
        [
          "02",
          "I investigate",
          "I review the data, content, audience behavior and the context behind the numbers.",
        ],
        [
          "03",
          "You move",
          "You leave with clear priorities, practical recommendations and a confident next step.",
        ],
      ],
      consultationEyebrow: "Consultation",
      consultationTitleTop: "Your page is talking.",
      consultationTitleBottom: "Let's listen to the data.",
      consultationCopy:
        "Book a focused conversation about your current performance, challenges and next best move.",
      consultationLabel: "Best for",
      consultationList: [
        "Unclear or declining performance",
        "Content that is not converting",
        "A strategy that needs a fresh direction",
      ],
      consultationButton: "Book via WhatsApp",
      consultationEmail: "or email habiba.dapour@gmail.com",
      whatsappMessage:
        "Hi Habiba, I'd like to book a social media consultation.",
    },
    portfolio: {
      eyebrow: "Selected work",
      titleTop: "Good work leaves",
      titleBottom: "clear evidence.",
      intro:
        "Three snapshots of how I approach different audiences, categories and business problems.",
      challenge: "The challenge",
      move: "The move",
      result: "The result",
      ctaEyebrow: "Your account",
      ctaTitle: "Wondering what your numbers are trying to tell you?",
      ctaButton: "Start a social media audit",
      cases: [
        {
          index: "01",
          tag: "Restaurant · Growth",
          title: "Making a Syrian restaurant feel local in Egypt.",
          metric: "6.5K",
          metricLabel: "followers in less than one month",
          challenge:
            "The brand needed fast awareness and engagement in a competitive food category without relying on expensive advertising.",
          move:
            "I wrote in natural Egyptian Arabic, used relevant Ramadan moments and built interactive competitions around behaviors the audience already enjoyed.",
          result:
            "A fast-growing community, efficient reach and more people seeing the brand at a lower advertising cost.",
          color: "case-purple",
        },
        {
          index: "02",
          tag: "Healthcare · Lead Generation",
          title: "Turning a difficult medical specialty into an approachable message.",
          metric: "60K",
          metricLabel: "EGP procedure value communicated with care",
          challenge:
            "Bariatric and gastrointestinal surgery is a high-consideration service. The content needed to build trust before asking people to take action.",
          move:
            "I led with real patient concerns, explained treatment needs in clear language and localized the campaign beyond the doctor's home governorate.",
          result:
            "The campaign generated qualified interest in other governorates and helped the audience recognize obesity as a treatable health problem.",
          color: "case-pink",
        },
        {
          index: "03",
          tag: "Personal Brand · Product Experiment",
          title: "The small experiment that shaped my marketing career.",
          metric: "250+",
          metricLabel: "orders in the first six months",
          challenge:
            "A handmade doll project started with limited resources, no established audience and a need to stand out from the usual product styles.",
          move:
            "I selected unconventional models, built the story around them and collaborated with a blogger whose content reached millions of views.",
          result:
            "More than 250 orders in six months and proof that strong audience judgment can outperform a large starting budget.",
          color: "case-berry",
        },
      ],
    },
    audit: {
      eyebrow: "Social Media Audit",
      titleTop: "Know what to fix.",
      titleBottom: "And what to keep.",
      intro:
        "A structured performance review that turns scattered metrics into clear decisions. Complete the brief below to start.",
      asideTitle: "Your audit brief",
      asideCopy:
        "Required fields are marked with an asterisk. Your information is only used to prepare and respond to this request.",
      asideNoteTitle: "Before you start",
      asideNoteCopy:
        "Have your account links and primary business goal ready. You can save a PDF copy after completing the form.",
      sections: {
        aboutYou: "About you",
        aboutAccounts: "About the accounts",
        analyze: "What should I analyze?",
      },
      fieldHelp: "Select all areas you want included in the audit.",
      labels: {
        name: "Full name *",
        brand: "Brand / company *",
        email: "Email address *",
        phone: "Phone number",
        industry: "Industry",
        country: "Country",
        platform: "Primary platform",
        handles: "Account links / handles *",
        goal: "Your main business goal *",
        challenge: "Your biggest current challenge *",
        competitors: "Competitor accounts",
        notes: "Anything else I should know?",
        consent:
          "I confirm that the information is accurate and I agree to be contacted about this audit request.",
      },
      placeholders: {
        name: "Your name",
        brand: "Brand name",
        email: "name@company.com",
        phone: "+20 ...",
        industry: "e.g. Healthcare",
        country: "e.g. Egypt",
        handles: "Paste one link per line",
        goal: "What should social media help you achieve?",
        challenge: "What feels unclear or is not working?",
        competitors: "Add up to three account links",
        notes: "Access limitations, launch dates, previous campaigns...",
      },
      platforms: [
        "Instagram",
        "Facebook",
        "TikTok",
        "LinkedIn",
        "Multiple platforms",
      ],
      reviewButton: "Review my audit brief",
      summary: {
        title: "Social media audit request",
        preparedFor: "Prepared for",
        brandContext: "Brand context",
        accountLinks: "Account links",
        mainGoal: "Main goal",
        currentChallenge: "Current challenge",
        competitors: "Competitors",
        requestedAnalysis: "Requested analysis",
        notes: "Notes",
        nextTitle: "What happens next?",
        nextCopy:
          "Send this request to Habiba. After reviewing the available account data, she will confirm the audit scope, timing and next steps.",
        sendEmail: "Send request by email",
        print: "Print / Save as PDF",
        edit: "Edit details",
        notSpecified: "Not specified",
        locationNotSpecified: "Location not specified",
      },
    },
  },
  ar: {
    languageLabel: "English",
    nav: {
      home: "الرئيسية",
      portfolio: "الأعمال",
      audit: "تدقيق السوشيال ميديا",
      book: "احجزي استشارة",
      menu: "القائمة",
    },
    footer: {
      heading: "خلينا نوضح خطوتك الجاية بشكل أذكى.",
      contact: "تواصلي معي",
      location: "مرسى مطروح، مصر · متاحة للعمل مع العملاء في أي مكان",
    },
    home: {
      eyebrow: "مديرة حسابات سوشيال ميديا",
      titleTop: "نخلي السوشيال",
      titleBottom: "أوضح وأسهل.",
      intro:
        "أنا Habiba Dapour، مديرة حسابات مصرية بخبرة أكثر من 5 سنوات في تحويل نشاط السوشيال ميديا إلى نمو واضح وقابل للقياس.",
      primaryCta: "احجزي استشارة",
      secondaryCta: "شاهدي أعمالي",
      metrics: [
        ["5+", "سنوات خبرة في السوشيال ميديا"],
        ["250+", "طلب خلال 6 شهور"],
        ["6.5K", "متابع في أقل من شهر"],
      ],
      marquee: ["محتوى", "أداء", "مجتمع", "استراتيجية"],
      aboutEyebrow: "نبذة سريعة",
      aboutTitleTop: "أفكر بالأرقام",
      aboutTitleBottom: "وأفهم الناس جيدًا.",
      aboutLead:
        "بدايتي كانت في الحسابات، لكن الفضول وتحمل المسؤولية والقدرة على الإقناع شدوني تدريجيًا أكثر إلى التسويق.",
      aboutBody: [
        "تخرجت من كلية التجارة إنجليزي بجامعة الإسكندرية. وبعد تجارب في الحسابات والتشغيل والمبيعات، اكتشفت المساحة التي تجمع كل نقاط قوتي معًا: فهم الناس، قراءة الأرقام، وتحريك النتائج.",
        "مشروع شخصي صغير كان أول معمل حقيقي لي في التسويق. حقق أكثر من 250 طلبًا خلال 6 شهور ووصلني لتعاونات بمشاهدات بالملايين، ومن هنا تحولت السوشيال ميديا من اهتمام إلى مسار مهني حقيقي.",
      ],
      servicesEyebrow: "كيف أساعدك",
      servicesTitleTop: "الدعم الذي تحتاجه",
      servicesTitleBottom: "بناءً على مشكلتك الفعلية.",
      servicesIntro:
        "من أول مراجعة للحساب وحتى الإدارة المستمرة، كل توصية لها سبب واضح وراءها.",
      services: [
        {
          number: "01",
          title: "إدارة الحسابات",
          copy:
            "متابعة يومية للحساب، واهتمام بالمجتمع، وقرارات مدروسة تحافظ على انسجام كل قناة مع هدف النشاط التجاري.",
        },
        {
          number: "02",
          title: "استراتيجية المحتوى",
          copy:
            "أعمدة محتوى واضحة، تقويم شهري، كتابة محتوى وسكربتات مبنية على ما يحتاجه جمهورك فعلًا.",
        },
        {
          number: "03",
          title: "مراجعة الأداء",
          copy:
            "تحليل عملي للمحتوى والبروفايل والجمهور والنتائج وتحويلها إلى أولويات واضحة يمكن تنفيذها.",
        },
        {
          number: "04",
          title: "إدارة الإعلانات",
          copy:
            "تخطيط وتحسين الحملات الإعلانية للوصول الأفضل، وردود الفعل المؤهلة، ونتائج تخدم البيزنس.",
        },
      ],
      proofEyebrow: "نتيجة مختارة",
      proofTitleTop: "6500 متابع.",
      proofTitleBottom: "في أقل من شهر.",
      proofCopy:
        "مع مطعم سوري، استخدمت اللهجة المصرية والترندات الرمضانية والمسابقات التفاعلية لجعل البراند أقرب للجمهور مع الحفاظ على كفاءة تكلفة الإعلان.",
      proofLink: "شاهدي دراسات الحالة",
      proofCards: [
        "أكثر من 250 طلبًا من تجربة منتج شخصية خلال 6 شهور.",
        "تحليل واضح بدون تعقيد أو مصطلحات تسويقية مبالغ فيها.",
      ],
      processEyebrow: "طريقة العمل",
      processTitle: "وضوح في ثلاث خطوات.",
      steps: [
        [
          "01",
          "نتكلم",
          "استشارة مركزة لفهم البراند والأهداف والعقبات الحالية.",
        ],
        [
          "02",
          "أحلل",
          "أراجع البيانات والمحتوى وسلوك الجمهور والسياق الحقيقي وراء الأرقام.",
        ],
        [
          "03",
          "تتحركي",
          "تخرجي بأولويات واضحة وتوصيات عملية وخطوة تالية واثقة.",
        ],
      ],
      consultationEyebrow: "الاستشارة",
      consultationTitleTop: "صفحتك بتتكلم.",
      consultationTitleBottom: "خلينا نفهم الأرقام.",
      consultationCopy:
        "احجزي مكالمة مركزة عن الأداء الحالي والتحديات وأفضل خطوة جاية لحسابك.",
      consultationLabel: "مناسبة إذا كنتِ تحتاجين",
      consultationList: [
        "أداء غير واضح أو متراجع",
        "محتوى لا يحقق التحويل المطلوب",
        "استراتيجية تحتاج لاتجاه جديد",
      ],
      consultationButton: "احجزي عبر واتساب",
      consultationEmail: "أو راسليني على habiba.dapour@gmail.com",
      whatsappMessage: "مرحبًا Habiba، أرغب في حجز استشارة للسوشيال ميديا.",
    },
    portfolio: {
      eyebrow: "أعمال مختارة",
      titleTop: "العمل الجيد",
      titleBottom: "يترك دليلًا واضحًا.",
      intro:
        "ثلاث لقطات توضح كيف أتعامل مع جماهير مختلفة وفئات متنوعة ومشكلات تجارية حقيقية.",
      challenge: "التحدي",
      move: "الخطوة",
      result: "النتيجة",
      ctaEyebrow: "حسابك أنت",
      ctaTitle: "هل تريدين معرفة ماذا تحاول أرقامك أن تقول؟",
      ctaButton: "ابدئي تدقيق السوشيال ميديا",
      cases: [
        {
          index: "01",
          tag: "مطعم · نمو",
          title: "كيف جعلنا مطعمًا سوريًا أقرب للجمهور في مصر.",
          metric: "6.5K",
          metricLabel: "متابع في أقل من شهر",
          challenge:
            "البراند كان يحتاج لانتشار سريع وتفاعل في فئة تنافسية، بدون الاعتماد على إنفاق إعلاني مرتفع.",
          move:
            "كتبت باللهجة المصرية الطبيعية، واستغليت لحظات رمضانية مناسبة، وبنيت مسابقات تفاعلية على سلوكيات يحبها الجمهور أصلًا.",
          result:
            "مجتمع ينمو بسرعة، ووصول أكثر كفاءة، وعدد أكبر من الناس يشوفون البراند بتكلفة إعلانية أقل.",
          color: "case-purple",
        },
        {
          index: "02",
          tag: "مجال طبي · توليد عملاء",
          title: "تحويل تخصص طبي حساس إلى رسالة مفهومة وقريبة.",
          metric: "60K",
          metricLabel: "قيمة الإجراء تم توصيلها باحترافية",
          challenge:
            "جراحات السمنة والجهاز الهضمي خدمة تحتاج بناء ثقة أولًا قبل أن يقرر الجمهور اتخاذ خطوة.",
          move:
            "بدأت من مخاوف المرضى الحقيقية، وشرحت الاحتياج للعلاج بلغة واضحة، ووسعت الاستهداف خارج المحافظة الأساسية للطبيب.",
          result:
            "الحملة جلبت اهتمامًا مؤهلًا من محافظات أخرى وساعدت الجمهور على رؤية السمنة كمشكلة صحية قابلة للعلاج.",
          color: "case-pink",
        },
        {
          index: "03",
          tag: "براند شخصي · تجربة منتج",
          title: "التجربة الصغيرة التي شكلت مسيرتي في التسويق.",
          metric: "250+",
          metricLabel: "طلب في أول 6 شهور",
          challenge:
            "مشروع دمى يدوي بدأ بإمكانيات محدودة وبدون جمهور ثابت وكان يحتاج تميزًا واضحًا عن المنتجات التقليدية.",
          move:
            "اخترت موديلات غير معتادة، وبنيت حولها قصة، وتعاونت مع بلوجر وصلت محتوياتها إلى ملايين المشاهدات.",
          result:
            "أكثر من 250 طلبًا خلال 6 شهور، وإثبات أن حسن فهم الجمهور قد يتفوق على الميزانيات الكبيرة.",
          color: "case-berry",
        },
      ],
    },
    audit: {
      eyebrow: "تدقيق السوشيال ميديا",
      titleTop: "اعرفي ما الذي يحتاج إصلاحًا.",
      titleBottom: "وما الذي يجب الحفاظ عليه.",
      intro:
        "مراجعة أداء منظمة تحوّل الأرقام المتفرقة إلى قرارات واضحة. املئي النموذج التالي للبدء.",
      asideTitle: "ملف التدقيق الخاص بك",
      asideCopy:
        "الحقول المطلوبة موضحة بعلامة النجمة. سيتم استخدام المعلومات فقط لتحضير هذا الطلب والرد عليه.",
      asideNoteTitle: "قبل البدء",
      asideNoteCopy:
        "جهزي روابط الحسابات والهدف التجاري الأساسي. وبعد الإكمال يمكنك حفظ نسخة PDF من الطلب.",
      sections: {
        aboutYou: "عنك",
        aboutAccounts: "عن الحسابات",
        analyze: "ما الذي تريدين تحليله؟",
      },
      fieldHelp: "اختاري كل العناصر التي تريدين تضمينها في التدقيق.",
      labels: {
        name: "الاسم الكامل *",
        brand: "البراند / الشركة *",
        email: "البريد الإلكتروني *",
        phone: "رقم الهاتف",
        industry: "المجال",
        country: "الدولة",
        platform: "المنصة الأساسية",
        handles: "روابط الحسابات / اليوزرنيم *",
        goal: "ما هو هدفك التجاري الأساسي؟ *",
        challenge: "ما هو أكبر تحدٍ حالي لديك؟ *",
        competitors: "حسابات المنافسين",
        notes: "هل يوجد شيء آخر يجب أن أعرفه؟",
        consent:
          "أؤكد أن المعلومات دقيقة وأوافق على التواصل معي بخصوص طلب التدقيق هذا.",
      },
      placeholders: {
        name: "اسمك",
        brand: "اسم البراند",
        email: "name@company.com",
        phone: "+20 ...",
        industry: "مثلًا: المجال الطبي",
        country: "مثلًا: مصر",
        handles: "أضيفي رابطًا واحدًا في كل سطر",
        goal: "ما الذي تريدين أن تساعدك السوشيال ميديا في تحقيقه؟",
        challenge: "ما الذي يبدو غير واضح أو لا يعمل بالشكل المطلوب؟",
        competitors: "أضيفي حتى ثلاثة روابط لحسابات منافسة",
        notes: "قيود الوصول، مواعيد إطلاق، حملات سابقة...",
      },
      platforms: [
        "Instagram",
        "Facebook",
        "TikTok",
        "LinkedIn",
        "أكثر من منصة",
      ],
      reviewButton: "راجعي ملف التدقيق",
      summary: {
        title: "طلب تدقيق سوشيال ميديا",
        preparedFor: "تم الإعداد لصالح",
        brandContext: "معلومات البراند",
        accountLinks: "روابط الحسابات",
        mainGoal: "الهدف الرئيسي",
        currentChallenge: "التحدي الحالي",
        competitors: "المنافسون",
        requestedAnalysis: "العناصر المطلوب تحليلها",
        notes: "ملاحظات",
        nextTitle: "ماذا يحدث بعد ذلك؟",
        nextCopy:
          "أرسلي هذا الطلب إلى Habiba. وبعد مراجعة البيانات المتاحة للحساب ستؤكد نطاق التدقيق والمدة والخطوات التالية.",
        sendEmail: "إرسال الطلب عبر البريد",
        print: "طباعة / حفظ كـ PDF",
        edit: "تعديل البيانات",
        notSpecified: "غير محدد",
        locationNotSpecified: "الموقع غير محدد",
      },
    },
  },
} as const;
