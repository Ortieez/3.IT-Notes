---
parent: Mechatronika
nav_order: 1
---
# Základy snímání
- Každá aplikace senzorů klade určité specifické požadavky
- Základní kritéria výběru snímače:
	- Cílové veličiny, které má senzor snímat
	- Předměty a pozadí, které senzor snímat nesmí
	- Nejlepší technologii snímání pro detekci pouze cílové veličiny
	- Dostupné místo a omezení montáže
	- Elektrické parametry
	* Požadavky na zapojení 
	* Požadavky na montáž
# Detektory přítomností objektů
- Materiál - kov, plast, dřevo, papir atd.
- Velikost / rozměry detekovaného předmětu či snímané plošky Tvar nebo barva předmětu
- Optické vlastnosti - průhlednost, polarizace světla, kontrast, luminiscence
- Skupenství pevné, kapalné, plynné
- Teploty
## Na co si dát pozor
- Velikost prostoru pro umístění snímače
- Max. možná vzdálenost detekovaného předmětu od snímače
- Vliv okoli:
	- Znečišťování detekčního prostoru
	-  Elmag. rušeni
	- Intenzita okolního světla
	- Okolní provozní teplota
	- Materiály a vzdálenost okolních objektů / předmětů 
- Rychlost pohybu předmětu v případě detekce za pohybu
- Životnost
## Typy běžně vyráběných senzorů
- Indukční
- Kapacitní
- Ultrazvukové
- Optické
- Difuzní
- Reflexní
- Optovláknové
- Kontrastní
- Luminiscenční
- Magnetické
- Teplotní

# Indukční senzory
- Indukční cívky -> magnetické pole je narušeno přítomností cílového objektu
- Indukční senzory detekují pouze vodivé objekty
- Snímání je konzistentní, opakovatelné a rušení od okolních zařízení je slabé
- Bezkontaktní senzory mají dosah snímání I až 120 mm
## Princip 
- Cívka senzoru vytváří proměnlivé magnetické pole
- Elektricky vodivý materiál (tlumící clonka) deformuje magnetického pole
- Důsledkem je změna impedance cívky (civka + rezsitor tvoří oscilátor)

1-mag pole, 2-clonka (el. vodivý materiál), 3- civka, 4-oscilátor, 5 - zesilovač).

## Využití
- Strojní průmysl - obráběcí stroje, řízení svářecích robotů, dopravníků, detekce posunu, dorazy, detekce tloušťky materiálu 
- Potravinářský průmysl - michací stroje, balící stroje, plnící stroje, posuvné dopravniky Dřevoobráběcí stroje, Montážní linky
- Automobilový průmysl - detekce pohybu kol automobilů (ABS, ESP). Bezdotykové koncové spínače na strojích. Měření a detekce přiblížení kovového předmětu, detekce vyoseni Detekce pohybu a posuvu - dopravníky, soustruhy

---
# Kapacitní Senzory
- Principem je rozpoznání dielektrika nebo husté látky ve snímané oblasti
- Vysoká citlivost
- Na funkci senzorů tohoto typu mají vliv okolní materiály
- Kapacitní senzor má obvykle dosah do 60 mm (na vzdálenost mají zásadní vliv dielektrické vlastnosti cílového objektu)
## Princip
- Kruhová elektroda uvnitř válcového pouzdra tvoří kondenzátor
- Základní kapacita se dále mění se změnou dielektrika - přiblížení objektu
- Kondenzátor spolu s rezistorem tvoří RC oscilátor Výstupní napěťový signál oscilátoru je usměrněn a filtrovánz
- Napěťový signál je poté porovnán s referenci
## Využití
- Typicky pro snímání polohy nekovových materiálů
- Strojní průmysl - dopravníky, detekce posunu, detekce tloušťky materiálu... 
- Potravinářský průmysl - michací stroje, balicí stroje, plnicí stroje, posuvné dopravníky Dřevoobráběcí stroje
- Montážní linky - nastavení pozice
- Textilní stroje
- Sledování a detekce úrovně hladiny materiálu (sypké, kapalné, pevné) napr. v zásobníku
- Detekce pohybu a posuvu, přesné nastavení pozice - dopravníky...
- Detekce malých kovových plošek (lepší citlivost než indukční senzory)
---
# Ultrazvukové senzory
- Detekce libovolného materiálu
- Detekce až na vzdálenost desítky metrů
- Možnost velmi přesného naladění, co se potlačení nežádoucího pozadí týče
- Nelze použít ve vakuu
## Využití
- Snímání a detekce polohy libovolných materiálů
- Detekce průhledných předmětů Nasazení v prašném nebo vlhkém prostředí
- Strojní průmysl - dopravníky, detekce posunu
- Dřevoobráběcí stroje
- Montážní linky - nastavení pozice
- Textilní stroje
- Sledování a detekce úrovně hladiny materiálu (sypké, kapalné, pevné) např. v zásobníku
- Detekce pohybu a posuvu, přesné nastavení pozice - dopravníky
---
# Optické senzory
- Senzor vyzařuje a přijímá světlo na určité vlnové délce
- Infračervené, viditelné (červené) nebo laserové záření
- Nejcitlivější na prach a nečistoty (mohou způsobit falešnou aktivaci)
- Největší rozsah snímání:
	- senzory s laserovým paprskem dokážou detektovat objekty o rozměrech několika mikronů
	- detekce na vzdálenosti až desítek metrů
## Princip
- Pracuje na principu detekce existence nebo měření intenzity paprsku světla dopadajícího na přijímací část senzoru
- Obecně může být zdroj paprsku oddělen od přijímače
- Reflexní senzory, tzn. zdroj paprsku světla i detektor jsou umístěny v jednom
- Konkrétně se měří úroveň amplitudy nebo světelný výkon a porovnává se s referencí 
- Umožňují nejen měřit vzdálenost, ale zpracovat jiné optické parametry jakou jsou kontrast a barva
## Využití
- Detekce obrovských i malých objektů
- Snímání pohybujících se předmětů i různých teplot Strojní průmysl - dopravníky, detekce posunu, kontrola kvality
- Montážní linky - nastavení pozice, počítání dílů • Textilní stroje - zjišťování množství materiálu na odvíjené roliSledování a detekce otvorů ve výrobcích
- Kontrola velikosti předmětů
- Kontrola naplnění různých zásobníků
- Zjišťování chybných etiket

# Snímání neelektrických veličin
- Snímač převádí měřenou neelektrickou veličinu (teplotu, tlak, průtok, kmitočet, mag. indukci atd.) na veličinu elektrickou (napětí, proud, indukčnost, odpor, el. náboj atd.)
- Elektrická veličina je dále zpracována (např. digitalizována, přenášena na větší vzdálenosti, zpracována v regulátorem...)
- Při každém měření dochází k odčerpání části energie z měřeného objektu, tj. objekt je vždy měřením rušen a teoreticky nelze dosáhnout měření bez chyby

# Citlivost měřícího členu
- Schopnost přístroje reagovat za stanovených pracovních podmínek na změnu hodnoty měřené veličiny
- Stanovené pracovní podmínky jsou dané určitou hodnotou nebo tolerančním polem hodnot ovlivňujících veličin
- Převrácenou hodnotou citlivosti je konstanta přístroje K=I/c (počet jednotek měřené veličiny na jeden dilek stupnice)
## Přehled neelektrických veličin
- Teplota
- Mechanické veličiny
- Mechanické napětí a deformace
- Sila
- Tlak
- Průtok
- Elektromagnetické záření
- Vlhkost
- lonizující záření
- atd.
# Měření teploty
- Mezinárodní teplotní stupnice ITS-90
* Obsahuje definici jednotky teploty (K. °C) a 17 teplotních bodů látek (trojný bod, tání, var,...)
* Metody ověřování (cejchování) teploměrů
- Termodynamická rovnice
- p\*V=n\*R\*T
- Teplota tání ledu To=273,15K=0°C
- Trojný bod vody To=273,16K=0,01°C (p=611,7Pa)
## Dilatační teploměry
- Mechanický princip
- Princip změny objemu látky v závislosti na teplotě 
- Měření teploty se převádí na měření délky, objemu, nebo tlaku
### Skleněné
- Princip objemové roztažnosti teploměrové látky
- Přírůstek se odečítá rovnou v kapiláře
- Špatná čitelnost
- Špatná přenositelnost
- Nežádoucí z ekologického hlediska
- Náplně:
	- Pentan (-200°C -30°C)
	- Rtut' (-38°C-350°C)
	- Ethylalkohol (-110°C-70°C)
### Tyčové
- Využívají délkovou roztažnost dvou konstrukčně oddělených součástí (trubice - vnitřní tyč)
- Velký teplotní rozsah
- Nízké pořizovací náklady
- Menší přesnost
### Bimetalové
- Princip deformace dvou spojených kovových pásků z různých materiálů Důsledkem různé teplotní roztažnosti dojde průhybu pásků
- Nízké pořizovací náklady
- Menší rozsah teplot
- Menší přesnost
- Pomalá odezva
### Tlakové
- Teplota vyvolá změnu objemu a ten změnu tlaku
- Skládají se z teploměrové nádobky, spojovací kapiláry a měřicího přístroje (deformační tlakoměr)
- Lineární stupnice
- Stály přetlak
# Elektrické teploměry
- Odporové - využívají závislost el. odporu na teplotě
- Termoelektrické - elektrický potenciál v místě spojení
- Krystalové - vlastní rezonanční frekvence závislá na teplotě
## Odporové
- Kovové (PTC)-odporová čidla teploty - Polovodičové (NTC) - termistory
- Základním materiálem teploměru je platina (vysoká teplota tání)
• Pt100 -> R 1000
- Další materiály
	- Nikl-větší teplotní součinitel, levnější, citlivější, menší linearita závislosti