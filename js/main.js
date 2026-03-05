// =====================
// NAVIGATION
// =====================
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links button, .nav-links a').forEach(btn => btn.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =====================
// WORKS OF MERCY MODAL
// =====================
const WORKS_DATA = {
  feed: {
    title: "Feed the Hungry",
    scripture: `"For I was hungry and you gave me food, I was thirsty and you gave me drink." — Matthew 25:35`,
    content: `Feeding the hungry is the first and most fundamental of the Corporal Works of Mercy. It is a direct response to the physical need for food that every human person shares. When we feed the hungry, we are feeding Christ Himself, as He taught us in the Gospel of Matthew.\n\nThis work of mercy extends far beyond personal charity. It calls us to examine the systemic causes of hunger — poverty, inequality, food waste — and to advocate for change. More than one billion people in our world suffer from food insecurity today.\n\nPractical ways to live this work: donate to food banks, volunteer at soup kitchens, support organizations that address food insecurity locally and globally, reduce food waste in your own home, share your meals with neighbors in need.\n\nThe Eucharist itself is the ultimate fulfillment of this work — Jesus gives us His own Body as the Bread of Life, nourishing us for eternal life (John 6:35).`
  },
  drink: {
    title: "Give Drink to the Thirsty",
    scripture: `"I was thirsty and you gave me drink." — Matthew 25:35`,
    content: `Water is life. The simple act of offering a drink of water to a thirsty person is an act of profound mercy, for every human life depends absolutely on access to clean water.\n\nIn many parts of our world — including parts of Asia and Africa — access to safe drinking water remains a critical challenge. Millions of people, especially children, die each year from waterborne diseases caused by contaminated water.\n\nJesus asked the Samaritan woman for water at the well (John 4), and in return offered her "living water" — Himself. This work of mercy points to our ultimate thirst, which only God can satisfy.\n\nPractical ways to live this work: support organizations providing clean water in developing nations, advocate for clean water policies, offer hospitality to guests, and nourish your own spiritual thirst through prayer and the sacraments.`
  },
  clothe: {
    title: "Clothe the Naked",
    scripture: `"I was naked and you clothed me." — Matthew 25:36`,
    content: `Clothing is a basic human necessity, but for millions it is a daily struggle. Clothing covers our vulnerability, protects our dignity, and expresses our humanity. To clothe those who lack adequate clothing is to honor the image of God in every person.\n\nThis work of mercy also calls us to clothe people in their spiritual nakedness — to protect the dignity and reputation of others, to refuse to ridicule or shame those who are vulnerable, and to defend those who are exposed to contempt.\n\nSaint Francis of Assisi is a powerful model of this mercy: he stripped off his fine merchant's clothes and gave them to a poor man he met on the road — a turning point in his conversion.\n\nPractical ways to live this work: donate clothing to shelters and aid organizations, participate in clothing drives, protect the dignity and reputation of others in your speech and actions.`
  },
  shelter: {
    title: "Shelter the Homeless",
    scripture: `"I was a stranger and you welcomed me." — Matthew 25:35`,
    content: `Every human being deserves a safe and stable place to call home. Homelessness strips people of security, dignity, and belonging — the very foundations of a dignified human life. To shelter the homeless is to offer them what every person needs: a place to belong.\n\nThe Holy Family themselves were refugees — they fled to Egypt to escape Herod's violence. Jesus was born in a stable because "there was no room in the inn." God Himself experienced homelessness, and in every homeless person we meet His face.\n\nThis work of mercy also includes welcoming strangers and immigrants, offering hospitality to travelers, and advocating for just housing policies.\n\nPractical ways to live this work: support homeless shelters, welcome refugees and immigrants, offer hospitality to those who are lonely and isolated, advocate for affordable housing, and open your home with generosity.`
  },
  sick: {
    title: "Visit the Sick",
    scripture: `"I was sick and you visited me." — Matthew 25:36`,
    content: `Illness is one of the most isolating human experiences. When we are sick, we are vulnerable, frightened, and often forgotten. The presence of another person — a friend, a stranger, a volunteer — is itself a form of healing.\n\nJesus devoted much of His public ministry to healing the sick (Matthew 4:23-24), showing that care for physical health is integral to the proclamation of the Kingdom of God. He also healed on the Sabbath, teaching us that mercy has no day off.\n\nThis work of mercy extends to visiting the elderly in nursing homes, the imprisoned in hospitals, and those suffering from mental illness. It also means praying for the sick and advocating for access to healthcare for all.\n\nPractical ways to live this work: visit elderly relatives and neighbors, volunteer in hospitals, bring Holy Communion to the homebound, donate to medical charities, and most of all — simply be present to those who are suffering.`
  },
  prison: {
    title: "Visit the Imprisoned",
    scripture: `"I was in prison and you came to me." — Matthew 25:36`,
    content: `Those who are imprisoned are among the most forgotten and marginalized members of society. They are often considered to have forfeited their right to compassion. Yet Jesus explicitly includes them in His list of those in whom He is present.\n\nPrison ministry is one of the most challenging and most needed forms of Christian service. It means seeing the human dignity in every person, regardless of what they have done. It does not ignore the reality of crime and its victims but recognizes that every human being carries the image of God.\n\nSaint Paul wrote many of his greatest letters from prison. The martyrs found Christ in their prison cells. This work of mercy calls us to remember that incarceration is not the end of a person's story.\n\nPractical ways to live this work: support prison ministry organizations, write to prisoners through pen-pal programs, advocate for prison reform, support families of the incarcerated, and pray regularly for prisoners, victims, and those who work in the justice system.`
  },
  bury: {
    title: "Bury the Dead",
    scripture: `"As for me, when I walked to the grave I wept for those in trouble." — Job 30:25`,
    content: `The burial of the dead is one of the oldest human rituals, found in every culture and civilization. From the beginning, human beings have recognized that the body deserves dignity even after death — because it is not mere matter, but a temple that once held a human soul.\n\nFor Christians, the burial of the dead has added significance: we believe in the resurrection of the body. The body that is buried will one day rise. We treat the bodies of the dead with reverence because they will be glorified.\n\nThis work of mercy also includes accompanying the grieving, attending funerals, praying for the dead, and supporting bereaved families. It means refusing to abandon people at the moment of their greatest vulnerability.\n\nTobias's burial of the dead despite great personal risk (Tobit 1-2) is the great Old Testament model of this mercy. The anointing of Jesus' body by the women who loved Him is its New Testament fulfillment.\n\nPractical ways to live this work: attend funerals of friends and acquaintances, pray for the souls of the dead, support grieving families, and offer Masses for the deceased.`
  }
};

function openWorkModal(workKey) {
  const work = WORKS_DATA[workKey];
  if (!work) return;
  document.getElementById('modal-title').textContent = work.title;
  document.getElementById('modal-scripture').textContent = work.scripture;
  document.getElementById('modal-body').innerHTML = work.content.split('\n\n').map(p => `<p>${p}</p>`).join('');
  document.getElementById('work-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeWorkModal() {
  document.getElementById('work-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// =====================
// JOURNAL (JESUS ENCOUNTER)
// =====================
let journalEntries = [];
let uploadedPhotos = [];

function loadJournal() {
  try {
    const saved = localStorage.getItem('hisstory_journal');
    journalEntries = saved ? JSON.parse(saved) : [];
  } catch(e) {
    journalEntries = [];
  }
  renderEntries();
}

function saveJournal() {
  try {
    localStorage.setItem('hisstory_journal', JSON.stringify(journalEntries));
  } catch(e) {}
}

function handlePhotoUpload(event) {
  const files = Array.from(event.target.files);
  uploadedPhotos = [];
  const preview = document.getElementById('photo-preview');
  preview.innerHTML = '';

  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedPhotos.push(e.target.result);
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

function submitJournalEntry() {
  const title = document.getElementById('entry-title').value.trim();
  const body = document.getElementById('entry-body').value.trim();
  if (!title || !body) {
    alert('Please fill in the title and your reflection before saving.');
    return;
  }

  const now = new Date();
  const entry = {
    id: Date.now(),
    title,
    body,
    photos: [...uploadedPhotos],
    date: now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    timestamp: now.getTime()
  };

  journalEntries.unshift(entry);
  saveJournal();
  renderEntries();

  // Reset form
  document.getElementById('entry-title').value = '';
  document.getElementById('entry-body').value = '';
  document.getElementById('photo-preview').innerHTML = '';
  document.getElementById('photo-upload-input').value = '';
  uploadedPhotos = [];

  // Scroll to entries
  document.getElementById('entries-list').scrollIntoView({ behavior: 'smooth' });
}

function deleteEntry(id) {
  if (!confirm('Delete this journal entry?')) return;
  journalEntries = journalEntries.filter(e => e.id !== id);
  saveJournal();
  renderEntries();
}

function renderEntries() {
  const container = document.getElementById('entries-list');
  const count = document.getElementById('entries-count');
  count.textContent = `${journalEntries.length} ${journalEntries.length === 1 ? 'entry' : 'entries'}`;

  if (journalEntries.length === 0) {
    container.innerHTML = '<div class="no-entries">Your encounters with Jesus will appear here.<br>Begin writing your first reflection above.</div>';
    return;
  }

  container.innerHTML = journalEntries.map(entry => `
    <div class="journal-entry">
      <div class="entry-date">${entry.date}</div>
      <div class="entry-title">${escapeHtml(entry.title)}</div>
      <div class="entry-body">${escapeHtml(entry.body).replace(/\n/g, '<br>')}</div>
      ${entry.photos && entry.photos.length > 0 ? `
        <div class="entry-images">
          ${entry.photos.map((src, i) => `<img src="${src}" alt="Photo ${i+1}" onclick="openLightbox('${src}')" title="Click to enlarge" style="width:280px;height:280px;object-fit:cover;">`).join('')}
        </div>` : ''}

    </div>
  `).join('');
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// =====================
// DAILY SAINTS
// =====================
function renderSaints(month) {
  const container = document.getElementById('saints-list');
  const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June'];
  const monthAbbr = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const saints = getSaintsForMonth(month);

  if (saints.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--gray);padding:40px;font-style:italic;">No feast days listed for this month.</p>';
    return;
  }

  container.innerHTML = saints.map(saint => `
    <div class="saint-card visible" id="saint-${saint.key}">
      <div class="saint-card-header">
        <div class="saint-date-badge">
          <span class="day">${saint.day}</span>
          <span class="month-abbr">${monthAbbr[month]}</span>
        </div>
        <div class="saint-info">
          <div class="saint-feast-type">${saint.type}</div>
          <div class="saint-name">${saint.name}</div>
          <div class="saint-subtitle">${saint.subtitle}</div>
        </div>
      </div>
      <button class="saint-expand-btn" onclick="toggleSaint('${saint.key}')">
        <span id="expand-label-${saint.key}">Read More ↓</span>
      </button>
      <div class="saint-content">
        <div class="saint-bio" id="saint-bio-${saint.key}">
          ${saint.bio.split('\n\n').map(p => `<p style="margin-bottom:14px">${p}</p>`).join('')}
          <div class="saint-prayer-box" id="saint-prayer-${saint.key}">
            <h4>Prayer</h4>
            <p>${saint.prayer.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleSaint(key) {
  const bio = document.getElementById('saint-bio-' + key);
  const prayer = document.getElementById('saint-prayer-' + key);
  const label = document.getElementById('expand-label-' + key);

  if (bio.classList.contains('open')) {
    bio.classList.remove('open');
    prayer.classList.remove('open');
    label.textContent = 'Read More ↓';
  } else {
    bio.classList.add('open');
    prayer.classList.add('open');
    label.textContent = 'Close ↑';
  }
}

function switchMonth(month) {
  document.querySelectorAll('.month-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-month="${month}"]`).classList.add('active');
  renderSaints(month);
}

// =====================
// PRAYERS
// =====================
function showPrayer(prayerId) {
  document.querySelectorAll('.prayer-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.prayer-nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('prayer-' + prayerId).classList.add('active');
  document.querySelector(`[data-prayer="${prayerId}"]`).classList.add('active');
}

function renderPrayers() {
  // Rosary Guide
  const guideContainer = document.getElementById('rosary-guide-steps');
  guideContainer.innerHTML = PRAYERS_DATA.rosary.guide.map(step => `
    <div class="step">
      <div class="step-num">${step.num}</div>
      <div class="step-text">
        <strong>${step.title}</strong>
        ${step.text.replace(/\n/g, '<br>')}
      </div>
    </div>
  `).join('');

  // Rosary Mysteries
  const mysteriesContainer = document.getElementById('rosary-mysteries');
  const m = PRAYERS_DATA.rosary.mysteries;

  mysteriesContainer.innerHTML = Object.entries(m).map(([key, data]) => `
    <div class="rosary-mystery">
      <h4>${data.title}</h4>
      <div class="day-tags">
        ${data.days.split(' & ').map(d => `<span class="day-tag">${d}</span>`).join('')}
      </div>
      <ol>
        ${data.mysteries.map(myst => `
          <li>
            <strong style="color:var(--white);display:block;margin-bottom:4px">${myst.name}</strong>
            <span style="font-size:0.85rem;color:var(--gold-dim);display:block;margin-bottom:4px">${myst.verse} — Fruit: ${myst.fruit}</span>
            ${myst.desc}
          </li>
        `).join('')}
      </ol>
    </div>
  `).join('');

  // Simple text prayers
  const simplePrayers = ['angelus', 'divine_mercy', 'saint_michael', 'memorare', 'morning_offering',
    'act_of_contrition', 'act_of_faith', 'act_of_hope', 'act_of_love',
    'come_holy_spirit', 'jesus_prayer', 'blessing_before_meals', 'prayer_for_dead'];

  simplePrayers.forEach(key => {
    const data = PRAYERS_DATA[key];
    const container = document.getElementById('prayer-text-' + key);
    if (!container || !data) return;

    let html = '';
    if (data.history || data.intro) {
      html += `<div class="prayer-instruction">${(data.history || data.intro).replace(/\n/g, '<br>')}</div>`;
    }
    html += `<div class="prayer-text">${data.text.replace(/\n/g, '<br>')}</div>`;
    container.innerHTML = html;
  });
}

// =====================
// LIGHTBOX
// =====================
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// =====================
// SCROLL TOP
// =====================
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scroll-top');
  if (window.scrollY > 400) btn.classList.add('visible');
  else btn.classList.remove('visible');
});

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
  loadJournal();
  renderSaints(3); // Default to March
  renderPrayers();

  // Set current month based on today
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  if (currentMonth >= 3 && currentMonth <= 6) {
    switchMonth(currentMonth);
  }

  // Close modal on overlay click
  document.getElementById('work-modal').addEventListener('click', function(e) {
    if (e.target === this) closeWorkModal();
  });

  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });
});

// =====================
// GOSPEL READINGS
// =====================
function renderGospel(month) {
  const container = document.getElementById('gospel-list');
  const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];
  const monthAbbr = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                     'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const readings = getGospelForMonth(month);

  if (!readings || readings.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--gray);padding:40px;font-style:italic;">No readings listed for this month.</p>';
    return;
  }

  container.innerHTML = readings.map(r => `
    <div class="saint-card visible gospel-card" id="gospel-${r.key}">
      <div class="saint-card-header">
        <div class="saint-date-badge" style="background:var(--gold)">
          <span class="day">${r.day}</span>
          <span class="month-abbr">${monthAbbr[month]}</span>
        </div>
        <div class="saint-info">
          <div class="saint-feast-type gospel-season">${r.season}</div>
          <div class="saint-name" style="font-size:0.95rem">${r.title}</div>
          <div class="saint-subtitle gospel-ref">${r.ref}</div>
        </div>
      </div>
      <button class="saint-expand-btn" onclick="toggleGospel('${r.key}')">
        <span id="gospel-expand-${r.key}">Read Gospel ↓</span>
      </button>
      <div class="saint-content">
        <div class="saint-bio" id="gospel-bio-${r.key}">
          <blockquote class="gospel-verse">"${r.verse}"</blockquote>
          <p style="font-family:'Playfair Display',serif;font-size:1rem;color:#bbb8b0;line-height:1.85;">${r.summary}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleGospel(key) {
  const bio = document.getElementById('gospel-bio-' + key);
  const label = document.getElementById('gospel-expand-' + key);
  if (bio.classList.contains('open')) {
    bio.classList.remove('open');
    label.textContent = 'Read Gospel ↓';
  } else {
    bio.classList.add('open');
    label.textContent = 'Close ↑';
  }
}

function switchGospelMonth(month) {
  document.querySelectorAll('[data-gmonth]').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`[data-gmonth="${month}"]`);
  if (btn) btn.classList.add('active');
  renderGospel(month);
}
