/**
 * FORMULA BAR DYNAMIC TYPING & INTERACTIVE ENGINE
 * Animates Excel & Power BI formulas in the header formula bar.
 */

document.addEventListener('DOMContentLoaded', () => {
    const formulaTextElem = document.getElementById('typed-formula');
    const cellIdElem = document.getElementById('active-cell-id');

    if (!formulaTextElem) return;

    // List of dynamic formulas that rotate periodically
    const formulaList = [
        "=VLOOKUP(Data_Problem, Strategic_Solution, Impact_Delivered, TRUE)",
        "=SUMPRODUCT(SQL_Pipelines, DAX_Modeling, Power_BI_Dashboards) => Executive_ROI",
        "=CALCULATE(SUM(Business_Revenue), FILTER(Operations, Process_Automation = TRUE))",
        "=INDEX(Actionable_Insights, MATCH(Executive_KPI, Raw_Data_Stream, 0))",
        "=XLOOKUP(Complex_Challenge, Analyst_Expertise, Automated_Solution, 'No Friction')"
    ];

    let formulaIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;
    const pauseDelay = 3500;

    function typeFormula() {
        const currentFormula = formulaList[formulaIndex];

        if (isDeleting) {
            formulaTextElem.textContent = currentFormula.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 25;
        } else {
            formulaTextElem.textContent = currentFormula.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 50;
        }

        if (!isDeleting && charIndex === currentFormula.length) {
            isDeleting = true;
            typingSpeed = pauseDelay;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            formulaIndex = (formulaIndex + 1) % formulaList.length;
            typingSpeed = 400;
        }

        setTimeout(typeFormula, typingSpeed);
    }

    // Start formula animation delay
    setTimeout(typeFormula, 800);

    // Update Cell ID when clicking elements with cell-tag or data-cell
    document.addEventListener('click', (e) => {
        const cellTag = e.target.closest('.cell-tag');
        if (cellTag) {
            const cellText = cellTag.textContent.trim();
            if (cellIdElem) cellIdElem.textContent = `CELL_${cellText.split(':')[0]}`;
        }
    });
});
