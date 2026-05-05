// Initialize data from Google Sheet or LocalStorage
let marketData = JSON.parse(localStorage.getItem('marketData')) || [
    { month: "2025/04", startDate: "2025/4/3", endDate: "2025/4/4", organizer: "", location: "北車地下街", participants: "麗", stallCount: 1, totalAmount: 2400, amountPerStall: 2400, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2025/04", startDate: "2025/4/5", endDate: "2025/4/6", organizer: "", location: "北車地下街", participants: "麗+牛", stallCount: 1, totalAmount: 2400, amountPerStall: 2400, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2025/04", startDate: "2025/4/26", endDate: "2025/4/26", organizer: "", location: "龍山寺", participants: "麗", stallCount: 1, totalAmount: 1800, amountPerStall: 1800, isPaid: true, payer: "牛", isCleared: true, remarks: "" },
    { month: "2025/04", startDate: "2025/4/27", endDate: "2025/4/27", organizer: "", location: "龍山寺", participants: "麗+牛", stallCount: 1, totalAmount: 1800, amountPerStall: 1800, isPaid: true, payer: "牛", isCleared: true, remarks: "" },
    { month: "2025/05", startDate: "2025/5/10", endDate: "2025/5/11", organizer: "", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 4800, amountPerStall: 2400, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2025/06", startDate: "2025/6/14", endDate: "2025/6/15", organizer: "", location: "龍山寺", participants: "麗+牛", stallCount: 1, totalAmount: 1800, amountPerStall: 1800, isPaid: true, payer: "牛", isCleared: true, remarks: "" },
    { month: "2025/06", startDate: "2025/6/21", endDate: "2025/6/22", organizer: "", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 0, amountPerStall: 0, isPaid: true, payer: "麗", isCleared: true, remarks: "已取消並退款" },
    { month: "2025/07", startDate: "2025/7/12", endDate: "2025/7/13", organizer: "", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 4800, amountPerStall: 2400, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2025/07", startDate: "2025/7/19", endDate: "2025/7/20", organizer: "", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 4800, amountPerStall: 2400, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2025/08", startDate: "2025/8/9", endDate: "2025/8/10", organizer: "", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: null, amountPerStall: 0, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2025/10", startDate: "2025/10/4", endDate: "2025/10/6", organizer: "", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 7800, amountPerStall: 3900, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/01", startDate: "2026/1/3", endDate: "2026/1/3", organizer: "", location: "龍山寺", participants: "麗+牛", stallCount: 2, totalAmount: 2000, amountPerStall: 1000, isPaid: true, payer: "牛", isCleared: true, remarks: "" },
    { month: "2026/01", startDate: "2026/1/10", endDate: "2026/1/11", organizer: "方舟市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 5160, amountPerStall: 2580, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/01", startDate: "2026/1/24", endDate: "2026/1/25", organizer: "再約市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 5600, amountPerStall: 2800, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/02", startDate: "2026/2/14", endDate: "2026/2/14", organizer: "方舟市集", location: "北車地下街", participants: "麗", stallCount: 1, totalAmount: 1500, amountPerStall: 1500, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/02", startDate: "2026/2/21", endDate: "2026/2/22", organizer: "再約市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 5600, amountPerStall: 2800, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/02", startDate: "2026/2/27", endDate: "2026/2/28", organizer: "方舟市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 6000, amountPerStall: 3000, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/03", startDate: "2026/3/7", endDate: "2026/3/8", organizer: "方舟市集", location: "華山", participants: "麗+牛", stallCount: 2, totalAmount: 7500, amountPerStall: 3750, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/03", startDate: "2026/3/21", endDate: "2026/3/22", organizer: "再約市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 5600, amountPerStall: 2800, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/03", startDate: "2026/3/28", endDate: "2026/3/29", organizer: "方舟市集", location: "北車地下街", participants: "麗+牛", stallCount: 3, totalAmount: 7740, amountPerStall: 2580, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/04", startDate: "2026/4/3", endDate: "2026/4/6", organizer: "方舟市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 10320, amountPerStall: 5160, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/04", startDate: "2026/4/25", endDate: "2026/4/26", organizer: "方舟市集", location: "松菸", participants: "麗", stallCount: 2, totalAmount: 8900, amountPerStall: 4450, isPaid: true, payer: "麗", isCleared: true, remarks: "" },
    { month: "2026/05", startDate: "2026/5/1", endDate: "2026/5/3", organizer: "方舟市集", location: "華山", participants: "麗+牛", stallCount: 2, totalAmount: 21600, amountPerStall: 10800, isPaid: true, payer: "麗", isCleared: null, remarks: "" },
    { month: "2026/05", startDate: "2026/5/9", endDate: "2026/5/10", organizer: "方舟市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 5480, amountPerStall: 2740, isPaid: true, payer: "麗", isCleared: false, remarks: "" },
    { month: "2026/05", startDate: "2026/5/16", endDate: "2026/5/17", organizer: "方舟市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 7500, amountPerStall: 3750, isPaid: true, payer: "麗", isCleared: false, remarks: "" },
    { month: "2026/05", startDate: "2026/5/23", endDate: "2026/5/24", organizer: "再約市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 5600, amountPerStall: 2800, isPaid: true, payer: "牛", isCleared: false, remarks: "" },
    { month: "2026/06", startDate: "2026/6/13", endDate: "2026/6/14", organizer: "方舟市集", location: "華山", participants: "麗+牛", stallCount: 2, totalAmount: 7500, amountPerStall: 3750, isPaid: true, payer: "麗", isCleared: false, remarks: "取消" },
    { month: "2026/06", startDate: "2026/6/19", endDate: "2026/6/21", organizer: "方舟市集", location: "北車地下街", participants: "麗+牛", stallCount: 3, totalAmount: 8040, amountPerStall: 2680, isPaid: true, payer: "麗", isCleared: false, remarks: "" },
    { month: "2026/06", startDate: "2026/6/27", endDate: "2026/6/28", organizer: "再約市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: null, amountPerStall: 0, isPaid: false, payer: "麗", isCleared: false, remarks: "取消" },
    { month: "2026/06", startDate: "2026/6/27", endDate: "2026/6/28", organizer: "方舟市集", location: "松菸", participants: "麗+牛", stallCount: 3, totalAmount: 16140, amountPerStall: 5380, isPaid: true, payer: "麗", isCleared: false, remarks: "" },
    { month: "2026/07", startDate: "2026/7/10", endDate: "2026/7/12", organizer: "方舟市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 7960, amountPerStall: 3980, isPaid: true, payer: "麗", isCleared: false, remarks: "" },
    { month: "2026/07", startDate: "2026/7/17", endDate: "2026/7/19", organizer: "方舟市集", location: "華山", participants: "麗+牛", stallCount: 2, totalAmount: 9700, amountPerStall: 4850, isPaid: true, payer: "麗", isCleared: false, remarks: "" },
    { month: "2026/07", startDate: "2026/7/25", endDate: "2026/7/26", organizer: "再約市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: null, amountPerStall: 0, isPaid: false, payer: "麗", isCleared: false, remarks: "" },
    { month: "2026/08", startDate: "2026/8/1", endDate: "2026/8/2", organizer: "方舟市集", location: "北車地下街", participants: "麗+牛", stallCount: 2, totalAmount: 9700, amountPerStall: 4850, isPaid: true, payer: "麗", isCleared: false, remarks: "" },
    { month: "2026/08", startDate: "2026/8/21", endDate: "2026/8/23", organizer: "方舟市集", location: "華山", participants: "麗+牛", stallCount: 2, totalAmount: 9700, amountPerStall: 4850, isPaid: true, payer: "麗", isCleared: false, remarks: "" },
    { month: "2026/10", startDate: "2026/10/8", endDate: "2026/10/11", organizer: "方舟市集", location: "華山", participants: "麗+牛", stallCount: 2, totalAmount: 27000, amountPerStall: 13500, isPaid: false, payer: "麗", isCleared: false, remarks: "" }
];

// Save initial data to localStorage if not exists
if (!localStorage.getItem('marketData')) {
    localStorage.setItem('marketData', JSON.stringify(marketData));
}

// DOM Elements
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const dataTable = document.getElementById('dataTable');

const addModal = document.getElementById('addModal');
const addBtn = document.getElementById('addBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelBtn');
const addForm = document.getElementById('addForm');

// Helper to format boolean to badge
function formatBoolean(val) {
    if (val === true) return `<span class="status-badge status-true">TRUE</span>`;
    if (val === false) return `<span class="status-badge status-false">FALSE</span>`;
    return '';
}

// Render Table
function renderTable(data) {
    tableBody.innerHTML = '';
    
    if (data.length === 0) {
        dataTable.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }
    
    dataTable.classList.remove('hidden');
    noResults.classList.add('hidden');

    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.month || ''}</td>
            <td>${row.startDate || ''}</td>
            <td>${row.endDate || ''}</td>
            <td>${row.organizer || ''}</td>
            <td>${row.location || ''}</td>
            <td>${row.participants || ''}</td>
            <td>${row.stallCount || ''}</td>
            <td>${row.totalAmount !== null ? row.totalAmount : ''}</td>
            <td>${row.amountPerStall !== null ? row.amountPerStall : ''}</td>
            <td>${formatBoolean(row.isPaid)}</td>
            <td>${row.payer || ''}</td>
            <td>${formatBoolean(row.isCleared)}</td>
            <td>${row.remarks || ''}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Initial render
renderTable(marketData);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredData = marketData.filter(row => {
        return Object.values(row).some(value => {
            if (value === null || value === undefined) return false;
            return String(value).toLowerCase().includes(searchTerm);
        });
    });
    
    renderTable(filteredData);
});

// Modal toggle functions
function openModal() {
    addModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    addModal.classList.remove('active');
    document.body.style.overflow = '';
    addForm.reset();
}

addBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Close modal on outside click
addModal.addEventListener('click', (e) => {
    if (e.target === addModal) {
        closeModal();
    }
});

// Handle form submission
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Format dates back to YYYY/M/D to match existing data loosely
    const startDt = new Date(document.getElementById('startDate').value);
    const endDt = new Date(document.getElementById('endDate').value);
    
    const fmtStart = `${startDt.getFullYear()}/${startDt.getMonth() + 1}/${startDt.getDate()}`;
    const fmtEnd = `${endDt.getFullYear()}/${endDt.getMonth() + 1}/${endDt.getDate()}`;

    const newRecord = {
        month: document.getElementById('month').value,
        startDate: fmtStart,
        endDate: fmtEnd,
        organizer: document.getElementById('organizer').value,
        location: document.getElementById('location').value,
        participants: document.getElementById('participants').value,
        stallCount: parseInt(document.getElementById('stallCount').value) || 0,
        totalAmount: parseInt(document.getElementById('totalAmount').value) || 0,
        amountPerStall: parseInt(document.getElementById('amountPerStall').value) || 0,
        isPaid: document.getElementById('isPaid').checked,
        payer: document.getElementById('payer').value,
        isCleared: document.getElementById('isCleared').checked,
        remarks: document.getElementById('remarks').value
    };
    
    // Add to data array
    marketData.push(newRecord);
    
    // Save to localStorage
    localStorage.setItem('marketData', JSON.stringify(marketData));
    
    // Re-render table
    renderTable(marketData);
    
    // Clear search input
    searchInput.value = '';
    
    // Close modal
    closeModal();
});
