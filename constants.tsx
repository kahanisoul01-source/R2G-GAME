
import { Rarity, FortniteItem, Case } from './types';

export const FORTNITE_ITEMS: FortniteItem[] = [
  // SKINS
  { id: 's1', name: 'Renegade Raider', rarity: Rarity.MYTHIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_028_athena_commando_f_retro/icon.png', price: 1500.00 },
  { id: 's2', name: 'Black Knight', rarity: Rarity.LEGENDARY, image: 'https://fortnite-api.com/images/cosmetics/br/cid_035_athena_commando_m_medieval/icon.png', price: 850.00 },
  { id: 's3', name: 'Crystal', rarity: Rarity.UNCOMMON, image: 'https://fortnite-api.com/images/cosmetics/br/cid_440_athena_commando_f_cyberpunk_c/icon.png', price: 15.00 },
  { id: 's4', name: 'Aura', rarity: Rarity.UNCOMMON, image: 'https://fortnite-api.com/images/cosmetics/br/cid_407_athena_commando_f_treasurehunterfashion/icon.png', price: 12.00 },
  { id: 's5', name: 'Midas', rarity: Rarity.LEGENDARY, image: 'https://fortnite-api.com/images/cosmetics/br/cid_694_athena_commando_m_goldenSkeleton/icon.png', price: 250.00 },
  { id: 's6', name: 'Skull Trooper', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_030_athena_commando_m_halloween/icon.png', price: 400.00 },
  { id: 's7', name: 'Travis Scott', rarity: Rarity.MYTHIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_733_athena_commando_m_cyclone/icon.png', price: 1200.00 },
  { id: 's8', name: 'Drift', rarity: Rarity.LEGENDARY, image: 'https://fortnite-api.com/images/cosmetics/br/cid_161_athena_commando_m_drift/icon.png', price: 350.00 },
  { id: 's9', name: 'Wildcat', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_889_athena_commando_f_skater_c/icon.png', price: 2000.00 },
  { id: 's10', name: 'Galaxy', rarity: Rarity.MYTHIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_175_athena_commando_m_celestial/icon.png', price: 2500.00 },
  { id: 's11', name: 'Ikonik', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_371_athena_commando_m_kpop/icon.png', price: 900.00 },
  { id: 's12', name: 'Pink Ghoul', rarity: Rarity.LEGENDARY, image: 'https://fortnite-api.com/images/cosmetics/br/cid_029_athena_commando_f_halloween/icon.png', price: 1800.00 },

  // WEAPONS / WRAPS
  { id: 'w1', name: 'Golden Scar', rarity: Rarity.LEGENDARY, image: 'https://fortnite-api.com/images/cosmetics/br/cid_010_athena_commando_m_snow_01/icon.png', price: 120.00 },
  { id: 'w2', name: 'Diamond Wrap', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/wrap_046_diamond/icon.png', price: 45.00 },
  { id: 'w3', name: 'Magma Wrap', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/wrap_084_obsidian/icon.png', price: 35.00 },

  // PICKAXES
  { id: 'p1', name: 'Reaper', rarity: Rarity.RARE, image: 'https://fortnite-api.com/images/cosmetics/br/sk_pickaxe_11_jason/icon.png', price: 85.00 },
  { id: 'p2', name: 'Candy Axe', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_133_holidaycandy/icon.png', price: 150.00 },
  { id: 'p3', name: 'Star Wand', rarity: Rarity.RARE, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_188_starwand/icon.png', price: 45.00 },
  { id: 'p4', name: 'Leviatian Axe', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_511_godofwar/icon.png', price: 250.00 },
  { id: 'p5', name: 'Merry Mint', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_314_holiday/icon.png', price: 180.00 },

  // EMOTES
  { id: 'e1', name: 'Scenario', rarity: Rarity.RARE, image: 'https://fortnite-api.com/images/cosmetics/br/eid_kpop/icon.png', price: 45.00 },
  { id: 'e2', name: 'Take The L', rarity: Rarity.RARE, image: 'https://fortnite-api.com/images/cosmetics/br/eid_takethel/icon.png', price: 25.00 },
  { id: 'e3', name: 'Orange Justice', rarity: Rarity.RARE, image: 'https://fortnite-api.com/images/cosmetics/br/eid_orangejustice/icon.png', price: 10.00 },
  { id: 'e4', name: 'Laugh It Up', rarity: Rarity.RARE, image: 'https://fortnite-api.com/images/cosmetics/br/eid_laugh/icon.png', price: 15.00 },
  { id: 'e5', name: 'Floss', rarity: Rarity.RARE, image: 'https://fortnite-api.com/images/cosmetics/br/eid_floss/icon.png', price: 200.00 },
];

export const OG_LEGENDS_CASES: Case[] = [
  { id: 'og-1', name: 'RENEGADE VAULT', price: 49.99, image: 'https://fortnite-api.com/images/cosmetics/br/cid_028_athena_commando_f_retro/featured.png', tag: 'HOT', items: [FORTNITE_ITEMS[0]] },
  { id: 'og-2', name: 'KNIGHTS HONOR', price: 35.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_035_athena_commando_m_medieval/featured.png', items: [FORTNITE_ITEMS[1]] },
  { id: 'og-3', name: 'GALAXY PORTAL', price: 89.99, image: 'https://fortnite-api.com/images/cosmetics/br/cid_175_athena_commando_m_celestial/featured.png', items: [FORTNITE_ITEMS[9]] },
  { id: 'og-4', name: 'SPOOKY LEGEND', price: 29.99, image: 'https://fortnite-api.com/images/cosmetics/br/cid_030_athena_commando_m_halloween/featured.png', items: [FORTNITE_ITEMS[5]] },
  { id: 'og-5', name: 'RAIDER PACK', price: 15.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_029_athena_commando_f_halloween/featured.png', items: [FORTNITE_ITEMS[11]] },
  { id: 'og-6', name: 'DRIFT BOX', price: 12.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_161_athena_commando_m_drift/featured.png', items: [FORTNITE_ITEMS[7]] },
  { id: 'og-7', name: 'MIDAS VAULT', price: 99.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_694_athena_commando_m_goldenSkeleton/featured.png', items: [FORTNITE_ITEMS[4]] },
  { id: 'og-8', name: 'BLACK KNIGHT', price: 150.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_035_athena_commando_m_medieval/featured.png', items: [FORTNITE_ITEMS[1]] },
];

export const SWEATY_SKINS_CASES: Case[] = [
  { id: 'sw-1', name: 'AURA ELITE', price: 9.99, image: 'https://fortnite-api.com/images/cosmetics/br/cid_407_athena_commando_f_treasurehunterfashion/featured.png', items: [FORTNITE_ITEMS[3]] },
  { id: 'sw-2', name: 'CRYSTAL HUB', price: 8.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_440_athena_commando_f_cyberpunk_c/featured.png', items: [FORTNITE_ITEMS[2]] },
  { id: 'sw-3', name: 'SKATER GIRL', price: 12.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_889_athena_commando_f_skater_c/featured.png', items: [FORTNITE_ITEMS[8]] },
  { id: 'sw-4', name: 'PRO SWEAT', price: 7.99, image: 'https://fortnite-api.com/images/cosmetics/br/cid_407_athena_commando_f_treasurehunterfashion/featured.png', items: [FORTNITE_ITEMS[3]] },
  { id: 'sw-5', name: 'CLUTCH DROP', price: 5.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_175_athena_commando_m_celestial/featured.png', items: [FORTNITE_ITEMS[9]] },
  { id: 'sw-6', name: 'FOCUS PACK', price: 11.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_440_athena_commando_f_cyberpunk_c/featured.png', items: [FORTNITE_ITEMS[2]] },
  { id: 'sw-7', name: 'ELITE PRO', price: 14.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_407_athena_commando_f_treasurehunterfashion/featured.png', items: [FORTNITE_ITEMS[3]] },
  { id: 'sw-8', name: 'ARENA DROP', price: 3.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_440_athena_commando_f_cyberpunk_c/featured.png', items: [FORTNITE_ITEMS[2]] },
];

export const MYTHIC_VAULT_CASES: Case[] = [
  { id: 'mv-1', name: 'MIDAS TOUCH', price: 199.99, image: 'https://fortnite-api.com/images/cosmetics/br/cid_694_athena_commando_m_goldenSkeleton/featured.png', tag: 'LIMITED', items: [FORTNITE_ITEMS[4]] },
  { id: 'mv-2', name: 'TRAVIS WORLD', price: 150.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_733_athena_commando_m_cyclone/featured.png', items: [FORTNITE_ITEMS[6]] },
  { id: 'mv-3', name: 'IKONIK BEAT', price: 180.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_371_athena_commando_m_kpop/featured.png', items: [FORTNITE_ITEMS[10]] },
  { id: 'mv-4', name: 'MYTHIC KING', price: 140.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_694_athena_commando_m_goldenSkeleton/featured.png', items: [FORTNITE_ITEMS[4]] },
  { id: 'mv-5', name: 'ASTRO DROP', price: 210.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_733_athena_commando_m_cyclone/featured.png', items: [FORTNITE_ITEMS[6]] },
  { id: 'mv-6', name: 'GALAXY LORD', price: 299.99, image: 'https://fortnite-api.com/images/cosmetics/br/cid_175_athena_commando_m_celestial/featured.png', items: [FORTNITE_ITEMS[9]] },
  { id: 'mv-7', name: 'WILD CAT', price: 450.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_889_athena_commando_f_skater_c/featured.png', items: [FORTNITE_ITEMS[8]] },
  { id: 'mv-8', name: 'LEGACY HUB', price: 500.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_028_athena_commando_f_retro/featured.png', items: [FORTNITE_ITEMS[0]] },
];

export const PICKAXE_FRENZY_CASES: Case[] = [
  { id: 'pf-1', name: 'STAR WAND', price: 14.50, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_188_starwand/featured.png', items: [FORTNITE_ITEMS[17]] },
  { id: 'pf-2', name: 'REAPER SCYTHE', price: 12.00, image: 'https://fortnite-api.com/images/cosmetics/br/sk_pickaxe_11_jason/featured.png', items: [FORTNITE_ITEMS[15]] },
  { id: 'pf-3', name: 'CANDY STICK', price: 19.99, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_133_holidaycandy/featured.png', items: [FORTNITE_ITEMS[16]] },
  { id: 'pf-4', name: 'MINTY FRESH', price: 25.00, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_314_holiday/featured.png', items: [FORTNITE_ITEMS[19]] },
  { id: 'pf-5', name: 'LEVIATHAN', price: 30.00, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_511_godofwar/featured.png', items: [FORTNITE_ITEMS[18]] },
  { id: 'pf-6', name: 'AXE MASTER', price: 9.50, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_188_starwand/featured.png', items: [FORTNITE_ITEMS[17]] },
  { id: 'pf-7', name: 'SCYTHE BOX', price: 8.00, image: 'https://fortnite-api.com/images/cosmetics/br/sk_pickaxe_11_jason/featured.png', items: [FORTNITE_ITEMS[15]] },
  { id: 'pf-8', name: 'PRO TOOLS', price: 5.00, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_188_starwand/featured.png', items: [FORTNITE_ITEMS[17]] },
];

export const EMOTE_PACK_CASES: Case[] = [
  { id: 'ep-1', name: 'ICON DANCE', price: 5.50, image: 'https://fortnite-api.com/images/cosmetics/br/eid_kpop/featured.png', items: [FORTNITE_ITEMS[20]] },
  { id: 'ep-2', name: 'TAKE THE L', price: 3.20, image: 'https://fortnite-api.com/images/cosmetics/br/eid_takethel/featured.png', items: [FORTNITE_ITEMS[21]] },
  { id: 'ep-3', name: 'JUSTICE PACK', price: 2.10, image: 'https://fortnite-api.com/images/cosmetics/br/eid_orangejustice/featured.png', items: [FORTNITE_ITEMS[22]] },
  { id: 'ep-4', name: 'LAUGH BOX', price: 4.50, image: 'https://fortnite-api.com/images/cosmetics/br/eid_laugh/featured.png', items: [FORTNITE_ITEMS[23]] },
  { id: 'ep-5', name: 'FLOSS BOSS', price: 15.00, image: 'https://fortnite-api.com/images/cosmetics/br/eid_floss/featured.png', items: [FORTNITE_ITEMS[24]] },
  { id: 'ep-6', name: 'SCENARIO BUNDLE', price: 8.90, image: 'https://fortnite-api.com/images/cosmetics/br/eid_kpop/featured.png', items: [FORTNITE_ITEMS[20]] },
  { id: 'ep-7', name: 'ORANGE FLOSS', price: 2.50, image: 'https://fortnite-api.com/images/cosmetics/br/eid_orangejustice/featured.png', items: [FORTNITE_ITEMS[22]] },
  { id: 'ep-8', name: 'EMOTE HUB', price: 1.20, image: 'https://fortnite-api.com/images/cosmetics/br/eid_laugh/featured.png', items: [FORTNITE_ITEMS[23]] },
];

export const GLIDER_GALAXY_CASES: Case[] = [
  { id: 'gg-1', name: 'GALAXY RIDE', price: 45.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_175_athena_commando_m_celestial/featured.png', items: [FORTNITE_ITEMS[9]] },
  { id: 'gg-2', name: 'SNOW GLIDE', price: 12.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_010_athena_commando_m_snow_01/featured.png', items: [FORTNITE_ITEMS[0]] },
  { id: 'gg-3', name: 'MAKO WING', price: 25.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_028_athena_commando_f_retro/featured.png', items: [FORTNITE_ITEMS[0]] },
  { id: 'gg-4', name: 'ASTRO GLIDE', price: 60.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_733_athena_commando_m_cyclone/featured.png', items: [FORTNITE_ITEMS[6]] },
  { id: 'gg-5', name: 'DRIFT WING', price: 15.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_161_athena_commando_m_drift/featured.png', items: [FORTNITE_ITEMS[7]] },
  { id: 'gg-6', name: 'ELITE WING', price: 10.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_035_athena_commando_m_medieval/featured.png', items: [FORTNITE_ITEMS[1]] },
];

export const WRAP_COLLECTION_CASES: Case[] = [
  { id: 'wc-1', name: 'MAGMA FLOW', price: 4.50, image: 'https://fortnite-api.com/images/cosmetics/br/wrap_084_obsidian/featured.png', items: [FORTNITE_ITEMS[14]] },
  { id: 'wc-2', name: 'DIAMOND EDGE', price: 5.90, image: 'https://fortnite-api.com/images/cosmetics/br/wrap_046_diamond/featured.png', items: [FORTNITE_ITEMS[13]] },
  { id: 'wc-3', name: 'GOLDEN WRAP', price: 2.10, image: 'https://fortnite-api.com/images/cosmetics/br/cid_010_athena_commando_m_snow_01/featured.png', items: [FORTNITE_ITEMS[12]] },
  { id: 'wc-4', name: 'CRYSTAL WRAP', price: 3.50, image: 'https://fortnite-api.com/images/cosmetics/br/wrap_046_diamond/featured.png', items: [FORTNITE_ITEMS[13]] },
  { id: 'wc-5', name: 'DARK FLOW', price: 4.20, image: 'https://fortnite-api.com/images/cosmetics/br/wrap_084_obsidian/featured.png', items: [FORTNITE_ITEMS[14]] },
  { id: 'wc-6', name: 'PRO WRAP', price: 1.50, image: 'https://fortnite-api.com/images/cosmetics/br/wrap_046_diamond/featured.png', items: [FORTNITE_ITEMS[13]] },
];

export const STARTER_PACK_CASES: Case[] = [
  { id: 'sp-1', name: 'ROOKIE BOX', price: 2.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_440_athena_commando_f_cyberpunk_c/featured.png', items: [FORTNITE_ITEMS[2]] },
  { id: 'sp-2', name: 'SCOUT BOX', price: 1.99, image: 'https://fortnite-api.com/images/cosmetics/br/cid_407_athena_commando_f_treasurehunterfashion/featured.png', items: [FORTNITE_ITEMS[3]] },
  { id: 'sp-3', name: 'AMATEUR PACK', price: 0.99, image: 'https://fortnite-api.com/images/cosmetics/br/cid_440_athena_commando_f_cyberpunk_c/featured.png', items: [FORTNITE_ITEMS[2]] },
  { id: 'sp-4', name: 'LUCKY PACK', price: 1.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_407_athena_commando_f_treasurehunterfashion/featured.png', items: [FORTNITE_ITEMS[3]] },
  { id: 'sp-5', name: 'NOOB BOX', price: 0.50, image: 'https://fortnite-api.com/images/cosmetics/br/cid_440_athena_commando_f_cyberpunk_c/featured.png', items: [FORTNITE_ITEMS[2]] },
  { id: 'sp-6', name: 'BEGINNER', price: 2.00, image: 'https://fortnite-api.com/images/cosmetics/br/cid_407_athena_commando_f_treasurehunterfashion/featured.png', items: [FORTNITE_ITEMS[3]] },
];

export const CASES = [
  ...OG_LEGENDS_CASES, 
  ...SWEATY_SKINS_CASES, 
  ...MYTHIC_VAULT_CASES, 
  ...PICKAXE_FRENZY_CASES, 
  ...EMOTE_PACK_CASES,
  ...GLIDER_GALAXY_CASES,
  ...WRAP_COLLECTION_CASES,
  ...STARTER_PACK_CASES
];

export const RARITY_COLORS: Record<Rarity, string> = {
  [Rarity.COMMON]: '#94a3b8',
  [Rarity.UNCOMMON]: '#22c55e',
  [Rarity.RARE]: '#3b82f6',
  [Rarity.EPIC]: '#a855f7',
  [Rarity.LEGENDARY]: '#f97316',
  [Rarity.MYTHIC]: '#eab308'
};
