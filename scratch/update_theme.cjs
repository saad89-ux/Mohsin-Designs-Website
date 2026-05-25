const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../src/components/sections');
const files = [
  'trusted-brands-section.tsx',
  'services-overview-section.tsx',
  'results-section.tsx',
  'case-studies-section.tsx',
  'testimonials-section.tsx',
  'process-section.tsx',
  'cta-section.tsx',
  'faq-section.tsx'
];

for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace bg-black, bg-[#000000], bg-[#0a0a0a] in section tags with bg-[#050505] font-sans
    // This regex looks for <section ... className="..."
    content = content.replace(/(<section[^>]*className="[^"]*)(bg-[#0a0a0a]|bg-[#000000]|bg-black)([^"]*")/g, '$1bg-[#050505] font-sans$3');
    
    // If the section didn't have one of those specific bgs, let's just make sure it has bg-[#050505] font-sans
    // We can just globally replace those background colors anywhere they appear in the top level section
    content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-[#050505] font-sans');
    content = content.replace(/bg-\[\#000000\]/g, 'bg-[#050505] font-sans');
    
    // Make sure font-sans isn't duplicated
    content = content.replace(/font-sans\s+font-sans/g, 'font-sans');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}
