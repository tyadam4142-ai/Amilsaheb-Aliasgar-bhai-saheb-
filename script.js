(() => {
  const contact = [
    'BEGIN:VCARD','VERSION:3.0','N:Najmi;Aliasgar bs;;;','FN:Aliasgar bs Najmi',
    'TEL;TYPE=CELL,VOICE:+12407317462','NOTE:Amilsaheb','END:VCARD'
  ].join('\r\n');

  const save = document.querySelector('.save-contact');
  if (!save) return;

  save.addEventListener('click', async (e) => {
    e.preventDefault();
    const blob = new Blob([contact], {type:'text/vcard;charset=utf-8'});
    const file = new File([blob], 'Amilsaheb-Aliasgar-bs-Najmi.vcf', {type:'text/vcard'});

    try {
      if (navigator.share && (!navigator.canShare || navigator.canShare({files:[file]}))) {
        await navigator.share({files:[file], title:'Amilsaheb — Aliasgar bs Najmi'});
        return;
      }
    } catch (_) {}

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Amilsaheb-Aliasgar-bs-Najmi.vcf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  });
})();
