const pricingTable = document.querySelector('.table-wrapper');

window.addEventListener('resize', () => {
  const tableWidth = pricingTable.querySelector('table').offsetWidth;
  if (tableWidth > pricingTable.offsetWidth) {
    pricingTable.classList.add('scrollable');
  } else {
    pricingTable.classList.remove('scrollable');
  }
});
