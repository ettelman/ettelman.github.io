// Le list
const terms = [
    { term: "AES (Advanced Encryption Standard)", definition: "En symmetrisk krypteringsalgoritm som används för att säkra data." },
    { term: "API", definition: "Ett gränssnitt som tillåter olika mjukvaror att kommunicera med varandra." },
    { term: "APT (Advanced Persistent Threat)", definition: "En långvarig och målinriktad cyberattack där en obehörig person får åtkomst till ett nätverk och förblir oupptäckt under en längre tid." },
    { term: "Asymmetrisk kryptering", definition: "En krypteringsmetod som använder ett offentligt och ett privat nyckelpar för att kryptera och dekryptera data." },
    { term: "Auktorisering", definition: "Processen att ge eller neka åtkomst till resurser baserat på användarens behörigheter." },
    { term: "Autentisering", definition: "Processen att verifiera identiteten hos en användare eller enhet." },
    { term: "Backdoor", definition: "En hemlig metod för att komma åt ett system, kringgående normala autentiseringsmekanismer." },
    { term: "Bandbredd", definition: "Mängden data som kan överföras över en nätverksförbindelse på en given tid." },
    { term: "Black Hat", definition: "En hacker med illasinnade avsikter som utnyttjar sårbarheter för personlig vinning." },
    { term: "Botnet", definition: "Ett nätverk av datorer infekterade med skadlig programvara och kontrollerade som en grupp utan ägarnas vetskap." },
    { term: "Brute Force Attack", definition: "En attackmetod där angriparen provar alla möjliga kombinationer för att gissa lösenord eller krypteringsnycklar." },
    { term: "Buffer Overflow", definition: "En sårbarhet där ett program skriver mer data till en minnesbuffert än den är avsedd att hålla, vilket kan leda till exekvering av skadlig kod." },
    { term: "Burp Suite", definition: "Ett verktyg för webbapplikationssäkerhet som används för att hitta och utnyttja sårbarheter." },
    { term: "Certificate Authority (CA)", definition: "En organisation som utfärdar digitala certifikat för att bekräfta identiteten hos enheten bakom ett offentligt nyckelpar." },
    { term: "Certifikatpinnning", definition: "En säkerhetsmekanism där en applikation endast accepterar specifika SSL/TLS-certifikat för att förhindra MITM-attacker." },
    { term: "Clickjacking", definition: "En attack där en användare luras att klicka på något annat än vad de tror, vilket kan leda till oönskade handlingar." },
    { term: "Command Injection", definition: "En sårbarhet där en angripare kan köra godtyckliga systemkommandon på en server genom en webbapplikation." },
    { term: "Content Security Policy (CSP)", definition: "En webbstandard som hjälper till att upptäcka och mildra vissa typer av attacker, såsom XSS." },
    { term: "Cookies", definition: "Små textfiler som lagras på användarens dator av webbplatser för att hålla reda på sessioner och användarpreferenser." },
    { term: "Cross-Site Request Forgery (CSRF)", definition: "En attack där en användare tvingas att utföra oavsiktliga handlingar på en webbplats där de är autentiserade." },
    { term: "Cross-Site Scripting (XSS)", definition: "En sårbarhet som tillåter en angripare att injicera skadlig skript på en webbplats som andra användare besöker." },
    { term: "Cross-Site WebSocket Hijacking (CSWSH)", definition: "En attack som utnyttjar sårbarheter i WebSocket-kommunikation för att stjäla eller manipulera data." },
    { term: "Cryptography (Kryptografi)", definition: "Vetenskapen om att säkra information genom att omvandla den till en oläslig form." },
    { term: "CVE (Common Vulnerabilities and Exposures)", definition: "Ett system för att identifiera och katalogisera kända säkerhetssårbarheter." },
    { term: "Data Exfiltration", definition: "Obehörig överföring av data från ett system." },
    { term: "Denial of Service (DoS)", definition: "En attack som syftar till att göra en tjänst otillgänglig genom att överbelasta systemet med trafik." },
    { term: "Digital Signatur", definition: "En kryptografisk mekanism som verifierar äktheten och integriteten hos digitala meddelanden eller dokument." },
    { term: "DNS (Domain Name System)", definition: "Ett system som översätter domännamn till IP-adresser." },
    { term: "DNS Amplification Attack", definition: "En DDoS-attack som utnyttjar DNS-protokollet för att öka trafikvolymen mot ett offer." },
    { term: "DNS Poisoning", definition: "En attack där felaktig DNS-information injiceras i en DNS-server för att omdirigera trafik till en skadlig webbplats." },
    { term: "DNSSEC (DNS Security Extensions)", definition: "En uppsättning protokoll som säkerställer att DNS-uppslag är autentiska och oförändrade." },
    { term: "Domän", definition: "Ett unikt namn som identifierar en webbplats på internet, till exempel www.exempel.com." },
    { term: "Egress Filtering", definition: "Processen att övervaka och kontrollera utgående nätverkstrafik för att förhindra dataförlust." },
    { term: "Elliptic Curve Cryptography (ECC)", definition: "En krypteringsmetod baserad på elliptiska kurvor, vilket möjliggör stark säkerhet med kortare nyckellängder." },
    { term: "End-to-End Encryption", definition: "En kommunikationsmetod där endast kommunicerande användare kan läsa meddelandena." },
    { term: "Encryption (Kryptering)", definition: "Processen att konvertera data till en kod för att förhindra obehörig åtkomst." },
    { term: "Ethical Hacking", definition: "Praktiken att bryta sig in i system för att identifiera och fixa säkerhetshål på ett lagligt och etiskt sätt." },
    { term: "Exploit", definition: "En bit kod eller programvara som utnyttjar en sårbarhet i ett system." },
    { term: "Fileless Malware", definition: "Skadlig kod som körs i minnet utan att skriva data till hårddisken, vilket gör den svår att upptäcka." },
    { term: "Firewall (Brandvägg)", definition: "En säkerhetsmekanism som övervakar och kontrollerar inkommande och utgående nätverkstrafik baserat på säkerhetsregler." },
    { term: "Flood Attack", definition: "En typ av DoS-attack där nätverket överbelastas med oändliga mängder trafik." },
    { term: "Fuzzing", definition: "En testmetod som innebär att man skickar slumpmässig data till en applikation för att hitta sårbarheter." },
    { term: "Gateway", definition: "En nätverksnod som fungerar som en ingång till ett annat nätverk, ofta för att ansluta olika nätverkstyper." },
    { term: "Grey Hat", definition: "En hacker som ibland bryter mot lagar eller etiska standarder men utan illvilliga avsikter." },
    { term: "Hashing", definition: "En process som omvandlar data till en fast längd sträng, vanligtvis för att säkra lösenord." },
    { term: "Heap Overflow", definition: "En typ av buffertöverskridning där överflödet sker i heap-delen av minnet." },
    { term: "Honeypot", definition: "En säkerhetsmekanism som skapar en fiktiv sårbar datorresurs för att locka angripare." },
    { term: "Host", definition: "En dator eller annan enhet som är ansluten till ett nätverk." },
    { term: "HTTP (HyperText Transfer Protocol)", definition: "Ett protokoll för överföring av hypermedia dokument, såsom HTML." },
    { term: "HTTP Strict Transport Security (HSTS)", definition: "En webbteknik som tvingar webbläsare att endast kommunicera med webbplatser över säkra HTTPS-anslutningar." },
    { term: "HTTPS (HyperText Transfer Protocol Secure)", definition: "En säker version av HTTP som använder SSL/TLS för att kryptera kommunikationen." },
    { term: "IDS (Intrusion Detection System)", definition: "Ett system som övervakar nätverk eller system för skadlig aktivitet eller policyöverträdelser." },
    { term: "Injection Attack", definition: "En attack där angriparen levererar skadlig kod genom att utnyttja otillräcklig indata-validering." },
    { term: "Injection Flaws", definition: "Sårbarheter som tillåter en angripare att injicera skadlig kod i en applikation." },
    { term: "IP-adress (Internet Protocol Address)", definition: "En unik adress som identifierar en enhet på ett nätverk, till exempel 192.168.1.1." },
    { term: "JSON (JavaScript Object Notation)", definition: "Ett lättviktigt datautbytesformat som är lätt för människor att läsa och skriva." },
    { term: "Key Exchange", definition: "Processen där kryptografiska nycklar utbyts mellan parter för att möjliggöra säker kommunikation." },
    { term: "Keylogger", definition: "En programvara eller hårdvara som registrerar varje tangenttryckning som en användare gör." },
    { term: "Klient-server-arkitektur", definition: "En modell där klienter begär tjänster eller resurser från servrar som tillhandahåller dem." },
    { term: "Lateral Movement", definition: "Tekniker som används av angripare för att förflytta sig genom ett nätverk efter initial åtkomst." },
    { term: "LDAP (Lightweight Directory Access Protocol)", definition: "Ett protokoll för att få åtkomst till och underhålla distribuerade kataloginformationstjänster." },
    { term: "LDAP Injection", definition: "En attack som utnyttjar sårbarheter i LDAP-frågor genom att injicera skadlig kod." },
    { term: "Loggning", definition: "Processen att registrera händelser eller aktiviteter för att analysera systemets funktion och säkerhet." },
    { term: "Logic Bomb", definition: "Skadlig kod som utlöses av specifika händelser eller villkor." },
    { term: "MAC-adress (Media Access Control Address)", definition: "En unik identifierare tilldelad till nätverksgränssnitt för kommunikation på det fysiska nätverkssegmentet." },
    { term: "Malware (Skadlig programvara)", definition: "Programvara designad för att skada eller obehörigt komma åt ett datorsystem." },
    { term: "Man-in-the-Browser Attack", definition: "En attack där skadlig programvara infekterar en webbläsare för att manipulera transaktioner." },
    { term: "Man-in-the-Middle Attack", definition: "En attack där angriparen avlyssnar och eventuellt manipulerar kommunikationen mellan två parter." },
    { term: "Memory Corruption", definition: "En situation där minnet oavsiktligt modifieras, vilket kan leda till sårbarheter och systemkrascher." },
    { term: "NAT (Network Address Translation)", definition: "En metod för att omvandla en IP-adress till en annan i ett nätverk, ofta för att möjliggöra flera enheter att dela en enda offentlig IP-adress." },
    { term: "NoSQL", definition: "En typ av databas som lagrar och hämtar data på annat sätt än i traditionella relationsdatabaser." },
    { term: "OAuth", definition: "En öppen standard för åtkomstdelegation, används för att ge webbplatser eller applikationer tillgång till användarinformation på andra webbplatser utan att avslöja lösenord." },
    { term: "OSI-modellen (Open Systems Interconnection)", definition: "En konceptuell modell som karakteriserar och standardiserar funktionerna i ett kommunikationssystem i sju abstrakta lager." },
    { term: "OWASP Top 10", definition: "En lista över de tio mest kritiska säkerhetsriskerna för webbapplikationer enligt OWASP (Open Web Application Security Project)." },
    { term: "Packet (Paket)", definition: "En enhet av data som överförs över ett nätverk." },
    { term: "Payload", definition: "Den faktiska data som överförs i ett nätverkspaket, exklusive rubriker och metadata." },
    { term: "Penetrationstestning (Pentestning)", definition: "En metod för att utvärdera säkerheten i ett system genom att försöka utnyttja sårbarheter." },
    { term: "Phishing", definition: "En bedräglig metod för att få känslig information genom att utge sig för att vara en betrodd enhet i en elektronisk kommunikation." },
    { term: "Ping", definition: "Ett verktyg för att testa anslutbarheten mellan två nätverksenheter genom att skicka ICMP-echo-förfrågningar." },
    { term: "Port", definition: "Ett nummer som identifierar en specifik process eller tjänst på en dator i ett nätverk. Exempel: HTTP använder port 80." },
    { term: "Privilege Escalation", definition: "Processen där en användare eller applikation får högre behörigheter än avsett." },
    { term: "Proxy", definition: "En server som fungerar som en mellanhand för förfrågningar från klienter som söker resurser från andra servrar." },
    { term: "Rainbow Table", definition: "En förberäknad tabell för att vända kryptografiska hashfunktioner, använd för att knäcka lösenord." },
    { term: "Remote File Inclusion (RFI)", definition: "En attack som möjliggör för en angripare att inkludera fjärrfiler via en sårbar applikation." },
    { term: "REST (Representational State Transfer)", definition: "En arkitektonisk stil för utformning av nätverksapplikationer." },
    { term: "Rootkit", definition: "En uppsättning mjukvaruverktyg som ger obehörig åtkomst till en dator eller nätverk, ofta gömd för användaren." },
    { term: "Router", definition: "En nätverksenhet som vidarebefordrar data mellan datornätverk." },
    { term: "Sandboxing", definition: "En säkerhetsmekanism för att köra applikationer i en isolerad miljö." },
    { term: "Server Side Request Forgery (SSRF)", definition: "En sårbarhet där en angripare tvingar servern att göra oönskade förfrågningar till interna eller externa resurser." },
    { term: "Session", definition: "En tidsbegränsad interaktion mellan en klient och en server." },
    { term: "Shellcode", definition: "Maskinkod som används som payload vid exploatering av sårbarheter." },
    { term: "Side-Channel Attack", definition: "En attack som utnyttjar information som läcker från det fysiska genomförandet av ett system." },
    { term: "Sniffing", definition: "Processen att övervaka och fånga upp nätverkstrafik." },
    { term: "Social Engineering", definition: "Manipulation av människor för att få konfidentiell information." },
    { term: "Spam", definition: "Oönskade eller skräppostmeddelanden." },
    { term: "Spear Phishing", definition: "En riktad phishing-attack mot en specifik individ eller organisation." },
    { term: "Spoofing", definition: "Att förfalska identiteten hos en enhet i nätverket för att lura andra." },
    { term: "SQL (Structured Query Language)", definition: "Ett programmeringsspråk som används för att hantera data i en relationsdatabas." },
    { term: "SQL-injektion", definition: "En attack där skadlig SQL-kod injiceras i en applikation för att manipulera databasen." },
    { term: "SSL/TLS (Secure Sockets Layer/Transport Layer Security)", definition: "Kryptografiska protokoll som tillhandahåller säker kommunikation över ett datornätverk." },
    { term: "Symmetrisk kryptering", definition: "En krypteringsmetod där samma nyckel används för både kryptering och dekryptering." },
    { term: "TCP/IP (Transmission Control Protocol/Internet Protocol)", definition: "En uppsättning kommunikationsprotokoll som används för att sammankoppla nätverksenheter på internet." },
    { term: "Threat Model (Hotmodell)", definition: "En process för att identifiera och prioritera potentiella hot mot ett system." },
    { term: "Threat Modeling", definition: "En process för att identifiera, kommunicera och förstå hot och risker inom ett system." },
    { term: "Time-Based One-Time Password (TOTP)", definition: "En algoritm som genererar engångslösenord baserade på aktuell tid, ofta använd i tvåfaktorsautentisering." },
    { term: "Trojan", definition: "En typ av skadlig programvara som utger sig för att vara legitim programvara." },
    { term: "Typosquatting", definition: "Registrering av domännamn som liknar populära domäner för att lura användare som felstavar webbadresser." },
    { term: "UDP (User Datagram Protocol)", definition: "Ett kommunikationsprotokoll som används för tidskänsliga transmissioner såsom videouppspelning eller DNS-uppslag." },
    { term: "URL (Uniform Resource Locator)", definition: "Adressen till en resurs på internet." },
    { term: "Virtual Patch", definition: "En säkerhetsåtgärd som skyddar mot en sårbarhet utan att ändra den sårbara koden direkt." },
    { term: "VPN (Virtual Private Network)", definition: "En teknik som skapar en säker och krypterad anslutning över ett mindre säkert nätverk, såsom internet." },
    { term: "Vulnerability (Sårbarhet)", definition: "En svaghet i ett system som kan utnyttjas av en angripare." },
    { term: "Vulnerability Assessment", definition: "Processen att identifiera, kvantifiera och prioritera (eller rangordna) sårbarheter i ett system." },
    { term: "Watering Hole Attack", definition: "En attack där angriparen infekterar webbplatser som målgruppen sannolikt besöker." },
    { term: "Web Application Firewall (WAF)", definition: "En säkerhetslösning som skyddar webbapplikationer genom att filtrera och övervaka HTTP-trafik mellan en webbapplikation och internet." },
    { term: "Webbapplikation", definition: "En applikation som är åtkomlig via en webbläsare över ett nätverk såsom internet." },
    { term: "Whaling", definition: "En phishing-attack som riktar sig mot högprofilerade individer som företagsledare eller chefer." },
    { term: "White Hat", definition: "En etisk hacker som utför penetrationstestning för att förbättra säkerheten." },
    { term: "Worm (Mask)", definition: "En typ av skadlig programvara som kan replikera sig själv för att sprida till andra datorer." },
    { term: "X.509-certifikat", definition: "En standard för digitala certifikat som används i protokoll som SSL/TLS för att säkra kommunikation över nätverk." },
    { term: "XML (eXtensible Markup Language)", definition: "Ett märkspråk som definierar en uppsättning regler för att koda dokument i ett format som är både läsbart för människor och maskiner." },
    { term: "Zero Trust", definition: "En säkerhetsmodell som antar att inget nätverk är säkert och kräver verifiering för varje åtkomstförfrågan." },
    { term: "Zero-Day", definition: "En sårbarhet som är okänd för de som bör intressera sig för dess åtgärd, inklusive programvaruleverantören, och därmed saknar en officiell fix." },
    { term: "Zerologon", definition: "En kritisk sårbarhet i Windows Netlogon-protokollet som möjliggör autentisering utan giltiga referenser." }
];


// We do simple search
function exactMatch(query, text) {
    return text.toLowerCase().includes(query.toLowerCase());
}

// Dynamic search with rendering
function updateResults(query) {
    const results = document.getElementById("results");
    results.innerHTML = ""; 

    // Filter based on exact matches
    const matches = terms.filter(
        item => exactMatch(query, item.term) || exactMatch(query, item.definition)
    );

    // Show results, innerHTML safe because it cant be modified
    matches.forEach(match => {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="https://www.google.com/search?q=${encodeURIComponent(match.term)}" target="_blank">
                <span>${match.term}: </span>
            </a>
            ${match.definition}
        `;
        results.appendChild(li);
    });

    // No results
    if (matches.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Inga resultat hittades.";
        results.appendChild(li);
    }
}

// Event listener for inputs in search-field
document.getElementById("search").addEventListener("input", (e) => {
    updateResults(e.target.value);
});

// Initial rendering 
updateResults("");
