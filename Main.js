function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active','visible'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  page.classList.add('active');
  btn.classList.add('active');
  setTimeout(() => {
    page.classList.add('visible');
    if (id === 'habilidades') animateBars();
  }, 20);
}

function animateBars() {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    const val = bar.dataset.fill;
    setTimeout(() => { bar.style.width = val + '%'; }, 200);
  });
}

setTimeout(() => document.getElementById('page-sobre').classList.add('visible'), 20);
