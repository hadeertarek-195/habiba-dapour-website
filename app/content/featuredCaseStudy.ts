export type FeaturedLanguage = "en" | "ar";

export const featuredCaseAssets = {
  earlierContent: "/case-studies/saudi-organic/earlier-content.png",
  highPerformingContent: "/case-studies/saudi-organic/high-performing-content.png",
} as const;

export const engagementComparison = {
  likes: { before: 20, after: 1222, growth: "61.1x" },
  comments: { before: 11, after: 193, growth: "17.5x" },
  saves: { before: 6, after: 364, growth: "60.7x" },
  shares: { before: 12, after: 332, growth: "27.7x" },
} as const;

export const featuredCaseStudy = {
  en: {
    homeResults: {
      eyebrow: "Featured results",
      heading: "Results That Moved the Business",
      copy:
        "Social media performance measured by organic growth, qualified opportunities, and real business outcomes - not vanity metrics.",
      cta: "Explore the Full Case Study",
      cards: [
        {
          kind: "count",
          value: 5,
          suffix: "x",
          label: "Monthly Contracts",
          supporting: "From 10 to 50 contracts per month",
        },
        {
          kind: "count",
          value: 100,
          suffix: "% Organic",
          label: "Content Growth",
          supporting: "No paid promotion behind the featured content results",
        },
        {
          kind: "range",
          from: 35,
          to: 1699,
          label: "TikTok Followers",
          supporting: "Growth achieved in one month",
        },
        {
          kind: "prefix",
          value: 0,
          prefix: "SAR ",
          label: "TikTok Ad Spend",
          supporting:
            "While the account started generating organic inbound leads",
        },
      ],
    },
    portfolio: {
      heroTitle: "Saudi-dialect scriptwriting, organic growth, and measurable business results.",
      caseId: "saudi-organic-growth",
      caseTag: "Featured Case Study",
      caseTitle: "From Saudi-Market Scripts to 5x More Contracts",
      caseIntro:
        "Habiba transformed complex investment and company-formation topics into engaging short-form content written specifically for the Saudi market. The organic content direction helped the account grow its audience, generate inbound leads, and increase monthly contracts from 10 to 50.",
      badges: [
        "100% Organic",
        "Saudi-Market Content",
        "Short-Form Video",
        "B2B Lead Generation",
      ],
      startingPointTitle: "The Starting Point",
      startingPoints: [
        "Approximately 10 contracts per month.",
        "TikTok had only 35 followers.",
        "The account had limited organic content performance.",
        "Generating leads organically in this business category was challenging.",
        "Complex legal and investment topics needed to feel simpler and more relatable.",
      ],
      changesTitle: "What Habiba Changed",
      changes: [
        "Developed a clearer organic content direction.",
        "Wrote the video scripts from scratch.",
        "Adapted the language and tone to the Saudi audience.",
        "Turned complex B2B topics into accessible short-form stories.",
        "Used strong hooks, audience pain points, clear positioning, and direct calls to action.",
        "Reviewed performance and refined the content direction using actual results.",
      ],
      scriptTitle: "Saudi-Market Scriptwriting",
      scriptCopy:
        "Habiba writes scripts from scratch in a natural, brand-appropriate Saudi tone - turning complex B2B topics into clear, relatable short-form content that captures attention and encourages action.",
      scriptExcerpt:
        "تدري وش الفرق بين إنك تستحوذ على شركة وتكبر.. وبين إنك تشتري مصيبة وتدفع فيها ملايين؟",
      scriptBreakdown: [
        {
          title: "Hook",
          copy:
            "Opens with a high-stakes contrast that immediately creates curiosity.",
        },
        {
          title: "Local Voice",
          copy:
            "Uses natural Saudi expressions and conversational phrasing.",
        },
        {
          title: "Business Context",
          copy:
            "Simplifies a complex cross-border investment topic.",
        },
        {
          title: "Positioning",
          copy:
            "Presents the brand as a strategic partner, not only a paperwork provider.",
        },
        {
          title: "CTA",
          copy:
            "Moves the viewer naturally from awareness to action.",
        },
      ],
      comparisonTitle: "Same Brand. A Stronger Content Direction.",
      comparisonCopy:
        "A representative comparison between earlier content and a high-performing video scripted by Habiba. Both examples reflect organic performance.",
      beforeLabel: "Earlier Content",
      afterLabel: "High-Performing Organic Content",
      beforeAlt:
        "Earlier TikTok content example with 20 likes, 11 comments, 6 saves, and 12 shares.",
      afterAlt:
        "High-performing organic TikTok content scripted by Habiba with 1,222 likes, 193 comments, 364 saves, and 332 shares.",
      metricsTitle: "Visible engagement comparison",
      metrics: [
        ["Likes", "20", "1,222", "61.1x"],
        ["Comments", "11", "193", "17.5x"],
        ["Saves", "6", "364", "60.7x"],
        ["Shares", "12", "332", "27.7x"],
      ],
      impactTitle: "Beyond Reach. Into Real Business Growth.",
      impactValue: "10 → 50 Monthly Contracts",
      impactCopy:
        "Monthly contracts grew fivefold, from 10 to 50. This represents a 400% increase in monthly contracts.",
      impactNote:
        "The organic content direction contributed to the increase in monthly contracts. The account did not simply gain visibility. Organic content became a measurable business acquisition channel.",
      closingTitle: "Want to Turn Your Content Into Measurable Growth?",
      closingCopy:
        "Book a consultation with Habiba to identify what is limiting your account's performance and where the strongest growth opportunities are.",
      closingButton: "Book your consultation",
    },
  },
  ar: {
    homeResults: {
      eyebrow: "نتيجة مميزة",
      heading: "نتائج حرّكت البيزنس",
      copy:
        "أداء السوشيال ميديا يُقاس بالنمو العضوي، والفرص المؤهلة، والنتائج التجارية الحقيقية - وليس بمقاييس شكلية فقط.",
      cta: "شاهد دراسة الحالة كاملة",
      cards: [
        {
          kind: "count",
          value: 5,
          suffix: "×",
          label: "العقود الشهرية",
          supporting: "من 10 إلى 50 عقدًا شهريًا",
        },
        {
          kind: "count",
          value: 100,
          suffix: "% عضوي",
          label: "نمو المحتوى",
          supporting: "بدون أي ترويج مدفوع وراء النتائج المعروضة",
        },
        {
          kind: "range",
          from: 35,
          to: 1699,
          label: "متابعو TikTok",
          supporting: "النمو تحقق خلال شهر واحد",
        },
        {
          kind: "prefix",
          value: 0,
          prefix: "SAR ",
          label: "إنفاق إعلانات TikTok",
          supporting: "مع بدء الحساب في توليد عملاء محتملين بشكل عضوي",
        },
      ],
    },
    portfolio: {
      heroTitle: "كتابة سكربتات باللهجة السعودية مع نمو عضوي ونتائج تجارية قابلة للقياس.",
      caseId: "saudi-organic-growth",
      caseTag: "دراسة حالة مميزة",
      caseTitle: "من سكربتات السوق السعودي إلى 5× عقود أكثر",
      caseIntro:
        "حوّلت Habiba الموضوعات المعقدة الخاصة بالاستثمار وتأسيس الشركات إلى محتوى قصير جذاب مكتوب خصيصًا للسوق السعودي. هذا التوجه العضوي ساعد الحساب على تنمية جمهوره، وتوليد طلبات تواصل داخلية، ورفع العقود الشهرية من 10 إلى 50.",
      badges: [
        "100% عضوي",
        "محتوى للسوق السعودي",
        "فيديوهات قصيرة",
        "توليد عملاء B2B",
      ],
      startingPointTitle: "نقطة البداية",
      startingPoints: [
        "حوالي 10 عقود شهريًا.",
        "كان TikTok يضم 35 متابعًا فقط.",
        "أداء المحتوى العضوي كان محدودًا.",
        "توليد عملاء محتملين عضويًا في هذه الفئة كان تحديًا واضحًا.",
        "الموضوعات القانونية والاستثمارية المعقدة كانت تحتاج أن تظهر بشكل أبسط وأقرب للناس.",
      ],
      changesTitle: "ما الذي غيّرته Habiba",
      changes: [
        "طورت اتجاهًا أوضح للمحتوى العضوي.",
        "كتبت سكربتات الفيديو من الصفر.",
        "كيّفت اللغة والنبرة لتناسب الجمهور السعودي.",
        "حوّلت موضوعات B2B المعقدة إلى قصص قصيرة سهلة الفهم.",
        "اعتمدت على هوكات قوية، ونقاط ألم الجمهور، وتموضع واضح، ونداءات إجراء مباشرة.",
        "راجعت الأداء وحدثت اتجاه المحتوى بناءً على النتائج الفعلية.",
      ],
      scriptTitle: "كتابة سكربتات للسوق السعودي",
      scriptCopy:
        "تكتب Habiba السكربتات من الصفر بنبرة سعودية طبيعية ومناسبة للبراند - لتحويل موضوعات B2B المعقدة إلى محتوى قصير واضح وقريب يشد الانتباه ويدفع للتفاعل.",
      scriptExcerpt:
        "تدري وش الفرق بين إنك تستحوذ على شركة وتكبر.. وبين إنك تشتري مصيبة وتدفع فيها ملايين؟",
      scriptBreakdown: [
        {
          title: "الهوك",
          copy:
            "يبدأ بمقارنة عالية المخاطر تفتح باب الفضول من أول ثانية.",
        },
        {
          title: "الصوت المحلي",
          copy:
            "يستخدم تعبيرات سعودية طبيعية وصياغة conversational مناسبة للسوق.",
        },
        {
          title: "السياق التجاري",
          copy:
            "يبسط موضوعًا استثماريًا معقدًا بين سوقين بشكل مفهوم.",
        },
        {
          title: "التموضع",
          copy:
            "يظهر البراند كشريك استراتيجي وليس مجرد جهة تنهي أوراقًا.",
        },
        {
          title: "الدعوة للإجراء",
          copy:
            "ينقل المشاهد بشكل طبيعي من الوعي إلى اتخاذ خطوة.",
        },
      ],
      comparisonTitle: "نفس البراند. لكن باتجاه محتوى أقوى.",
      comparisonCopy:
        "مقارنة تمثيلية بين محتوى سابق وفيديو عضوي عالي الأداء تمّت كتابة سكربته بواسطة Habiba. المثالان يعكسان أداءً عضويًا.",
      beforeLabel: "محتوى سابق",
      afterLabel: "محتوى عضوي عالي الأداء",
      beforeAlt:
        "مثال لمحتوى TikTok سابق يحقق 20 إعجابًا و11 تعليقًا و6 حفظ و12 مشاركة.",
      afterAlt:
        "مثال لمحتوى TikTok عضوي عالي الأداء كتبت Habiba سكربته وحقق 1222 إعجابًا و193 تعليقًا و364 حفظ و332 مشاركة.",
      metricsTitle: "مقارنة التفاعل الظاهر",
      metrics: [
        ["الإعجابات", "20", "1,222", "61.1×"],
        ["التعليقات", "11", "193", "17.5×"],
        ["الحفظ", "6", "364", "60.7×"],
        ["المشاركات", "12", "332", "27.7×"],
      ],
      impactTitle: "أبعد من الوصول. إلى نمو تجاري حقيقي.",
      impactValue: "10 → 50 عقدًا شهريًا",
      impactCopy:
        "ارتفع عدد العقود الشهرية خمسة أضعاف، من 10 إلى 50. وهذا يمثل زيادة قدرها 400% في العقود الشهرية.",
      impactNote:
        "ساهم الاتجاه العضوي للمحتوى في زيادة العقود الشهرية. الحساب لم يكتسب ظهورًا فقط، بل أصبح المحتوى العضوي قناة واضحة لاكتساب الأعمال.",
      closingTitle: "هل تريد تحويل محتواك إلى نمو قابل للقياس؟",
      closingCopy:
        "احجز استشارة مع Habiba لتحديد ما الذي يحد من أداء حسابك وأين توجد أقوى فرص النمو.",
      closingButton: "احجز استشارتك",
    },
  },
} as const;
