// Catholic Prayers Data
const PRAYERS_DATA = {

  rosary: {
    title: "The Holy Rosary",
    tagline: "Pray with Mary, the perfect model of faith",
    guide: [
      {
        num: 1,
        title: "Begin with the Sign of the Cross",
        text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
      },
      {
        num: 2,
        title: "Hold the Crucifix — Apostles' Creed",
        text: `I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son, Our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into Hell; the third day He arose again from the dead. He ascended into Heaven, and is seated at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.`
      },
      {
        num: 3,
        title: "On the large bead after the crucifix — Our Father",
        text: `Our Father, who art in heaven,\nhallowed be thy name;\nthy kingdom come;\nthy will be done on earth as it is in heaven.\nGive us this day our daily bread;\nand forgive us our trespasses\nas we forgive those who trespass against us;\nand lead us not into temptation,\nbut deliver us from evil.\nAmen.`
      },
      {
        num: 4,
        title: "On each of the 3 small beads — Hail Mary (for Faith, Hope, Charity)",
        text: `Hail Mary, full of grace,\nthe Lord is with thee.\nBlessed art thou among women,\nand blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners,\nnow and at the hour of our death.\nAmen.\n\n(Pray 3 times)`
      },
      {
        num: 5,
        title: "Glory Be",
        text: `Glory be to the Father,\nand to the Son,\nand to the Holy Spirit.\nAs it was in the beginning,\nis now, and ever shall be,\nworld without end.\nAmen.`
      },
      {
        num: 6,
        title: "Announce the Mystery & Meditate",
        text: "Announce the mystery for the decade. Take a brief moment to reflect on the event in the lives of Jesus and Mary."
      },
      {
        num: 7,
        title: "On the large bead — Our Father",
        text: "Our Father, who art in heaven... (full prayer)"
      },
      {
        num: 8,
        title: "On each of the 10 small beads — Hail Mary",
        text: "Hail Mary, full of grace... (full prayer)\n\nRepeat 10 times while meditating on the mystery."
      },
      {
        num: 9,
        title: "Glory Be + Fatima Prayer",
        text: `Glory be to the Father...\n\nO my Jesus,\nforgive us our sins,\nsave us from the fires of hell,\nlead all souls to heaven,\nespecially those most in need of Your mercy.\nAmen.`
      },
      {
        num: 10,
        title: "Repeat Steps 6–9 for the remaining 4 mysteries",
        text: "Continue through all five decades, announcing each mystery and praying Our Father, 10 Hail Marys, Glory Be, and Fatima Prayer."
      },
      {
        num: 11,
        title: "Conclude with the Hail Holy Queen",
        text: `Hail, Holy Queen, Mother of Mercy,\nour life, our sweetness and our hope!\nTo thee do we cry, poor banished children of Eve;\nto thee do we send up our sighs,\nmourning and weeping in this valley of tears.\nTurn then, most gracious advocate,\nthine eyes of mercy towards us;\nand after this, our exile,\nshow unto us the blessed fruit of thy womb, Jesus.\nO clement, O loving, O sweet Virgin Mary!\n\nPray for us, O Holy Mother of God,\nthat we may be made worthy\nof the promises of Christ.\nAmen.`
      },
      {
        num: 12,
        title: "Closing Prayer",
        text: `O God, whose only-begotten Son,\nby His life, death, and resurrection,\nhas purchased for us the rewards of eternal life,\ngrant, we beseech Thee,\nthat meditating upon these mysteries\nof the Most Holy Rosary of the Blessed Virgin Mary,\nwe may imitate what they contain\nand obtain what they promise.\nThrough the same Christ our Lord.\nAmen.`
      },
      {
        num: 13,
        title: "Make the Sign of the Cross to close",
        text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
      }
    ],
    mysteries: {
      joyful: {
        title: "Joyful Mysteries",
        days: "Monday & Saturday",
        mysteries: [
          { name: "The Annunciation", verse: "Luke 1:26-38", fruit: "Humility", desc: "The Angel Gabriel announces to Mary that she will conceive and bear the Son of God by the power of the Holy Spirit." },
          { name: "The Visitation", verse: "Luke 1:39-56", fruit: "Love of neighbor", desc: "Mary visits her cousin Elizabeth, who is six months pregnant with John the Baptist. At Mary's greeting, John leaps in the womb." },
          { name: "The Nativity", verse: "Luke 2:1-20", fruit: "Poverty of spirit, detachment", desc: "Jesus is born in a stable in Bethlehem. Angels announce His birth to the shepherds, who hurry to find the Child with Mary and Joseph." },
          { name: "The Presentation in the Temple", verse: "Luke 2:22-38", fruit: "Obedience, purity", desc: "Mary and Joseph present the infant Jesus in the Temple. Simeon prophesies that Jesus will be a light for the nations and a sword will pierce Mary's soul." },
          { name: "The Finding of Jesus in the Temple", verse: "Luke 2:41-52", fruit: "Piety, zeal for God", desc: "After three days of searching, Mary and Joseph find the twelve-year-old Jesus in the Temple, sitting among the teachers and listening and asking questions." }
        ]
      },
      luminous: {
        title: "Luminous Mysteries",
        days: "Thursday",
        mysteries: [
          { name: "The Baptism of Jesus in the Jordan", verse: "Matthew 3:13-17", fruit: "Openness to the Holy Spirit", desc: "Jesus is baptized by John in the Jordan River. The Holy Spirit descends as a dove and the Father's voice proclaims: 'This is My beloved Son, with whom I am well pleased.'" },
          { name: "The Wedding at Cana", verse: "John 2:1-12", fruit: "Fidelity, trust in Mary's intercession", desc: "At Mary's intercession, Jesus performs His first miracle at the wedding feast in Cana, changing water into wine and manifesting His glory." },
          { name: "The Proclamation of the Kingdom", verse: "Mark 1:14-15", fruit: "Repentance, trust in God", desc: "Jesus proclaims the Kingdom of God, calls sinners to repentance, forgives sins, and demonstrates that the Kingdom is present in His person." },
          { name: "The Transfiguration", verse: "Matthew 17:1-8", fruit: "Desire for holiness, courage", desc: "On Mount Tabor, Jesus is transfigured before Peter, James, and John. His face shines like the sun and Moses and Elijah appear beside Him." },
          { name: "The Institution of the Eucharist", verse: "Luke 22:14-20", fruit: "Eucharistic adoration, love", desc: "At the Last Supper, Jesus takes bread and wine and transforms them into His Body and Blood, instituting the Eucharist and the ordained priesthood." }
        ]
      },
      sorrowful: {
        title: "Sorrowful Mysteries",
        days: "Tuesday & Friday",
        mysteries: [
          { name: "The Agony in the Garden", verse: "Luke 22:39-46", fruit: "True contrition, conformity to God's will", desc: "In Gethsemane, Jesus prays so intensely that He sweats blood. He accepts the Father's will — the cup of suffering — for our salvation." },
          { name: "The Scourging at the Pillar", verse: "John 19:1", fruit: "Mortification, purity", desc: "Pilate orders Jesus to be scourged. Soldiers beat Him mercilessly, fulfilling the prophecy of Isaiah: 'By His wounds we are healed.'" },
          { name: "The Crowning with Thorns", verse: "Matthew 27:27-31", fruit: "Moral courage, love of suffering", desc: "Roman soldiers weave a crown of thorns and press it onto Jesus' head, dress Him in a purple robe, and mock Him as 'King of the Jews.'" },
          { name: "The Carrying of the Cross", verse: "Luke 23:26-32", fruit: "Patience under suffering", desc: "Jesus carries the heavy wooden cross to Golgotha. On the way, He encounters Simon of Cyrene, who is forced to help carry the cross." },
          { name: "The Crucifixion and Death", verse: "John 19:17-30", fruit: "Perseverance, love of God", desc: "Jesus is nailed to the cross on Calvary between two criminals. After three hours of agony, He says 'It is finished' and gives up His spirit." }
        ]
      },
      glorious: {
        title: "Glorious Mysteries",
        days: "Wednesday & Sunday",
        mysteries: [
          { name: "The Resurrection", verse: "John 20:1-18", fruit: "Faith", desc: "On the third day, Jesus rises from the dead in glory, appearing first to Mary Magdalene and then to His disciples. Death has been conquered." },
          { name: "The Ascension", verse: "Acts 1:9-11", fruit: "Hope, desire for heaven", desc: "Forty days after the Resurrection, Jesus ascends into heaven before the eyes of His disciples on the Mount of Olives." },
          { name: "The Descent of the Holy Spirit", verse: "Acts 2:1-4", fruit: "Wisdom, apostolic courage", desc: "On Pentecost, the Holy Spirit descends on Mary and the Apostles in the form of tongues of fire, filling them with courage to preach the Gospel." },
          { name: "The Assumption of Mary", verse: "Revelation 12:1", fruit: "Devotion to Mary, grace of a happy death", desc: "At the end of her earthly life, Mary is taken up body and soul into the glory of heaven by her Son." },
          { name: "The Coronation of Mary as Queen of Heaven", verse: "Revelation 12:1", fruit: "Trust in Mary's intercession, perseverance", desc: "Mary is crowned Queen of Heaven and Earth, Queen of Angels and Saints, reigning at the right hand of her Son for all eternity." }
        ]
      }
    }
  },

  angelus: {
    title: "The Angelus",
    tagline: "Prayed at 6:00 AM, Noon, and 6:00 PM",
    text: `The Angel of the Lord declared unto Mary;\nAnd she conceived of the Holy Spirit.\n\nHail Mary, full of grace, the Lord is with thee.\nBlessed art thou among women,\nand blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners,\nnow and at the hour of our death. Amen.\n\n—\n\nBehold the handmaid of the Lord;\nBe it done unto me according to Thy word.\n\nHail Mary...\n\n—\n\nAnd the Word was made flesh;\nAnd dwelt among us.\n\nHail Mary...\n\n—\n\nPray for us, O Holy Mother of God,\nthat we may be made worthy of the promises of Christ.\n\n—\n\nLet us pray:\nPour forth, we beseech Thee, O Lord,\nThy grace into our hearts;\nthat we, to whom the Incarnation of Christ, Thy Son,\nwas made known by the message of an Angel,\nmay by His Passion and Cross\nbe brought to the glory of His Resurrection.\nThrough the same Christ our Lord.\nAmen.`
  },

  divine_mercy: {
    title: "Divine Mercy Chaplet",
    tagline: "Prayed at 3:00 PM — The Hour of Mercy",
    intro: `Jesus appeared to Saint Faustina Kowalska and asked that this chaplet be prayed especially at 3:00 PM, the Hour of Mercy — the hour of His death on the cross. He promised extraordinary graces to those who prayed it with trust.`,
    text: `BEGIN WITH:\n(Optional) You expired, Jesus, but the source of life gushed forth for souls,\nand the ocean of mercy opened up for the whole world.\nO Fount of Life, unfathomable Divine Mercy,\nenvelop the whole world and empty Yourself out upon us.\n\nO Blood and Water, which gushed forth from the Heart of Jesus\nas a fountain of Mercy for us, I trust in You!\n\n—\n\nOur Father...\nHail Mary...\nApostles' Creed...\n\n—\n\nON THE OUR FATHER BEADS (5 times):\n\nEternal Father, I offer You the Body and Blood,\nSoul and Divinity of Your dearly beloved Son,\nOur Lord Jesus Christ,\nin atonement for our sins\nand those of the whole world.\n\n—\n\nON THE HAIL MARY BEADS (10 times per decade):\n\nFor the sake of His sorrowful Passion,\nhave mercy on us and on the whole world.\n\n—\n\nCONCLUDE WITH (3 times):\n\nHoly God, Holy Mighty One,\nHoly Immortal One,\nhave mercy on us and on the whole world.\n\n—\n\nFINAL PRAYER (Optional):\n\nEternal God, in whom mercy is endless\nand the treasury of compassion inexhaustible,\nlook kindly upon us\nand increase Your mercy in us,\nthat in difficult moments\nwe might not despair\nnor become despondent,\nbut with great confidence\nsubmit ourselves to Your holy will,\nwhich is Love and Mercy itself.\nAmen.`
  },

  saint_michael: {
    title: "Prayer to Saint Michael the Archangel",
    tagline: "Guardian against the forces of evil",
    history: `This prayer was composed by Pope Leo XIII in 1886 after he reportedly had a vision of a great battle between Saint Michael and Satan. He ordered it to be prayed after every Low Mass, a practice that continued until the 1960s. Many Catholics and parishes have revived this powerful prayer.`,
    text: `Saint Michael the Archangel,\ndefend us in battle.\nBe our protection against\nthe wickedness and snares of the devil.\nMay God rebuke him, we humbly pray;\nand do Thou, O Prince of the Heavenly Host,\nby the power of God,\ncast into hell Satan\nand all the evil spirits\nwho prowl about the world\nseeking the ruin of souls.\nAmen.`
  },

  memorare: {
    title: "The Memorare",
    tagline: "To the Blessed Virgin Mary — a prayer of total confidence",
    history: `The Memorare is attributed to Saint Bernard of Clairvaux (1090–1153), one of the greatest Marian saints. The prayer expresses absolute trust in Mary's powerful intercession. Saint Francis de Sales and countless saints have used it as a prayer of desperate confidence.`,
    text: `Remember, O most gracious Virgin Mary,\nthat never was it known\nthat anyone who fled to thy protection,\nimplored thy help,\nor sought thy intercession,\nwas left unaided.\n\nInspired by this confidence,\nI fly unto thee,\nO Virgin of virgins, my Mother.\nTo thee do I come,\nbefore thee I stand,\nsinful and sorrowful.\nO Mother of the Word Incarnate,\ndespise not my petitions,\nbut in thy mercy,\nhear and answer me.\nAmen.`
  },

  morning_offering: {
    title: "Morning Offering",
    tagline: "Consecrate your day to the Sacred Heart of Jesus",
    text: `O Jesus, through the Immaculate Heart of Mary,\nI offer You my prayers, works, joys, and sufferings\nof this day in union with\nthe Holy Sacrifice of the Mass throughout the world.\nI offer them for all the intentions\nof Your Sacred Heart:\nthe salvation of souls, reparation for sin,\nand the reunion of all Christians.\nI offer them for the intentions\nof our bishops and of all Apostles of Prayer,\nand in particular for those recommended\nby our Holy Father this month.\nAmen.`
  },

  act_of_contrition: {
    title: "Act of Contrition",
    tagline: "A prayer of perfect sorrow for sins",
    text: `O my God, I am heartily sorry\nfor having offended Thee,\nand I detest all my sins,\nbecause I dread the loss of Heaven\nand the pains of Hell;\nbut most of all because they offend Thee,\nmy God, Who art all good\nand deserving of all my love.\nI firmly resolve, with the help of Thy grace,\nto confess my sins, to do penance,\nand to amend my life.\nAmen.`
  },

  act_of_faith: {
    title: "Act of Faith",
    tagline: "A prayer of total belief in God",
    text: `O my God,\nI firmly believe\nthat You are one God in three divine Persons,\nFather, Son, and Holy Spirit.\nI believe that Your divine Son became man\nand died for our sins,\nand that He will come to judge the living and the dead.\nI believe these and all the truths\nwhich the Holy Catholic Church teaches,\nbecause You have revealed them,\nwho can neither deceive nor be deceived.\nAmen.`
  },

  act_of_hope: {
    title: "Act of Hope",
    tagline: "A prayer of confident trust in God",
    text: `O my God,\nrelying on Your almighty power\nand infinite mercy and promises,\nI hope to obtain pardon of my sins,\nthe help of Your grace,\nand life everlasting,\nthrough the merits of Jesus Christ,\nmy Lord and Redeemer.\nAmen.`
  },

  act_of_love: {
    title: "Act of Love (Act of Charity)",
    tagline: "A prayer of love for God above all things",
    text: `O my God,\nI love You above all things,\nwith my whole heart and soul,\nbecause You are all-good\nand worthy of all love.\nI love my neighbor as myself for the love of You.\nI forgive all who have injured me\nand ask pardon of all whom I have injured.\nAmen.`
  },

  come_holy_spirit: {
    title: "Come, Holy Spirit (Veni Sancte Spiritus)",
    tagline: "Invoking the Holy Spirit for guidance and gifts",
    text: `Come, Holy Spirit, fill the hearts of Your faithful\nand kindle in them the fire of Your love.\n\nSend forth Your Spirit and they shall be created.\nAnd You shall renew the face of the earth.\n\nO God, who by the light of the Holy Spirit\ndid instruct the hearts of the faithful,\ngrant that by the same Holy Spirit\nwe may be truly wise\nand ever enjoy His consolations.\nThrough Christ our Lord.\nAmen.\n\n—\n\nCome, Holy Spirit, come!\nAnd from Your celestial home\nShed a ray of light divine!\n\nCome, Father of the poor!\nCome, source of all our store!\nCome, within our bosoms shine!\n\nYou, of comforters the best;\nYou, the soul's most welcome guest;\nSweet refreshment here below;\n\nIn our labor, rest most sweet;\nGrateful coolness in the heat;\nSolace in the midst of woe.\n\nO most blessed Light divine,\nShine within these hearts of Yours,\nAnd our inmost being fill!\n\nWhere You are not, man has naught,\nNothing good in deed or thought,\nNothing free from taint of ill.\n\nHeal our wounds, our strength renew;\nOn our dryness pour Your dew;\nWash the stains of guilt away:\n\nBend the stubborn heart and will;\nMelt the frozen, warm the chill;\nGuide the steps that go astray.\n\nOn the faithful, who adore\nAnd confess You, evermore\nIn Your sevenfold gift descend;\n\nGive them virtue's sure reward;\nGive them Your salvation, Lord;\nGive them joys that never end.\nAmen.`
  },

  jesus_prayer: {
    title: "The Jesus Prayer",
    tagline: "The ancient prayer of the Desert Fathers",
    text: `Lord Jesus Christ,\nSon of God,\nhave mercy on me,\na sinner.\n\n—\n\nThis ancient prayer, rooted in the Gospels,\nis meant to be prayed continuously\nin rhythm with the breath:\n\nInhale: "Lord Jesus Christ, Son of God"\nExhale: "have mercy on me, a sinner"\n\nThe goal of this prayer is the Prayer of the Heart —\nwhen the prayer descends from the mind\ninto the heart and prays itself unceasingly,\nfulfilling Saint Paul's command to\n"pray without ceasing." (1 Thessalonians 5:17)`
  },

  blessing_before_meals: {
    title: "Grace Before and After Meals",
    tagline: "Blessing food in thanksgiving to God",
    text: `BEFORE MEALS:\n\nBless us, O Lord,\nand these Thy gifts,\nwhich we are about to receive\nfrom Thy bounty,\nthrough Christ our Lord.\nAmen.\n\n—\n\nAFTER MEALS:\n\nWe give Thee thanks for all Thy benefits,\nO Almighty God, who lives and reigns forever;\nand may the souls of the faithful departed,\nthrough the mercy of God, rest in peace.\nAmen.`
  },

  prayer_for_dead: {
    title: "Prayer for the Souls in Purgatory",
    tagline: "Remember the faithful departed",
    text: `Eternal rest grant unto them, O Lord,\nand let perpetual light shine upon them.\nMay they rest in peace.\nAmen.\n\n—\n\nO God, the Creator and Redeemer\nof all the faithful,\ngrant to the souls of Your servants and handmaids\nthe remission of all their sins;\nthat through pious supplications\nthey may obtain the pardon they have always desired.\nWho lives and reigns,\nworld without end.\nAmen.\n\n—\n\nMay the souls of all the faithful departed,\nthrough the mercy of God,\nrest in peace.\nAmen.`
  }
};
