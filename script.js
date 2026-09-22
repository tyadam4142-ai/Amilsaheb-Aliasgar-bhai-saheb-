
(() => {
  const contact = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Najmi;Aliasgar bs;;;',
    'FN:Aliasgar bs Najmi',
    'TEL;TYPE=CELL,VOICE:+12407317462',
    'X-SOCIALPROFILE;TYPE=whatsapp:https://wa.me/12407317462',
    'NOTE:Amilsaheb',
    'END:VCARD'
  ].join('\r\n');

  async function saveContact(e){
    // The bundled .vcf is the primary path because iPhone/iPad Safari
    // can hand it directly to Contacts.
    if (!e.currentTarget.matches('a')) return;
    if (navigator.share && window.File) {
      try {
        const file = new File([contact], 'Amilsaheb-Aliasgar-bs-Najmi.vcf', {type:'text/vcard'});
        if (!navigator.canShare || navigator.canShare({files:[file]})) {
          e.preventDefault();
          await navigator.share({files:[file], title:'Amilsaheb — Aliasgar bs Najmi'});
        }
      } catch(err) {
        // If sharing is cancelled or unsupported, the normal .vcf link remains available.
      }
    }
  }

  document.querySelectorAll('.save-contact').forEach(a => {
    a.addEventListener('click', saveContact);
  });
})();
