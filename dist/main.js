!function(){"use strict";!function(){function e(e){const a=document.createElement("div");return a.classList.add(`${e}-cost`),a}function a(e){const a=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");i.classList="champion-img";const s=document.createElement("a"),c=document.createElement("img"),o=document.createElement("div");o.classList="champ-info";const d=document.createElement("div");d.classList="trait-cost",n.id="traits";for(let a of e.traits){const e=document.createElement("img"),t=a.split("/").join("");e.id=t,e.src=`./assets/images/trait-icons/${t.toLowerCase()}.png`,n.appendChild(e)}const m=n.getElementsByTagName("img");for(let n=0;n<m.length;n++){const r=m[n];if(r.id.includes("KDA")&&"Akali"===e.name){a.id="Akali_KDA",t.id="Akali_KDA",t.innerText="Akali (KDA)";break}if(r.id.includes("True Damage")&&"Akali"===e.name){a.id="Akali_TD",t.id="Akali_TD",t.innerText="Akali (True Damage)";break}a.id=e.name,t.id=e.name,t.innerText=e.name}r.id=`${e.cost}_cost`;const l=document.createElement("img");l.src="./assets/images/gold.png",l.classList="gold-coin",r.appendChild(l);const p=document.createElement("div");return p.innerText=e.cost,r.appendChild(p),s.classList="champ-link",s.target="_blank",e.apiName.includes("TrueDamage")?s.href="https://mobalytics.gg/tft/champions/akali-true-damage":s.href=`https://mobalytics.gg/tft/champions/${e.name.split(" ").join("").toLowerCase()}`,c.id="img",c.src=`./assets/images/splashes/${t.id}.jpg`,s.appendChild(c),i.appendChild(s),o.appendChild(t),d.appendChild(n),d.appendChild(r),o.appendChild(d),i.appendChild(o),a.appendChild(i),a}const t={"8-bit":{name:"8-Bit",desc:"<p>Keep score of your team's damage dealt. For each high score you beat, 8-bit champions gain Attack Damage.<br><br>(2) 5% AD<br>(4) 9% AD<br>(6) 14% AD and unlock a final high score, that rewards you with a grand prize.</p><br>",champions:["Corki","Garen","Riven","Caitlyn"]},country:{name:"Country",desc:"<p>When your team loses 30% of their Health, a Dreadsteed that empowers your team. Each Country star level increases the Dreadsteed's Health and Attack Damage.<br><br>(3) Dreadsteed<br>(5) Midnight Dreadsteed<br>(7) Infernal Invocation Dreadsteed<p><br>",champions:["TahmKench","Katarina","Samira","Urgot","Thresh"]},disco:{name:"Disco",desc:"<p>Summon a movable Disco Ball.<br><br>Combat start: Allies next to it gain Attack Speed and healing immediately and every 3 seconds.<br><br>(3) 5% Attack Speed, 2% max Health<br>(4) 8% Attack Speed, 3% max Health<br>(5) 2 Disco Balls, 12% Attack Speed, 3% max Health<br>(6) 20% Attack Speed, 4% max Health</p><br>",champions:["Nami","Taric","Gragas","Blitzcrank","TwistedFate"]},edm:{name:"EDM",desc:"<p>Use the EDM selector item to choose an EDM champion and see the frequency for each.<br><br>At the selected champions's frequency, your EDM champions cast the selected Ability with modified effectiveness.<br><br>(2) 90% effectiveness<br>(3) 110% effectiveness<br>(4) 120% effectiveness, -1 second<br>(5) 135% effectiveness, -1 second</p><br>",champions:["Jax","Lux","Zed","Zac"]},emo:{name:"Emo",desc:"<p>Emo Champions' Ability cost less Mana to cast, and they gain Mana whenever an allied champion dies.<br>(2) 20% less, gain 20 Mana<br>(4) 30% less, gain 30 Mana<br>(6) +20 AP, 40% less, gain 40 Mana</p><br>",champions:["Annie","Amumu","Vex","Poppy"]},heartsteel:{name:"Heartsteel",desc:"<p>Earn Hearts by killing enemies. Gain even more by losing player combat. Every 4 player combats, convert Hearts into powerful rewards!<br><br>(3) 1x Hearts<br>(5) 2x Hearts<br>(7) 5.5x Hearts<br>(10) 18x Hearts, Gain rewards every round and keep 80% of you Hearts!</p><br>",champions:["KSante","Aphelios","Sett","Yone","Ezreal","Kayn"]},hyperpop:{name:"Hyperpop",desc:"<p>When Hyperpop champions use an Ability, they grant Mana and 4 seconds of Attack Speed to their 2 closest allies.<br><br>(1) 5 Mana and 10% Attack Speed<br>(2) 10 Mana and 20% Attack Speed<br>(3) 15 Mana and 35% Attack Speed<br>(4) 20 Mana and 60% Attack Speed</p><br>",champions:["Lulu","Ziggs"]},illbeats:{name:"ILLBEATS",desc:"<p>(1) Gain 2/2/8 placeable Spirit Tentacles, based on Illaoi's star level. Tentacles gain Illaoi's bonus Armor and Magic Resist.</p><br>",champions:["Illaoi"]},jazz:{name:"Jazz",desc:"<p>For each active trait (except uniques), your team gains bonus Health and deals bonus damage.<br><br>(2) 1.5% Health, 1% Damage<br>(3) 2.5% Health, 1.5% Damage<br>(4) 4% Health, 2% Damage</p><br>",champions:["Bard","MissFortune","Lucian"]},kda:{name:"K/DA",desc:"<p>Your team gains max Health, Ability Power, and Attack Damage if they are in a lighted hex. K/DA champions gain double!<br><br>(3) +9% max Health, +9 AP & AD<br>(5) +15% max Health, +15 AP & AD<br>(7) +27% max Health, +27 AP & AD<br>(10) +45% max Health, +45 AP & AD, 10 mana per second</p><br>",champions:["Evelynn","Lillia","Kaisa","Seraphine","Neeko","Ahri","Akali"]},maestro:{name:"Maestro",desc:"<p>(1) The Maestro always attacks at a fixed pace, converting 1% bonus Attack Speed into 0.7% Attack Damage.</p><br>",champions:["Jhin"]},mixmaster:{name:"Mixmaster",desc:"<p>(1) Choose a mode that changes the Mixmaster's attacks and Ability!</p><br>",champions:["Sona"]},pentakill:{name:"Pentakill",desc:"<p>Pentakill champions reduce incoming damage by 15% and deal bonus damage. For each champion kill, a Pentakill champion rocks out and increases their damage bonus by 25%.<br><br>On the 5th kills, all Pentakill champions rock out and your team gains 50% Attack Speed.<br><br>(3) 15% bonus damage<br>(5) 30% bonus damage<br>(7) 45% bonus damage<br>(10) 50% damage reduction and 99% bonus damage</p><br>",champions:["Olaf","Gnar","Kayle","Mordekaiser","Karthus","Viego","Yorick"]},punk:{name:"Punk",desc:"<p>Punks gain bonus Health and Attack Damage, which increases by 1% every time you spend gold on a Shop reroll.<br><br>After Punks fight in combat, your 1st Shop reroll costs 1 gold and grants 3% bonus instead!<br><br>(2) +180 Health and +18% Attack Damage<br></br>(4) +300 Health and +30% Attack Damage<br>(6) +420 Health and +42% Attack Damage</p><br>",champions:["Jinx","Vi","Pantheon","Twitch"]},"true damage":{name:"True Damage",desc:"<p>True Damage champions deal bonus true damage. If they are holding an item, they gain a unique Bling Bonus for their Ability.<br><br>(2) 15% damage<br>(4) 30% damage<br>(6) 45% damage<br>(9) 99% damage, Bling Bonuses go Platinum!</p><br>",champions:["Kennen","Yasuo","Senna","Ekko","Akali_TrueDamage","Qiyana"]},wildcard:{name:"Wildcard",desc:"<p>(1) If you win player combat, Kayn becomes the Shadow Assassin. If not, he becomes Rhaast. You receive a reward based on his form every time he kills 2 enemy champions.<br><br>Shadow Assassin: 3g<br>Rhaast: 1 player health.</p><br>",champions:["Kayn"]}},n={"big shot":{name:"Big Shot",desc:"<p>Big Shots gain Attack Damage. which increases for 3 seconds when they use their Ability.<br><br>(2) 10% Attack Damage, 40% after casting<br>(4) 20% Attack Damage, 60% after casting<br>(6) 40% Attack Damage, 100% after casting</p><br>",champions:["Corki","Kaisa","MissFortune","Ezreal","Jhin"]},breakout:{name:"Breakout",desc:"<p>(1) Akali is a member of K/DA or True Damage depending on which trait has more fielded champions. She gains a different Ability depending on which form she takes.<p><br>",champions:["Akali","Akali_TrueDamage"]},bruiser:{name:"Bruiser",desc:"<p>Your team gains 100 Health. Bruiser gain bonus maximum Health.<br><br>(2) 20% max Health<br>(4) 45% max Health<br>(6) 90% max Health</p><br>",champions:["Olaf","TahmKench","Gragas","Sett","Zac","Illaoi"]},"crowd diver":{name:"Crowd Diver",desc:"<p>After Crowd Divers die, they leap onto the furthest enemy, dealing 300 magic damage. Enemies within 1 hex are Stunned for 1.5 seconds.<br><br>They also deal bonus damage, increased by 1% each second.<br><br>(2) 12% bonus damage<br>(4) 30% bonus damage<br>(6) 50% bonus damage</p><br>",champions:["Evelynn","Katarina","Yone","Zed","Qiyana"]},dazzler:{name:"Dazzler",desc:"<p>Dazzler' Ability reduce their target's damage by 10% and deal bonus magic damage over 2 seconds.<br><br>(2) 20% magic damage<br>(4) 60% magic damage<br>(6) 100% magic damage</p><br>",champions:["Nami","Bard","Lux","TwistedFate","Ziggs"]},edgelord:{name:"Edgelord",desc:"<p>Edgelords gain Attack Speed which doubles when their target drops target drops below 50% Health. Edgelords with 1-hex range also dash through them on their next attack.<br><br>(3) 30% Attack Speed<br>(5) 55% Attack Speed<br>(7) 85% Attack Speed</p><br>",champions:["Yasuo","Kayle","Riven","Yone","Viego","Kayn"]},executioner:{name:"Executioner",desc:"<p>Executioner Abilities can critically strike and they gain Critical Strike Damage. Their Critical Strike Chance is increased based on their target's missing Health.<br><br>(2) 5% Crit Damage, Up to 25% Crit Chance<br>(4) 15% Crit Damage, Up to 80% Crit Chance<br>(6) 30% Crit Damage, Up to 160% Crit Chance</p><br>",champions:["Twitch","Samira","Vex","Akali","Akali_TrueDamage","Karthus"]},guardian:{name:"Guardian",desc:"<p>Once per combat at 50% Health, Guardians shield themselves and their closest ally for a percent of their max Health.<br><br>(2) 25%<br>(4) 45%<br>(6) 70%</p><br>",champions:["Kennen","Taric","Pantheon","Amumu","Neeko","Thresh","Yorick"]},mosher:{name:"Mosher",desc:"<p>Moshers gain Attack Speed and Omnivamp, which increases up to 100% based on their missing Health.<br><br>Omnivamp: Heal for percentage of damage dealt<br><br>(2) 20% Attack Speed, 10% Omnivamp<br>(4) 40% Attack Speed, 15% Omnivamp<br>(6) 70% Attack Speed, 20% Omnivamp<br>(8) 125% Attack Speed, 30% Omnivamp</p><br>",champions:["Vi","Gnar","Jax","Sett","Urgot","Poppy","Mordekaiser"]},rapidfire:{name:"Rapidfire",desc:"<p>Your team gains 10% Attack Speed.<br><br>Rapidfire champions gain more on every attack, up to 10 stacks.<br><br>(2) 4% Attack Speed<br>(4) 9% Attack Speed<br>(6) 16% Attack Speed</p><br>",champions:["Jinx","Aphelios","Senna","Caitlyn","Lucian"]},sentinel:{name:"Sentinel",desc:"<p>Your team gains Armor and Magic Resist. Sentinels gain double.<br><br>(2) +16 Armor, +16 Magic Resist<br>(4) +35 Armor, +35 Magic Resist<br>(6) +55 Armor, +55 Magic Resist<br>(8) +100 Armor, +100 Magic Resist</p><br>",champions:["KSante","Lillia","Garen","Ekko","Mordekaiser","Blitzcrank"]},spellweaver:{name:"Spellweaver",desc:"<p>Your team gains 15 Ability Power. Spellweavers gain more, plus extra Ability Power whenever a Spellweaver casts an Ability.<br><br>(3) 20 AP, +1 AP per cast<br>(5) 35 AP, +2 AP per cast<br>(7) 80 AP, +4 AP per cast<br>(9) 130 AP, +6 AP per cast</p><br>",champions:["Annie","Gragas","Seraphine","Ekko","Lulu","Ahri","Sona"]},superfan:{name:"Superfan",desc:"<p>Superfans improve your Headliner!<br><br>(3) Headliner gets a completed item<br>(4) Headliner gets +250 Health and +15% Omnivamp<br>(5) Item upgrades to radiant<br><br></br>Omnivamp: Heal for percentage of damage dealt<br>",champions:["Kennen","Lillia","Gnar","Neeko"]}};function r(e){const a=document.querySelector(".traits"),n=function(e){return e===t?"Origin Traits":"Class Traits"}(e),r=document.createElement("div"),s=document.createElement("h2");s.innerText=n,r.id=n,a.appendChild(s),a.appendChild(r);for(let a in e){const t=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div"),c=document.createElement("img"),o=document.createElement("div"),d=document.createElement("h2"),m=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div");p.classList="trait-header";const h=document.createElement("div");h.classList="trait-container",n.classList="trait-desc",l.classList="traits-champs",t.id=a,s.id="traitImg",c.src="./assets/images/trait-icons/"+a+".png",s.appendChild(c),p.appendChild(s),o.id="traitName",d.innerText=e[a].name,o.appendChild(d),p.appendChild(o),m.id="traitDesc",m.innerHTML=e[a].desc,n.appendChild(m);const u=i(e[a].champions);l.appendChild(u),h.appendChild(p),h.appendChild(n),t.appendChild(h),t.appendChild(l),r.appendChild(t)}}function i(e){const a=document.createElement("div");for(let t of e){const e=document.createElement("div"),n=document.createElement("a"),r=document.createElement("img");e.classList="square-splash",n.target="_blank",t.includes("TrueDamage")?n.href="https://mobalytics.gg/tft/champions/akali-true-damage":n.href=`https://mobalytics.gg/tft/champions/${t.split(" ").join("").toLowerCase()}`,r.src=`./assets/images/splashes-square/${t}.jpg`,n.appendChild(r),e.appendChild(n),a.appendChild(e)}return a}const s="RGAPI-96c0002a-da68-49c7-9dcb-e6c802e2a194";let c="";async function o(e){const a=`https://corsproxy.io/?https://americas.api.riotgames.com/tft/match/v1/matches/${e}`;try{const e=await fetch(a,{headers:{"X-Riot-Token":s}});if(!e.ok)throw new Error(`Unable to fetch data. Status: ${e.status}`);!function(e){const a=document.querySelector(".matches"),t=document.createElement("div");t.classList="match";const n=document.createElement("div");n.classList="match-info";const r=document.createElement("div");r.id="tac-icon";const i=document.createElement("div");i.id="final-placement";const s=document.createElement("div");s.id="final-stage";const c=document.createElement("div");c.id="active-traits";const o=document.createElement("div");o.id="final-board";const d=document.createElement("div");d.classList="match-container";const m=document.createElement("img");m.src=`https://cdn.metatft.com/file/metatft/tacticians/${e.companion.content_ID}.png`,r.appendChild(m),n.appendChild(r);const l=document.createElement("div");l.innerText=e.placement,l.id=`placement-${e.placement}`,i.appendChild(l),n.appendChild(i);const p=document.createElement("div");var h;p.innerText=(h=e.last_round,Math.floor((h-4)/7)+2+"-"+(h-4)%7),s.appendChild(p),n.appendChild(s);const u=function(e){const a=document.createElement("div");for(let t of e)if(t.tier_current>=1){const e=document.createElement("div"),n=document.createElement("img");e.classList="match-trait",e.id="tier-"+t.tier_current,5===t.style?e.style.background="url(./assets/images/traitbg/unique.png)":e.style.background=`url(./assets/images/traitbg/${t.tier_current}.png)`,e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="center",e.style.backgroundSize="cover",n.src="./assets/images/trait-icons/"+t.name.slice(6).toLowerCase()+".png",e.appendChild(n),a.appendChild(e)}return a}(e.traits.sort(((e,a)=>a.style-e.style)));c.appendChild(u),n.appendChild(c);const b=function(e){const a=document.createElement("div");a.classList="all-units";for(let t of e){const e=document.createElement("div");e.classList="match-splash";const n=t.character_id.slice(6),r=document.createElement("img");r.src=`./assets/images/splashes-square/${n}.jpg`,e.appendChild(r),a.appendChild(e)}return a}(e.units);o.appendChild(b),d.appendChild(n),d.appendChild(o),t.appendChild(d),a.appendChild(t)}(function(e){const a=e.info.participants;for(let e in a){let t=a[e];if(c===t.puuid)return t}}(await e.json()))}catch(e){return console.error("Error fetching data:",e),null}}document.addEventListener("DOMContentLoaded",(function(){(async function(){try{const t=await fetch("https://raw.communitydragon.org/latest/cdragon/tft/en_us.json");if(!t.ok)throw new Error("Failed to fetch champion info");!function(t){const n=document.querySelector(".champions"),r=t.setData[5],i={1:[],2:[],3:[],4:[],5:[]};r.champions.forEach((e=>{e.characterName.includes("TFT10")&&e.cost>=1&&e.cost<=5&&i[e.cost].push(e)}));for(let t=1;t<=5;t++){const r=i[t];if(r.length>0){const i=e(t),s=document.createElement("h2");s.innerText=`${t} Cost`,n.appendChild(s),n.appendChild(i),r.forEach((e=>{const t=a(e);i.appendChild(t)}))}}}(await t.json())}catch(e){console.error("Error fetching champion:",e)}})(),r(t),r(n);const i=document.querySelector("#search"),d=document.querySelector("#search-riot-id");i.addEventListener("submit",(e=>{e.preventDefault(),document.querySelector(".matches").innerHTML="",async function(e){const a=e.indexOf("#"),t=`https://corsproxy.io/?https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(e.slice(0,a))}/${e.slice(a+1)}`;try{const e=await fetch(t,{headers:{"X-Riot-Token":s}});if(!e.ok)throw new Error(`Unable to fetch data. Status: ${e.status}`);const a=await e.json();return c=a.puuid,async function(e){const a=`https://corsproxy.io/?https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${e}/ids?start=0&count=10`;try{const e=await fetch(a,{headers:{"X-Riot-Token":s}});if(!e.ok)throw new Error(`Unable to fetch data. Status: ${e.status}`);const t=await e.json();for(let e of t)o(e)}catch(e){return console.error("Error fetching data:",e),null}}(c)}catch(e){return console.error("Error fetching data:",e),null}}(d.value)})),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))}))}()}();
//# sourceMappingURL=main.js.map