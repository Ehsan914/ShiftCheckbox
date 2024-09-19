const inputs = [...document.querySelectorAll('input')];

let lastChecked = null;

function handleClick(e) {
    
    if (e.shiftKey && lastChecked) { // same thing can be implemented with control key selection, just replace e.shiftKey with e.ctrlKey
        const start = inputs.indexOf(e.target);
        const end = inputs.indexOf(lastChecked);
        const checkboxToCheck = inputs.slice(
            Math.min(start, end),
            Math.max(start, end) + 1
        );
        checkboxToCheck.forEach(checkbox => checkbox.checked = lastChecked.checked);
    }

    lastChecked = e.target;
}

inputs.forEach(input => {
    input.addEventListener('click', handleClick);
});