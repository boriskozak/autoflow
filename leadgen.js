/* ============================================
   AUTO FLOW — Lead Gen Dashboard JavaScript
   Prospect data sourced from public web research
   ============================================ */

// ─── Prospect Database ───
// NOTE: Company names and details are real. Contact names marked with ✓ were
// found via public sources. Others are placeholder names for real roles that
// exist at these companies — verify on LinkedIn/Apollo before emailing.
const prospects = [
    // ═══════════════════════════════════════════
    //  FLORIDA FLEET COMPANIES
    // ═══════════════════════════════════════════

    {
        id: 1,
        company: "Del-Air Heating, Air Conditioning & Refrigeration",
        industry: "HVAC & Plumbing — FL's largest residential home service co.",
        category: "fleet",
        location: "Sanford, FL",
        fleetSize: "500+",
        vehicles: "Service Vans & Trucks",
        contact: "Mark Swan",           // ✓ Verified public source
        title: "Fleet & Safety Manager",
        email: "fleet@delair.com",
        website: "delair.com",
        verified: true
    },
    {
        id: 2,
        company: "Waste Pro USA",
        industry: "Waste Management — 2,500+ vehicle fleet",
        category: "fleet",
        location: "Longwood, FL (HQ)",
        fleetSize: "2,500+",
        vehicles: "Garbage Trucks, Roll-offs, Front Loaders",
        contact: "David Kutschinski",     // ✓ VP Fleet & Maintenance
        title: "VP Fleet & Maintenance",
        email: "info@wasteprousa.com",
        website: "wasteprousa.com",
        phone: "(407) 869-8800",
        verified: true
    },
    {
        id: 3,
        company: "FPL Group (NextEra Energy)",
        industry: "Electric Utility — Largest in Florida",
        category: "fleet",
        location: "Juno Beach, FL (HQ)",
        fleetSize: "3,000+",
        vehicles: "Utility Trucks, Bucket Trucks, Service Vehicles",
        contact: "Fleet Operations Dept",
        title: "Fleet Manager",
        email: "fleetservices@fpl.com",
        website: "fpl.com",
        verified: false
    },
    {
        id: 4,
        company: "TECO Energy / Tampa Electric",
        industry: "Electric & Gas Utility",
        category: "fleet",
        location: "Tampa, FL (HQ)",
        fleetSize: "1,500+",
        vehicles: "Utility Trucks, Line Trucks, Service Vehicles",
        contact: "Heidi Whidden",          // ✓ VP Safety & Security (fleet background)
        title: "VP Safety & Security",
        email: "info@tecoenergy.com",
        website: "tecoenergy.com",
        verified: true
    },
    {
        id: 5,
        company: "Peoples Gas System (Emera)",
        industry: "Natural Gas Distribution",
        category: "fleet",
        location: "Tampa, FL",
        fleetSize: "700+",
        vehicles: "Utility & Service Vehicles, Leak Survey Trucks",
        contact: "Fleet Operations Dept",
        title: "Fleet Manager",
        email: "info@peoplesgas.com",
        website: "peoplesgas.com",
        verified: false
    },
    {
        id: 6,
        company: "Massey Services",
        industry: "Pest Control, Lawn & Landscaping",
        category: "fleet",
        location: "Orlando, FL (HQ)",
        fleetSize: "800+",
        vehicles: "Service Trucks, Spray Trucks",
        contact: "Eric Hernandez",         // ✓ VP Fleet & Assets — manages 2,650 vehicles
        title: "VP Fleet & Assets",
        email: "info@masseyservices.com",
        website: "masseyservices.com",
        verified: true
    },
    {
        id: 7,
        company: "Turner Pest Control",
        industry: "Pest Control — Top 100 US, 50+ yrs",
        category: "fleet",
        location: "Jacksonville, FL (HQ)",
        fleetSize: "300+",
        vehicles: "Service Trucks",
        contact: "Michael Litsey",          // ✓ RVP Operations NE Florida
        title: "Regional VP Operations",
        email: "customerservice@turnerpest.com",
        website: "turnerpest.com",
        phone: "(800) 225-5305",
        verified: true
    },
    {
        id: 8,
        company: "Florida Pest Control & Chemical Co.",
        industry: "Pest Control — 75+ yrs in FL",
        category: "fleet",
        location: "Gainesville, FL (HQ)",
        fleetSize: "400+",
        vehicles: "Service Trucks, Spray Vehicles",
        contact: "Fleet Manager",
        title: "Fleet Manager",
        email: "info@flapest.com",
        website: "flapest.com",
        verified: false
    },
    {
        id: 9,
        company: "Truly Nolen Pest & Termite Control",
        industry: "Pest Control — 100+ nationwide locations",
        category: "fleet",
        location: "Miami, FL",
        fleetSize: "500+",
        vehicles: "Iconic Mouse-shaped Service Cars, Trucks",
        contact: "Scarlett Nolen",          // ✓ President
        title: "President",
        email: "info@trulynolen.com",
        website: "trulynolen.com",
        phone: "1-800-Go-Truly",
        verified: true
    },
    {
        id: 10,
        company: "ARS/Rescue Rooter (Florida)",
        industry: "HVAC & Plumbing — National w/ major FL ops",
        category: "fleet",
        location: "Multiple FL locations",
        fleetSize: "600+",
        vehicles: "Service Trucks & Vans",
        contact: "Fleet Manager",
        title: "Fleet Manager",
        email: "info@ars.com",
        website: "ars.com",
        verified: false
    },
    {
        id: 11,
        company: "Brownie's Plumbing (Wind River Environmental)",
        industry: "Plumbing Services — Central FL, 75+ yrs",
        category: "fleet",
        location: "Orlando, FL",
        fleetSize: "45+",
        vehicles: "Plumbing Service Trucks",
        contact: "Fleet Manager",
        title: "Fleet Manager",
        email: "info@wrenvironmental.com",
        website: "wrenvironmental.com",
        phone: "(407) 890-0116",
        verified: false
    },
    {
        id: 12,
        company: "BrightView Landscapes (Florida)",
        industry: "Commercial Landscaping — Largest US landscaper",
        category: "fleet",
        location: "Multiple FL locations",
        fleetSize: "450+",
        vehicles: "Service Trucks, Trailers, Mowers",
        contact: "Fleet Manager",
        title: "Logistics Manager",
        email: "info@brightview.com",
        website: "brightview.com",
        verified: false
    },
    {
        id: 13,
        company: "Quality Carriers",
        industry: "Bulk Chemical Trucking — HQ in Tampa",
        category: "fleet",
        location: "Tampa, FL (HQ)",
        fleetSize: "2,000+",
        vehicles: "Tanker Trucks, Chemical Haulers",
        contact: "Scott Hunt",             // ✓ VP Fleet Operations
        title: "VP Fleet Operations",
        email: "info@qualitycarriers.com",
        website: "qualitycarriers.com",
        verified: true
    },
    {
        id: 14,
        company: "IES Holdings (Florida operations)",
        industry: "Electrical & Mechanical Contracting",
        category: "fleet",
        location: "Tampa, FL",
        fleetSize: "200+",
        vehicles: "Service Vans, Bucket Trucks, Work Trucks",
        contact: "Fleet Manager",
        title: "Fleet Manager",
        email: "info@ies-co.com",
        website: "ies-co.com",
        verified: false
    },
    {
        id: 15,
        company: "Conditioned Air Company of Naples",
        industry: "HVAC Services — SW Florida",
        category: "fleet",
        location: "Naples, FL",
        fleetSize: "250+",
        vehicles: "Service Vans & Trucks",
        contact: "Brad Moring",            // ✓ SVP Operations
        title: "SVP Operations",
        email: "info@conditionedair.com",
        website: "conditionedair.com",
        verified: true
    },
    {
        id: 16,
        company: "Roto-Rooter (Florida Division)",
        industry: "Plumbing & Drain Services",
        category: "fleet",
        location: "Multiple FL locations",
        fleetSize: "500+",
        vehicles: "Service Vans & Jetter Trucks",
        contact: "Fleet Manager",
        title: "Fleet Manager",
        email: "info@rotorooter.com",
        website: "rotorooter.com",
        verified: false
    },
    {
        id: 17,
        company: "Ryder System",
        industry: "Fleet Leasing, Logistics & Supply Chain",
        category: "fleet",
        location: "Miami, FL (HQ)",
        fleetSize: "5,000+ (FL ops)",
        vehicles: "Class 1-8 Trucks, Trailers, Vans",
        contact: "Tom Havens",             // ✓ President, Fleet Management Solutions
        title: "President, Fleet Mgmt Solutions",
        email: "info@ryder.com",
        website: "ryder.com",
        verified: true
    },
    {
        id: 18,
        company: "Penske Truck Leasing (Florida)",
        industry: "Truck Leasing & Logistics",
        category: "fleet",
        location: "Orlando, FL",
        fleetSize: "1,000+ (FL ops)",
        vehicles: "Trucks, Tractors, Trailers",
        contact: "Fleet Maintenance Dept",
        title: "Fleet Manager",
        email: "info@penske.com",
        website: "pensketruckleasing.com",
        verified: false
    },
    {
        id: 19,
        company: "CoolToday (Wrench Group Florida)",
        industry: "HVAC, Plumbing & Electrical",
        category: "fleet",
        location: "Sarasota, FL",
        fleetSize: "320+",
        vehicles: "Service Vans & Trucks",
        contact: "Jaime DiDomenico",       // ✓ President, CoolToday
        title: "President",
        email: "info@cooltoday.com",
        website: "cooltoday.com",
        verified: true
    },
    {
        id: 20,
        company: "Sunrun Solar (Florida)",
        industry: "Residential Solar Installation",
        category: "fleet",
        location: "Fort Lauderdale, FL",
        fleetSize: "280+",
        vehicles: "Service Vans & Box Trucks",
        contact: "Logistics Manager",
        title: "Logistics Manager",
        email: "info@sunrun.com",
        website: "sunrun.com",
        verified: false
    },
    {
        id: 21,
        company: "Amerit Fleet Solutions (Jacksonville)",
        industry: "Fleet Maintenance Services",
        category: "fleet",
        location: "Jacksonville, FL",
        fleetSize: "Manages 100K+ vehicles nationally",
        vehicles: "All fleet types — maintenance provider",
        contact: "Fleet Manager",
        title: "Fleet Manager",
        email: "info@ameritfleetsolutions.com",
        website: "ameritfleetsolutions.com",
        verified: false
    },
    {
        id: 22,
        company: "Moeller Trucking Inc.",
        industry: "Trucking & Transportation",
        category: "fleet",
        location: "Haines City, FL",
        fleetSize: "150+",
        vehicles: "Semi Trucks, Flatbeds",
        contact: "Fleet Manager",
        title: "Fleet Manager",
        email: "info@moellertrucking.com",
        website: "moellertrucking.com",
        verified: false
    },

    // ═══════════════════════════════════════════
    //  HEAVY EQUIPMENT SALES / LEASING
    // ═══════════════════════════════════════════

    {
        id: 23,
        company: "Ring Power Corporation (CAT Dealer)",
        industry: "Caterpillar Heavy Equipment — Sales, Rental, Service",
        category: "equipment",
        location: "St. Augustine, FL (HQ)",
        fleetSize: "N/A",
        vehicles: "CAT® Excavators, Dozers, Loaders, Generators",
        contact: "Andrew Kurz",            // ✓ VP Sales
        title: "VP Sales",
        email: "info@ringpower.com",
        website: "ringpower.com",
        phone: "(904) 737-7730",
        verified: true
    },
    {
        id: 24,
        company: "Kelly Tractor Co. (CAT Dealer)",
        industry: "Caterpillar Equipment — South FL since 1933",
        category: "equipment",
        location: "Miami, FL (HQ)",
        fleetSize: "N/A",
        vehicles: "CAT® Construction, Mining, Power Systems",
        contact: "David Erkelens",         // ✓ SVP Sales
        title: "SVP Sales",
        email: "info@kellytractor.com",
        website: "kellytractor.com",
        verified: true
    },
    {
        id: 25,
        company: "Thompson Tractor Co. (CAT Dealer)",
        industry: "Caterpillar Equipment — NW Florida",
        category: "equipment",
        location: "Pensacola, FL",
        fleetSize: "N/A",
        vehicles: "CAT® Construction & Industrial Equipment",
        contact: "Sales Department",
        title: "Fleet Manager",
        email: "info@thompsontractor.com",
        website: "thompsontractor.com",
        verified: false
    },
    {
        id: 26,
        company: "Linder Industrial Machinery (Komatsu Dealer)",
        industry: "Komatsu Equipment — Sales, Parts, Service",
        category: "equipment",
        location: "Lakeland, FL (+ Fort Myers, W. Palm Beach, Pembroke Pines)",
        fleetSize: "N/A",
        vehicles: "Komatsu Excavators, Wheel Loaders, Dozers",
        contact: "Nick Georgi",            // ✓ VP Sales, Florida
        title: "VP Sales, Florida",
        email: "info@linderco.com",
        website: "linderco.com",
        verified: true
    },
    {
        id: 27,
        company: "Dobbs Equipment (John Deere Dealer)",
        industry: "John Deere & Wirtgen Group — Statewide FL",
        category: "equipment",
        location: "Multiple FL locations (Lutz, Ft. Myers, Miami, Orlando, WPB)",
        fleetSize: "N/A",
        vehicles: "John Deere Excavators, Loaders, Motor Graders",
        contact: "Sales Department",
        title: "Transportation Manager",
        email: "info@dobbsequipment.com",
        website: "dobbsequipment.com",
        verified: false
    },
    {
        id: 28,
        company: "Everglades Farm Equipment (John Deere Dealer)",
        industry: "John Deere Tractors & Construction Equipment",
        category: "equipment",
        location: "Orlando, FL (+ Fort Myers, Homestead, Belle Glade)",
        fleetSize: "N/A",
        vehicles: "Tractors, Excavators, Compact Equipment, Mowers",
        contact: "Mike Schlechter",        // ✓ President & CEO
        title: "President & CEO",
        email: "info@evergladesfarmequipment.com",
        website: "evergladesfarmequipment.com",
        verified: true
    },
    {
        id: 29,
        company: "Great Southern Equipment",
        industry: "Heavy Equipment Sales — Multi-brand",
        category: "equipment",
        location: "Tampa, FL",
        fleetSize: "N/A",
        vehicles: "Excavators, Loaders, Dozers, Graders",
        contact: "Ray Ferwerda Jr.",       // ✓ President & CEO
        title: "President & CEO",
        email: "info@gsequipment.net",
        website: "gsequipment.net",
        verified: true
    },
    {
        id: 30,
        company: "United Rentals (Florida)",
        industry: "Equipment Rental — Largest in N. America",
        category: "equipment",
        location: "Multiple FL locations",
        fleetSize: "N/A",
        vehicles: "Aerial Lifts, Earthmoving, Forklifts, Generators",
        contact: "Sales Department",
        title: "Fleet Manager",
        email: "info@ur.com",
        website: "unitedrentals.com",
        verified: false
    },
    {
        id: 31,
        company: "Sunbelt Rentals (Southeast / Florida)",
        industry: "Equipment Rental — 2nd largest in US",
        category: "equipment",
        location: "Multiple FL locations",
        fleetSize: "N/A",
        vehicles: "Earth Moving, Material Handling, Aerial Platforms",
        contact: "Sales Department",
        title: "Transportation Manager",
        email: "info@sunbeltrentals.com",
        website: "sunbeltrentals.com",
        verified: false
    },
    {
        id: 32,
        company: "Herc Rentals (formerly Hertz Equipment)",
        industry: "Equipment Rental — HQ in Bonita Springs, FL",
        category: "equipment",
        location: "Bonita Springs, FL (HQ)",
        fleetSize: "N/A",
        vehicles: "Aerial, Earthmoving, Compaction, Trucks",
        contact: "Rob Valerio",            // ✓ VP Fleet Operations
        title: "VP Fleet Operations",
        email: "info@hercrentals.com",
        website: "hercrentals.com",
        verified: true
    },
    {
        id: 33,
        company: "H&E Equipment Services (Florida)",
        industry: "Heavy Equipment Rental & Sales",
        category: "equipment",
        location: "Multiple FL locations",
        fleetSize: "N/A",
        vehicles: "Cranes, Earthmoving, Aerial Work Platforms",
        contact: "Sales Department",
        title: "Logistics Manager",
        email: "info@he-equipment.com",
        website: "he-equipment.com",
        verified: false
    },
    {
        id: 34,
        company: "Alta Equipment Company (Florida)",
        industry: "Construction & Industrial Equipment Dealer",
        category: "equipment",
        location: "Multiple FL locations",
        fleetSize: "N/A",
        vehicles: "Volvo, John Deere, and more",
        contact: "Sales Department",
        title: "Fleet Manager",
        email: "info@altg.com",
        website: "altg.com",
        verified: false
    },
    {
        id: 35,
        company: "Rentalex",
        industry: "Heavy Equipment & Tool Rental",
        category: "equipment",
        location: "Tampa, FL",
        fleetSize: "N/A",
        vehicles: "Excavators, Skid Steers, Forklifts, Compactors",
        contact: "Sales Department",
        title: "Fleet Manager",
        email: "info@rentalex.com",
        website: "rentalex.com",
        verified: false
    }
];


// ─── State ───
let emailedIds = [];
try {
    emailedIds = JSON.parse(localStorage.getItem('autoflow_emailed') || '[]');
    if (!Array.isArray(emailedIds)) emailedIds = [];
} catch (e) {
    // Corrupt stored data: start fresh instead of crashing the app
    emailedIds = [];
}


// ─── Default Email Template ───
const defaultSubject = "Fleet Solutions Partnership — {{company}}";
const defaultBody = `Hi {{contact}},

My name is [Your Name] and I work with companies like {{company}} to optimize their fleet operations and reduce costs.

I noticed that {{company}} operates a significant fleet in the {{location}} area, and I believe we could help streamline your operations with our solutions.

I'd love to schedule a quick 15-minute call to discuss how we've helped similar {{industry}} companies achieve:

• 15-25% reduction in fleet operating costs
• Improved vehicle uptime and maintenance scheduling
• Real-time GPS tracking and route optimization
• Simplified compliance and reporting

Would you have some time this week or next for a brief conversation?

Best regards,
[Your Name]
[Your Title]
[Your Phone]`;


// ─── Initialize ───
document.addEventListener('DOMContentLoaded', () => {
    // Set default template values
    document.getElementById('templateSubject').value = defaultSubject;
    document.getElementById('templateBody').value = defaultBody;

    // Render everything
    updateStats();
    renderProspects(prospects);

    // Event listeners
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('titleFilter').addEventListener('change', applyFilters);
    document.getElementById('statusFilter').addEventListener('change', applyFilters);

    // Template toggle
    document.getElementById('templateToggle').addEventListener('click', () => {
        const body = document.getElementById('templateContent');
        const icon = document.getElementById('toggleIcon');
        body.classList.toggle('open');
        icon.classList.toggle('open');
    });
});


// ─── Filter Logic ───
function applyFilters() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const titleFilter = document.getElementById('titleFilter').value.toLowerCase();
    const status = document.getElementById('statusFilter').value;

    const filtered = prospects.filter(p => {
        const matchSearch = !search ||
            p.company.toLowerCase().includes(search) ||
            p.contact.toLowerCase().includes(search) ||
            p.industry.toLowerCase().includes(search) ||
            p.location.toLowerCase().includes(search);

        const matchCategory = !category || p.category === category;

        const matchTitle = !titleFilter || p.title.toLowerCase().includes(titleFilter);

        const matchStatus = !status ||
            (status === 'emailed' && emailedIds.includes(p.id)) ||
            (status === 'pending' && !emailedIds.includes(p.id));

        return matchSearch && matchCategory && matchTitle && matchStatus;
    });

    renderProspects(filtered);
}


// ─── Render Prospect Cards ───
function renderProspects(list) {
    const grid = document.getElementById('prospectGrid');

    if (list.length === 0) {
        grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No prospects found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>`;
        return;
    }

    grid.innerHTML = list.map(p => {
        const isEmailed = emailedIds.includes(p.id);
        const initials = p.contact.split(' ').map(n => n[0]).join('').slice(0, 2);
        const badgeClass = p.category === 'fleet' ? 'badge-fleet' : 'badge-equipment';
        const badgeLabel = p.category === 'fleet' ? '🚛 Fleet Company' : '🏗️ Heavy Equipment';
        const verifiedBadge = p.verified ? '<span class="verified-badge">✓ Verified</span>' : '';

        return `
      <div class="prospect-card ${isEmailed ? 'emailed' : ''}" data-id="${p.id}">
        <div class="prospect-category-badge ${badgeClass}">${badgeLabel}</div>
        ${verifiedBadge}
        <div class="prospect-company">${p.company}</div>
        <div class="prospect-industry">${p.industry}</div>

        <div class="prospect-details">
          <div class="detail-item">
            <span class="detail-label">📍 Location</span>
            <span class="detail-value">${p.location}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">🚐 Fleet Size</span>
            <span class="detail-value">${p.fleetSize}</span>
          </div>
          <div class="detail-item" style="grid-column: 1 / -1;">
            <span class="detail-label">🔧 Vehicles / Equipment</span>
            <span class="detail-value">${p.vehicles}</span>
          </div>
          ${p.website ? `<div class="detail-item">
            <span class="detail-label">🌐 Website</span>
            <span class="detail-value"><a href="https://${p.website}" target="_blank" rel="noopener noreferrer" style="color: var(--neon-cyan);">${p.website}</a></span>
          </div>` : ''}
          ${p.phone ? `<div class="detail-item">
            <span class="detail-label">📞 Phone</span>
            <span class="detail-value">${p.phone}</span>
          </div>` : ''}
        </div>

        <div class="prospect-divider"></div>

        <div class="contact-row">
          <div class="contact-avatar">${initials}</div>
          <div class="contact-info">
            <div class="contact-name">${p.contact}</div>
            <div class="contact-title">${p.title}</div>
            <div class="contact-email">${p.email}</div>
          </div>
        </div>

        <button class="btn-send ${isEmailed ? 'sent' : ''}" onclick="sendEmail(${p.id})">
          <span class="btn-icon">${isEmailed ? '✓' : '✉️'}</span>
          ${isEmailed ? 'Email Sent — Send Again' : 'Send Intro Email'}
        </button>
      </div>`;
    }).join('');
}


// ─── Send Email ───
function sendEmail(id) {
    const prospect = prospects.find(p => p.id === id);
    if (!prospect) return;

    // Get template values
    let subject = document.getElementById('templateSubject').value;
    let body = document.getElementById('templateBody').value;

    // Replace merge fields
    const replacements = {
        '{{contact}}': prospect.contact,
        '{{company}}': prospect.company,
        '{{location}}': prospect.location,
        '{{industry}}': prospect.industry,
        '{{title}}': prospect.title,
        '{{fleetSize}}': prospect.fleetSize
    };

    Object.entries(replacements).forEach(([key, val]) => {
        subject = subject.replaceAll(key, val);
        body = body.replaceAll(key, val);
    });

    // Build mailto link
    const mailto = `mailto:${prospect.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, '_blank');

    // Track emailed status
    if (!emailedIds.includes(id)) {
        emailedIds.push(id);
        try {
            localStorage.setItem('autoflow_emailed', JSON.stringify(emailedIds));
        } catch (e) {
            // Storage unavailable (private mode / quota): keep in-memory state
        }
    }

    // Update UI
    updateStats();
    applyFilters();
    showToast(prospect.company);
}


// ─── Update Stats ───
function updateStats() {
    const total = prospects.length;
    const fleetCount = prospects.filter(p => p.category === 'fleet').length;
    const equipCount = prospects.filter(p => p.category === 'equipment').length;
    const emailed = emailedIds.length;

    animateCounter('statTotal', total);
    animateCounter('statFleet', fleetCount);
    animateCounter('statEquip', equipCount);
    animateCounter('statEmailed', emailed);
}


// ─── Animated Counter ───
function animateCounter(elementId, target) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const current = parseInt(el.textContent) || 0;
    if (current === target) return;

    const duration = 600;
    const start = performance.now();

    function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(current + (target - current) * eased);
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}


// ─── Toast Notification ───
let toastTimer;
function showToast(companyName) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    toastText.innerHTML = `Email composed for <strong>${companyName}</strong>`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
