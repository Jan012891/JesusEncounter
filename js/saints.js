// Catholic Daily Saints — Full Year
const SAINTS_DATA = {
  "01-01": {
    name: "Mary, Mother of God",
    subtitle: "Solemnity — The Blessed Virgin Mary, Mother of God",
    type: "Solemnity",
    bio: `On the eighth day after Christmas, the Church celebrates the Solemnity of Mary, the Holy Mother of God — the oldest Marian feast in the Roman Rite. This title, Theotokos (God-bearer), was solemnly defined at the Council of Ephesus in 431 AD. Mary is venerated not merely as the mother of a holy man, but as the one who bore God Incarnate in her womb.\n\nThis feast also marks the World Day of Peace, established by Pope Paul VI in 1967. The Church prays on this day for peace among nations and in every human heart — recognizing that true peace is a gift from the Prince of Peace born of Mary.\n\nMary's divine motherhood is the foundation of all her other privileges and titles. Because she is the Mother of God, she is also Queen of Heaven, Mediatrix of Grace, and our most powerful intercessor.`,
    prayer: `Hail Mary, full of grace,\nthe Lord is with thee.\nBlessed art thou among women,\nand blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God,\npray for us sinners,\nnow and at the hour of our death.\nAmen.`
  },
  "01-02": {
    name: "Saints Basil the Great and Gregory Nazianzen",
    subtitle: "Bishops and Doctors of the Church",
    type: "Memorial",
    bio: `Saints Basil (330–379) and Gregory (329–390) were lifelong friends, brilliant theologians, and two of the greatest Fathers of the Eastern Church — together with Gregory of Nyssa, they are called the Cappadocian Fathers.\n\nBasil the Great was Archbishop of Caesarea and one of the greatest organizers of monasticism in the East. His Rule for monks influenced Saint Benedict and the entire Western monastic tradition. He was a tireless defender of Nicene orthodoxy against Arianism and a champion of the poor, founding one of the first hospitals in history.\n\nGregory of Nazianzus was Patriarch of Constantinople and presided over the First Council of Constantinople (381) which affirmed the divinity of the Holy Spirit. His theological orations earned him the title 'the Theologian' — a title given to only three people in Eastern Christianity (the others being Saint John the Evangelist and Saint Symeon the New Theologian).`,
    prayer: `O God, who were pleased to give light to Your Church\nthrough the outstanding lives and teaching\nof Saints Basil and Gregory,\ngrant that in humility we may learn Your truth\nand practice it faithfully in love.\nThrough Christ our Lord.\nAmen.`
  },
  "01-06": {
    name: "The Epiphany of the Lord",
    subtitle: "The Visit of the Magi — Manifestation of Christ to the Nations",
    type: "Solemnity",
    bio: `The Solemnity of the Epiphany commemorates the visit of the Magi — the wise men from the East — to the infant Jesus in Bethlehem (Matthew 2:1-12). The word 'epiphany' means 'manifestation' or 'appearing': on this day, Christ was revealed to the Gentile nations, represented by the Magi.\n\nTradition names the Magi as Caspar, Melchior, and Balthasar, and their gifts of gold (for a king), frankincense (for a priest), and myrrh (for one who will die) are read as prophecies of Christ's identity and mission.\n\nIn many countries, especially in Latin America, Spain, and the Philippines, Epiphany (Three Kings Day) is celebrated with greater festivity than Christmas itself. Children receive gifts on this day in memory of the Magi's gifts to the Child Jesus.\n\nThe Eastern Churches also celebrate the Baptism of Jesus on this day, seeing both events as revelations of Christ's divine identity.`,
    prayer: `Lord God,\non this day You revealed Your Son to the nations\nby the guidance of a star.\nLead us to Your glory in heaven\nby the light of faith.\nThrough Christ our Lord.\nAmen.`
  },
  "01-07": {
    name: "Saint Raymond of Peñafort",
    subtitle: "Priest, Master General of the Dominicans",
    type: "Optional Memorial",
    bio: `Saint Raymond of Peñafort (1175–1275) was a Spanish Dominican priest who lived to the extraordinary age of 100. He was a renowned canon lawyer, confessor to Pope Gregory IX, and the third Master General of the Order of Preachers (Dominicans).\n\nAt the pope's request, he compiled the Decretals — a systematic collection of papal letters and decrees that became the standard textbook of canon law for centuries. He is patron saint of canon lawyers.\n\nHe is also credited with convincing Saint Thomas Aquinas to write the Summa contra Gentiles, a philosophical defense of the Christian faith addressed to non-Christians. He resigned as Master General after only two years, preferring a life of humble service and preaching.`,
    prayer: `O God, who gave Saint Raymond the grace\nto devote himself to the service of sinners\nthrough the ministry of penance,\ngrant us, through his intercession,\nthat being freed from the slavery of sin,\nwe may freely serve You.\nThrough Christ our Lord.\nAmen.`
  },
  "01-13": {
    name: "Saint Hilary of Poitiers",
    subtitle: "Bishop and Doctor of the Church",
    type: "Optional Memorial",
    bio: `Saint Hilary of Poitiers (315–368) was a Gallo-Roman bishop who became one of the greatest defenders of Nicene orthodoxy in the West. Converted from paganism as an adult, he was elected Bishop of Poitiers by popular acclaim.\n\nHis most important work, 'On the Trinity,' is a masterpiece of Latin theological writing that drew heavily on Greek sources. For his fierce opposition to Arianism, he was exiled by Emperor Constantius II to Phrygia (modern Turkey) for four years. Rather than becoming bitter, he used his exile to study Eastern theology deeply.\n\nSaint Jerome called him 'the trumpet of the Latins against the Arians.' He is one of the original Doctors of the Church proclaimed by Pope Pius IX in 1851.`,
    prayer: `O God, who guided Saint Hilary\nto defend the divinity of Your Son,\ngrant that we may know You truly\nand worship You faithfully,\nFather, Son, and Holy Spirit,\none God forever.\nAmen.`
  },
  "01-17": {
    name: "Saint Anthony of Egypt",
    subtitle: "Father of Christian Monasticism",
    type: "Memorial",
    bio: `Saint Anthony of Egypt (251–356) is one of the most extraordinary figures in Christian history. Born into a wealthy Egyptian family, he heard the Gospel words 'Go, sell all you have and give to the poor' and took them literally — selling his inheritance and giving it to the poor.\n\nHe retreated into the Egyptian desert, living first in an abandoned fort, then in a cave, spending decades in prayer, fasting, and fierce spiritual combat with demons. His biography, written by Saint Athanasius, became the most influential Christian biography ever written and sparked the entire monastic movement.\n\nSaint Anthony lived to the age of 105, physically vigorous until the end. He is the patron saint of animals, butchers, and those suffering from skin diseases. His feast day is associated with the blessing of animals in many countries.`,
    prayer: `O God of infinite mercy,\nwho inflamed Saint Anthony with the fire of penance,\nhelp us, through his intercession,\nto conquer self, and so love You\nwith our whole heart.\nThrough Christ our Lord.\nAmen.`
  },
  "01-20": {
    name: "Saint Fabian and Saint Sebastian",
    subtitle: "Martyrs of Rome",
    type: "Optional Memorial",
    bio: `Saint Fabian (died 250) was Pope from 236 to 250 AD. According to tradition, he was elected pope when a dove descended and landed on his head — he was not even a candidate. He reorganized the Church in Rome, divided it into seven districts, and sent missionaries to Gaul. He died a martyr under Emperor Decius.\n\nSaint Sebastian (died c. 288) was a Roman soldier and officer in the Praetorian Guard who secretly encouraged imprisoned Christians and converted many, including the prefect of Rome. When Emperor Diocletian discovered his faith, Sebastian was tied to a stake and shot with arrows — but miraculously survived. He confronted the emperor and was beaten to death.\n\nBoth saints have been venerated in Rome from very early times and are commemorated together on this day.`,
    prayer: `Lord God,\ngrant us the strength of Saints Fabian and Sebastian,\nwho gave their lives for Christ.\nMay their intercession give us courage\nto bear witness to our faith in all circumstances.\nThrough Christ our Lord.\nAmen.`
  },
  "01-21": {
    name: "Saint Agnes",
    subtitle: "Virgin and Martyr, Patroness of Girls",
    type: "Memorial",
    bio: `Saint Agnes (died c. 304) was a thirteen-year-old Roman girl who was martyred for refusing to marry the son of the prefect of Rome and for refusing to renounce her consecrated virginity. According to tradition, she was sent to a brothel but miraculously preserved her purity, and was then beheaded.\n\nHer name in Latin (agnus) means 'lamb,' and she is depicted holding a lamb — a symbol of both her innocence and her sacrifice. On her feast day, two lambs are blessed at the Church of Sant'Agnese in Rome; their wool is later woven into the pallia worn by archbishops.\n\nSaint Agnes has been venerated since the earliest centuries. Saint Ambrose wrote about her: 'She was too young to suffer, yet old enough to conquer.'`,
    prayer: `Almighty ever-living God,\nwho choose what is weak in the world\nto confound the strong,\ngrant that we, who celebrate\nthe heavenly birthday of Your Martyr Saint Agnes,\nmay experience her loving help.\nThrough Christ our Lord.\nAmen.`
  },
  "01-24": {
    name: "Saint Francis de Sales",
    subtitle: "Bishop and Doctor of the Church, Patron of Writers and Journalists",
    type: "Memorial",
    bio: `Saint Francis de Sales (1567–1622) was Bishop of Geneva and one of the most beloved saints of the Counter-Reformation. Born into French nobility, he became a lawyer before feeling called to priesthood against his father's wishes.\n\nHis most famous work, 'Introduction to the Devout Life,' revolutionized spirituality by arguing that holiness is not reserved for monks and nuns but is possible — even necessary — for laypeople in every walk of life. It has been continuously in print since 1609.\n\nHe co-founded the Order of the Visitation with Saint Jane de Chantal and is famous for his extraordinary gentleness. His motto was: 'Nothing is so strong as gentleness; nothing so gentle as true strength.' He was declared Doctor of the Church in 1877 and patron of writers and journalists in 1923.`,
    prayer: `O God, who for the salvation of souls\nwilled that the Bishop Saint Francis de Sales\nbecome all things to all,\ngive us, through his kindness,\nfollowing his example,\nto show the gentleness of Your charity\nin the service of our neighbor.\nThrough Christ our Lord.\nAmen.`
  },
  "01-25": {
    name: "The Conversion of Saint Paul",
    subtitle: "Feast — The Road to Damascus",
    type: "Feast",
    bio: `The Feast of the Conversion of Saint Paul commemorates the dramatic event on the road to Damascus when the risen Christ appeared to Saul of Tarsus, knocked him to the ground, and called him to be an apostle to the Gentiles (Acts 9:1-22).\n\nSaul had been a zealous Pharisee and violent persecutor of Christians. The encounter with the risen Lord transformed him completely — he spent three days blind and without food or drink, then was baptized and began preaching the very faith he had tried to destroy.\n\nThis feast concludes the 'Chair of Unity Octave' — a week of prayer for Christian unity. Paul's conversion is the supreme example of God's power to transform even the most hardened hearts. He wrote: 'I am the worst of sinners — but Christ Jesus came into the world to save sinners' (1 Timothy 1:15).`,
    prayer: `O God, who taught the whole world\nthrough the preaching of the Apostle Paul,\ndraw us, we pray, ever closer to You\nthrough the example of him\nwhose conversion we celebrate today.\nThrough Christ our Lord.\nAmen.`
  },
  "01-26": {
    name: "Saints Timothy and Titus",
    subtitle: "Bishops, Companions of Saint Paul",
    type: "Memorial",
    bio: `Saints Timothy and Titus were two of Saint Paul's closest companions and co-workers in the mission to the Gentiles. Both are recipients of letters from Paul preserved in the New Testament.\n\nTimothy was from Lystra (modern Turkey), son of a Greek father and a Jewish Christian mother named Eunice. Paul called him 'my true child in the faith' and entrusted him with the church at Ephesus. He was reportedly martyred under Emperor Nerva.\n\nTitus was a Greek Gentile, perhaps Paul's first major Gentile convert. Paul sent him on difficult missions to Corinth and left him in charge of the church in Crete. Their feast is celebrated together because both men represent the universal mission of the Church beyond Israel.`,
    prayer: `O God, who adorned Saints Timothy and Titus\nwith apostolic virtues,\ngrant that through their intercession,\nwe may live virtuously in this age\nand enter the happiness of eternity.\nThrough Christ our Lord.\nAmen.`
  },
  "01-28": {
    name: "Saint Thomas Aquinas",
    subtitle: "Priest and Doctor of the Church, Patron of Students",
    type: "Memorial",
    bio: `Saint Thomas Aquinas (1225–1274) is universally regarded as the greatest theologian and philosopher in the history of the Catholic Church. Born into Italian nobility, he joined the Dominicans against his family's fierce opposition. His brothers even kidnapped him and held him captive for a year to change his mind.\n\nHis masterwork, the 'Summa Theologiae,' is the most comprehensive and systematic account of Catholic theology ever written. He also wrote the famous Eucharistic hymns 'Pange Lingua,' 'Tantum Ergo,' and 'O Salutaris Hostia' — still sung at Benediction today.\n\nHis classmates called him 'the dumb ox' for his quiet demeanor, but his teacher Saint Albert the Great predicted: 'This dumb ox will fill the whole world with his bellowing.' He was declared Doctor of the Church in 1567 and patron of students and universities.`,
    prayer: `O God, who made Your only-begotten Son\nthe light of the world,\nand who through Saint Thomas Aquinas\nflooded the Church with the light of his wisdom,\ngrant that we may follow his teaching\nand come to know You\nas he knew and loved You.\nThrough Christ our Lord.\nAmen.`
  },
  "01-31": {
    name: "Saint John Bosco",
    subtitle: "Priest, Founder of the Salesians, Patron of Youth",
    type: "Memorial",
    bio: `Saint John Bosco (1815–1888), known as Don Bosco, was an Italian priest who dedicated his life to the education and welfare of poor and at-risk youth in 19th-century Turin. Born into extreme poverty, he worked as a shoemaker, tailor, and waiter to fund his seminary education.\n\nHe developed the 'Preventive System' of education based on reason, religion, and loving kindness — a revolutionary approach when corporal punishment was the norm. He founded the Salesian Society (1859) and the Daughters of Mary Help of Christians (1872), today two of the largest religious orders in the world with over 30,000 members.\n\nHe is said to have been guided by prophetic dreams and had a gift for reading souls. He worked extraordinary miracles and converted hundreds of hardened criminals. He was canonized in 1934.`,
    prayer: `O God, who raised up Saint John Bosco\nas a father and teacher of the young,\ngrant that, inflamed by the same fire of charity,\nwe may seek out souls\nand serve You alone.\nThrough Christ our Lord.\nAmen.`
  },
  "02-02": {
    name: "The Presentation of the Lord",
    subtitle: "Feast — Candlemas Day",
    type: "Feast",
    bio: `The Feast of the Presentation of the Lord (February 2) commemorates the event described in Luke 2:22-40 when Mary and Joseph brought the infant Jesus to the Temple in Jerusalem, forty days after His birth, to present Him to God according to the Law of Moses.\n\nIn the Temple, the elderly Simeon — who had been promised by the Holy Spirit that he would not die before seeing the Messiah — took the child in his arms and proclaimed the Nunc Dimittis: 'Now, Lord, You may dismiss Your servant in peace... for my eyes have seen Your salvation.' The prophetess Anna also gave thanks and spoke about the child to all who awaited the redemption of Jerusalem.\n\nThis feast is also called Candlemas because on this day candles are blessed in church — symbolizing Christ as the 'light to enlighten the Gentiles,' as Simeon proclaimed. This feast closes the Christmas season in its extended form.`,
    prayer: `Lord God,\nwe are gathered to celebrate\nthe presentation of Jesus in the Temple.\nMay the light of Christ illumine our hearts\nand lead us to the fullness of life.\nThrough the same Christ our Lord.\nAmen.`
  },
  "02-03": {
    name: "Saint Blaise",
    subtitle: "Bishop and Martyr, Patron of Throat Ailments",
    type: "Optional Memorial",
    bio: `Saint Blaise (died c. 316) was Bishop of Sebaste in Armenia who was martyred under Emperor Licinius. He is famous for miraculously saving a boy who was choking on a fishbone — giving rise to the tradition of the Blessing of Throats on his feast day.\n\nAccording to tradition, before his martyrdom he was combed with iron wool-combs (making him patron of wool combers) and then beheaded. He is one of the Fourteen Holy Helpers — saints especially venerated during the Middle Ages for their intercessory power against specific diseases.\n\nThe blessing of throats, performed with two crossed candles, is one of the most popular sacramentals in the Catholic Church and is administered on his feast day worldwide.`,
    prayer: `Through the intercession of Saint Blaise,\nbishop and martyr,\nmay God deliver you\nfrom ailments of the throat\nand from every other evil.\nIn the name of the Father,\nand of the Son,\nand of the Holy Spirit.\nAmen.`
  },
  "02-05": {
    name: "Saint Agatha",
    subtitle: "Virgin and Martyr, Patroness of Breast Cancer Patients",
    type: "Memorial",
    bio: `Saint Agatha (died c. 251) was a young Sicilian Christian from Catania who refused the advances of Quintianus, the Roman prefect of Sicily. When she rejected him, he had her imprisoned in a brothel and then subjected to brutal torture, including the cutting off of her breasts — for which she is the patron of those with breast cancer.\n\nAccording to tradition, Saint Peter appeared to her in prison and healed her wounds. She died in prison of her tortures. Her veil, displayed in the Cathedral of Catania, is said to have stopped the lava flow of Mount Etna on multiple occasions.\n\nShe is one of seven women commemorated by name in the Roman Canon (Eucharistic Prayer I) of the Mass, alongside the Blessed Virgin Mary, Saints Felicity, Perpetua, Lucy, Agnes, and Cecilia.`,
    prayer: `Almighty God,\nYou gave Saint Agatha\ncourage to confess Your name\nand faithfulness to the point of death.\nBy her prayers, strengthen our faith,\nthat we may never deny You.\nThrough Christ our Lord.\nAmen.`
  },
  "02-06": {
    name: "Saint Paul Miki and Companions",
    subtitle: "Martyrs of Japan",
    type: "Memorial",
    bio: `On February 5, 1597, twenty-six Christians were crucified on a hill overlooking Nagasaki, Japan — the first mass martyrdom in the history of Japanese Christianity. They are commemorated on February 6.\n\nThe twenty-six included Paul Miki (a Japanese Jesuit scholastic and renowned preacher), seventeen Japanese laymen, three Japanese Jesuits, and six Franciscans (four Spaniards, one Mexican, one Indian). Ranging in age from 12 to 64, they were marched 600 miles from Kyoto to Nagasaki in mid-winter.\n\nAt the cross, Paul Miki preached his last sermon, forgiving his executioners and proclaiming his faith. When the soldiers thrust lances into their sides, the martyrs cried out 'Jesus! Mary!' Their example sparked rather than extinguished the Japanese Church, which survived 250 years of persecution in secret.`,
    prayer: `O God, strength of all the saints,\nwho through the Cross were pleased to call\nthe Martyrs Paul Miki and companions\nto life everlasting,\ngrant us, through their intercession,\nthat, holding faithfully to the profession of our faith,\nwe may be worthy to come to eternal life.\nThrough Christ our Lord.\nAmen.`
  },
  "02-10": {
    name: "Saint Scholastica",
    subtitle: "Virgin, Twin Sister of Saint Benedict",
    type: "Memorial",
    bio: `Saint Scholastica (480–543) was the twin sister of Saint Benedict, founder of Western monasticism. She is considered the first Benedictine nun, having founded a community of women near Monte Cassino in Italy.\n\nThe tender account of her final meeting with her brother is told by Pope Saint Gregory the Great: the two met annually for spiritual conversation at a house outside the monastery. On their last meeting, Scholastica begged Benedict to stay the night and continue their conversation. He refused, citing the rule. She prayed with her head bowed in her hands — and immediately a violent storm made it impossible for him to leave.\n\nThree days later, Benedict saw her soul ascending to heaven in the form of a dove. He had her buried in the tomb he had prepared for himself. Their souls and bodies now share eternal rest together.`,
    prayer: `Lord God,\nwho taught us that love is the greatest commandment,\ngrant that following the example of Saint Scholastica,\nwe may serve You with pure love\nand deserve to see Your face in heaven.\nThrough Christ our Lord.\nAmen.`
  },
  "02-11": {
    name: "Our Lady of Lourdes",
    subtitle: "World Day of the Sick",
    type: "Optional Memorial",
    bio: `On February 11, 1858, the Blessed Virgin Mary appeared for the first time to 14-year-old Bernadette Soubirous in a grotto near Lourdes, France. Over the next six months, Mary appeared to Bernadette 18 times, identifying herself as 'the Immaculate Conception.'\n\nMary asked for a chapel to be built at the site and for people to come in procession. On March 25, she directed Bernadette to dig in the mud, and a spring arose that has since produced millions of gallons of water. Thousands of miraculous cures have been attributed to the waters of Lourdes, with 70 officially recognized by the Church after rigorous medical investigation.\n\nLourdes is now the most visited pilgrimage site in the world, with over 5 million pilgrims annually. Pope John Paul II designated February 11 as the World Day of the Sick in 1992. Bernadette was canonized in 1933.`,
    prayer: `O Mary, conceived without sin,\npray for us who have recourse to thee.\nOur Lady of Lourdes,\nheal the sick,\ncomfort the sorrowful,\nconvert sinners,\nand pray for us all.\nAmen.`
  },
  "02-14": {
    name: "Saints Cyril and Methodius",
    subtitle: "Bishops, Apostles of the Slavs, Co-Patrons of Europe",
    type: "Memorial",
    bio: `Saints Cyril (826–869) and Methodius (815–885) were Greek brothers from Thessalonica who became the apostles of the Slavic peoples. Commissioned by the Byzantine Emperor and later by the Pope, they evangelized Moravia (modern Czech Republic) and surrounding regions.\n\nCyril's greatest achievement was the creation of the Glagolitic alphabet — the first alphabet designed specifically for the Slavic languages — so that the Slavic peoples could have the Scriptures and liturgy in their own tongue. The Cyrillic alphabet (used today for Russian, Ukrainian, Serbian, Bulgarian, and many other languages) is named in his honor.\n\nThey were controversially innovative in insisting on using the vernacular language for the liturgy — a practice condemned by some German bishops but defended by Pope Adrian II. They are co-patrons of Europe alongside Saint Benedict, and Saints Birgitta of Sweden and Catherine of Siena.`,
    prayer: `O God, who by the teaching of Saints Cyril and Methodius\nbrought the light of the Gospel to the Slavic peoples,\ngrant that their intercession and labor\nmay make our hearts fervent in faith,\nand that all nations may acknowledge You as the one God.\nThrough Christ our Lord.\nAmen.`
  },
  "02-21": {
    name: "Saint Peter Damian",
    subtitle: "Bishop and Doctor of the Church",
    type: "Optional Memorial",
    bio: `Saint Peter Damian (1007–1072) was an Italian Benedictine monk who became one of the most powerful reformers of the 11th century Church. Orphaned as a child, he was mistreated by a brother and rescued by another brother (named Damian, whose name he adopted in gratitude).\n\nHe became a hermit at Fonte Avellana and wrote extensively against clerical abuses, including simony (the buying and selling of Church offices) and the immorality of clergy. His writings had enormous influence on the Gregorian Reform and on Saint Gregory VII.\n\nUnwillingly made a cardinal by Pope Stephen IX, he tried to resign multiple times but was not permitted. He is remembered for his extraordinary penitential practices and his compassion for the poor. Dante placed him in the highest sphere of Paradise.`,
    prayer: `O God, who adorned the Bishop Saint Peter Damian\nwith a burning love for a life of holiness and service,\ngrant through his intercession\nthat, putting Christ before all else,\nwe may be eager to serve Your Church.\nThrough Christ our Lord.\nAmen.`
  },
  "02-22": {
    name: "The Chair of Saint Peter",
    subtitle: "Feast — The Primacy of the Bishop of Rome",
    type: "Feast",
    bio: `The Feast of the Chair of Saint Peter does not celebrate a piece of furniture but the authority of the papacy — the teaching office of the Bishop of Rome as successor of Saint Peter, to whom Christ said: 'You are Peter, and on this rock I will build my Church' (Matthew 16:18).\n\nThe ancient wooden chair preserved in Saint Peter's Basilica in Rome — encased in Bernini's bronze throne — is venerated as a relic of the chair upon which Peter taught. Whether or not this particular chair is historically Peter's is less important than what it symbolizes: the cathedra (teaching chair) from which the Bishop of Rome governs and teaches the universal Church.\n\nThis feast reminds us that the Church is not a democracy but an apostolic community with a divinely established structure of authority rooted in Peter's confession of faith: 'You are the Christ, the Son of the living God' (Matthew 16:16).`,
    prayer: `Almighty God,\nwho in Your providential design\nwilled to build Your Church on blessed Peter,\ngrant that nothing may disturb the unity\nwhich You have established,\nand that the flock You have gathered\nmay receive the food of salvation.\nThrough Christ our Lord.\nAmen.`
  },
  "02-23": {
    name: "Saint Polycarp",
    subtitle: "Bishop and Martyr of Smyrna",
    type: "Memorial",
    bio: `Saint Polycarp (69–155) was Bishop of Smyrna (modern Izmir, Turkey) and one of the last surviving links to the Apostolic generation — he was a disciple of Saint John the Apostle and met others who had known Jesus personally.\n\nAt the age of 86, he was arrested during a pagan festival and ordered to curse Christ and swear by the fortune of Caesar. His response has become immortal: 'Eighty-six years I have served Christ, and He never did me any wrong. How can I blaspheme my King who saved me?'\n\nHe was sentenced to be burned alive, but witnesses reported that the flames refused to touch him and formed an arch around him. Finally a soldier stabbed him. His letter to the Philippians is preserved, as is the 'Martyrdom of Polycarp' — the earliest surviving account of a Christian martyrdom outside the New Testament.`,
    prayer: `O God, who in the Bishop Saint Polycarp\nmade us partakers of the Apostolic faith,\ngrant through his intercession\nthat Your Church may always grow in that faith\nuntil it reaches its fullness in Your glory.\nThrough Christ our Lord.\nAmen.`
  },
  "03-04": {
    name: "Saint Casimir",
    subtitle: "Prince of Poland, Patron of Poland and Lithuania",
    type: "Memorial",
    bio: `Saint Casimir (1458–1484) was a Polish prince who chose a life of holiness over royal privilege. Born as the third child of King Casimir IV of Poland, he refused a crown offered to him and dedicated himself entirely to prayer, penance, and the service of the poor.\n\nKnown for his deep devotion to the Eucharist and the Virgin Mary, Casimir spent long hours in prayer before the Blessed Sacrament, often lying prostrate on the cold stone floor of the church. Despite suffering from tuberculosis, he refused to compromise his austere lifestyle.\n\nHe died at the age of 25, having never married, choosing instead to live in perfect chastity. He was canonized in 1521 and named patron of Poland and Lithuania.`,
    prayer: `O God, to serve You is to reign,\nwho called Saint Casimir to seek Your kingdom\nand Your righteousness above all things,\ngrant, through his intercession,\nthat we may forsake all earthly riches\nand be inflamed with love of You.\nThrough Christ our Lord.\nAmen.`
  },
  "03-07": {
    name: "Saints Perpetua and Felicity",
    subtitle: "Martyrs of Carthage",
    type: "Memorial",
    bio: `Saints Perpetua and Felicity were martyred in Carthage (modern-day Tunisia) on March 7, 203 AD. Vibia Perpetua was a 22-year-old noblewoman and nursing mother; Felicity was her enslaved companion who was pregnant at the time of their arrest.\n\nPerpetua kept a prison diary — one of the earliest writings by a Christian woman — which records her visions and her steadfast faith despite pressure from her father to renounce Christianity. Felicity gave birth in prison shortly before their execution.\n\nBoth women were thrown to wild beasts in the arena and ultimately put to the sword. Their courage became an enduring witness to the faith.`,
    prayer: `Lord God of power and might,\nYou gave Saints Perpetua and Felicity\nthe courage to suffer a cruel martyrdom.\nBy their prayers, help us to grow in love for You\nand to be more faithful to our vocation as Christians.\nThrough Christ our Lord.\nAmen.`
  },
  "03-08": {
    name: "Saint John of God",
    subtitle: "Founder of the Brothers Hospitallers, Patron of the Sick",
    type: "Memorial",
    bio: `Saint John of God (1495–1550) was a Portuguese-born layman who had a dramatic conversion at the age of 40 after hearing a sermon by Saint John of Avila. He dedicated his life to caring for the sick and the poor of Granada, Spain, personally carrying the sick on his back to his hospital and begging in the streets to support them.\n\nHe founded what became the Brothers Hospitallers (Order of Saint John of God), one of the largest Catholic hospital networks in the world. He died on his 55th birthday, kneeling in prayer before the Blessed Sacrament.`,
    prayer: `O God, You filled Saint John of God\nwith a spirit of compassion\nso that he might offer charity to the sick and the poor.\nGrant that by following his example\nwe may deserve to be counted among the elect in Your kingdom.\nThrough Christ our Lord.\nAmen.`
  },
  "03-17": {
    name: "Saint Patrick",
    subtitle: "Apostle and Patron of Ireland",
    type: "Optional Memorial",
    bio: `Saint Patrick (387–461 AD) was a Romano-British Christian missionary and the most generally recognized patron saint of Ireland. At sixteen, he was kidnapped by Irish pirates and taken to Ireland as a slave. After six years of captivity he escaped, entered the priesthood, and returned to Ireland as a bishop to evangelize the people who had once enslaved him.\n\nHe used the three-leaf shamrock to explain the Holy Trinity. His writings — the Confession and the Letter to Coroticus — are among the earliest documents from the medieval Irish church.`,
    prayer: `Christ with me,\nChrist before me,\nChrist behind me,\nChrist in me,\nChrist beneath me,\nChrist above me,\nChrist in the heart of every man who thinks of me,\nChrist in the mouth of everyone who speaks of me.\nAmen.\n— Saint Patrick's Breastplate`
  },
  "03-19": {
    name: "Saint Joseph",
    subtitle: "Husband of the Virgin Mary, Patron of the Universal Church",
    type: "Solemnity",
    bio: `Saint Joseph was the virginal husband of the Virgin Mary and the foster father of Jesus Christ. A descendant of King David, he was a humble carpenter in Nazareth who obeyed God's will without question — accepting the divine origin of the Child, leading the Holy Family to safety in Egypt, and raising the Son of God in the Jewish faith.\n\nPope Francis dedicated 2021 as the Year of Saint Joseph and wrote the apostolic exhortation Patris Corde in his honor, calling him a father who accepted, tenderly loved, creatively courageous, working, and always in the shadows.`,
    prayer: `Hail, Guardian of the Redeemer,\nSpouse of the Blessed Virgin Mary.\nTo you God entrusted His only Son;\nin you Mary placed her trust;\nwith you Christ became man.\nBlessed Joseph, to us too,\nshow yourself a father\nand guide us in the path of life.\nAmen.\n— Pope Francis`
  },
  "03-25": {
    name: "The Annunciation of the Lord",
    subtitle: "Solemnity — The Angel Gabriel appears to Mary",
    type: "Solemnity",
    bio: `The Solemnity of the Annunciation commemorates the visit of the Angel Gabriel to the Virgin Mary in Nazareth. Gabriel announced that Mary had been chosen to conceive and bear the Son of God through the power of the Holy Spirit.\n\nMary's response — 'Behold, I am the handmaid of the Lord; let it be done to me according to your word' — is the model of perfect faith. This moment, the Incarnation of the Son of God, is the pivotal event of all human history, celebrated nine months before December 25.`,
    prayer: `The Angelus:\n\nThe Angel of the Lord declared unto Mary;\nAnd she conceived of the Holy Spirit.\nHail Mary...\n\nBehold the handmaid of the Lord;\nBe it done unto me according to Your Word.\nHail Mary...\n\nAnd the Word was made flesh;\nAnd dwelt among us.\nHail Mary...\n\nPray for us, O Holy Mother of God,\nthat we may be made worthy of the promises of Christ.\nAmen.`
  },
  "04-02": {
    name: "Saint Francis of Paola",
    subtitle: "Founder of the Minims",
    type: "Optional Memorial",
    bio: `Saint Francis of Paola (1416–1507) was an Italian friar and mystic from Paola in Calabria. He founded the Order of Minims in 1435 and was renowned for extraordinary miracles. He was summoned to the deathbed of King Louis XI of France and remained there for the rest of his life. His motto was 'Charitas' (Charity). He was canonized in 1519.`,
    prayer: `O God, You raised up Saint Francis of Paola\nfrom the humblest beginnings\nto the heights of sanctity.\nThrough his intercession,\ngrant that we may always seek the least place\nand finally attain the glory of Your kingdom.\nThrough Christ our Lord.\nAmen.`
  },
  "04-04": {
    name: "Saint Isidore of Seville",
    subtitle: "Bishop and Doctor of the Church",
    type: "Optional Memorial",
    bio: `Saint Isidore of Seville (560–636) was Archbishop of Seville for over three decades. His Etymologiae, a comprehensive encyclopedia of all human knowledge, remained a standard reference work in European schools for a thousand years. He was declared a Doctor of the Church in 1722.`,
    prayer: `O God, who through Saint Isidore\nbestowed on Your Church\nthe treasures of learning and wisdom,\ngrant that through his intercession\nwe may always seek You as the source of all truth.\nThrough Christ our Lord.\nAmen.`
  },
  "04-11": {
    name: "Saint Stanislaus",
    subtitle: "Bishop and Martyr, Patron of Poland",
    type: "Memorial",
    bio: `Saint Stanislaus (1030–1079) was Bishop of Kraków who publicly condemned the immoral lifestyle of King Bolesław II and was murdered by the king himself while celebrating Mass. He was canonized in 1253 and is venerated as one of the chief patrons of Poland.`,
    prayer: `God of mercy,\nYou made Saint Stanislaus a champion of the Church's rights.\nAt his intercession, help us to endure injustice\nand defend the dignity of all Your people.\nThrough Christ our Lord.\nAmen.`
  },
  "04-23": {
    name: "Saint George",
    subtitle: "Martyr, Patron of England",
    type: "Optional Memorial",
    bio: `Saint George (died c. 303) was a Roman soldier from Cappadocia who became a Christian martyr under Emperor Diocletian. He is patron saint of England, Ethiopia, Georgia, and Portugal. His red cross on a white background forms the flag of England and is part of the Union Jack.`,
    prayer: `Lord God, You gave Saint George the courage\nto confess You before men and to face death with faith.\nHelp us to follow his example of bravery and fidelity\nso that we may share in the victory of Christ.\nThrough Christ our Lord.\nAmen.`
  },
  "04-24": {
    name: "Saint Fidelis of Sigmaringen",
    subtitle: "Priest and Martyr",
    type: "Optional Memorial",
    bio: `Saint Fidelis (1578–1622) was a German Capuchin priest martyred by Calvinist soldiers in Switzerland while preaching. A lawyer turned priest, he was known as 'the poor man's lawyer' and 'the advocate of the poor.' He was the first martyr canonized by the Congregation for the Propagation of the Faith.`,
    prayer: `Lord, You gave Saint Fidelis\nthe fire of great charity and zeal for souls.\nGrant by his intercession\nthat, rooted and grounded in love,\nwe may know the love of Christ\nthat surpasses all knowledge.\nAmen.`
  },
  "04-28": {
    name: "Saint Louis de Montfort",
    subtitle: "Priest, Apostle of True Devotion to Mary",
    type: "Optional Memorial",
    bio: `Saint Louis de Montfort (1673–1716) was a French missionary priest and one of the greatest apostles of Marian devotion. His book True Devotion to the Blessed Virgin Mary profoundly influenced Saint John Paul II, who chose the Marian motto Totus Tuus from it. He was canonized in 1947.`,
    prayer: `O Jesus living in Mary,\ncome and live in Your servants,\nin the spirit of Your holiness,\nin the fullness of Your power,\nin the perfection of Your ways.\nAmen.\n— Saint Louis de Montfort`
  },
  "04-29": {
    name: "Saint Catherine of Siena",
    subtitle: "Virgin and Doctor of the Church, Co-Patron of Europe",
    type: "Memorial",
    bio: `Saint Catherine of Siena (1347–1380) was the twenty-fourth child of a Sienese dyer who became one of the most influential women in the history of the Church. She persuaded Pope Gregory XI to return the papacy from Avignon to Rome, received the stigmata, and wrote the mystical classic The Dialogue. Declared Doctor of the Church in 1970.`,
    prayer: `O God, who enkindled in the heart of the Virgin Saint Catherine of Siena\na burning love for the Passion of Your Son\nand for the good of souls,\ngrant us, through her intercession,\nthat we may be ablaze with charity for You and our neighbor.\nAmen.`
  },
  "04-30": {
    name: "Saint Pius V",
    subtitle: "Pope, Reformer of the Church",
    type: "Optional Memorial",
    bio: `Saint Pius V (1504–1572) was one of the greatest reform popes of the Counter-Reformation. He implemented the decrees of the Council of Trent with extraordinary energy, issued the Roman Catechism, standardized the Mass (the Tridentine Mass), reformed the breviary, and excommunicated Queen Elizabeth I. He organized the Holy League that won the Battle of Lepanto (1571), attributing the victory to the Rosary.`,
    prayer: `O God, who in Your providential care\nwilled to defend Your Church\nthrough the zeal of Pope Saint Pius V,\ngrant that we may persevere in his footsteps\nuntil we reach the eternal vision of your glory.\nAmen.`
  },
  "05-01": {
    name: "Saint Joseph the Worker",
    subtitle: "Patron of Workers and the Universal Church",
    type: "Optional Memorial",
    bio: `The feast of Saint Joseph the Worker was instituted by Pope Pius XII in 1955 to coincide with International Workers' Day. It honors Saint Joseph as the model of all workers and as the father who taught Jesus the craft of carpentry. All honest work is holy — a participation in God's creative activity. Pope Francis wrote that Joseph reminds us that those in the shadows can play an incomparable role in salvation history.`,
    prayer: `O Saint Joseph, guardian of the Holy Family,\npatron of all who labor,\nobtain for us the grace to work\nwith the spirit of service and dedication\nthat you showed in caring for Jesus and Mary.\nHelp us to see our daily work as a vocation.\nAmen.`
  },
  "05-02": {
    name: "Saint Athanasius",
    subtitle: "Bishop and Doctor of the Church, Defender of Orthodoxy",
    type: "Memorial",
    bio: `Saint Athanasius (296–373) was Archbishop of Alexandria and the most fierce defender of Nicene orthodoxy against Arianism — the heresy that denied the full divinity of Christ. He was exiled five times by four emperors for his refusal to compromise, earning the title Athanasius contra mundum — Athanasius against the world.\n\nHis treatise On the Incarnation is considered one of the greatest works of Christian theology. His famous phrase summarizes the entire Christian faith: 'God became man so that man might become God.'`,
    prayer: `O God, who gave Saint Athanasius\ngrace to maintain the divinity of Your Son\nand courage to resist the whole world in Your name,\ngrant us, through his intercession,\nstrength to hold fast the faith he taught.\nThrough Christ our Lord.\nAmen.`
  },
  "05-03": {
    name: "Saints Philip and James",
    subtitle: "Apostles of the Lord",
    type: "Feast",
    bio: `Saints Philip and James the Less were both Apostles of Jesus. Philip was from Bethsaida, called directly by Jesus (John 1:43), and brought Nathanael to Christ. He asked Jesus 'Lord, show us the Father' at the Last Supper, prompting the Lord's beautiful reply about His union with the Father (John 14:8-9).\n\nJames the Less (to distinguish him from James, son of Zebedee) was the son of Alphaeus and is traditionally identified with James, the brother of the Lord, first Bishop of Jerusalem. He wrote the Letter of James and was thrown from the Temple pinnacle and beaten to death around 62 AD.`,
    prayer: `O God, who gladden us each year\nwith the feast of the Apostles Philip and James,\ngrant us, through their prayers,\na share in the Passion and Resurrection\nof Your Only Begotten Son,\nso that we may merit to behold You for eternity.\nAmen.`
  },
  "05-10": {
    name: "Saint Damien of Molokai",
    subtitle: "Priest, Apostle of the Lepers",
    type: "Optional Memorial",
    bio: `Saint Damien (1840–1889) was a Belgian Catholic priest of the Congregation of the Sacred Hearts who volunteered to minister to patients with leprosy isolated on the island of Molokai in Hawaii. He spent sixteen years there, building churches, schools, and a hospital, and eventually contracted leprosy himself.\n\nHis self-sacrifice attracted worldwide attention and transformed attitudes toward leprosy patients. He was canonized by Pope Benedict XVI in 2009. Mahatma Gandhi cited him as one of the people who had most influenced his life.`,
    prayer: `Lord God, You inspired Saint Damien\nto abandon himself to the service of the suffering.\nBy his intercession, strengthen our love\nfor the poor and the sick\nand help us to see Your Son in every person in need.\nAmen.`
  },
  "05-12": {
    name: "Saints Nereus and Achilleus",
    subtitle: "Martyrs of Rome",
    type: "Optional Memorial",
    bio: `Saints Nereus and Achilleus were Roman soldiers who converted to Christianity, refused to continue their military service, and were martyred around 100 AD. Their tomb in the Catacomb of Domitilla was one of the most visited shrines in early Christian Rome. An early inscription describes them as soldiers who 'threw away their weapons, having confessed the faith of Christ.'`,
    prayer: `O God, who gave Saints Nereus and Achilleus\nthe grace to profess their faith in Christ\neven to the shedding of their blood,\ngrant us, by their intercession,\nthe courage to follow their example.\nAmen.`
  },
  "05-13": {
    name: "Our Lady of Fatima",
    subtitle: "Our Lady of the Most Holy Rosary of Fatima",
    type: "Optional Memorial",
    bio: `On May 13, 1917, the Virgin Mary appeared for the first time to three shepherd children in Fatima, Portugal: Lucia dos Santos (10), Francisco (9), and Jacinta Marto (7). She asked for daily prayer of the Rosary for world peace and appeared six times through October 13, 1917, when the Miracle of the Sun was witnessed by 70,000 people. Francisco and Jacinta were canonized by Pope Francis in 2017.`,
    prayer: `O Most Holy Trinity,\nI adore You profoundly.\nI offer You the most precious Body, Blood,\nSoul and Divinity of Jesus Christ\nin reparation for outrages against Him.\nAnd through the infinite merits of His Sacred Heart\nand the Immaculate Heart of Mary,\nI beg of You the conversion of poor sinners.\n— Prayer of the Angel of Fatima`
  },
  "05-14": {
    name: "Saint Matthias",
    subtitle: "Apostle, Chosen to Replace Judas",
    type: "Feast",
    bio: `Saint Matthias was chosen by lot to replace Judas Iscariot among the Twelve Apostles (Acts 1:15-26). He had been a follower of Jesus from His baptism to His Ascension. Tradition places his missionary work in Judea and his death as a martyr around 80 AD.`,
    prayer: `O God, who associated Saint Matthias\nto the College of Apostles,\ngrant us, through his intercession,\nthat we may rejoice forever\nin the love of the One\nwhom he was chosen to preach.\nAmen.`
  },
  "05-20": {
    name: "Saint Bernardine of Siena",
    subtitle: "Priest, Apostle of the Holy Name of Jesus",
    type: "Optional Memorial",
    bio: `Saint Bernardine of Siena (1380–1444) was an Italian Franciscan friar and one of the greatest popular preachers of the 15th century. He popularized devotion to the Holy Name of Jesus, often displaying a tablet with the monogram IHS (the first three letters of Jesus in Greek) at his sermons. Despite his fragile health, he walked thousands of miles across Italy preaching to enormous crowds.`,
    prayer: `Lord Jesus,\nYour Name is above every name.\nThrough the intercession of Saint Bernardine,\ngrant that all who call upon Your Holy Name\nmay obtain mercy and strength.\nAmen.`
  },
  "05-21": {
    name: "Saint Christopher Magallanes and Companions",
    subtitle: "Martyrs of Mexico",
    type: "Optional Memorial",
    bio: `Between 1915 and 1937, during the Cristero War in Mexico, 25 priests and laymen were martyred for the faith. Christopher Magallanes was a parish priest who established schools and defended the rights of indigenous people. He was arrested on false charges of rebellion and shot without trial, forgiving his executioners and distributing his possessions as alms. They were canonized by Pope John Paul II in 2000.`,
    prayer: `O God, who sustained the faith in Mexico\nthrough the witness of Saints Christopher Magallanes\nand his companions,\ngrant that, following their example,\nwe may faithfully serve Your Church\neven unto death.\nAmen.`
  },
  "05-22": {
    name: "Saint Rita of Cascia",
    subtitle: "Widow, Patron of Impossible Causes",
    type: "Optional Memorial",
    bio: `Saint Rita of Cascia (1381–1457) is known as the Patron Saint of Impossible Causes. After eighteen years of difficult marriage and the deaths of her husband and sons, she entered the Augustinian monastery at Cascia. She received a thorn from Christ's crown embedded in her forehead, a wound she bore until her death. Countless miracles have been reported at her tomb.`,
    prayer: `O Holy Patroness of those in need,\nSaint Rita, whose pleadings before our Divine Lord\nare almost irresistible,\nassist me in my present and urgent petition.\nIn return I promise to honor thee\nand to sing thy praises forever.\nAmen.`
  },
  "05-25": {
    name: "Saint Bede the Venerable",
    subtitle: "Priest and Doctor of the Church, Father of English History",
    type: "Optional Memorial",
    bio: `Saint Bede (673–735) was an English Benedictine monk at Jarrow who never traveled more than 70 miles from his monastery — yet produced one of the most important bodies of work in early medieval Europe. His Ecclesiastical History of the English People earned him the title 'Father of English History.' He was the first person to date history before and after Christ (BC/AD). Declared Doctor of the Church in 1899.`,
    prayer: `O God, who illumined Your Church\nthrough the learning of the priest Saint Bede,\ngrant that Your servants\nmay always be enlightened by his wisdom\nand assisted by his merits.\nAmen.`
  },
  "05-26": {
    name: "Saint Philip Neri",
    subtitle: "Priest, Apostle of Rome, Father of the Oratory",
    type: "Memorial",
    bio: `Saint Philip Neri (1515–1595), known as the Apostle of Rome, spent sixty years transforming the city through his contagious joy, humor, and holiness. He founded the Congregation of the Oratory in 1575, which gave birth to the musical form of the oratorio. Famous for his wit and practical jokes, his motto was: 'A joyful heart is more easily made perfect than a downcast one.' Canonized in 1622.`,
    prayer: `O God, who never cease to bestow the glory of holiness\non the flock You gather to Yourself,\ngrant that the Spirit, who made Saint Philip Neri\na minister of Your salvation,\nmay make us witnesses of Your charity.\nThrough Christ our Lord.\nAmen.`
  },
  "05-27": {
    name: "Saint Augustine of Canterbury",
    subtitle: "Bishop, Apostle of the English",
    type: "Optional Memorial",
    bio: `Saint Augustine of Canterbury (died c. 604) was a Benedictine monk sent by Pope Gregory the Great to evangelize England in 596 AD. He converted King Ethelbert of Kent and established the first cathedral at Canterbury, becoming its first archbishop. His success in England laid the foundation for the entire Catholic Church in the British Isles.`,
    prayer: `Lord God, who through Saint Augustine of Canterbury\nbrought the knowledge of Christ to the English people,\ngrant that the fruits of his work\nmay remain plentiful in Your Church.\nAmen.`
  },
  "05-31": {
    name: "The Visitation of the Blessed Virgin Mary",
    subtitle: "Mary visits her cousin Elizabeth",
    type: "Feast",
    bio: `The Feast of the Visitation commemorates the visit of the Virgin Mary, already pregnant with Jesus, to her cousin Elizabeth, who was pregnant with John the Baptist (Luke 1:39-56). When Mary greeted Elizabeth, John leapt in the womb and Elizabeth cried: 'Blessed are you among women!' Mary responded with the Magnificat. This feast celebrates Mary as the first Ark of the New Covenant, carrying Christ to the world.`,
    prayer: `My soul proclaims the greatness of the Lord;\nmy spirit rejoices in God my Savior,\nfor He has looked with favor on His lowly servant.\nFrom this day all generations will call me blessed:\nthe Almighty has done great things for me,\nand holy is His Name.\n— The Magnificat`
  },
  "06-01": {
    name: "Saint Justin Martyr",
    subtitle: "Philosopher and Martyr",
    type: "Memorial",
    bio: `Saint Justin Martyr (100–165) was one of the earliest Christian apologists. A pagan philosopher, he converted to Christianity around 130 AD, seeing it as the fulfillment of all philosophy. His Apologies and Dialogue with Trypho are the earliest examples of Christian philosophical theology. He was beheaded in Rome around 165 AD. His writings give us precious evidence of what the Mass looked like in the 2nd century.`,
    prayer: `O God, through the folly of the Cross\nYou were pleased to give Saint Justin\na profound knowledge of Jesus Christ.\nBy his intercession, grant that we may find no glory\nexcept in the Cross of Our Lord Jesus Christ.\nAmen.`
  },
  "06-03": {
    name: "Saints Charles Lwanga and Companions",
    subtitle: "Martyrs of Uganda",
    type: "Memorial",
    bio: `On June 3, 1886, Charles Lwanga and twenty-one companions were martyred by Kabaka Mwanga II of Buganda for refusing to renounce their faith. The young men, ranging from age 13 to 30, walked 37 miles singing hymns before being burned alive. Their deaths sparked massive growth of Christianity in Uganda. They were canonized by Pope Paul VI in 1964.`,
    prayer: `Lord God of our fathers,\nwho brought Saint Charles Lwanga and his companions\nthrough the sufferings of martyrdom\nto the victory of eternal life,\ngrant us through their intercession\nthat we may be steadfast in our faith.\nAmen.`
  },
  "06-05": {
    name: "Saint Boniface",
    subtitle: "Bishop and Martyr, Apostle of Germany",
    type: "Memorial",
    bio: `Saint Boniface (672–754) was an English Benedictine monk who became the principal evangelizer of Germanic tribes. His most dramatic act was felling the sacred Oak of Thor at Geismar. He established the Church across Germany and founded the great abbey of Fulda. At age 80, he was martyred by pagan Frisians on June 5, 754, dying while reading the Gospels.`,
    prayer: `O God, who appointed Saint Boniface\nApostle of the German peoples,\ngrant through his intercession\nthat we may courageously profess our faith\nand persevere in doing good.\nAmen.`
  },
  "06-09": {
    name: "Saint Ephrem",
    subtitle: "Deacon and Doctor of the Church",
    type: "Optional Memorial",
    bio: `Saint Ephrem (306–373) was a Syrian deacon, poet, and theologian from Nisibis (modern Turkey). He is the most significant Syriac-language writer in Christian history, composing thousands of hymns and homilies. Called the 'Harp of the Holy Spirit,' his hymns were used to combat heresy by teaching orthodox theology through beautiful poetry and music. He was declared Doctor of the Church in 1920.`,
    prayer: `O God, who filled Saint Ephrem\nwith the Holy Spirit\nto sing the praises of Christ Your Son,\ngrant that we may follow his example\nand worship You in joy.\nAmen.`
  },
  "06-11": {
    name: "Saint Barnabas",
    subtitle: "Apostle and Missionary Companion of Saint Paul",
    type: "Memorial",
    bio: `Saint Barnabas was a Levite from Cyprus who sold his land and gave the proceeds to the Jerusalem community. He introduced the converted Paul to the suspicious Apostles and vouched for him. He and Paul made the first missionary journey through Cyprus and Asia Minor and established the church at Antioch, where believers were first called Christians.`,
    prayer: `O God, who decreed that Saint Barnabas,\nfull of faith and the Holy Spirit,\nshould be set apart to work for the conversion of nations,\ngrant that the Gospel which he proclaimed\nmay be faithfully proclaimed by word and deed.\nAmen.`
  },
  "06-13": {
    name: "Saint Anthony of Padua",
    subtitle: "Priest and Doctor of the Church, Patron of Lost Things",
    type: "Memorial",
    bio: `Saint Anthony of Padua (1195–1231) was a Portuguese Franciscan friar and one of the most beloved saints in the Church. He became the greatest preacher of the 13th century. Pope Gregory IX called him the 'Ark of the Testament.' He died at 35 and was canonized just one year later — one of the fastest canonizations in Church history. He is invoked as patron of lost items and the poor.`,
    prayer: `O Holy Saint Anthony, gentlest of Saints,\nyour love for God and charity for His creatures\nmade you worthy to possess miraculous powers.\nObtain for me the favor I seek.\nAmen.`
  },
  "06-21": {
    name: "Saint Aloysius Gonzaga",
    subtitle: "Religious, Patron of Youth",
    type: "Memorial",
    bio: `Saint Aloysius Gonzaga (1568–1591) renounced his hereditary title as Marquess of Castiglione to enter the Jesuits at age 18. During a plague in Rome in 1591, he devoted himself to caring for the sick and contracted the illness himself. He died at 23, never ordained. Patron of Catholic youth since 1926.`,
    prayer: `O Holy Aloysius, adorned with angelic virtue,\nI commend to you the chastity of my soul and body.\nObtain for me the grace to imitate\nyour chastity and innocence.\nAmen.`
  },
  "06-22": {
    name: "Saints Thomas More and John Fisher",
    subtitle: "Martyrs, Patrons of Politicians and Bishops",
    type: "Optional Memorial",
    bio: `Saints Thomas More and John Fisher were both martyred in 1535 for refusing to acknowledge Henry VIII as Supreme Head of the Church of England. More, the Lord Chancellor, said at his execution: 'I die the king's good servant, but God's first.' Fisher was the only English bishop to refuse the oath. They were canonized together in 1935.`,
    prayer: `O God, who in martyrdom\nhave given the supreme witness of truth,\ngrant that we may confirm by the witness of our life\nthe faith we profess with our lips.\nThrough Christ our Lord.\nAmen.`
  },
  "06-24": {
    name: "The Nativity of Saint John the Baptist",
    subtitle: "The Birthday of the Forerunner of the Lord",
    type: "Solemnity",
    bio: `The Nativity of Saint John the Baptist is one of only three birthdays celebrated in the Roman Rite. John was filled with the Holy Spirit from his mother's womb, leapt at the arrival of Mary carrying Jesus, preached repentance, baptized in the Jordan, and was beheaded by Herod Antipas. Jesus called him 'the greatest of all men born of women.'`,
    prayer: `O God, who raised up John the Baptist\nto make ready a nation fit for Christ the Lord,\ngive Your people the grace of spiritual joys\nand direct the minds of all the faithful\ninto the way of salvation and peace.\nAmen.`
  },
  "06-27": {
    name: "Saint Cyril of Alexandria",
    subtitle: "Bishop and Doctor of the Church",
    type: "Optional Memorial",
    bio: `Saint Cyril of Alexandria (376–444) was Patriarch of Alexandria and the most important theologian of the 5th century Council of Ephesus (431), at which Mary was declared Theotokos (Mother of God). He was a fierce opponent of Nestorius, who denied the unity of Christ's divine and human natures. His theological work on the Incarnation remains foundational to Christian doctrine.`,
    prayer: `O God, who made Saint Cyril of Alexandria\nan invincible champion of the divine motherhood\nof the Blessed Virgin Mary,\ngrant that we who believe she is truly the Mother of God\nmay be saved by the Incarnate Word.\nAmen.`
  },
  "06-28": {
    name: "Saint Irenaeus",
    subtitle: "Bishop and Doctor of the Church",
    type: "Memorial",
    bio: `Saint Irenaeus of Lyon (130–202) was born in Smyrna and as a child heard Saint Polycarp, who had known Saint John the Apostle. He became Bishop of Lyon and wrote Against Heresies, the first great refutation of Gnosticism. He articulated apostolic succession and the canonical Scriptures as safeguards of faith. His motto: 'The glory of God is man fully alive.'`,
    prayer: `O God, who called Saint Irenaeus\nto confirm true doctrine and the peace of the Church,\ngrant us, through his intercession,\nto renew our faith in Your living Word\nwhich alone leads to eternal life.\nAmen.`
  },
  "06-29": {
    name: "Saints Peter and Paul",
    subtitle: "Apostles, Pillars of the Church",
    type: "Solemnity",
    bio: `The Solemnity of Saints Peter and Paul celebrates the two great pillars of the Church, both martyred in Rome under Nero around 64–68 AD. Peter — the fisherman who became the Rock — was crucified upside down on Vatican Hill. Paul — the persecutor transformed by Christ — was beheaded on the Ostian Way. Together they form the foundation of the Church in Rome.`,
    prayer: `O God, who on the Solemnity of the Apostles Peter and Paul\ngive us the joy of this feast day,\ngrant that Your Church\nmay in all things follow the teaching\nof those through whom she received\nthe beginnings of right religion.\nThrough Christ our Lord.\nAmen.`
  },
  "07-03": {
    name: "Saint Thomas",
    subtitle: "Apostle, Patron of India",
    type: "Feast",
    bio: `Saint Thomas the Apostle is famous for his doubts about the Resurrection and his profound confession of faith when he saw the risen Christ: 'My Lord and my God!' (John 20:28) — the most explicit declaration of Christ's divinity in the Gospels.\n\nAccording to tradition, Thomas brought the Gospel to India, where the ancient Syro-Malabar and Syro-Malankara Churches trace their origins to him. He is believed to have been martyred near Chennai (Madras) around 72 AD. The Mar Thoma Christians of Kerala have maintained an unbroken tradition of faith for nearly 2,000 years.`,
    prayer: `Almighty and everliving God,\nwho strengthened Your Apostle Thomas\nwith sure and certain faith in Your Son's Resurrection,\ngrant that through his intercession\nwe too may be so firmly established in faith\nas to become the temple of Your Spirit.\nAmen.`
  },
  "07-04": {
    name: "Saint Elizabeth of Portugal",
    subtitle: "Queen, Tertiary Franciscan",
    type: "Optional Memorial",
    bio: `Saint Elizabeth of Portugal (1271–1336) was Queen of Portugal and granddaughter of Saint Elizabeth of Hungary. Despite a difficult marriage to King Denis, she maintained her spiritual life and was famous for her extraordinary charity to the poor. After her husband's death she became a Franciscan tertiary. The famous 'miracle of the roses' is attributed to her intercession.`,
    prayer: `O God, who adorned Saint Elizabeth\nwith a wonderful love of the poor\nand dedicated herself to You in religious life,\ngrant us, through her example and intercession,\nthat we may seek You above all things\nand serve You in the poor.\nAmen.`
  },
  "07-11": {
    name: "Saint Benedict",
    subtitle: "Abbot, Patron of Europe, Father of Western Monasticism",
    type: "Memorial",
    bio: `Saint Benedict of Nursia (480–547) is the father of Western monasticism and the patron of Europe. His Rule for Monks — a masterpiece of moderation, balance, and spiritual wisdom — has governed monastic life for 1,500 years and influenced the entire culture of the Christian West.\n\nHis motto, Ora et Labora (Pray and Work), expresses the Benedictine vision of integrated human life. His 'school of the Lord's service' preserved classical learning during the barbarian invasions and laid the cultural foundations of European civilization. Declared co-patron of Europe by Pope Paul VI in 1964.`,
    prayer: `O God, who made Saint Benedict an outstanding guide\nin the school of Your service,\ngrant we pray, that putting nothing before love of You,\nwe may hasten with a loving heart\nalong the way of Your commands.\nAmen.`
  },
  "07-14": {
    name: "Saint Kateri Tekakwitha",
    subtitle: "Virgin, Lily of the Mohawks, First Native American Saint",
    type: "Memorial",
    bio: `Saint Kateri Tekakwitha (1656–1680) was a Mohawk-Algonquin woman from upstate New York who converted to Catholicism at age 20 against strong opposition from her tribe. She fled to the Christian community at Kahnawake, Quebec, where she lived an extraordinary life of prayer, penance, and charity.\n\nShe died at 24, and witnesses reported that her face, disfigured by smallpox, became beautiful and radiant at the moment of her death. She was canonized by Pope Benedict XVI in 2012 — the first Native American saint.`,
    prayer: `O God, who called the virgin Saint Kateri Tekakwitha\nto shine among the Native peoples of North America\nas an example of purity and prayer,\ngrant us, through her intercession,\nto follow Christ and love Him above all things.\nAmen.`
  },
  "07-15": {
    name: "Saint Bonaventure",
    subtitle: "Bishop and Doctor of the Church, Seraphic Doctor",
    type: "Memorial",
    bio: `Saint Bonaventure (1221–1274) was an Italian Franciscan theologian and one of the greatest minds of the medieval Church. As Minister General of the Franciscans, he reformed and unified the order after a period of conflict. His mystical theology, especially The Soul's Journey Into God, combines profound intellectual rigor with warm devotion. He died during the Second Council of Lyon in 1274.`,
    prayer: `O God, who joined holy learning to perfect virtue\nin Your Bishop Saint Bonaventure,\ngrant that, inspired by his teaching,\nwe may continually grow in love of truth\nand in the pursuit of peace.\nAmen.`
  },
  "07-16": {
    name: "Our Lady of Mount Carmel",
    subtitle: "Queen and Beauty of Carmel",
    type: "Optional Memorial",
    bio: `The feast of Our Lady of Mount Carmel honors Mary's special patronage of the Carmelite Order, founded on Mount Carmel in the Holy Land in the 12th century. It is associated with the tradition of the Brown Scapular — given by Mary to Saint Simon Stock in 1251 with the promise that whoever dies wearing it will not suffer eternal fire.\n\nThe Carmelite tradition sees Mary as the model of contemplative prayer and the embodiment of Carmel's spirituality. This feast invites all Christians to deepen their Marian devotion and their commitment to prayer.`,
    prayer: `O Beautiful Flower of Carmel,\nmost fruitful Vine,\nSplendor of Heaven,\nholy and singular,\nwho brought forth the Son of God,\nstill ever remaining a pure virgin,\nassist us in our necessity.\nO Star of the Sea, help and protect us.\nAmen.`
  },
  "07-22": {
    name: "Saint Mary Magdalene",
    subtitle: "Apostle to the Apostles",
    type: "Feast",
    bio: `Saint Mary Magdalene was one of the most devoted followers of Jesus. She had been freed from seven demons (Luke 8:2), stood at the foot of the Cross, was present at the burial, and was the first witness of the Resurrection (John 20:1-18). The risen Christ appeared to her first and sent her to tell the Apostles — giving her the title 'Apostle to the Apostles.'\n\nPope Francis elevated her feast from a Memorial to a Feast in 2016, recognizing her singular role in the history of salvation. Her identification with the sinful woman who anointed Jesus' feet is a medieval tradition not supported by Scripture.`,
    prayer: `O God, whose Only Begotten Son\nentrusted Mary Magdalene before all others\nwith announcing the great joy of the Resurrection,\ngrant us, through her intercession,\nthat we may proclaim the living Christ\nand come to see You face to face.\nAmen.`
  },
  "07-23": {
    name: "Saint Bridget of Sweden",
    subtitle: "Religious, Co-Patron of Europe",
    type: "Optional Memorial",
    bio: `Saint Bridget of Sweden (1303–1373) was a Swedish mystic, wife, and mother of eight children before her husband's death led her to found the Bridgettine Order. She received numerous revelations about the Passion of Christ, preserved in her Revelations. She spent many years in Rome advocating for the return of the papacy from Avignon and the reform of the Church. Co-patron of Europe since 1999.`,
    prayer: `O God, who revealed heavenly secrets\nto Saint Bridget as she meditated\non the Passion of Your Son,\ngrant that Your servants\nmay be found worthy to behold Your glory.\nThrough Christ our Lord.\nAmen.`
  },
  "07-25": {
    name: "Saint James",
    subtitle: "Apostle, Son of Zebedee, Patron of Spain",
    type: "Feast",
    bio: `Saint James the Greater was one of the first disciples called by Jesus, along with his brother John. He was among the inner circle of Apostles present at the Transfiguration, the Agony in the Garden, and the raising of Jairus's daughter. He was the first Apostle to be martyred, beheaded by King Herod Agrippa I around 44 AD (Acts 12:2).\n\nTradition holds that James preached in Spain and that his body was miraculously translated to Santiago de Compostela, which became one of the greatest pilgrimage sites in the world. The Camino de Santiago (the Way of Saint James) is still walked by hundreds of thousands annually.`,
    prayer: `O God, who consecrated Saint James\nwith the first palm of martyrdom among the Apostles,\ngrant that Your Church may be strengthened\nby his confession of faith\nand sustained by his patronage.\nThrough Christ our Lord.\nAmen.`
  },
  "07-26": {
    name: "Saints Joachim and Anne",
    subtitle: "Parents of the Blessed Virgin Mary",
    type: "Memorial",
    bio: `Saints Joachim and Anne are the parents of the Virgin Mary and the grandparents of Jesus Christ — making them the most honored grandparents in human history. Their names do not appear in the canonical Gospels but come from the 2nd-century Protoevangelium of James.\n\nAccording to tradition, they were childless for many years and prayed earnestly for a child. An angel announced to each of them that their prayer had been heard, and Mary was conceived — by ordinary human generation — in a state of special grace (the Immaculate Conception).\n\nThey are patrons of grandparents, parents, and families.`,
    prayer: `God our Father,\nYou chose Saints Joachim and Anne\nfrom all generations to be the parents\nof the mother of Your incarnate Son.\nGrant, through their prayers,\nthat we may always seek to do Your holy will.\nAmen.`
  },
  "07-29": {
    name: "Saint Martha",
    subtitle: "Disciple of the Lord, Patron of Hospitality",
    type: "Memorial",
    bio: `Saint Martha was one of Jesus' closest friends, along with her sister Mary and brother Lazarus. Her home in Bethany was a place Jesus frequently visited and loved. After the death of Lazarus, it was Martha who went to meet Jesus with her great act of faith: 'I believe that you are the Christ, the Son of God, who is coming into the world' (John 11:27) — one of the most powerful confessions of faith in the Gospels.\n\nPope Francis elevated her feast from an Optional Memorial to a Memorial in 2021, honoring her as a model of active service and deep faith.`,
    prayer: `O God, at whose feet Saint Martha\nserved with devoted love,\ngrant that we too\nmay serve You faithfully in our brothers and sisters\nand merit to be satisfied by Your presence.\nAmen.`
  },
  "07-31": {
    name: "Saint Ignatius of Loyola",
    subtitle: "Priest, Founder of the Society of Jesus",
    type: "Memorial",
    bio: `Saint Ignatius of Loyola (1491–1556) was a Spanish Basque soldier whose conversion during a long convalescence from battle wounds led him to found the Society of Jesus (Jesuits) in 1540 — today the largest religious order of men in the Catholic Church.\n\nHis Spiritual Exercises — a four-week program of meditation, prayer, and discernment — have transformed millions of lives and are used by people of all backgrounds and faiths. His motto Ad Majorem Dei Gloriam (For the Greater Glory of God) expresses the Jesuit commitment to finding God in all things.\n\nThe Jesuits became the intellectual and missionary vanguard of the Counter-Reformation, establishing universities on every continent and evangelizing Japan, China, India, and the Americas.`,
    prayer: `Take, Lord, and receive all my liberty,\nmy memory, my understanding,\nand my entire will.\nAll I have and call my own.\nWhatever I have or hold,\nYou have given all to me.\nI return it all to You\nand surrender it wholly\nto be governed by Your will.\nGive me only Your love and Your grace.\nWith this I am rich enough\nand ask for nothing more.\nAmen.\n— Prayer of Saint Ignatius`
  },
  "08-01": {
    name: "Saint Alphonsus Liguori",
    subtitle: "Bishop and Doctor of the Church, Patron of Confessors",
    type: "Memorial",
    bio: `Saint Alphonsus Liguori (1696–1787) was a Neapolitan lawyer who became a priest and founded the Congregation of the Most Holy Redeemer (Redemptorists) in 1732 to preach the Gospel to the poorest rural peasants of southern Italy.\n\nHis moral theology, which steered a middle course between rigorism and laxity, transformed the practice of confession and spiritual direction. He wrote over 100 books, including The Glories of Mary and The Practice of the Love of Jesus Christ. Declared Doctor of the Church in 1871 and patron of confessors and moral theologians.`,
    prayer: `O God, who constantly raise up in Your Church\nnew examples of virtue,\ngrant that we may imitate the zeal of Saint Alphonsus\nin the service of the poor\nand attain eternal life.\nThrough Christ our Lord.\nAmen.`
  },
  "08-04": {
    name: "Saint John Vianney",
    subtitle: "Priest, Patron of Parish Priests",
    type: "Memorial",
    bio: `Saint John Vianney (1786–1859), the Curé of Ars, is the patron saint of parish priests and one of the most extraordinary parish priests in the history of the Church. Assigned to the small, spiritually desolate village of Ars, France, he transformed it through his tireless preaching, his extraordinary gift in the confessional, and his heroic penances.\n\nIn the later years of his life, up to 80,000 people a year traveled to Ars for confession. He spent 16–18 hours a day in the confessional. He reportedly suffered physical attacks from the devil for 35 years. His body lies incorrupt in Ars, France.`,
    prayer: `O Almighty and merciful God,\nwho made Saint John Vianney admirable\nin his pastoral zeal and constant prayer,\ngrant, through his intercession and example,\nthat we too may be able to win souls for You\nand attain with them eternal glory.\nThrough Christ our Lord.\nAmen.`
  },
  "08-06": {
    name: "The Transfiguration of the Lord",
    subtitle: "Feast — The Glorification of Christ on Mount Tabor",
    type: "Feast",
    bio: `The Feast of the Transfiguration commemorates the moment when Jesus was transfigured before Peter, James, and John on a high mountain — traditionally identified as Mount Tabor. His face shone like the sun, His clothes became dazzling white, and Moses and Elijah appeared beside Him, speaking of His coming death (Luke 9:28-36).\n\nA voice from a cloud proclaimed: 'This is My beloved Son, with whom I am well pleased; listen to Him.' The disciples fell prostrate in fear. The Transfiguration was a preview of the Resurrection glory and a confirmation of Christ's divine identity for the Apostles before His passion.\n\nThis feast was celebrated in the Eastern Church from the 4th century and was added to the Roman calendar by Pope Callixtus III in 1457 to give thanks for the victory of Belgrade over the Turks — announced on this day.`,
    prayer: `O God, who in the glorious Transfiguration\nof Your Only Begotten Son\nconfirmed the mysteries of faith by the witness of the Fathers,\ngrant that we may hear the voice of Your beloved Son\nand become co-heirs of Your glory.\nThrough Christ our Lord.\nAmen.`
  },
  "08-07": {
    name: "Saint Sixtus II and Companions",
    subtitle: "Pope and Martyrs",
    type: "Optional Memorial",
    bio: `Saint Sixtus II was Pope for only one year (257–258) before being martyred under Emperor Valerian's persecution of the Church. He was seized while celebrating Mass in the catacombs and was immediately beheaded along with four deacons. His deacon Saint Lawrence was martyred four days later. They are commemorated in Eucharistic Prayer I.`,
    prayer: `O God, who consecrated this day\nwith the martyrdom of Pope Saint Sixtus\nand his companions,\ngrant that we may always celebrate their memory\nwith devout service and reverence.\nAmen.`
  },
  "08-08": {
    name: "Saint Dominic",
    subtitle: "Priest, Founder of the Order of Preachers",
    type: "Memorial",
    bio: `Saint Dominic de Guzmán (1170–1221) was a Spanish priest who founded the Order of Preachers (Dominicans) in 1216 — the first religious order specifically founded for preaching and the defense of the faith through intellectual engagement.\n\nHe founded his order specifically to combat the Cathar heresy in southern France, not through force but through example, poverty, and reasoned argument. The Rosary is traditionally attributed to his devotion under Mary's guidance during the Cathar mission.\n\nThe Dominican tradition produced Saint Thomas Aquinas, Saint Albert the Great, Saint Catherine of Siena, and many other intellectual giants. The Dominicans staffed the faculties of theology at Paris, Cologne, and Oxford.`,
    prayer: `O God, let Your Church be renewed\nby the merits of the blessed Confessor Dominic,\nand let it always be supported and guarded by his patronage.\nThrough Christ our Lord.\nAmen.`
  },
  "08-09": {
    name: "Saint Teresa Benedicta of the Cross (Edith Stein)",
    subtitle: "Virgin and Martyr, Co-Patron of Europe",
    type: "Memorial",
    bio: `Saint Teresa Benedicta of the Cross (1891–1942), born Edith Stein, was a German Jewish philosopher, student of Edmund Husserl, and professor who converted to Catholicism in 1922 after reading the autobiography of Saint Teresa of Ávila. She became a Carmelite nun in 1934.\n\nAfter the Nazi invasion of the Netherlands, she was arrested with her sister Rosa and transported to Auschwitz-Birkenau, where she was gassed on August 9, 1942. Her last reported words before deportation were: 'Come, let us go for our people.' She was canonized by Pope John Paul II in 1998 and named co-patron of Europe in 1999.`,
    prayer: `O God, who strengthened Saint Teresa Benedicta\nto imitate the Cross of Christ even to the end,\ngrant, through her intercession,\nthat we too may cling to the Cross\nas our surest support.\nThrough Christ our Lord.\nAmen.`
  },
  "08-10": {
    name: "Saint Lawrence",
    subtitle: "Deacon and Martyr",
    type: "Feast",
    bio: `Saint Lawrence (225–258) was one of the seven deacons of Rome under Pope Saint Sixtus II. When Sixtus was arrested and executed, Lawrence was given three days to gather the treasures of the Church and hand them over to the Roman prefect. Instead, he distributed the Church's wealth to the poor and presented the poor themselves as 'the treasures of the Church.'\n\nHe was condemned to be roasted alive on a gridiron. According to tradition, he said to his torturers after some time: 'I am well done. Turn me over.' This remark has made him the patron saint of comedians. He is commemorated in Eucharistic Prayer I.`,
    prayer: `May the prayer of Saint Lawrence,\nwho was outstanding in his love of God and neighbor,\nadvance Your glory, O Lord,\nand may his intercession be a constant help to us.\nThrough Christ our Lord.\nAmen.`
  },
  "08-11": {
    name: "Saint Clare",
    subtitle: "Virgin, Foundress of the Poor Clares",
    type: "Memorial",
    bio: `Saint Clare of Assisi (1194–1253) was the first woman to write a Rule of Life for a religious community. Inspired by Saint Francis, she fled her noble family at age 18 to embrace radical poverty with Francis at the Portiuncula. Francis cut her hair and gave her a habit, and she founded the Poor Ladies (Poor Clares) at San Damiano.\n\nShe fought for forty years to obtain the 'privilege of poverty' — the right for her community to own absolutely nothing, not even in common. She once drove away Saracen soldiers by holding up the Blessed Sacrament at the convent door. Her body remains incorrupt in Assisi.`,
    prayer: `O God, who led Saint Clare to embrace\nthe poverty and humility of Your Son,\ngrant, through her prayers,\nthat following Christ in poverty of spirit,\nwe may merit to gaze on You in heaven.\nThrough Christ our Lord.\nAmen.`
  },
  "08-13": {
    name: "Saints Pontian and Hippolytus",
    subtitle: "Pope and Priest, Martyrs",
    type: "Optional Memorial",
    bio: `Saints Pontian (Pope, died 235) and Hippolytus (priest and theologian, died 235) died together as martyrs in the Sardinian mines under Emperor Maximinus Thrax — a remarkable story because Hippolytus had been an anti-pope in schism with the Church. Reconciled before their deaths, they were both venerated as martyrs. Their reconciliation is a powerful example of the mercy of God and the unity of the Church.`,
    prayer: `O God, who through the glory of martyrdom\nboth fulfilled the confession of Saints Pontian and Hippolytus\nand restored their unity of mind,\ngrant that, strengthened by their example,\nwe may be steadfast in faith and active in charity.\nAmen.`
  },
  "08-14": {
    name: "Saint Maximilian Kolbe",
    subtitle: "Priest and Martyr, Patron of the Pro-Life Movement",
    type: "Memorial",
    bio: `Saint Maximilian Kolbe (1894–1941) was a Polish Franciscan priest who voluntarily took the place of a condemned stranger — a married man with children — in the starvation bunker at Auschwitz concentration camp. After two weeks without food or water, when he was still alive, he was killed with a lethal injection of carbolic acid on August 14, 1941.\n\nHe had already published millions of religious publications, established a Marian city (Niepokalanów) with nearly 800 religious, and evangelized Japan. He wore his Franciscan habit throughout his imprisonment and brought peace and prayer to all around him in the camp.\n\nPope John Paul II canonized him in 1982, declaring him a 'Martyr of Charity.' He is patron of drug addicts, prisoners, journalists, and the pro-life movement.`,
    prayer: `O Lord, who filled Saint Maximilian Kolbe\nwith the fire of love\nfor the Immaculate Virgin\nand with apostolic zeal for the salvation of souls,\ngrant that through his intercession\nwe may work tirelessly for Your glory.\nAmen.`
  },
  "08-15": {
    name: "The Assumption of the Blessed Virgin Mary",
    subtitle: "Solemnity — Mary taken body and soul into heaven",
    type: "Solemnity",
    bio: `The Solemnity of the Assumption celebrates the dogma defined by Pope Pius XII in 1950: that the Blessed Virgin Mary, having completed her earthly life, was taken up body and soul into heavenly glory.\n\nThis is the most ancient of the Marian feasts and the principal celebration of Mary in the liturgical year. It is one of four Marian dogmas of the Catholic Church: the Immaculate Conception, the Divine Motherhood, the Perpetual Virginity, and the Assumption.\n\nThe Assumption expresses the Christian hope for our own bodily resurrection. What happened to Mary — body and soul in glory — is the destiny of all who are united to her Son. Mary's Assumption is the preview and guarantee of the resurrection of the body promised to all the faithful.`,
    prayer: `O God, who have taken to Yourself\nthe Immaculate Virgin Mary, Mother of Your Son,\nbody and soul in heavenly glory,\ngrant we pray that always attentive\nto the things that are above,\nwe may merit to be sharers of her glory.\nThrough Christ our Lord.\nAmen.`
  },
  "08-20": {
    name: "Saint Bernard of Clairvaux",
    subtitle: "Abbot and Doctor of the Church, Mellifluous Doctor",
    type: "Memorial",
    bio: `Saint Bernard of Clairvaux (1090–1153) was a French Cistercian monk who became one of the most influential figures of the 12th century — not despite leaving the world for the cloister, but through it. He reformed the Cistercian Order, preached the Second Crusade, counseled popes and kings, and wrote masterpieces of mystical theology.\n\nHis commentary on the Song of Songs and his treatise On Loving God remain classics of Christian mysticism. He was the great defender of orthodox theology against the rationalism of Peter Abelard. He composed the Memorare prayer to Mary and had an extraordinary Marian devotion. Called 'the last of the Fathers' and the 'Mellifluous Doctor' (honey-tongued).`,
    prayer: `Remember, O most gracious Virgin Mary,\nthat never was it known\nthat anyone who fled to thy protection,\nimplored thy help,\nor sought thy intercession,\nwas left unaided.\nInspired by this confidence,\nI fly unto thee, O Virgin of virgins, my Mother.\nHear and answer me.\nAmen.\n— The Memorare, attributed to Saint Bernard`
  },
  "08-21": {
    name: "Saint Pius X",
    subtitle: "Pope, Defender of the Faith",
    type: "Memorial",
    bio: `Saint Pius X (1835–1914) was Pope from 1903 to 1914 and is famous for his condemnation of Modernism, his reform of the liturgy, his encouragement of daily Communion, and his lowering of the age of First Communion to the age of reason (about 7).\n\nHis motto was 'To restore all things in Christ.' He reorganized the Roman Curia, reformed canon law, promoted the study of Gregorian chant, and produced the first Catechism of Christian Doctrine for children. He reportedly wept and said 'the last one to die in this bed died of a broken heart too' when war broke out in 1914; he died a month later.\n\nHe was the first pope to be canonized since Pius V (1572) and was canonized by Pope Pius XII in 1954.`,
    prayer: `O God, to protect the Catholic faith\nand to restore all things in Christ,\nYou filled Pope Saint Pius X\nwith heavenly wisdom and apostolic fortitude.\nGrant that following his example and teaching,\nwe may gain the prize of eternal life.\nAmen.`
  },
  "08-22": {
    name: "The Queenship of the Blessed Virgin Mary",
    subtitle: "Mary crowned Queen of Heaven and Earth",
    type: "Memorial",
    bio: `The Memorial of the Queenship of Mary, established by Pope Pius XII in 1954 to crown the Marian year, celebrates Mary's royal dignity as Mother of the King of Kings. She is Queen of Heaven and Earth, Queen of Angels and Saints, Queen of all Creation.\n\nMary's queenship flows from her motherhood: because she is the Mother of God the Son, she shares in His royal dignity in a unique way. The Coronation of Mary as Queen is the fifth Glorious Mystery of the Rosary.\n\nThis feast follows the Assumption (August 15) by one week — logically, for having been taken body and soul into heaven, Mary is there enthroned as Queen.`,
    prayer: `O God, who made the Mother of Your Son\nour Mother and our Queen,\ngrant that by her intercession\nwe may attain in the heavenly Kingdom\nthe glory promised to Your children.\nThrough Christ our Lord.\nAmen.`
  },
  "08-24": {
    name: "Saint Bartholomew",
    subtitle: "Apostle of the Lord",
    type: "Feast",
    bio: `Saint Bartholomew is one of the Twelve Apostles. Most scholars identify him with Nathanael of Cana, brought to Jesus by Philip. When Jesus said 'Here is an Israelite in whom there is no deceit!' and Nathanael asked how Jesus knew him, Jesus replied: 'Before Philip called you, I saw you under the fig tree.' Nathanael's response — 'Rabbi, you are the Son of God! You are the King of Israel!' — is one of the earliest confessions of faith.\n\nTradition holds that he evangelized Armenia, India, and Arabia, and was martyred by being flayed alive — he is depicted in Michelangelo's Last Judgment holding his own skin.`,
    prayer: `O God, who sustained Your Apostle Bartholomew\nwith surpassing love for You\nand gave him courage in his martyrdom,\ngrant that Your Church\nmay love what he loved\nand preach what he taught.\nAmen.`
  },
  "08-25": {
    name: "Saint Louis IX",
    subtitle: "King of France",
    type: "Optional Memorial",
    bio: `Saint Louis IX (1214–1270) was King of France from 1226 to 1270 and is the only canonized king of France. He governed with extraordinary justice and charity, built the Sainte-Chapelle to house the Crown of Thorns, founded the Sorbonne, and led two Crusades. He was known for personally serving food to lepers and the poor, sleeping on the ground, and spending hours in prayer. He died of plague on his second Crusade in Tunis.`,
    prayer: `O God, who transferred Saint Louis\nfrom the cares of earthly rule\nto the glory of Your heavenly Kingdom,\ngrant, through his prayers,\nthat we may seek Your Kingdom above all things\nand strive to fulfill Your will on earth.\nAmen.`
  },
  "08-27": {
    name: "Saint Monica",
    subtitle: "Mother of Saint Augustine, Patron of Mothers",
    type: "Memorial",
    bio: `Saint Monica (332–387) was the mother of Saint Augustine of Hippo and a model of persevering prayer and patient love. Her son lived a dissolute life for many years, and she prayed and wept for his conversion without ceasing for seventeen years.\n\nA bishop told her: 'It is impossible that the son of so many tears should perish.' Her tears and prayers were finally answered when Augustine was baptized by Saint Ambrose at Easter 387 — just months before Monica's death. She is the patron of mothers, wives, and those with difficult marriages or children.`,
    prayer: `O God, consoler of the sorrowful\nand salvation of those who trust in You,\nYou accepted the pious tears of Saint Monica\nfor the conversion of her son Augustine.\nGrant that we, who sin, may experience\nthe grace of Your mercy.\nThrough Christ our Lord.\nAmen.`
  },
  "08-28": {
    name: "Saint Augustine of Hippo",
    subtitle: "Bishop and Doctor of the Church",
    type: "Memorial",
    bio: `Saint Augustine of Hippo (354–430) is one of the most important figures in the history of Western civilization. After years of intellectual searching and moral wandering, he was converted to Christianity at age 32 through the influence of Saint Ambrose and the prayers of his mother Monica. His Confessions — the story of his conversion — is one of the greatest autobiographies ever written.\n\nAs Bishop of Hippo in North Africa, he wrote prodigiously against heresy (Donatism, Pelagianism, Manichaeism) and produced masterpieces like The City of God and On the Trinity. His theology of grace and free will has shaped Christian thought for 1,600 years.\n\nHis famous line sums up the human condition: 'You have made us for Yourself, O Lord, and our heart is restless until it rests in You.'`,
    prayer: `O God, who renewed the human race\nthrough the preaching of Your servant Augustine,\ngrant that Your Church may continue that same teaching\nand so find in You its sole perfection.\nThrough Christ our Lord.\nAmen.`
  },
  "08-29": {
    name: "The Passion of Saint John the Baptist",
    subtitle: "Martyrdom of the Forerunner",
    type: "Memorial",
    bio: `The feast of the Beheading of Saint John the Baptist commemorates his martyrdom at the hands of Herod Antipas, at the request of Salome, who had been prompted by her mother Herodias — whom John had publicly rebuked for her adulterous union with Herod (Mark 6:17-29).\n\nJohn the Baptist is the model of prophetic courage — he spoke truth to power at the cost of his life. His death prefigures the death of Jesus. Jesus said of him: 'Among those born of women there has arisen no one greater than John the Baptist.'`,
    prayer: `Almighty God,\nYou called Saint John the Baptist\nto be the herald of Your Son\nand through his preaching\nled many to repentance.\nGrant us the courage to speak the truth\nand to suffer for Your Name.\nThrough Christ our Lord.\nAmen.`
  },
  "09-03": {
    name: "Saint Gregory the Great",
    subtitle: "Pope and Doctor of the Church",
    type: "Memorial",
    bio: `Saint Gregory the Great (540–604) was one of the greatest popes in history and the last of the traditional Latin Doctors of the Church. A Roman prefect turned monk, he became pope in 590 during a plague and personally organized the relief of Rome.\n\nHe sent Saint Augustine of Canterbury to evangelize England, reformed the liturgy (Gregorian chant is named for him), wrote the monumental Moralia on Job, and defined the model of papal governance that endured for centuries. He called himself 'Servant of the servants of God' — a title still used by popes today.`,
    prayer: `O God, who in your providential design\ngave to Your people in Pope Saint Gregory\na teacher of truth and a model of mercy,\ngrant that what he taught by word and deed\nwe may with Your help faithfully follow.\nAmen.`
  },
  "09-08": {
    name: "The Nativity of the Blessed Virgin Mary",
    subtitle: "Birthday of the Mother of God",
    type: "Feast",
    bio: `The Feast of Mary's Nativity on September 8 (nine months after the Immaculate Conception on December 8) celebrates the birth of the one chosen from all eternity to be the Mother of God. Mary's birth, like John the Baptist's, is celebrated in the Roman Rite — a singular honor reflecting her unique role in salvation.\n\nThough the circumstances of Mary's birth are not recorded in Scripture, the Church celebrates this day with joy, recognizing that in Mary's birth, the dawn of our salvation had arrived. She is the 'morning star' that heralds the rising Sun of Justice.`,
    prayer: `Grant to Your servants, we pray, O Lord,\nthe gift of heavenly grace,\nthat for whom the birth of the Virgin's Son\nwas the beginning of salvation,\nthe Nativity of the Virgin herself\nmay bring an increase of peace.\nAmen.`
  },
  "09-09": {
    name: "Saint Peter Claver",
    subtitle: "Priest, Apostle of the Negroes",
    type: "Memorial",
    bio: `Saint Peter Claver (1581–1654) was a Spanish Jesuit priest who spent forty years in Cartagena, Colombia, ministering to enslaved Africans arriving in the New World. He would board the slave ships before anyone else, bringing food, medicine, and compassion, and baptized an estimated 300,000 enslaved people.\n\nHe called himself 'slave of the Negroes forever.' He is patron of interracial justice, the enslaved, and those working for human dignity. Pope Leo XIII canonized him in 1888 in the same ceremony as Saint Alphonsus Rodriguez.`,
    prayer: `O God, who made Saint Peter Claver a slave of slaves\nand gave him wonderful charity and patience\nto help them,\ngrant that, seeking the things of Jesus Christ,\nwe too may love our neighbors\nas ourselves.\nAmen.`
  },
  "09-13": {
    name: "Saint John Chrysostom",
    subtitle: "Bishop and Doctor of the Church, Golden-Mouthed",
    type: "Memorial",
    bio: `Saint John Chrysostom (347–407) was Archbishop of Constantinople and is considered the greatest preacher in the history of the Eastern Church. His surname Chrysostom means 'golden-mouthed' in Greek. His homilies on Matthew, John, Romans, and Corinthians remain unsurpassed in breadth and pastoral power.\n\nHe was twice exiled by the Empress Eudoxia for his outspoken criticism of corruption at court. He died in exile but was vindicated by the Church and his remains were brought back to Constantinople in triumph in 438.`,
    prayer: `O God, who gave strength to Saint John Chrysostom\nby his ardent eloquence\nand by his willingness to endure exile and death,\ngrant by his intercession\nthat we may never be silent\nin the face of error or injustice.\nAmen.`
  },
  "09-14": {
    name: "The Exaltation of the Holy Cross",
    subtitle: "Feast — The Triumph of the Cross",
    type: "Feast",
    bio: `The Feast of the Exaltation of the Holy Cross commemorates two events: the finding of the True Cross by Saint Helena, mother of Emperor Constantine, in 320 AD, and the dedication of the Basilica of the Holy Sepulcher in Jerusalem in 335 AD. It was also the day (629 AD) when Emperor Heraclius returned the relic of the Cross to Jerusalem after it had been captured by the Persians.\n\nThis feast invites us to contemplate the central mystery of our faith: the Cross of Christ, the instrument of death transformed into the source of life. 'We should glory in the Cross of our Lord Jesus Christ, for he is our salvation, our life and our resurrection' — the antiphon of this feast.`,
    prayer: `O God, who willed that Your Only Begotten Son\nshould undergo the Cross\nto save the human race,\ngrant that we, who have known His mystery on earth,\nmay merit the grace of His redemption in heaven.\nThrough Christ our Lord.\nAmen.`
  },
  "09-15": {
    name: "Our Lady of Sorrows",
    subtitle: "Memorial — The Seven Sorrows of Mary",
    type: "Memorial",
    bio: `The Memorial of Our Lady of Sorrows commemorates the Seven Sorrows of Mary: the prophecy of Simeon, the flight into Egypt, the loss of Jesus in the Temple, meeting Jesus on the way to Calvary, the Crucifixion, the taking down of Jesus from the Cross, and the burial of Jesus.\n\nThis memorial follows the Exaltation of the Holy Cross because Mary stood at the foot of the Cross, sharing in her Son's passion in a unique way. Her suffering, united to Christ's, is called the 'co-redemptive' suffering of the Mater Dolorosa — the Sorrowful Mother.\n\nThe Stabat Mater — one of the most beautiful hymns ever written — is traditionally sung on this day, meditating on Mary's grief at the foot of the Cross.`,
    prayer: `Holy Virgin, standing by the Cross,\nyou shared in your Son's agony.\nPray for us who are burdened,\nthat we may unite our sufferings to His\nand find in them the source of salvation.\nAmen.`
  },
  "09-16": {
    name: "Saints Cornelius and Cyprian",
    subtitle: "Pope and Bishop, Martyrs",
    type: "Memorial",
    bio: `Saint Cornelius was Pope from 251–253 AD during the Decian persecution. He opposed the rigorism of Novatian (who refused to readmit the lapsed) and died in exile, exhausted by hardship — venerated as a martyr. Saint Cyprian was Bishop of Carthage, the greatest Latin ecclesiastical writer before Augustine. He was beheaded in 258 AD under Emperor Valerian — the first North African bishop to be martyred in his own diocese.`,
    prayer: `O God, who gave Your people\nthe merits of Saints Cornelius and Cyprian\nas both pastors and martyrs,\ngrant through their intercession\nthat we may be strengthened in faith and courage\nand be made partakers of the Eucharist.\nAmen.`
  },
  "09-17": {
    name: "Saint Robert Bellarmine",
    subtitle: "Bishop and Doctor of the Church",
    type: "Optional Memorial",
    bio: `Saint Robert Bellarmine (1542–1621) was an Italian Jesuit who became one of the greatest theological minds of the Counter-Reformation. His monumental Disputations on the Controversies of the Christian Faith answered Protestant objections with unmatched scholarship. As a cardinal, he served as spiritual director to Saint Aloysius Gonzaga and examined Galileo.\n\nDespite his power, he lived with ascetic simplicity — once giving away the curtains from his windows to clothe the poor because 'the walls won't catch cold.' He was declared Doctor of the Church in 1931.`,
    prayer: `O God, who gave Your Church\nSaint Robert Bellarmine as a bishop and teacher\nto defend the faith of Peter,\ngrant that we may follow his teaching\nand so always be found faithful to You.\nAmen.`
  },
  "09-19": {
    name: "Saint Januarius",
    subtitle: "Bishop and Martyr, Patron of Naples",
    type: "Optional Memorial",
    bio: `Saint Januarius (died c. 305) was Bishop of Benevento, Italy, martyred during the Diocletian persecution. He is famous for the liquefaction of his blood — a small vial of dried blood preserved in Naples Cathedral — which miraculously liquefies several times a year, including on his feast day. This phenomenon, witnessed by millions over 600+ years, remains unexplained by science. He is deeply beloved by the people of Naples.`,
    prayer: `O God, author of all holiness,\nwho made Saint Januarius outstanding\namong Your martyrs,\ngrant that, rejoicing in his patronage,\nwe may benefit from his example and intercession.\nAmen.`
  },
  "09-20": {
    name: "Saints Andrew Kim Tae-gon, Paul Chong Ha-sang and Companions",
    subtitle: "Martyrs of Korea",
    type: "Memorial",
    bio: `Between 1839 and 1867, 103 Catholics were martyred in Korea during brutal persecutions — including the first Korean Catholic priest, Andrew Kim Tae-gon, and the layman Paul Chong Ha-sang who had worked tirelessly to bring missionaries to Korea. The Korean Church had been founded entirely by laypeople who had encountered Christianity through books.\n\nThese martyrs — ranging from bishops to young children — were tortured and executed with extraordinary courage. Pope John Paul II canonized them during his 1984 visit to Korea, describing their deaths as 'seeds of the Church in Korea.'`,
    prayer: `O God, who called Andrew Kim Tae-gon and Paul Chong Ha-sang\nand their companions\nto testify to the Gospel in Korea\neven unto the shedding of their blood,\ngrant that their example may strengthen our faith.\nAmen.`
  },
  "09-21": {
    name: "Saint Matthew",
    subtitle: "Apostle and Evangelist",
    type: "Feast",
    bio: `Saint Matthew was a tax collector (publican) in Capernaum — one of the most despised occupations in Jewish society — when Jesus passed by his tax booth and called him: 'Follow me.' Without hesitation, Matthew left everything and followed. He immediately hosted a banquet for Jesus and his fellow tax collectors, which scandalized the Pharisees. When they complained, Jesus replied: 'I came not to call the righteous, but sinners.'\n\nMatthew is the author of the first Gospel — written primarily for Jewish Christians, with its emphasis on Jesus as the fulfillment of the Old Testament. Tradition holds he was martyred in Ethiopia.`,
    prayer: `O God, who with untold mercy\nwere pleased to choose the tax collector Matthew\nfor an Apostle,\ngrant that, sustained by his example and intercession,\nwe may merit to hold fast to You.\nThrough Christ our Lord.\nAmen.`
  },
  "09-23": {
    name: "Saint Padre Pio of Pietrelcina",
    subtitle: "Priest, Mystic, Confessor",
    type: "Memorial",
    bio: `Saint Padre Pio (1887–1968) was an Italian Capuchin friar who bore the stigmata — the five wounds of Christ — for fifty years (1918–1968), making him the first stigmatized priest in Church history. His fame as a confessor was extraordinary; he spent 10–15 hours a day in the confessional and was said to read souls.\n\nHe reportedly bilocated, read hearts, performed healings, and had a powerful gift of prophecy. Despite decades of ecclesiastical suspicion and restrictions on his ministry, he bore everything in obedience and silence. Millions of people visit his shrine in San Giovanni Rotondo, Italy. He was canonized by Pope John Paul II in 2002.`,
    prayer: `Dear Padre Pio,\nyou bore the wounds of Christ\nwith love and patience.\nObtain for me the grace\nto follow Christ more faithfully,\nto embrace suffering with His love,\nand to intercede for others\nas you so powerfully intercede for us.\nAmen.`
  },
  "09-26": {
    name: "Saints Cosmas and Damian",
    subtitle: "Martyrs, Patrons of Physicians",
    type: "Optional Memorial",
    bio: `Saints Cosmas and Damian were twin brothers and Arab physicians who practiced medicine without charge — earning them the title Anargyroi (the moneyless ones) in the Eastern Church. They were martyred under Diocletian around 303 AD. They are commemorated in Eucharistic Prayer I and are patrons of physicians, surgeons, and pharmacists.`,
    prayer: `O God, who gave Saints Cosmas and Damian\na love for the sick that led to their death for the faith,\nhear our prayer\nand grant health of mind and body\nto those who call upon them.\nAmen.`
  },
  "09-27": {
    name: "Saint Vincent de Paul",
    subtitle: "Priest, Patron of Charitable Works",
    type: "Memorial",
    bio: `Saint Vincent de Paul (1581–1660) was a French priest who transformed the understanding of charity in the modern world. From a poor peasant family, he founded the Congregation of the Mission (Vincentians) for preaching to the rural poor, the Confraternities of Charity (Vincentian volunteers), and with Saint Louise de Marillac, the Daughters of Charity — the first non-enclosed congregation of women dedicated to active service of the poor.\n\nHe organized the care of orphaned children, foundlings, galley slaves, and victims of war. Frédéric Ozanam founded the Society of Saint Vincent de Paul in his honor in 1833. He is patron of all charitable works and societies.`,
    prayer: `Lord God, grant that, following the example of Saint Vincent de Paul,\nwe may be consumed with zeal for the poor\nand devote ourselves to Your service,\nseeing Christ in those we serve.\nAmen.`
  },
  "09-28": {
    name: "Saint Wenceslaus",
    subtitle: "Martyr, Patron of Bohemia",
    type: "Optional Memorial",
    bio: `Saint Wenceslaus (907–935) was the Duke of Bohemia (modern Czech Republic) who ruled with great piety, justice, and charity. He educated the poor, freed unjustly imprisoned people, and promoted Christianity. He was murdered by his pagan brother Boleslav, who envied his power and hated his faith.\n\nHe is one of the most beloved saints in Czech history and is commemorated in the popular Christmas carol 'Good King Wenceslas.' The Czech national anthem invokes his name.`,
    prayer: `O God, who adorned Saint Wenceslaus\nwith the twin glory of kingship and martyrdom,\ngrant through his intercession\nthat we may strive with all our strength\nfor what is right and holy.\nAmen.`
  },
  "09-29": {
    name: "Saints Michael, Gabriel, and Raphael",
    subtitle: "Archangels of God",
    type: "Feast",
    bio: `The Feast of the Archangels celebrates the three angels named in Sacred Scripture.\n\nSaint Michael ('Who is like God?') is the warrior archangel who defeated Satan and his angels in the war in heaven (Revelation 12:7-9). He is the protector of the Church and of Israel.\n\nSaint Gabriel ('Strength of God') is God's messenger, who announced the birth of John the Baptist to Zechariah and the Incarnation to Mary at the Annunciation (Luke 1:26-38).\n\nSaint Raphael ('God heals') is the healing archangel who guided young Tobias and healed his father's blindness in the Book of Tobit.\n\nThe feast of all three together, celebrated since the 9th century, was unified in 1970 to honor them as a group.`,
    prayer: `Saint Michael the Archangel,\ndefend us in battle.\nBe our protection against\nthe wickedness and snares of the devil.\nMay God rebuke him, we humbly pray;\nand cast into hell Satan\nand all evil spirits.\nAmen.`
  },
  "09-30": {
    name: "Saint Jerome",
    subtitle: "Priest and Doctor of the Church, Patron of Biblical Scholars",
    type: "Memorial",
    bio: `Saint Jerome (347–420) was one of the greatest Scripture scholars in the history of the Church. At the commission of Pope Damasus, he produced the Vulgate — the Latin translation of the Bible from the original Hebrew and Greek — which remained the standard Bible of the Catholic Church for over a thousand years.\n\nHe spent his later years in a cave in Bethlehem, surrounded by a community of scholars and nuns, translating and commenting on Scripture. He was famous for his sharp temper, sharp wit, and sharp pen — he wrote devastating polemics against his opponents. His famous saying: 'Ignorance of Scripture is ignorance of Christ.'`,
    prayer: `Lord God, who gave Saint Jerome a love for the Holy Scriptures,\ngrant that Your people\nmay feed more and more abundantly on Your word\nand find in it the source and strength\nof their spiritual life.\nThrough Christ our Lord.\nAmen.`
  },
  "10-01": {
    name: "Saint Thérèse of the Child Jesus",
    subtitle: "Virgin and Doctor of the Church, The Little Flower",
    type: "Memorial",
    bio: `Saint Thérèse of Lisieux (1873–1897) entered Carmel at age 15 and died of tuberculosis at 24. In those nine years she developed the 'Little Way' — a path of spiritual childhood, total trust in God's mercy, and finding holiness in the smallest daily acts.\n\nHer autobiography, Story of a Soul, became one of the most widely read spiritual books of the 20th century. Before her death she said: 'I will spend my heaven doing good on earth. I will let fall a shower of roses.' She was declared Doctor of the Church by Pope John Paul II in 1997 — the youngest Doctor and the third woman.`,
    prayer: `O Jesus, I want to love You\nas You have never been loved before.\nTeach me to do little things\nwith great love.\nLet me follow Your Little Way\nand trust completely in Your mercy.\nAmen.\n— Inspired by Saint Thérèse`
  },
  "10-02": {
    name: "The Holy Guardian Angels",
    subtitle: "Memorial — Our heavenly protectors",
    type: "Memorial",
    bio: `The Catholic Church teaches that every human person has a Guardian Angel assigned to them from birth — a spiritual being whose mission is to guide, protect, and pray for the soul entrusted to their care. Jesus Himself referred to the angels of children: 'See that you do not despise one of these little ones, for I tell you that in heaven their angels always see the face of my Father' (Matthew 18:10).\n\nDevotional literature is rich with accounts of angelic protection. The Guardian Angel prayer, taught to children throughout the world, reflects this confident trust in our heavenly companions who walk with us on earth.`,
    prayer: `Angel of God, my guardian dear,\nto whom God's love commits me here,\never this day be at my side\nto light and guard, to rule and guide.\nAmen.`
  },
  "10-04": {
    name: "Saint Francis of Assisi",
    subtitle: "Patron of Ecology, Animals, and Italy",
    type: "Memorial",
    bio: `Saint Francis of Assisi (1182–1226) is one of the most beloved saints in the history of Christianity and one of the most influential figures in Western culture. The son of a wealthy merchant, he renounced everything to follow Christ in radical poverty, rebuilding the Church both literally (San Damiano) and spiritually (the Franciscan movement).\n\nHe is the only person besides Mary known to have received the stigmata while alive. He preached to birds, tamed a wolf, composed the Canticle of the Sun — the first great work of Italian literature — and founded the Franciscans, the Poor Clares (with Saint Clare), and the Third Order. Pope Francis chose his name in honor of him.`,
    prayer: `Lord, make me an instrument of Your peace.\nWhere there is hatred, let me sow love;\nwhere there is injury, pardon;\nwhere there is doubt, faith;\nwhere there is despair, hope;\nwhere there is darkness, light;\nwhere there is sadness, joy.\n— Prayer attributed to Saint Francis`
  },
  "10-06": {
    name: "Saint Bruno",
    subtitle: "Priest, Founder of the Carthusians",
    type: "Optional Memorial",
    bio: `Saint Bruno (1030–1101) was a renowned theologian and teacher at Reims who abandoned a brilliant academic career to found the Carthusian Order in 1084 in the wild mountains of Chartreuse, France. The Carthusians combine the solitude of the hermit with the community life of monks, living in silence, manual labor, and contemplative prayer. Their motto: Stat Crux dum volvitur orbis — The Cross stands firm while the world turns.`,
    prayer: `O God, who called Saint Bruno\nto serve You in solitude,\ngrant through his intercession\nthat amid the changes of this world\nwe may always seek You\nwho alone are eternal.\nAmen.`
  },
  "10-07": {
    name: "Our Lady of the Rosary",
    subtitle: "Commemorating the Victory of Lepanto",
    type: "Memorial",
    bio: `The feast of Our Lady of the Rosary was established by Pope Pius V in thanksgiving for the victory of the Christian fleet over the Ottoman Turks at the Battle of Lepanto on October 7, 1571 — a victory he attributed to the worldwide praying of the Rosary that day.\n\nSaint Pius V had organized the Holy League and asked all Catholics to pray the Rosary for victory. When news of the victory reached Rome, he was said to have a supernatural vision of it before the official messenger arrived.\n\nThis feast is an invitation to take up the Rosary as our weapon — as Padre Pio called it — for peace, family, and the salvation of souls.`,
    prayer: `Pour forth, we beseech You, O Lord,\nYour grace into our hearts;\nthat we, to whom the Incarnation of Christ Your Son\nwas made known by the message of an Angel,\nmay by His Passion and Cross\nbe brought to the glory of His Resurrection.\nThrough the same Christ our Lord.\nAmen.`
  },
  "10-09": {
    name: "Saint Denis and Companions",
    subtitle: "Bishops and Martyrs",
    type: "Optional Memorial",
    bio: `Saint Denis (died c. 258) was the first Bishop of Paris and is patron saint of France. According to tradition, he was beheaded on Montmartre ('Hill of the Martyrs') and then walked two miles carrying his severed head, preaching a sermon, before collapsing on the site where the Basilica of Saint-Denis was later built. He is one of the Fourteen Holy Helpers and one of the most venerated saints in France.`,
    prayer: `O God, who adorned Saint Denis\nwith the virtue of strength in adversity,\ngrant us so to imitate his perseverance\nthat we may never be separated from You.\nAmen.`
  },
  "10-14": {
    name: "Saint Callixtus I",
    subtitle: "Pope and Martyr",
    type: "Optional Memorial",
    bio: `Saint Callixtus I (died 222) was Pope from about 217 to 222 AD. His history is extraordinary: he was a former slave who became pope. He extended mercy to lapsed Christians and those in irregular marriages — for which Saint Hippolytus, a rigorist, attacked him bitterly. He died a martyr by being thrown down a well. The Catacomb of Callixtus in Rome, where many early popes were buried, is named for him.`,
    prayer: `O God, who crowned with the glory of martyrdom\nYour servant Pope Saint Callixtus,\ngrant us, encouraged by his example,\nto defend our faith courageously\nand merit to share in his reward.\nAmen.`
  },
  "10-15": {
    name: "Saint Teresa of Ávila",
    subtitle: "Virgin and Doctor of the Church, Mother of the Carmel",
    type: "Memorial",
    bio: `Saint Teresa of Ávila (1515–1582) was a Spanish Carmelite nun who reformed the Carmelite Order and became one of the greatest mystics and spiritual writers in the history of the Church. Her Interior Castle and The Way of Perfection are masterpieces of mystical theology.\n\nShe experienced intense mystical states including levitation, ecstasies, and intellectual visions of Christ. She also had a fierce, practical wisdom — she once said: 'God preserve us from foolish devotions.' She co-founded with Saint John of the Cross the Discalced Carmelite reform. Declared Doctor of the Church in 1970 — the first woman.`,
    prayer: `Let nothing disturb you,\nlet nothing frighten you.\nAll things are passing away;\nGod never changes.\nPatience obtains all things.\nWhoever has God lacks nothing.\nGod alone suffices.\n— Saint Teresa of Ávila`
  },
  "10-16": {
    name: "Saint Hedwig",
    subtitle: "Duchess of Silesia, Patron of the Poor",
    type: "Optional Memorial",
    bio: `Saint Hedwig (1174–1243) was Duchess of Silesia and a model of charitable service. After her husband's death, she became a Cistercian tertiary and lived in complete poverty, going barefoot even in winter. She built hospitals, founded monasteries, and settled conflicts between her own children. She is patron of Silesia (modern Poland and Germany) and of those in difficult family situations.`,
    prayer: `O God, who made Saint Hedwig\nan outstanding example of humility,\ngrant that, following her example,\nwe may honor You by a holy life\nand serve our neighbor through Your love.\nAmen.`
  },
  "10-17": {
    name: "Saint Ignatius of Antioch",
    subtitle: "Bishop and Martyr, Apostolic Father",
    type: "Memorial",
    bio: `Saint Ignatius of Antioch (35–107) was the third Bishop of Antioch, a disciple of Saint John the Apostle, and one of the most important witnesses to early Christianity. Arrested under Emperor Trajan and transported to Rome for execution, he wrote seven letters to various churches along his route — which are among the most important documents of early Christianity.\n\nHis letters contain the earliest use of the phrase 'Catholic Church' (katholike ekklesia) and clear testimony to the Real Presence in the Eucharist. He described himself as 'the wheat of God, to be ground by the teeth of the beasts into the pure bread of Christ.' He was thrown to the lions in the Colosseum.`,
    prayer: `O God, who filled the Bishop Saint Ignatius of Antioch\nwith a burning desire for Your glory and love of the Cross,\ngrant that following his example,\nwe may imitate the sufferings of Christ\nand so share in His Resurrection.\nAmen.`
  },
  "10-18": {
    name: "Saint Luke",
    subtitle: "Evangelist, Author of the Third Gospel and Acts",
    type: "Feast",
    bio: `Saint Luke was a Gentile physician and companion of Saint Paul, author of the third Gospel and the Acts of the Apostles — together comprising about one-quarter of the entire New Testament. His Gospel is remarkable for its attention to the poor, women, mercy, and prayer, and contains the Annunciation, Visitation, Magnificat, Benedictus, Nunc Dimittis, and the parables of the Good Samaritan and the Prodigal Son.\n\nHe is the patron of physicians, artists, and writers. Byzantine tradition holds that he painted the first icon of the Virgin Mary, and several famous Marian icons are attributed to him.`,
    prayer: `O God, who chose Saint Luke\nto reveal by his preaching and writings\nthe mystery of Your love for the poor,\ngrant that those who glory in Your name\nmay persevere as one heart and one soul.\nAmen.`
  },
  "10-19": {
    name: "Saints John de Brébeuf, Isaac Jogues and Companions",
    subtitle: "Martyrs of North America",
    type: "Memorial",
    bio: `Between 1642 and 1649, eight French Jesuit missionaries were martyred in what is now Canada and the United States. Isaac Jogues was the first to suffer — captured by the Iroquois, he endured months of torture and had his fingers chewed off before escaping. He returned voluntarily and was killed with a tomahawk in 1646. Jean de Brébeuf endured four hours of torture with heroic courage before his death in 1649. They were canonized in 1930 — the first saints of North America.`,
    prayer: `O God, who consecrated the first fruits\nof the faith in North America\nby the preaching and blood of Saints John de Brébeuf,\nIsaac Jogues and their companions,\ngrant that from their blood\nYour Church may bear fruit in every land.\nAmen.`
  },
  "10-23": {
    name: "Saint John of Capistrano",
    subtitle: "Priest, Preacher of the Crusade",
    type: "Optional Memorial",
    bio: `Saint John of Capistrano (1386–1456) was an Italian Franciscan friar who was a lawyer before entering religious life following a spiritual experience while imprisoned. He became one of the greatest preachers of the 15th century and led the Christian forces in the Siege of Belgrade (1456) against the Ottoman Turks — a victory that delayed the Ottoman invasion of Europe for 70 years.`,
    prayer: `O God, who for the defense of the Catholic faith\nraised up Saint John of Capistrano,\ngrant that the faithful\nmay be gladdened by his patronage\nand may Your Church always rejoice in his protection.\nAmen.`
  },
  "10-24": {
    name: "Saint Anthony Mary Claret",
    subtitle: "Bishop, Founder of the Claretians",
    type: "Optional Memorial",
    bio: `Saint Anthony Mary Claret (1807–1870) was a Spanish Archbishop of Santiago de Cuba, confessor to Queen Isabella II, and founder of the Claretian Missionary Congregation. He was a prolific writer, producing 144 books and pamphlets. He suffered multiple assassination attempts for his fearless preaching against immorality and injustice. He reported experiencing bilocation and other mystical gifts.`,
    prayer: `O God, who for the continuous renewal of Your Church\nfilled Saint Anthony Mary Claret\nwith apostolic virtues,\ngrant that, burning with that same love,\nwe may seek the things that are of God\nand work in all things for His glory.\nAmen.`
  },
  "10-28": {
    name: "Saints Simon and Jude",
    subtitle: "Apostles of the Lord",
    type: "Feast",
    bio: `Saints Simon (called the Zealot) and Jude Thaddaeus (not Judas Iscariot) are celebrated together. Simon may have been a former member of the Jewish Zealot movement. Jude is the author of the brief but powerful Letter of Jude in the New Testament and is the patron of desperate cases and lost causes — invoked when all other help has failed. Both are believed to have been martyred, Jude with an axe and Simon by crucifixion or sawing.`,
    prayer: `O God, who through the blessed Apostles\nhave enabled us to come to know Your name,\ngrant through the intercession of Saints Simon and Jude\nthat Your Church may constantly grow\nby an increase of the nations\nwho believe in You.\nAmen.`
  },
  "11-01": {
    name: "All Saints",
    subtitle: "Solemnity — The Communion of Saints in Heaven",
    type: "Solemnity",
    bio: `The Solemnity of All Saints celebrates not only the canonized saints but every soul in heaven — the vast multitude no one can count, from every nation, tribe, people and tongue, standing before the throne of God (Revelation 7:9).\n\nThis includes saints known and unknown, those publicly venerated and those known only to God — your ancestors, forgotten martyrs, and the anonymous holy ones of every age and place. On this day the Church exults in the victory of all who have run the race and received the crown.\n\nThe following day, All Souls, turns our gaze to those still being purified — reminding us that our prayer and sacrifice can help souls on their way to the fullness of glory.`,
    prayer: `O God, whose glory it is that a vast multitude praises You,\ngrant us, we pray, to be numbered among them,\nto share in the glory of all the Saints\nand to rejoice in all their feasts.\nThrough Christ our Lord.\nAmen.`
  },
  "11-02": {
    name: "The Commemoration of All the Faithful Departed",
    subtitle: "All Souls' Day",
    type: "Special",
    bio: `All Souls' Day is the annual commemoration of all the faithful departed — those who have died in God's grace but are still being purified in Purgatory before the beatific vision.\n\nThe Church teaches that our prayers, especially the Eucharist, indulgences, and acts of penance and charity offered for the dead, can hasten their journey to heaven. This is the doctrine of the Communion of Saints — that the living and the dead remain bound together in the Body of Christ.\n\nIn many cultures (Día de los Muertos in Mexico, Undas in the Philippines), this day is marked by visiting cemeteries, decorating graves, and praying for deceased loved ones — a beautiful expression of our hope in the resurrection.`,
    prayer: `Eternal rest grant unto them, O Lord,\nand let perpetual light shine upon them.\nMay they rest in peace.\nAmen.\n\nMay the souls of all the faithful departed,\nthrough the mercy of God,\nrest in peace.\nAmen.`
  },
  "11-03": {
    name: "Saint Martin de Porres",
    subtitle: "Religious, Patron of Social Justice and Mixed-Race People",
    type: "Memorial",
    bio: `Saint Martin de Porres (1579–1639) was a Peruvian lay brother of the Dominican Order, born of a Spanish nobleman and a free black woman from Panama. In the rigid class society of colonial Peru, he was scorned for his mixed race. Despite — and through — this suffering, he became one of the most beloved saints of the Americas.\n\nHe worked as a barber-surgeon, caring for the sick regardless of race or social standing. He reportedly bilocated, levitated, and had a miraculous relationship with animals. He opened an orphanage and foundling hospital in Lima. Pope John XXIII canonized him in 1962.`,
    prayer: `O God, who led Saint Martin de Porres\nby the path of humility to heavenly glory,\ngrant that we may so imitate his lowliness\nthat we may be exalted by You\nto the reward he now enjoys in heaven.\nAmen.`
  },
  "11-04": {
    name: "Saint Charles Borromeo",
    subtitle: "Archbishop of Milan, Leader of the Counter-Reformation",
    type: "Memorial",
    bio: `Saint Charles Borromeo (1538–1584) was one of the key figures of the Counter-Reformation. As Cardinal Archbishop of Milan, he implemented the decrees of the Council of Trent with extraordinary energy, establishing seminaries, reforming the clergy, and reorganizing the diocese.\n\nDuring the plague of 1576–1578, he sold his possessions, borrowed heavily, and personally ministered to the sick and dying when others fled. He founded the Confraternity of Christian Doctrine (CCD) — the origin of modern religious education programs. He died at age 46, worn out by his labors.`,
    prayer: `O God, who adorned Your Bishop Saint Charles\nwith the virtue of apostolic fortitude,\ngrant that Your Church\nmay always be reformed and renewed\nthrough the witness of her pastors.\nAmen.`
  },
  "11-09": {
    name: "The Dedication of the Lateran Basilica",
    subtitle: "Feast — Mother Church of Rome",
    type: "Feast",
    bio: `The Feast of the Dedication of the Lateran Basilica commemorates the dedication of the oldest and highest-ranking Catholic church in the world. The Basilica of Saint John Lateran is the cathedral of the Bishop of Rome (the Pope) and bears the inscription: Omnium urbis et orbis ecclesiarum mater et caput — 'Mother and head of all churches of the city and the world.'\n\nDedicated in 324 AD by Pope Sylvester I under Emperor Constantine — the first public Christian building after the legalization of Christianity — this basilica represents the unity of all Catholic churches worldwide. Celebrating its dedication celebrates the Church itself as the Body of Christ.`,
    prayer: `O God, who from living and chosen stones\nprepare an eternal dwelling for Your majesty,\ngrant to Your Church an increase of Your Spirit,\nthat by a new outpouring of grace\nthe whole people may be built up\nas Your spiritual house.\nAmen.`
  },
  "11-10": {
    name: "Saint Leo the Great",
    subtitle: "Pope and Doctor of the Church",
    type: "Memorial",
    bio: `Saint Leo the Great (400–461) was one of the greatest popes in history. His theological Letter (Tome) to Flavian, read at the Council of Chalcedon (451), defined the orthodox doctrine of the two natures of Christ and was greeted with the acclamation 'Peter has spoken through Leo.'\n\nHe also famously rode out to meet Attila the Hun outside Rome in 452 and persuaded him to spare the city — a moment of extraordinary moral courage. Three years later he persuaded the Vandal king Genseric to spare the lives of the Roman citizens. He was the first pope to be called 'the Great.'`,
    prayer: `O God, who never allow Your people to be shaken,\ngrant that through the intercession of Pope Leo the Great\nYour Church may stand firm on the rock of Peter\nand endure for all ages.\nAmen.`
  },
  "11-11": {
    name: "Saint Martin of Tours",
    subtitle: "Bishop, Father of Western Monasticism in Gaul",
    type: "Memorial",
    bio: `Saint Martin of Tours (316–397) was a Roman soldier who, on seeing a freezing beggar at the gate of Amiens, cut his military cloak in two and gave half to the man. That night he dreamed of Christ wearing the cloak and saying to the angels: 'Martin, who is still but a catechumen, clothed me with this garment.'\n\nHe was baptized and became Bishop of Tours — one of the most loved bishops of the ancient Church. He founded the first monastery in Gaul and trained a generation of bishops. His small cappa (cloak, capella) became the most sacred relic in the Frankish kingdom — the origin of the word 'chapel.'`,
    prayer: `O God, whose glory it was\nthat in Saint Martin\nneither death was feared\nnor life was loved too dearly,\ngrant that Your Church may receive the merits\nof the deeds we honor in him.\nAmen.`
  },
  "11-12": {
    name: "Saint Josaphat",
    subtitle: "Bishop and Martyr, Patron of Ukrainian Catholics",
    type: "Memorial",
    bio: `Saint Josaphat Kuntsevych (1580–1623) was a Ukrainian bishop of the Eastern Catholic Church who worked tirelessly for union with Rome and was martyred by an Orthodox mob in Vitebsk, Poland-Lithuania. He was the first canonized saint of the Eastern churches and is revered as a martyr of Christian unity. He was canonized by Pope Gregory XVI in 1867.`,
    prayer: `O God, who filled Your Bishop Saint Josaphat\nwith the love of his flock\nso that he shed his blood for them,\ngrant through his merits and intercession\nthat we too may bear fruit for the Church\nand gain the crown of life.\nAmen.`
  },
  "11-13": {
    name: "Saint Frances Xavier Cabrini",
    subtitle: "Virgin, Patron of Immigrants",
    type: "Optional Memorial",
    bio: `Saint Frances Xavier Cabrini (1850–1917) was born in Italy with a weak constitution but founded the Missionary Sisters of the Sacred Heart of Jesus, which established schools, orphanages, and hospitals in the United States, Europe, and South America. She became the first American citizen to be canonized (1946) and is patron of immigrants. She reportedly said: 'I can do all things in Him who strengthens me' — and proved it with 67 institutions on three continents.`,
    prayer: `O God, who from Italy's shores\nsent Your servant Frances Xavier Cabrini\nto tend the poor and sick in foreign lands,\ngrant that all who follow in her footsteps\nmay find You in every person they serve.\nAmen.`
  },
  "11-15": {
    name: "Saint Albert the Great",
    subtitle: "Bishop and Doctor of the Church, Patron of Scientists",
    type: "Optional Memorial",
    bio: `Saint Albert the Great (1193–1280) was a German Dominican bishop who was one of the most learned men of the 13th century — his knowledge encompassing theology, philosophy, natural science, botany, zoology, chemistry, astronomy, and music. He was the teacher of Saint Thomas Aquinas.\n\nHis massive scientific writings made him the first medieval scholar to apply Aristotelian science to Christian thought — a project Thomas Aquinas would bring to completion. He was named patron of natural scientists and those who study the natural sciences.`,
    prayer: `O God, who made Saint Albert great\nby his knowledge of both sacred and secular sciences,\ngrant that we may so grow in wisdom\nas always to seek You through Your creatures\nand find You in them.\nAmen.`
  },
  "11-16": {
    name: "Saint Margaret of Scotland",
    subtitle: "Queen, Patron of Scotland",
    type: "Optional Memorial",
    bio: `Saint Margaret of Scotland (1045–1093) was an Anglo-Saxon princess who became Queen of Scotland through her marriage to King Malcolm III. She civilized and Christianized her court, bringing church reform, charitable works, and learning to Scotland. She founded the Dunfermline Abbey and cared personally for orphans and the poor, with the king assisting her. She died four days after her husband was killed in battle and is buried at Dunfermline.`,
    prayer: `O God, who led Saint Margaret of Scotland\nto glory through works of mercy and zeal for the Church,\ngrant that we, following her example,\nmay see Christ in our neighbor\nand serve Him in every person we meet.\nAmen.`
  },
  "11-17": {
    name: "Saint Elizabeth of Hungary",
    subtitle: "Religious, Patron of Charity",
    type: "Memorial",
    bio: `Saint Elizabeth of Hungary (1207–1231) was a princess who gave away her wealth to the poor despite opposition from the court. After her husband's death, she was expelled from the palace and gave up everything to care for the sick in a hospital she built in Marburg. She died at age 24, worn out by her penances and charity. The 'miracle of the roses' — bread transformed into roses when questioned — is associated with her. Patron of bakers, beggars, and the Third Order of Saint Francis.`,
    prayer: `Lord God, grant that we may imitate Saint Elizabeth of Hungary\nwho recognized and honored Christ\nin the poor.\nBy her prayers, grant us help\nin our necessity\nand perseverance in charity.\nAmen.`
  },
  "11-18": {
    name: "Dedication of the Basilicas of Saints Peter and Paul",
    subtitle: "Memorial — The Apostolic Foundations of Rome",
    type: "Optional Memorial",
    bio: `This memorial commemorates the dedication of the great basilicas over the tombs of the two greatest Apostles in Rome — Saint Peter's (originally dedicated in 326 AD) and Saint Paul Outside the Walls (originally dedicated in 390 AD). Visiting the tombs of Peter and Paul has been a pilgrimage destination since the earliest centuries.`,
    prayer: `O God, who consecrate with the blood of the Apostles\nthe foundations of the Church,\ngrant that the communities of faith\nwhich follow the teaching of Peter and Paul\nmay always remain steadfast in truth.\nAmen.`
  },
  "11-21": {
    name: "The Presentation of the Blessed Virgin Mary",
    subtitle: "Memorial — Mary presented in the Temple",
    type: "Memorial",
    bio: `The Presentation of Mary commemorates the tradition (from the Protoevangelium of James) that Mary's parents, Joachim and Anne, brought the three-year-old Mary to the Temple in Jerusalem to dedicate her to God. She lived in the Temple precinct until her betrothal to Joseph.\n\nWhile not recorded in Scripture, this feast (celebrated since the 6th century in the East and since 1585 in the West) meditates on Mary's total dedication to God from her earliest years — her 'presentation' to God anticipates her 'fiat' at the Annunciation.`,
    prayer: `O God, who willed that on this day\nthe Blessed Virgin Mary\nshould be presented in the Temple,\ngrant through her intercession\nthat we too may merit to be presented to You.\nAmen.`
  },
  "11-22": {
    name: "Saint Cecilia",
    subtitle: "Virgin and Martyr, Patron of Music",
    type: "Memorial",
    bio: `Saint Cecilia (died c. 230) was a Roman noblewoman and martyr who is one of the most venerated saints in the Roman Rite and is remembered in Eucharistic Prayer I. On her wedding day, according to tradition, she sang in her heart to God alone — giving rise to her patronage of music.\n\nShe was condemned to be suffocated in her bath and then beheaded. When her tomb was opened in 1599, her body was found incorrupt. Stefano Maderno carved a famous sculpture of her in the position in which she was found, which stands in the Basilica of Santa Cecilia in Trastevere, Rome.`,
    prayer: `O God, who call us to praise You in music and song,\ngrant through the intercession of Saint Cecilia\nthat we may sanctify all that we do\nby directing it to Your greater glory.\nAmen.`
  },
  "11-23": {
    name: "Saint Clement I",
    subtitle: "Pope and Martyr",
    type: "Optional Memorial",
    bio: `Saint Clement I (died c. 99) was the fourth Bishop of Rome and is believed to have known Saints Peter and Paul personally. His Letter to the Corinthians (c. 96 AD) — written to restore order in the Corinthian church — is the oldest Christian document outside the New Testament and contains an early exercise of Roman primacy.`,
    prayer: `O God, who in Pope Saint Clement\ngave us an example of love for You\nand of courage in Your service,\ngrant by his merits and intercession\nthat we may stand firm in truth\nand be united in fraternal charity.\nAmen.`
  },
  "11-24": {
    name: "Saints Andrew Dũng-Lạc and Companions",
    subtitle: "Martyrs of Vietnam",
    type: "Memorial",
    bio: `117 Vietnamese martyrs were canonized by Pope John Paul II in 1988 — including 96 Vietnamese, 11 Spanish Dominicans, and 10 French missionaries of the Paris Foreign Missions. Martyred between 1745 and 1862 during severe persecutions, they were beheaded, strangled, burned, drowned, and dismembered. Their courage — especially that of simple farmers and catechists — is an extraordinary testimony to the depth of Vietnamese Catholicism.`,
    prayer: `O God, who consecrated with their blood\nthe mission of the holy martyrs of Vietnam,\ngrant that by their intercession\nYour Church may bear fruit in all nations.\nAmen.`
  },
  "11-25": {
    name: "Saint Catherine of Alexandria",
    subtitle: "Virgin and Martyr, Patron of Philosophers",
    type: "Optional Memorial",
    bio: `Saint Catherine of Alexandria (died c. 305) was a young Christian noblewoman and scholar who, according to tradition, confounded fifty pagan philosophers sent by Emperor Maxentius to argue her out of her faith. She converted many of them, who were then executed. She was tortured on a spiked wheel (the 'Catherine wheel') and beheaded. One of the most popular saints of the Middle Ages and one of the Fourteen Holy Helpers, she appeared to Saint Joan of Arc.`,
    prayer: `O God, who gave Saint Catherine of Alexandria\nthe wisdom to win many to the faith\nand courage to endure martyrdom,\ngrant that through her intercession\nwe may be defenders of Your truth.\nAmen.`
  },
  "11-30": {
    name: "Saint Andrew",
    subtitle: "Apostle, First Called, Patron of Scotland and Greece",
    type: "Feast",
    bio: `Saint Andrew was the brother of Simon Peter and the first disciple called by Jesus (John 1:35-42) — giving him the Greek title Protokletos (First Called). He had been a disciple of John the Baptist before following Christ. He brought Peter to Jesus and later brought the boy with the loaves and fishes to Jesus at the feeding of the five thousand.\n\nTradition holds he was crucified on an X-shaped cross at Patras in Greece — which became known as the 'Saint Andrew's Cross' (saltire) and appears on the flags of Scotland, Great Britain, and other nations.`,
    prayer: `We pray, O Lord,\nthat the intercession of the blessed Apostle Andrew\nmay protect us,\nfor to his guidance\nwe have dedicated ourselves.\nThrough Christ our Lord.\nAmen.`
  },
  "12-03": {
    name: "Saint Francis Xavier",
    subtitle: "Priest, Co-Patron of Missions",
    type: "Memorial",
    bio: `Saint Francis Xavier (1506–1552) was a Spanish Jesuit priest and co-founder of the Society of Jesus who became the greatest missionary since Saint Paul. In eleven years he baptized an estimated 30,000 people in India, Southeast Asia, and Japan.\n\nHe died on the island of Shangchuan, within sight of mainland China, which he had longed to evangelize but never reached. His uncorrupted body is enshrined in the Basilica of Bom Jesus in Goa, India, and the right arm that baptized thousands is venerated in Rome.\n\nPope Pius X declared him patron of all missions together with Saint Thérèse of Lisieux.`,
    prayer: `O God, who by the preaching of Saint Francis Xavier\nbrought many nations to Yourself,\ngrant that the faithful who venerate his glorious merits\nmay also imitate his example.\nThrough Christ our Lord.\nAmen.`
  },
  "12-06": {
    name: "Saint Nicholas",
    subtitle: "Bishop of Myra, Patron of Children",
    type: "Optional Memorial",
    bio: `Saint Nicholas (270–343) was Bishop of Myra in Lycia (modern Turkey) and one of the most beloved saints in both East and West. He attended the Council of Nicaea (325) and reportedly struck Arius in defense of Christ's divinity. He is famous for his extraordinary generosity — secretly providing dowries for three poor girls by tossing bags of gold through their window at night — the origin of the stockings and gifts of Christmas.\n\nHis reputation as a protector of children, sailors, merchants, and the unjustly accused spread throughout the world. In many northern European countries, children receive gifts on December 6, his feast day. The Dutch Sinterklaas became the English Santa Claus.`,
    prayer: `O God, You adorned Saint Nicholas\nwith countless miracles.\nGrant that through his intercession\nwe may be delivered from the fires of hell\nand directed towards the harbor of salvation.\nAmen.`
  },
  "12-07": {
    name: "Saint Ambrose",
    subtitle: "Bishop and Doctor of the Church, Governor of Milan",
    type: "Memorial",
    bio: `Saint Ambrose (339–397) was Governor of Milan when he was acclaimed Bishop by the people — though he was not yet baptized. He accepted the office reluctantly, was baptized and ordained within a week, and became one of the greatest bishops of the ancient Church.\n\nHe converted Saint Augustine, stood up to Emperor Theodosius and required him to do public penance for the Thessalonica massacre, and wrote hymns that transformed Christian worship. His Ambrosian Rite is still celebrated in Milan today. He is one of the four original Doctors of the Church.`,
    prayer: `O God, who adorned Saint Ambrose\nwith the virtues of a bishop\nand the eloquence of a teacher,\ngrant that by his example and prayer\nYour faithful may serve You faithfully\nand love You always.\nAmen.`
  },
  "12-08": {
    name: "The Immaculate Conception of the Blessed Virgin Mary",
    subtitle: "Solemnity — Mary conceived without original sin",
    type: "Solemnity",
    bio: `The Solemnity of the Immaculate Conception celebrates the dogma defined by Pope Pius IX on December 8, 1854: that the Blessed Virgin Mary was preserved from original sin from the first moment of her conception, through the anticipated merits of Jesus Christ.\n\nThis feast does not celebrate the virginal conception of Jesus (that is the Annunciation, March 25) but the conception of Mary herself — perfectly ordinary in its biology, but extraordinary in its grace. Mary was created in the state of grace that Adam and Eve had before the Fall, so that she could be a worthy dwelling for the Son of God.\n\nFour years after the definition of this dogma, Mary appeared to Saint Bernadette at Lourdes and identified herself as 'the Immaculate Conception' — a theological term the uneducated peasant girl would not have known.`,
    prayer: `O God, who by the Immaculate Conception of the Blessed Virgin\nprepared a worthy dwelling for Your Son,\ngrant that as You preserved her from every stain\nby virtue of the death of Your Son,\nwhich You foresaw,\nso, through her intercession,\nwe too may be cleansed and admitted to Your presence.\nThrough the same Christ our Lord.\nAmen.`
  },
  "12-09": {
    name: "Saint Juan Diego",
    subtitle: "Visionary of Our Lady of Guadalupe",
    type: "Optional Memorial",
    bio: `Saint Juan Diego (1474–1548) was a Nahua peasant from central Mexico who, on December 9 and 12, 1531, received apparitions of the Virgin Mary on Tepeyac Hill near Mexico City. Mary spoke to him in his own Nahuatl language, calling herself 'the perfect Virgin Holy Mary, Mother of the true God.'\n\nWhen Juan Diego presented Bishop Zumárraga with his tilma (cloak) filled with roses in December, the image of Our Lady of Guadalupe was miraculously imprinted on it. This image, still venerated in the Basilica of Our Lady of Guadalupe in Mexico City, has been the subject of extensive scientific study and defies scientific explanation.\n\nHe was canonized by Pope John Paul II in 2002 during a historic visit to Mexico City.`,
    prayer: `O God, who through Saint Juan Diego\nshowed the riches of Your love to your peoples,\ngrant by his intercession\nthat we who follow the counsel of Our Lady of Guadalupe\nmay ever seek You as our only Father.\nAmen.`
  },
  "12-11": {
    name: "Saint Damasus I",
    subtitle: "Pope, Patron of the Latin Bible",
    type: "Optional Memorial",
    bio: `Saint Damasus I (304–384) was Pope from 366 to 384 AD and made an extraordinary contribution to the Church: he commissioned Saint Jerome to produce the Latin Vulgate translation of the Bible. He also promoted the veneration of the Roman martyrs, inscribed their tombs with beautiful epigrams, and was a prolific poet. Under his pontificate, Latin definitively replaced Greek as the language of the Roman liturgy.`,
    prayer: `O God, whose servant Damasus\nloved the splendor of Your saints\nand glorified the martyrs with holy verses,\ngrant that we too may always cherish\nthe memory of Your holy ones.\nAmen.`
  },
  "12-12": {
    name: "Our Lady of Guadalupe",
    subtitle: "Patroness of the Americas, Empress of the Americas",
    type: "Feast",
    bio: `On December 12, 1531, the Virgin Mary appeared for the final time to Saint Juan Diego on Tepeyac Hill, asking for the construction of a church. When Juan Diego opened his tilma before Bishop Zumárraga, the miraculous image was revealed.\n\nOur Lady of Guadalupe became the great evangelizing image of the New World. Within seven years of the apparitions, some 9 million indigenous Mexicans converted to Christianity. Scientific analysis of the tilma has found that the image is not painted on any surface of the fabric, the image does not decay, and the eyes of the image contain what appear to be reflections of human figures.\n\nShe is officially Patroness and Empress of the Americas, venerated by over 500 million people. Her feast is one of the most widely celebrated in the Catholic world.`,
    prayer: `Our Lady of Guadalupe,\nmystical rose, intercede for the Church,\nprotect the Holy Father,\nhelp all those who invoke you\nin their necessities.\nSince you are the ever Virgin Mary\nand Mother of the true God,\nobtain for us from your most holy Son\nthe grace of keeping our faith,\nsweet hope in the midst of the bitterness of life,\nburning charity and the precious gift of final perseverance.\nAmen.`
  },
  "12-13": {
    name: "Saint Lucy",
    subtitle: "Virgin and Martyr, Patron of the Blind",
    type: "Memorial",
    bio: `Saint Lucy (died 304) was a young Christian woman from Syracuse, Sicily, martyred under Emperor Diocletian. Her name means 'light' in Latin. According to tradition, she devoted her virginity and fortune to God and was accused by a rejected suitor before the Roman governor. Various tortures failed to harm her — soldiers could not move her even with oxen.\n\nShe is one of seven women named in Eucharistic Prayer I and was one of the most popular saints of the Middle Ages. In Scandinavia, her feast is one of the most beloved celebrations of the year — observed with processions of white-robed girls wearing candle wreaths, bringing light in the darkest time of year.`,
    prayer: `O Lord, grant us Your light\nthrough the intercession of Saint Lucy\nthat our eyes may see the light of this world\nand the light of heaven.\nAmen.`
  },
  "12-14": {
    name: "Saint John of the Cross",
    subtitle: "Priest and Doctor of the Church, Mystic of the Dark Night",
    type: "Memorial",
    bio: `Saint John of the Cross (1542–1591) was a Spanish Carmelite priest and mystic who collaborated with Saint Teresa of Ávila in the reform of the Carmelite Order. For his efforts he was imprisoned by unreformed Carmelites for nine months in a tiny cell in Toledo — an experience he described as the 'dark night of the soul.'\n\nFrom this crucible emerged some of the greatest spiritual poetry and mystical theology in the history of Christian spirituality: The Ascent of Mount Carmel, The Dark Night of the Soul, The Spiritual Canticle, and The Living Flame of Love. Declared Doctor of the Church in 1926.`,
    prayer: `O God, who filled Saint John of the Cross\nwith a spirit of self-denial\nand love of the Cross,\ngrant that, following his example,\nwe may always seek only You\nand come one day to the light of Your glory.\nAmen.`
  },
  "12-21": {
    name: "Saint Peter Canisius",
    subtitle: "Priest and Doctor of the Church, Apostle of Germany",
    type: "Optional Memorial",
    bio: `Saint Peter Canisius (1521–1597) was a Dutch Jesuit priest who dedicated his life to the Catholic Reformation in German-speaking Europe. He produced the first popular Catholic catechism after the Council of Trent — the Catechismus Minor — which went through 200 editions and was translated into fifteen languages. He is considered the second apostle of Germany after Saint Boniface. Declared Doctor of the Church in 1925.`,
    prayer: `O Lord, strengthen us through Saint Peter Canisius\nwith the doctrine which he used to strengthen Your Church\nagainst the attacks of heresy.\nGrant that we may always be faithful\nto the faith which he defended.\nAmen.`
  },
  "12-23": {
    name: "Saint John of Kanty",
    subtitle: "Priest, Patron of Poland",
    type: "Optional Memorial",
    bio: `Saint John of Kanty (1390–1473) was a Polish priest and professor at the University of Kraków who was known for his personal austerity and extraordinary charity to the poor. He sold his possessions to give to the poor, wore rough garments, and reportedly walked to Rome four times. Despite his great learning, he bore with patience the false accusations of envious colleagues that temporarily removed him from his teaching post.`,
    prayer: `O God, who made Saint John of Kanty\noutstanding in the love of learning and charity to all,\ngrant, through his intercession,\nthat as we advance in knowledge of You\nwe may also grow in love for one another.\nAmen.`
  },
  "12-26": {
    name: "Saint Stephen",
    subtitle: "First Martyr, Protomartyr of the Church",
    type: "Feast",
    bio: `Saint Stephen was one of the seven deacons appointed by the Apostles to serve the community in Jerusalem (Acts 6). He was filled with grace and power, performed signs and wonders, and debated in the synagogues with extraordinary wisdom and the Holy Spirit. He was seized, brought before the Sanhedrin, and gave a magnificent speech reviewing the entire history of Israel's rejection of God's messengers.\n\nAs he was being stoned to death, he said 'I see the heavens opened and the Son of Man standing at the right hand of God' — and prayed for his killers as Jesus had done. Among those witnessing the stoning was Saul of Tarsus, the future Saint Paul.`,
    prayer: `Grant, Lord, we pray,\nthat we may imitate what we worship,\nand so learn to love even our enemies,\nfor we celebrate the heavenly birthday\nof a man who knew how to pray even for his persecutors.\nThrough Christ our Lord.\nAmen.`
  },
  "12-27": {
    name: "Saint John the Apostle",
    subtitle: "Apostle and Evangelist, the Beloved Disciple",
    type: "Feast",
    bio: `Saint John was the son of Zebedee and the brother of James. He is identified as 'the disciple whom Jesus loved' — the one who reclined next to Jesus at the Last Supper, stood at the foot of the Cross with Mary, ran to the tomb on Easter morning, and recognized the risen Christ at the Sea of Tiberias.\n\nHe is the author of the fourth Gospel, three letters, and traditionally the Book of Revelation. He is the only Apostle who was not martyred — he was exiled to the island of Patmos and lived to old age in Ephesus, caring for the Virgin Mary. He died in extreme old age, reportedly saying only: 'Little children, love one another.'`,
    prayer: `O God, who through the blessed Apostle John\nunlocked for us the secrets of Your Word,\ngrant us the grace to understand\nwhat he so sublimely taught.\nThrough Christ our Lord.\nAmen.`
  },
  "12-28": {
    name: "The Holy Innocents",
    subtitle: "Martyrs, First Martyrs for Christ",
    type: "Feast",
    bio: `The Holy Innocents are the children of Bethlehem and its surrounding district, aged two years and under, massacred by King Herod in his attempt to kill the newborn King of Kings (Matthew 2:16-18). Their number is unknown — perhaps 10 to 20 children given the size of Bethlehem.\n\nThese children were the first martyrs for Christ, though they did not die willingly — they died in place of Christ. Saint Augustine wrote: 'The children die for Christ, though they do not know it; their parents mourn for a martyr, but they themselves receive the crown.'\n\nThis feast is observed as a day of penance and prayer for the protection of all innocent life.`,
    prayer: `O God, whom the Holy Innocents confessed\nand proclaimed on this day,\nnot by speaking but by dying,\ngrant that the faith in You which we confess with our lips\nwe may also affirm by our way of life.\nThrough Christ our Lord.\nAmen.`
  },
  "12-29": {
    name: "Saint Thomas Becket",
    subtitle: "Bishop and Martyr of Canterbury",
    type: "Optional Memorial",
    bio: `Saint Thomas Becket (1118–1170) was Archbishop of Canterbury who was murdered in his own cathedral by knights of King Henry II on December 29, 1170. The conflict between them arose from Henry's attempt to subordinate Church courts to royal authority — a fundamental attack on the Church's independence.\n\nThomas refused to sign the Constitutions of Clarendon (which would have given the king control over Church affairs), was exiled for six years, returned under a false reconciliation, and was cut down at the altar of Canterbury Cathedral. His murder shocked all of Christendom and he was canonized just two years later. Henry II did public penance at his tomb.`,
    prayer: `O God, for the sake of whose Church\nthe glorious Bishop Thomas Becket\nfell by the sword of wicked men,\ngrant that all who implore his aid\nmay obtain the good effect of their petition.\nThrough Christ our Lord.\nAmen.`
  },
  "12-31": {
    name: "Pope Saint Sylvester I",
    subtitle: "Pope who Oversaw the First Christian Emperor",
    type: "Optional Memorial",
    bio: `Saint Sylvester I was Pope from 314 to 335 AD — one of the longest pontificates in early Church history. His papacy coincided with the reign of Emperor Constantine, the first Christian emperor. Under Sylvester, the Council of Nicaea (325) defined the divinity of Christ, the great basilicas were built in Rome and the Holy Land, and Christianity became a public religion for the first time.\n\nOn the last day of the year, the Church gives thanks for the year past and entrusts the coming year to God's mercy through the intercession of Saint Sylvester.`,
    prayer: `Lord God, as this year draws to a close,\nwe thank You for Your gifts and mercies.\nThrough the intercession of Saint Sylvester,\nforgive our failures,\nreceive our gratitude,\nand guide us into the new year\naccording to Your holy will.\nAmen.`
  },
};

function getSaintForDate(month, day) {
  const key = String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
  return SAINTS_DATA[key] || null;
}

function getSaintsForMonth(month) {
  const monthStr = String(month).padStart(2, '0');
  return Object.entries(SAINTS_DATA)
    .filter(([key]) => key.startsWith(monthStr + '-'))
    .map(([key, data]) => {
      const [m, d] = key.split('-');
      return { ...data, month: parseInt(m), day: parseInt(d), key };
    })
    .sort((a, b) => a.day - b.day);
}
