// We use a static list of upcoming stalls for the public view.
// In a real application, this would fetch from an API or a shared database.
const upcomingStalls = [
    { date: "2026/05/01", endDate: "2026/05/03", organizer: "方舟市集", location: "華山文創園區" },
    { date: "2026/05/09", endDate: "2026/05/10", organizer: "方舟市集", location: "北車地下街" },
    { date: "2026/05/16", endDate: "2026/05/17", organizer: "方舟市集", location: "北車地下街" },
    { date: "2026/05/23", endDate: "2026/05/24", organizer: "再約市集", location: "北車地下街" },
    { date: "2026/06/13", endDate: "2026/06/14", organizer: "方舟市集", location: "華山文創園區" },
    { date: "2026/06/19", endDate: "2026/06/21", organizer: "方舟市集", location: "北車地下街" }
];

const stallsList = document.getElementById('stallsList');

function renderStalls() {
    if (upcomingStalls.length === 0) {
        stallsList.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">目前還沒有近期的出攤規劃喔！</p>';
        return;
    }

    upcomingStalls.forEach(stall => {
        const dateObj = new Date(stall.date);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const monthStr = monthNames[dateObj.getMonth()];
        const dayStr = dateObj.getDate().toString().padStart(2, '0');
        
        // Format date display (e.g. 5/1 - 5/3)
        const d1 = new Date(stall.date);
        const d2 = new Date(stall.endDate);
        const dateRange = `${d1.getMonth()+1}/${d1.getDate()} - ${d2.getMonth()+1}/${d2.getDate()}`;

        const card = document.createElement('div');
        card.className = 'stall-card';
        card.innerHTML = `
            <div class="date-badge">
                <div class="month">${monthStr}</div>
                <div class="day">${dayStr}</div>
            </div>
            <div class="stall-info">
                <h3>${stall.organizer}</h3>
                <p><i class="fa-solid fa-calendar-days"></i> ${dateRange}</p>
                <p style="margin-top: 0.25rem;"><i class="fa-solid fa-location-dot"></i> ${stall.location}</p>
            </div>
        `;
        stallsList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderStalls);
