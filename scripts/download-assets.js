import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destDir = path.resolve(__dirname, '../public/images/studio');
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Rename/copy generated images to canonical names
const files = fs.readdirSync(destDir);
const heroFile = files.find(f => f.startsWith('hero_modern_villa_'));
if (heroFile) fs.copyFileSync(path.join(destDir, heroFile), path.join(destDir, 'hero.jpg'));

const archFile = files.find(f => f.startsWith('service_architecture_'));
if (archFile) fs.copyFileSync(path.join(destDir, archFile), path.join(destDir, 'service_architecture.jpg'));

const civilFile = files.find(f => f.startsWith('service_civil_engineering_'));
if (civilFile) fs.copyFileSync(path.join(destDir, civilFile), path.join(destDir, 'service_civil.jpg'));

const downloads = [
    {
        file: 'service_3d.jpg',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
        file: 'service_interior.jpg',
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    },
    {
        file: 'project_residence.jpg',
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    },
    {
        file: 'project_duplex.jpg',
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    },
    {
        file: 'project_commercial.jpg',
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    },
    {
        file: 'project_interior.jpg',
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    },
    {
        file: 'cta_bg.jpg',
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80'
    }
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return download(response.headers.location, dest).then(resolve).catch(reject);
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function run() {
    for (const item of downloads) {
        const outPath = path.join(destDir, item.file);
        if (!fs.existsSync(outPath)) {
            console.log(`Downloading ${item.file}...`);
            try {
                await download(item.url, outPath);
                console.log(`Downloaded ${item.file}`);
            } catch (err) {
                console.error(`Failed ${item.file}:`, err.message);
            }
        } else {
            console.log(`Already exists: ${item.file}`);
        }
    }
    console.log('Finished downloading assets.');
}

run();
